import DOMHelpers from '../utils/DOMHelpers';
import { getNumberOfCarsInGarage } from '../utils/APIHelpers';

class Controller {
    private async setGarageTitle(): Promise<void> {
        const GARAGE_TITLE = DOMHelpers.getElement('.garage__title');
        GARAGE_TITLE.innerText += ` (${await getNumberOfCarsInGarage()})`;
    }

    public async init(): Promise<void> {
        await this.setGarageTitle();
    }
}

export default Controller;
