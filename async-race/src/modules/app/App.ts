import CommonView from '../common/CommonView';
import GarageView from '../garage/GarageView';
import GarageModel from '../garage/GarageModel';
import GarageController from '../garage/GarageController';
import CommonController from '../common/CommonController';

class App {
    private COMMON_CONTROLLER: CommonController;

    private GARAGE_CONTROLLER: GarageController;

    constructor() {
        const commonView = new CommonView();
        const garageView = new GarageView(commonView);

        this.COMMON_CONTROLLER = new CommonController(commonView);
        this.GARAGE_CONTROLLER = new GarageController(new GarageModel(), garageView);
    }

    public async start(): Promise<void> {
        await this.COMMON_CONTROLLER.init();
        await this.GARAGE_CONTROLLER.init();
    }
}

export default App;
