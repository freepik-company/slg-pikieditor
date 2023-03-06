import type {Position, Size} from "@/types";
import {ElementTypes} from "@/types";

export abstract class Element {
    id: string;
    abstract type: ElementTypes;
    size: Size;
    position: Position;

    protected constructor(size: Size, position: Position) {
        this.id = Math.random().toString(36).substr(2, 9);

        this.size = size
        this.position = position
    }

    getDomElement() {
        return document.getElementById(this.id);
    }
}
