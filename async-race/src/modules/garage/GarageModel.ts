import Constants from '../../utils/Constants';
import { CarEntity } from '../../types/Interfaces';

class GarageModel {
    private NUMBER_CARS_IN_GARAGE: number;

    private CURRENT_GARAGE_PAGE: number;

    private readonly CARS_PER_GARAGE_PAGE: number;

    private TOTAL_CARS_IN_GARAGE: CarEntity[];

    constructor() {
        this.NUMBER_CARS_IN_GARAGE = 0;
        this.CURRENT_GARAGE_PAGE = 1;
        this.CARS_PER_GARAGE_PAGE = 7;
        this.TOTAL_CARS_IN_GARAGE = [];
    }

    public async fetchNumberOfCarsFromDB(): Promise<void> {
        const response = await fetch(Constants.GARAGE_URL);
        const data: number[] = await response.json();
        this.NUMBER_CARS_IN_GARAGE = data.length;
    }

    public getNumberCarsInGarage(): number {
        return this.NUMBER_CARS_IN_GARAGE;
    }

    public getCurrentGaragePage(): number {
        return this.CURRENT_GARAGE_PAGE;
    }

    public setCurrentGaragePage(page: number): void {
        this.CURRENT_GARAGE_PAGE = page;
    }

    public getCarsPerGaragePage(): number {
        return this.CARS_PER_GARAGE_PAGE;
    }

    public getTotalCarsInGarage(): CarEntity[] {
        return this.TOTAL_CARS_IN_GARAGE;
    }

    public setTotalCarsInGarage(cars: CarEntity[]): void {
        this.TOTAL_CARS_IN_GARAGE = cars;
    }

    public async saveNewCarInDB(name: string, color: string): Promise<void> {
        const data = {
            name,
            color,
        };
        const response = await fetch(Constants.GARAGE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            console.log(Constants.CREATE_NEW_CAR_SUCCESS_MESSAGE);
        } else {
            console.log(Constants.CREATE_NEW_CAR_FAIL_MESSAGE);
        }
    }

    public async fetchCarsDataFromDB(): Promise<CarEntity[]> {
        const response = await fetch(Constants.GARAGE_URL);
        return response.json();
    }

    public async deleteCarInDB(id: number): Promise<void> {
        const response = await fetch(`${Constants.GARAGE_URL}/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            console.log(Constants.DELETE_CAR_SUCCESS_MESSAGE);
        } else {
            console.log(Constants.DELETE_CAR_FAIL_MESSAGE);
        }
    }

    public async updateCarInDB(name: string, color: string, id: number): Promise<void> {
        const data = {
            name,
            color,
            id,
        };
        const response = await fetch(`${Constants.GARAGE_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            console.log(Constants.UPDATE_CAR_SUCCESS_MESSAGE);
        } else {
            console.log(Constants.UPDATE_CAR_FAIL_MESSAGE);
        }
    }

    public async fetchSpecificCarDataFromDB(id: number): Promise<CarEntity> {
        const response = await fetch(`${Constants.GARAGE_URL}/${id}`);

        if (response.ok) {
            console.log(Constants.FETCH_SPECIFIC_CAR_SUCCESS_MESSAGE);
            return response.json();
        }

        console.log(Constants.FETCH_SPECIFIC_CAR_FAIL_MESSAGE);
        return {} as CarEntity;
    }

    public async init(): Promise<void> {
        await this.fetchNumberOfCarsFromDB();
    }
}

export default GarageModel;
