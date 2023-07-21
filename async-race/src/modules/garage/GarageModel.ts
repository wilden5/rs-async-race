import Constants from '../../utils/Constants';
import { CarEntity, EngineStatus, RaceResult } from '../../types/Interfaces';
import DOMHelpers from '../../utils/DOMHelpers';

class GarageModel {
    private NUMBER_CARS_IN_GARAGE: number;

    private CURRENT_GARAGE_PAGE: number;

    private readonly CARS_PER_GARAGE_PAGE: number;

    private TOTAL_CARS_IN_GARAGE: CarEntity[];

    private ENGINES_STATUSES: EngineStatus = {};

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

    public async saveRandomGeneratedCarsInDB(): Promise<void> {
        const carPromises: Promise<void>[] = [];

        for (let i = 0; i < 100; i += 1) {
            const carName = this.generateRandomCarName();
            const carColor = this.generateRandomCarColor();
            const carPromise = this.saveNewCarInDB(carName, carColor);
            carPromises.push(carPromise);
        }
        await Promise.all(carPromises);
    }

    private generateRandomCarName(): string {
        const randomBrandIndex: number = Math.floor(Math.random() * Constants.RANDOM_CARS_BRANDS.length);
        const randomModelIndex: number = Math.floor(Math.random() * Constants.RANDOM_CARS_MODELS.length);
        return `${Constants.RANDOM_CARS_BRANDS[randomBrandIndex]} ${Constants.RANDOM_CARS_MODELS[randomModelIndex]}`;
    }

    private generateRandomCarColor(): string {
        let color = '#';
        for (let i = 0; i < 6; i += 1) {
            color += Constants.COLOR_PICKER_LETTERS[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    public async useSpecificCarEngine(id: number, action: string): Promise<number> {
        const response = await fetch(`${Constants.ENGINE_URL}?id=${id}&status=${action}`, {
            method: 'PATCH',
        });

        delete this.ENGINES_STATUSES[id];

        if (response.ok) {
            console.log(this.ENGINES_STATUSES);
            const data = await response.json();
            const time = data.distance / data.velocity;
            console.log(`Time is ${time}ms`);

            if (action === Constants.ENGINE_STOP) {
                this.ENGINES_STATUSES[id] = true;
                console.log(this.ENGINES_STATUSES);
            }

            return time;
        }
        console.log('Error during time calculating');
        return 0;
    }

    public async switchSpecificCarEngineToDrive(id: number, signal: AbortSignal): Promise<void> {
        const controller = new AbortController();
        signal.addEventListener('abort', () => controller.abort());

        const response = await fetch(`${Constants.ENGINE_URL}?id=${id}&status=drive`, {
            method: 'PATCH',
            signal: controller.signal,
        });

        if (response.ok) {
            console.log(`Car with id-${id} successfully finished`);
        } else {
            throw new Error(`Car with id-${id} broke down the engine :(`);
        }
    }

    public async animateSpecificCar(id: number): Promise<RaceResult> {
        const engineTime = await this.useSpecificCarEngine(id, Constants.ENGINE_START);
        const distanceInViewPort: number = document.documentElement.clientWidth * 0.75; // 0.75 is where traffic-light placed
        const carToAnimate: HTMLElement = DOMHelpers.getElement(`.car-${id}`);

        let startTime: number;
        let currentPosition: number;
        let animationFrameId: number | null = null;
        const abortController = new AbortController();
        const { signal } = abortController;

        const step = (timestamp: number): void => {
            if (!startTime) {
                startTime = timestamp;
            }

            const progress = (timestamp - startTime) / engineTime;
            currentPosition = progress * distanceInViewPort;
            carToAnimate.style.transform = `translateX(${currentPosition}px)`;

            if (progress < 1) {
                animationFrameId = requestAnimationFrame(step);
                if (this.ENGINES_STATUSES[id]) {
                    carToAnimate.style.transform = 'none';
                    cancelAnimationFrame(animationFrameId);
                    abortController.abort();
                }
            }
        };
        animationFrameId = requestAnimationFrame(step);

        try {
            await this.switchSpecificCarEngineToDrive(id, signal);
            return { carId: id, time: engineTime, success: true };
        } catch (error) {
            cancelAnimationFrame(animationFrameId);
            console.log(error);
            return { carId: id, time: engineTime, success: false };
        }
    }

    public getAllCarsFromSpecificPage(): string[] {
        const carIds: string[] = [];
        DOMHelpers.getElements('.car-wrapper').forEach((item) => {
            carIds.push(item.classList[0].split('-')[1]);
        });
        return carIds;
    }

    public async startRaceOnSpecificPage(): Promise<void> {
        const carIds = this.getAllCarsFromSpecificPage();
        const animationPromises = carIds.map((id) => this.animateSpecificCar(Number(id)));
        const raceData: RaceResult[] = await Promise.all(animationPromises);
        const raceFinishers = raceData.filter((result) => result.success);

        if (raceFinishers.length > 0) {
            raceFinishers.sort((a, b) => a.time - b.time);
            const winner = raceFinishers[0].carId;
            DOMHelpers.getElement('.winner-name').innerText = DOMHelpers.getElement(`.name-${winner}`).innerText;
        } else {
            console.log(Constants.NO_ONE_FINISHED_RACE);
        }
    }

    public async returnRaceCarsToStartPosition(): Promise<void> {
        const carIds = this.getAllCarsFromSpecificPage();
        carIds.forEach((id) => {
            this.useSpecificCarEngine(Number(id), Constants.ENGINE_STOP);
        });
    }

    public async init(): Promise<void> {
        await this.fetchNumberOfCarsFromDB();
    }
}

export default GarageModel;
