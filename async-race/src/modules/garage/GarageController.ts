import GarageModel from './GarageModel';
import GarageView from './GarageView';
import { CarEntity } from '../../types/Interfaces';

class GarageController {
    private GARAGE_MODEL: GarageModel;

    private readonly GARAGE_VIEW: GarageView;

    constructor(model: GarageModel, view: GarageView) {
        this.GARAGE_MODEL = model;
        this.GARAGE_VIEW = view;
        this.GARAGE_VIEW.onCreateCarButtonClick = this.handleNewCarAddition;
        this.GARAGE_VIEW.onDeleteButtonClick = this.handleCarDeletion;
        this.GARAGE_VIEW.onUpdateButtonClick = this.handleCarUpdating;

        this.GARAGE_VIEW.onExistingCarData = this.handleGetExistingCar;
    }

    private handleNewCarAddition = async (name: string, color: string): Promise<void> => {
        await this.GARAGE_MODEL.saveCarToDatabase(name, color);
        await this.GARAGE_MODEL.syncNumberOfCars();
        await this.handleRenderCars();
        this.GARAGE_VIEW.updateGarageTitle(this.GARAGE_MODEL.getNumberOfCars());
    };

    private handleCarDeletion = async (id: number): Promise<void> => {
        await this.GARAGE_MODEL.deleteCarFromDatabase(id);
        await this.GARAGE_MODEL.syncNumberOfCars();
        await this.handleRenderCars();
        this.GARAGE_VIEW.updateGarageTitle(this.GARAGE_MODEL.getNumberOfCars());
    };

    private handleCarUpdating = async (name: string, color: string, id: number): Promise<void> => {
        await this.GARAGE_MODEL.updateCarInDatabase(name, color, id);
        await this.handleRenderCars();
    };

    private handleGetExistingCar = async (id: number): Promise<CarEntity> => {
        return this.GARAGE_MODEL.fetchSpecificCarData(id);
    };

    public async handleRenderCars(): Promise<void> {
        this.GARAGE_VIEW.renderCars(await this.GARAGE_MODEL.fetchCars());
    }

    public async init(): Promise<void> {
        this.GARAGE_VIEW.setupDOMElementsAndEventHandlers();
        await this.GARAGE_MODEL.init();
        this.GARAGE_VIEW.updateGarageTitle(this.GARAGE_MODEL.getNumberOfCars());
        await this.handleRenderCars();
    }
}

export default GarageController;
