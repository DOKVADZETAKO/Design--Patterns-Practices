export interface IAirplane {
    position: number;
    trafficTower: ITrafficTower;
}

export interface ITrafficTower {
    airplanes: IAirplane[];
    requestPositions: () => number[];
}