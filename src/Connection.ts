import { H3TransportTransport } from "./transport/H3Transport";
import { ITransport, ITransportEventMap } from "./transport/ITransport";
import { WebSocketTransport } from "./transport/WebSocketTransport";

export class Connection implements ITransport {
    transport: ITransport;
    events: ITransportEventMap = {};

    constructor(protocol?: string) {
        switch (protocol) {
            case "h3":
                this.transport = new H3TransportTransport(this.events);

            default:
                this.transport = new WebSocketTransport(this.events);
                break;
        }
    }

    connect(url: string): void {
        this.transport.connect(url);
    }

    send(data: ArrayBuffer | Array<number>): void {
        this.transport.send(data);
    }

    sendUnreliable(data: ArrayBuffer | Array<number>): void {
        this.transport.sendUnreliable(data);
    }

    close(code?: number, reason?: string): void {
        this.transport.close(code, reason);
    }

    get isOpen() {
        return this.transport.isOpen;
    }

}
