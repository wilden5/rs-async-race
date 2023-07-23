import MainModel from './MainModel';
import MainView from './MainView';
import { CarEntity } from '../../types/Interfaces';
import DOMHelpers from '../../utils/DOMHelpers';
import ReferenceFunctions from '../../utils/ReferenceFunctions';

class MainController {
    private GARAGE_MODEL: MainModel;

    private readonly GARAGE_VIEW: MainView;

    constructor(model: MainModel, view: MainView) {
        this.GARAGE_MODEL = model;
        this.GARAGE_VIEW = view;

        // below functions act as references
        ReferenceFunctions.onCreateCarButtonClick = this.handleAddNewCar;
        ReferenceFunctions.onDeleteButtonClick = this.handleDeleteExistingCar;
        ReferenceFunctions.onUpdateButtonClick = this.handleUpdateExistingCar;
        ReferenceFunctions.onReceiveExistingCarData = this.handleGetSpecificCarData;
        ReferenceFunctions.onPrevButtonClick = this.handlePrevGaragePage;
        ReferenceFunctions.onNextButtonClick = this.handleNextGaragePage;
        ReferenceFunctions.onGenerateButtonClick = this.handleRandomGeneratedCars;
        ReferenceFunctions.onStartEngineButtonClick = this.handleSpecificCarAnimation;
        ReferenceFunctions.onRaceButtonClick = this.handlerCarRace;
        ReferenceFunctions.onStopEngineButtonClick = this.handleCarEngineStop;
        ReferenceFunctions.onResetButtonClick = this.handleResetRace;
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
        await this.GARAGE_MODEL.deleteSpecificWinner(id);
        await this.GARAGE_MODEL.fetchNumberOfCarsFromDB();
        await this.GARAGE_MODEL.setNumberOfWinners();
        await this.GARAGE_VIEW.updateWinnersTitle(this.GARAGE_MODEL.getNumberOfWinners());
        await this.handleRenderCarsInGarage();
        this.GARAGE_VIEW.updateNumberOfCarsInGarageTitle(this.GARAGE_MODEL.getNumberCarsInGarage());
        await this.populateWinnersTable();
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

        (this.GARAGE_VIEW.MAIN_ELEMENTS.PAGINATION_PREV_BUTTON as HTMLButtonElement).disabled = currentPage === 1;
        (this.GARAGE_VIEW.MAIN_ELEMENTS.PAGINATION_NEXT_BUTTON as HTMLButtonElement).disabled =
            currentPage === totalPages;
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

    private handleSpecificCarAnimation = async (id: number): Promise<void> => {
        await this.GARAGE_MODEL.animateSpecificCar(id);
    };

    private handleCarEngineStop = async (id: number, action: string): Promise<void> => {
        await this.GARAGE_MODEL.useSpecificCarEngine(id, action);
    };

    private handlerCarRace = async (): Promise<void> => {
        await this.GARAGE_MODEL.startRaceOnSpecificPage(this.handleWinner);
    };

    private handleResetRace = async (): Promise<void> => {
        await this.GARAGE_MODEL.returnRaceCarsToStartPosition();
        await this.populateWinnersTable();
    };

    private handleWinner = async (id: number, lastTime: number): Promise<void> => {
        const winner = await this.GARAGE_MODEL.getSpecificWinner(id);
        if (winner) {
            if (lastTime < winner.time) {
                console.log(`last time ${lastTime} prev-db-time ${winner.time}`);
                await this.GARAGE_MODEL.updateWinner(id, winner.wins + 1, lastTime);
            } else {
                await this.GARAGE_MODEL.updateWinner(id, winner.wins + 1, winner.time);
            }
        } else {
            await this.GARAGE_MODEL.createWinner(id, 1, lastTime);
        }
        await this.populateWinnersTable();
        await this.GARAGE_MODEL.setNumberOfWinners();
        this.GARAGE_VIEW.updateWinnersTitle(this.GARAGE_MODEL.getNumberOfWinners());
    };

    public async populateWinnersTable(): Promise<void> {
        DOMHelpers.getElement('.table-row-wrapper').innerHTML = '';
        let rowNumber = 1;
        const allWinners = await this.GARAGE_MODEL.getWinners();
        const allCars = await Promise.all(
            allWinners.map((item) => this.GARAGE_MODEL.fetchSpecificCarDataFromDB(item.id))
        );

        allCars.forEach((car, index) => {
            this.GARAGE_VIEW.createWinnersTableMarkup(
                rowNumber,
                car.name,
                allWinners[index].wins,
                allWinners[index].time
            );
            rowNumber += 1;
        });
    }

    public async init(): Promise<void> {
        this.GARAGE_VIEW.setupDOMElementsAndEventHandlers();
        await this.GARAGE_MODEL.init();
        this.GARAGE_VIEW.updateNumberOfCarsInGarageTitle(this.GARAGE_MODEL.getNumberCarsInGarage());
        this.GARAGE_VIEW.updateWinnersTitle(this.GARAGE_MODEL.getNumberOfWinners());
        await this.handleRenderCarsInGarage();
        await this.GARAGE_MODEL.deleteInitialWinnerRecordInDB(1);
        await this.populateWinnersTable();
    }
}

export default MainController;
