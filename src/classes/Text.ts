import {Element} from "@/classes/Element";
import type {Position, Size} from "@/types";
import {ElementTypes} from "@/types";

export class Text extends Element {
    type = ElementTypes.Text;
    content: string;

    constructor(content: string, size: Size, position: Position) {
        super (size, position);
        this.content = content;
    }

    static createDefault() {
        return new Text("Text", {width: 200, height: 100}, {x: 100, y: 0});
    }
}
