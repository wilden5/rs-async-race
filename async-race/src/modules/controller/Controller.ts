import View from '../view/View';
import Model from '../model/Model';

class Controller {
    private MODEL: Model;

    private readonly VIEW: View;

    constructor(model: Model, view: View) {
        this.MODEL = model;
        this.VIEW = view;
    }

    public async init(): Promise<void> {
        this.VIEW.setupDOMElementsAndEventHandlers();
        await this.MODEL.init();
        this.VIEW.updateViewTitles(this.MODEL.getNumberOfCars(), this.MODEL.getNumberOfWinners());
    }
}

export default Controller;
