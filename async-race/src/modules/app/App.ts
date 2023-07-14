import CommonView from '../common/CommonView';
import GarageView from '../garage/GarageView';
import GarageModel from '../garage/GarageModel';
import GarageController from '../garage/GarageController';
import WinnersView from '../winners/WinnersView';
import WinnersModel from '../winners/WinnersModel';
import WinnersController from '../winners/WinnersController';
import CommonController from '../common/CommonController';

class App {
    private COMMON_CONTROLLER: CommonController;

    private GARAGE_CONTROLLER: GarageController;

    private WINNERS_CONTROLLER: WinnersController;

    constructor() {
        const commonView = new CommonView();
        const garageView = new GarageView(commonView);
        const winnersView = new WinnersView(commonView);

        this.COMMON_CONTROLLER = new CommonController(commonView);
        this.GARAGE_CONTROLLER = new GarageController(new GarageModel(), garageView);
        this.WINNERS_CONTROLLER = new WinnersController(new WinnersModel(), winnersView);
    }

    public async start(): Promise<void> {
        await this.COMMON_CONTROLLER.init();
        await this.GARAGE_CONTROLLER.init();
        await this.WINNERS_CONTROLLER.init();
    }
}

export default App;
