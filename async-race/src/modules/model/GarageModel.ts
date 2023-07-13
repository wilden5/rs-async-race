import { fetchNumberOfCarsInGarage } from '../utils/APIHelpers';

class GarageModel {
    private numberOfCars: number;

    constructor() {
        this.numberOfCars = 0;
    }

    public async setNumberOfCars(): Promise<void> {
        this.numberOfCars = await fetchNumberOfCarsInGarage();
    }

    public getNumberOfCars(): number {
        return this.numberOfCars;
    }

    public async init(): Promise<void> {
        await this.setNumberOfCars();
    }
}

export default GarageModel;
