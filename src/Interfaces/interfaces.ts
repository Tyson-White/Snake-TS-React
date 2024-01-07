import {keyBindingsType } from "../Types/types.ts";

export interface Settings {
    cols: number,
    rows: number,
    speed: number
    keys: keyBindingsType
}