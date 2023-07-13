import CommonView from '../view/CommonView';
import GarageView from '../view/GarageView';
import GarageModel from '../model/GarageModel';
import GarageController from '../controller/GarageController';
import WinnersView from '../view/WinnersView';
import WinnersModel from '../model/WinnersModel';
import WinnersController from '../controller/WinnersController';
import CommonController from '../controller/CommonController';

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
