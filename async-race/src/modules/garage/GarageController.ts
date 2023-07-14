import GarageModel from './GarageModel';
import GarageView from './GarageView';

class GarageController {
    private GARAGE_MODEL: GarageModel;

    private readonly GARAGE_VIEW: GarageView;

    constructor(model: GarageModel, view: GarageView) {
        this.GARAGE_MODEL = model;
        this.GARAGE_VIEW = view;
        this.GARAGE_VIEW.onCreateCarButtonClick = this.handleNewCarAddition;
    }

    private handleNewCarAddition = async (name: string, color: string): Promise<void> => {
        await this.GARAGE_MODEL.saveCarToDatabase(name, color);
        await this.GARAGE_MODEL.syncNumberOfCars();
        await this.handleRenderCars();
        this.GARAGE_VIEW.updateGarageTitle(this.GARAGE_MODEL.getNumberOfCars());
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
