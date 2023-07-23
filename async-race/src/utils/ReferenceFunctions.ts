import { CarEntity } from '../types/Interfaces';

class ReferenceFunctions {
    static onCreateCarButtonClick: (name: string, color: string) => void = () => {};

    static onDeleteButtonClick: (id: number) => void = () => {};

    static onUpdateButtonClick: (name: string, color: string, id: number) => void = () => {};

    static onReceiveExistingCarData: (id: number) => Promise<CarEntity> = () => Promise.resolve({} as CarEntity);

    static onPrevButtonClick: () => void = () => {};

    static onNextButtonClick: () => void = () => {};

    static onGenerateButtonClick: () => void = () => {};

    static onStartEngineButtonClick: (id: number) => void = () => {};

    static onRaceButtonClick: () => Promise<void> = async () => {};

    static onStopEngineButtonClick: (id: number, action: string) => Promise<void> = async () => {};

    static onResetButtonClick: () => Promise<void> = async () => {};
}

export default ReferenceFunctions;
