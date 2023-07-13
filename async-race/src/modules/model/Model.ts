import { fetchNumberOfCarsInGarage, fetchNumberOfWinners } from '../utils/APIHelpers';

class Model {
    private numberOfCars: number;

    private numberOfWinners: number;

    constructor() {
        this.numberOfCars = 0;
        this.numberOfWinners = 0;
    }

    public async setNumberOfCars(): Promise<void> {
        this.numberOfCars = await fetchNumberOfCarsInGarage();
    }

    public getNumberOfCars(): number {
        return this.numberOfCars;
    }

    public async setNumberOfWinners(): Promise<void> {
        this.numberOfWinners = await fetchNumberOfWinners();
    }

    public getNumberOfWinners(): number {
        return this.numberOfWinners;
    }

    public async init(): Promise<void> {
        await this.setNumberOfCars();
        await this.setNumberOfWinners();
    }
}

export default Model;
