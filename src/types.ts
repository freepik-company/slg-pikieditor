import {Element} from "@/classes/Element";

export interface Size {
    width: number;
    height: number;
}

export interface Position {
    x: number;
    y: number;
}

export interface Canvas {
    size: Size;
    backgroundColor: string;
    elements: Element[];
}

export enum ElementTypes {
    Text = "text",
}
