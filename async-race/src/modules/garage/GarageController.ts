import GarageModel from './GarageModel';
import GarageView from './GarageView';
import { CarEntity } from '../../types/Interfaces';

class GarageController {
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
        this.GARAGE_VIEW.onPrevButtonClick = this.handlePrevGaragePage;
        this.GARAGE_VIEW.onNextButtonClick = this.handleNextGaragePage;
        this.GARAGE_VIEW.onGenerateButtonClick = this.handleRandomGeneratedCars;
        this.GARAGE_VIEW.onStartEngineButtonClick = this.handleSpecificCarEngine;
    }

    private handleAddNewCar = async (name: string, color: string): Promise<void> => {
        await this.GARAGE_MODEL.saveNewCarInDB(name, color);
        await this.GARAGE_MODEL.fetchNumberOfCarsFromDB();
        await this.handleRenderCarsInGarage();
        this.GARAGE_VIEW.updateNumberOfCarsInGarageTitle(this.GARAGE_MODEL.getNumberCarsInGarage());
    };

    private handleRandomGeneratedCars = async (): Promise<void> => {
        await this.GARAGE_MODEL.saveRandomGeneratedCarsInDB();
        await this.GARAGE_MODEL.fetchNumberOfCarsFromDB();
        await this.handleRenderCarsInGarage();
        this.GARAGE_VIEW.updateNumberOfCarsInGarageTitle(this.GARAGE_MODEL.getNumberCarsInGarage());
    };

    private handleDeleteExistingCar = async (id: number): Promise<void> => {
        await this.GARAGE_MODEL.deleteCarInDB(id);
        await this.GARAGE_MODEL.fetchNumberOfCarsFromDB();
        await this.handleRenderCarsInGarage();
        this.GARAGE_VIEW.updateNumberOfCarsInGarageTitle(this.GARAGE_MODEL.getNumberCarsInGarage());
    };

    private handleUpdateExistingCar = async (name: string, color: string, id: number): Promise<void> => {
        await this.GARAGE_MODEL.updateCarInDB(name, color, id);
        await this.handleRenderCarsInGarage();
    };

    private handleGetSpecificCarData = async (id: number): Promise<CarEntity> => {
        return this.GARAGE_MODEL.fetchSpecificCarDataFromDB(id);
    };

    public handleRenderCarsInGarage = async (): Promise<void> => {
        this.GARAGE_MODEL.setTotalCarsInGarage(await this.GARAGE_MODEL.fetchCarsDataFromDB());
        this.limitCarsPerGaragePage(this.GARAGE_MODEL.getCurrentGaragePage());
    };

    public limitCarsPerGaragePage(page: number): void {
        const totalCars = this.GARAGE_MODEL.getTotalCarsInGarage();
        const carsPerPage = this.GARAGE_MODEL.getCarsPerGaragePage();
        const startIndex = (page - 1) * carsPerPage;
        const endIndex = page * carsPerPage;
        const carsForPage = totalCars.slice(startIndex, endIndex);

        this.GARAGE_VIEW.renderCarsInGarage(carsForPage);
        this.updatePaginationButtons(page);
    }

    private updatePaginationButtons(currentPage: number): void {
        const totalCars = this.GARAGE_MODEL.getTotalCarsInGarage();
        const carsPerPage = this.GARAGE_MODEL.getCarsPerGaragePage();
        const totalPages = Math.ceil(totalCars.length / carsPerPage);

        (this.GARAGE_VIEW.PAGINATION_PREV_BUTTON as HTMLButtonElement).disabled = currentPage === 1;
        (this.GARAGE_VIEW.PAGINATION_NEXT_BUTTON as HTMLButtonElement).disabled = currentPage === totalPages;
    }

    private handlePrevGaragePage = (): void => {
        const currentPage = this.GARAGE_MODEL.getCurrentGaragePage();
        if (currentPage > 1) {
            this.GARAGE_MODEL.setCurrentGaragePage(currentPage - 1);
            this.GARAGE_VIEW.updateGaragePageNumber(currentPage - 1);
            this.limitCarsPerGaragePage(currentPage - 1);
        }
    };

    private handleNextGaragePage = (): void => {
        const totalCars = this.GARAGE_MODEL.getTotalCarsInGarage();
        const currentPage = this.GARAGE_MODEL.getCurrentGaragePage();
        const carsPerPage = this.GARAGE_MODEL.getCarsPerGaragePage();
        const totalPages = Math.ceil(totalCars.length / carsPerPage);

        if (currentPage < totalPages) {
            this.GARAGE_MODEL.setCurrentGaragePage(currentPage + 1);
            this.GARAGE_VIEW.updateGaragePageNumber(currentPage + 1);
            this.limitCarsPerGaragePage(currentPage + 1);
        }
    };

    private handleSpecificCarEngine = async (id: number, status: string): Promise<void> => {
        await this.GARAGE_MODEL.fetchSpecificCarEngineTime(id, status);
    };

    public async init(): Promise<void> {
        this.GARAGE_VIEW.setupDOMElementsAndEventHandlers();
        await this.GARAGE_MODEL.init();
        this.GARAGE_VIEW.updateNumberOfCarsInGarageTitle(this.GARAGE_MODEL.getNumberCarsInGarage());
        await this.handleRenderCarsInGarage();
    }
}

export default GarageController;
