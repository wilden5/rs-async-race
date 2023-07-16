import GarageModel from './GarageModel';
import GarageView from './GarageView';
import { CarEntity } from '../../types/Interfaces';

class GarageController {
    private CURRENT_PAGE = 1;

    private CARS_PER_PAGE = 7;

    private TOTAL_CARS: CarEntity[] = [];

    private GARAGE_MODEL: GarageModel;

    private readonly GARAGE_VIEW: GarageView;

    constructor(model: GarageModel, view: GarageView) {
        this.GARAGE_MODEL = model;
        this.GARAGE_VIEW = view;

        // below functions act as references
        this.GARAGE_VIEW.onCreateCarButtonClick = this.handleAddNewCar;
        this.GARAGE_VIEW.onDeleteButtonClick = this.handleDeleteExistingCar;
        this.GARAGE_VIEW.onUpdateButtonClick = this.handleUpdateExistingCar;
        this.GARAGE_VIEW.onReceiveExistingCarData = this.handleGetSpecificCarData;
    }

    private handleAddNewCar = async (name: string, color: string): Promise<void> => {
        await this.GARAGE_MODEL.saveNewCarInDB(name, color);
        await this.GARAGE_MODEL.fetchNumberOfCarsFromDB();
        await this.handleRenderCarsInGarage();
        this.GARAGE_VIEW.updateNumberOfCarsInGarageTitle(this.GARAGE_MODEL.getNumberOfCarsInGarage());
    };

    private handleDeleteExistingCar = async (id: number): Promise<void> => {
        await this.GARAGE_MODEL.deleteCarInDB(id);
        await this.GARAGE_MODEL.fetchNumberOfCarsFromDB();
        await this.handleRenderCarsInGarage();
        this.GARAGE_VIEW.updateNumberOfCarsInGarageTitle(this.GARAGE_MODEL.getNumberOfCarsInGarage());
    };

    private handleUpdateExistingCar = async (name: string, color: string, id: number): Promise<void> => {
        await this.GARAGE_MODEL.updateCarInDB(name, color, id);
        await this.handleRenderCarsInGarage();
    };

    private handleGetSpecificCarData = async (id: number): Promise<CarEntity> => {
        return this.GARAGE_MODEL.fetchSpecificCarDataFromDB(id);
    };

    public handleRenderCarsInGarage = async (): Promise<void> => {
        this.TOTAL_CARS = await this.GARAGE_MODEL.fetchCarsDataFromDB();
        this.limitCarsPerGaragePage(this.CURRENT_PAGE);

        //this.GARAGE_VIEW.renderCarsInGarage(await this.GARAGE_MODEL.fetchCarsDataFromDB());
    };

    public limitCarsPerGaragePage(page: number): void {
        const startIndex = (page - 1) * this.CARS_PER_PAGE;
        const endIndex = page * this.CARS_PER_PAGE;
        const carsForPage = this.TOTAL_CARS.slice(startIndex, endIndex);
        this.GARAGE_VIEW.renderCarsInGarage(carsForPage);
        this.updatePaginationButtons(page);
    }

    private updatePaginationButtons(currentPage: number): void {
        (this.GARAGE_VIEW.PAGINATION_PREV_BUTTON as HTMLButtonElement).disabled = currentPage === 1;

        const totalPages = Math.ceil(this.TOTAL_CARS.length / this.CARS_PER_PAGE);
        (this.GARAGE_VIEW.PAGINATION_NEXT_BUTTON as HTMLButtonElement).disabled = currentPage === totalPages;
    }

    private handlePrevButtonClick = (): void => {
        if (this.CURRENT_PAGE > 1) {
            this.CURRENT_PAGE -= 1;
            this.limitCarsPerGaragePage(this.CURRENT_PAGE);
        }
    };

    private handleNextButtonClick = (): void => {
        const totalPages = Math.ceil(this.TOTAL_CARS.length / this.CARS_PER_PAGE);
        if (this.CURRENT_PAGE < totalPages) {
            this.CURRENT_PAGE += 1;
            this.limitCarsPerGaragePage(this.CURRENT_PAGE);
        }
    };

    public async init(): Promise<void> {
        this.GARAGE_VIEW.setupDOMElementsAndEventHandlers();
        await this.GARAGE_MODEL.init();
        this.GARAGE_VIEW.updateNumberOfCarsInGarageTitle(this.GARAGE_MODEL.getNumberOfCarsInGarage());
        await this.handleRenderCarsInGarage();

        this.GARAGE_VIEW.PAGINATION_PREV_BUTTON.addEventListener('click', this.handlePrevButtonClick);
        this.GARAGE_VIEW.PAGINATION_NEXT_BUTTON.addEventListener('click', this.handleNextButtonClick);
    }
}

export default GarageController;
