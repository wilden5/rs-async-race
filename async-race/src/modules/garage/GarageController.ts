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
        this.GARAGE_VIEW.renderCarsInGarage(await this.GARAGE_MODEL.fetchCarsDataFromDB());
    };

    public async init(): Promise<void> {
        this.GARAGE_VIEW.setupDOMElementsAndEventHandlers();
        await this.GARAGE_MODEL.init();
        this.GARAGE_VIEW.updateNumberOfCarsInGarageTitle(this.GARAGE_MODEL.getNumberOfCarsInGarage());
        await this.handleRenderCarsInGarage();
    }
}

export default GarageController;
