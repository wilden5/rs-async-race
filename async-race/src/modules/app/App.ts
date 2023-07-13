import View from '../view/View';
import Controller from '../controller/Controller';
import Model from '../model/Model';

class App {
    private APP_CONTROLLER: Controller;

    constructor() {
        this.APP_CONTROLLER = new Controller(new Model(), new View());
    }

    public async start(): Promise<void> {
        this.APP_CONTROLLER.getView().appendElements();
        await this.APP_CONTROLLER.init();
    }
}

export default App;
