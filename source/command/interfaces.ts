export interface Iturbine {
    state: boolean;
    on(): void;
    off(): void;
}

export interface ICockpit {
    command: ICommand;
    execute(): void;
}

export interface ICommand {
    turbine: Iturbine;
    execute(): void;
}