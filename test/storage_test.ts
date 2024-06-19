import './util';
import assert from "assert";
import { setItem, getItem } from "../src/Storage";

describe("Storage", function() {

    it("get and set", () => {
        setItem("test", "test");

        let getCalled = false;
        getItem("test", (data) => {
            getCalled = true;
            assert.strictEqual(data, "test");
        })

        assert.ok(getCalled);
    });

});
