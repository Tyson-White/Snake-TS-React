
export interface Settings {
    cols: number,
    rows: number,
    speed: number
}

export interface DataSettings {
    control: IControl
}

export interface IControl {
    up: string,
    down: string,
    left: string,
    right: string
}