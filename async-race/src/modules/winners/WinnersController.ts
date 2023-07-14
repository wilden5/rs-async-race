import WinnersModel from './WinnersModel';
import WinnersView from './WinnersView';

class WinnersController {
    private WINNERS_MODEL: WinnersModel;

    private readonly WINNERS_VIEW: WinnersView;

    constructor(model: WinnersModel, view: WinnersView) {
        this.WINNERS_MODEL = model;
        this.WINNERS_VIEW = view;
    }

    public async init(): Promise<void> {
        this.WINNERS_VIEW.setupDOMElementsAndEventHandlers();
        await this.WINNERS_MODEL.init();
        this.WINNERS_VIEW.updateWinnersTitle(this.WINNERS_MODEL.getNumberOfWinners());
    }
}

export default WinnersController;
