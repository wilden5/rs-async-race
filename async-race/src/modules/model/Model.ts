import { fetchNumberOfCarsInGarage } from '../utils/APIHelpers';

class Model {
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
}

export default Model;
