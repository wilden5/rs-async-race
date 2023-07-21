export interface CarEntity {
    name: string;
    color: string;
    id: number;
}

export interface EngineStatus {
    [id: number]: boolean;
}

export interface RaceResult {
    carId: number;
    time: number;
    success: boolean;
}
