import CircularLinkedList from "../src/ts/linkedList/circularLinkedList";

export default class MyObj {
    constructor(public el1: any, public el2: any) {}
    toString() {
        return `${this.el1.toString()}|${this.el2.toString()}`;
    }
}

describe("DoublyLinkedList", () => {
    let list: CircularLinkedList<number>;
    let min: number;
    let max: number;

    beforeEach(() => {
        list = new CircularLinkedList<number>();
        min = 1;
        max = 3;
    });

    it("starts empty", () => {
        expect(list.size()).toEqual(0);
        expect(list.isEmpty()).toEqual(true);
        expect(list.getHead()).toBeNull();
    });

    it("returns element at specific index: invalid position", () => {
        // list is empty
        expect(list.getAt(3)).toBeNull();
    });

    it("inserts elements invalid position empty list", () => {
        expect(list.insert(1, 1)).toEqual({ head: null, length: 0 });
    });

    it("inserts elements invalid position not empty list", () => {
        const element = 1;
        expect(list.insert(0, element)).not.toEqual({ head: null, length: 0 });
        expect(list.insert(2, element)).not.toEqual({ head: null, length: 0 });
    });

    it("removes element invalid position empty list", () => {
        let element;

        for (let i = min; i <= max; i++) {
            element = list.removeAt(i - 1);
            expect(element).toBeNull();
        }
    });

    it("removes first element list single element", () => {
        const value = 1;
        list.append(value);

        const element = list.removeAt(0);
        expect(element).not.toBeNull();
        expect(element).toEqual(value);

        expect(list.getHead()).toBeNull();
        expect(list.isEmpty()).toEqual(true);
    });

    it("returns the head of the list", () => {
        expect(list.getHead()).toBeNull();

        list.append(1);
        expect(list.getHead()).not.toBeNull();
    });

    it("returns the correct size", () => {
        expect(list.size()).toEqual(0);

        for (let i = min; i <= max; i++) {
            list.append(i);
            expect(list.size()).toEqual(i);
        }

        const size = max;
        for (let i = min; i <= max; i++) {
            list.remove(i);
            expect(list.size()).toEqual(size - i);
        }

        expect(list.size()).toEqual(0);
    });

    it("returns toString primitive types", () => {
        expect(list.toString()).toEqual("");

        list.append(1);
        expect(list.toString()).toEqual("1");

        list.append(2);
        expect(list.toString()).toEqual("1,2");

        list.clear();
        expect(list.toString()).toEqual("");
    });

    it("returns toString primitive types: string", () => {
        const ds = new CircularLinkedList<string>();
        ds.append("el1");
        expect(ds.toString()).toEqual("el1");

        ds.append("el2");
        expect(ds.toString()).toEqual("el1,el2");
    });

    it("returns toString objects", () => {
        const ds = new CircularLinkedList<MyObj>();
        expect(ds.toString()).toEqual("");

        ds.append(new MyObj(1, 2));
        expect(ds.toString()).toEqual("1|2");

        ds.append(new MyObj(3, 4));
        expect(ds.toString()).toEqual("1|2,3|4");
    });
});
