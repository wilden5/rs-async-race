import View from '../view/View';
import Model from '../model/Model';

class Controller {
    private MODEL: Model;

    private readonly VIEW: View;

    constructor(model: Model, view: View) {
        this.MODEL = model;
        this.VIEW = view;
    }

    public getView(): View {
        return this.VIEW;
    }

    public async init(): Promise<void> {
        await this.MODEL.setNumberOfCars();
        this.VIEW.updateGarageTitle(this.MODEL.getNumberOfCars());
    }
}

export default Controller;
