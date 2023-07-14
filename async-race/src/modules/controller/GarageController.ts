import GarageModel from '../model/GarageModel';
import GarageView from '../view/GarageView';

class GarageController {
    private GARAGE_MODEL: GarageModel;

    private readonly GARAGE_VIEW: GarageView;

    constructor(model: GarageModel, view: GarageView) {
        this.GARAGE_MODEL = model;
        this.GARAGE_VIEW = view;
    }

    public async init(): Promise<void> {
        this.GARAGE_VIEW.setupDOMElementsAndEventHandlers();
        await this.GARAGE_MODEL.init();
        this.GARAGE_VIEW.updateGarageTitle(this.GARAGE_MODEL.getNumberOfCars());
    }
}

export default GarageController;