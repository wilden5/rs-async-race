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

    public async deleteCarFromDatabase(id: number): Promise<void> {
        try {
            const response = await fetch(`${Constants.GARAGE_URL}/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                console.log('Car was deleted successfully');
            } else {
                console.log('Failed to delete car');
            }
        } catch (error) {
            console.log('Error:', error);
        }
    }

    public async updateCarInDatabase(name: string, color: string, id: number): Promise<void> {
        const data = {
            name,
            color,
            id,
        };
        try {
            const response = await fetch(`${Constants.GARAGE_URL}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                console.log('Car was updated successfully');
            } else {
                console.log('Failed to update car');
            }
        } catch (error) {
            console.log('Error:', error);
        }
    }

    public async fetchSpecificCarData(id: number): Promise<CarEntity> {
        try {
            const response = await fetch(`${Constants.GARAGE_URL}/${id}`);

            if (response.ok) {
                console.log('Car was received successfully');
                const data = response.json();
                return await data;
            }
            console.log('Failed to receive car');
            return {} as CarEntity;
        } catch (error) {
            console.log('Error:', error);
            return {} as CarEntity;
        }
    }

    public async init(): Promise<void> {
        await this.syncNumberOfCars();
    }
}

export default GarageModel;
