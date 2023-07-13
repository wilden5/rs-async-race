import View from '../view/View';
import Controller from '../controller/Controller';

class App {
    private APP_VIEW: View;

    private APP_CONTROLLER: Controller;

    constructor() {
        this.APP_VIEW = new View();
        this.APP_CONTROLLER = new Controller();
    }

    public async start(): Promise<void> {
        this.APP_VIEW.init();
        await this.APP_CONTROLLER.init();
    }
}

export default App;
