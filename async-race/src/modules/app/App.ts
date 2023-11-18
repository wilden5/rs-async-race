import CommonView from '../common/CommonView';
import MainView from '../main/MainView';
import MainModel from '../main/MainModel';
import MainController from '../main/MainController';
import CommonController from '../common/CommonController';

class App {
    private COMMON_CONTROLLER: CommonController;

    private GARAGE_CONTROLLER: MainController;

    constructor() {
        const commonView = new CommonView();
        const garageView = new MainView();

        this.COMMON_CONTROLLER = new CommonController(commonView);
        this.GARAGE_CONTROLLER = new MainController(new MainModel(), garageView);
    }

    public async start(): Promise<void> {
        await this.GARAGE_CONTROLLER.init();
        await this.COMMON_CONTROLLER.init();
    }
}

export default App;
