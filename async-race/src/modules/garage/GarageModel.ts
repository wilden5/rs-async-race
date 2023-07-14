import Constants from '../../utils/Constants';
import { CarEntity } from '../../types/Interfaces';

class GarageModel {
    private numberOfCars: number;

    constructor() {
        this.numberOfCars = 0;
    }

    public async syncNumberOfCars(): Promise<void> {
        const response = await fetch(Constants.GARAGE_URL);
        const data: number[] = await response.json();
        this.numberOfCars = data.length;
    }

    public getNumberOfCars(): number {
        return this.numberOfCars;
    }

    public async saveCarToDatabase(name: string, color: string): Promise<void> {
        const data = {
            name,
            color,
        };
        try {
            const response = await fetch(Constants.GARAGE_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                console.log('New car created successfully');
            } else {
                console.log('Failed to create a new car');
            }
        } catch (error) {
            console.log('Error:', error);
        }
    }

    public async fetchCars(): Promise<CarEntity[]> {
        const response = await fetch(Constants.GARAGE_URL);
        return response.json();
    }

    public async init(): Promise<void> {
        await this.syncNumberOfCars();
    }
}

export default GarageModel;
