export interface IInk {
    type: InkType;
    get: () => InkType;
}

export interface IPrinter {
    ink: IInk;
}

export type InkType = "alcohol-based" | "acrylic-based";