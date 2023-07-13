import DOMHelpers from '../utils/DOMHelpers';
import CommonView from './CommonView';

class GarageView {
    private COMMON_VIEW: CommonView;

    public GARAGE_TITLE: HTMLElement;

    public GARAGE_PAGE: HTMLElement;

    constructor(commonView: CommonView) {
        this.COMMON_VIEW = commonView;
        this.GARAGE_TITLE = DOMHelpers.createElement('div', ['garage__title'], 'Garage');
        this.GARAGE_PAGE = DOMHelpers.createElement('div', ['garage__page'], 'Page #1');
    }

    private appendElements(): void {
        DOMHelpers.appendChildToElement(this.COMMON_VIEW.GARAGE_CONTAINER, this.GARAGE_TITLE);
        DOMHelpers.appendChildToElement(this.COMMON_VIEW.GARAGE_CONTAINER, this.GARAGE_PAGE);
    }

    public updateGarageTitle(numberOfCars: number): void {
        this.GARAGE_TITLE.innerText = `Garage (${numberOfCars})`;
    }

    public setupDOMElementsAndEventHandlers(): void {
        this.appendElements();
    }
}

export default GarageView;
