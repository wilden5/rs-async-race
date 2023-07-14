import DOMHelpers from '../utils/DOMHelpers';
import CommonView from './CommonView';

class GarageView {
    private COMMON_VIEW: CommonView;

    public GARAGE_TITLE: HTMLElement;

    public GARAGE_PAGE: HTMLElement;

    public ENTITY_CONTAINER: HTMLElement;

    public CREATE_CAR_INPUT: HTMLElement;

    public SET_CAR_COLOR: HTMLElement;

    public CREATE_CAR_BUTTON: HTMLElement;

    public onCreateCarButtonClick: (name: string, color: string) => void = () => {};

    constructor(commonView: CommonView) {
        this.COMMON_VIEW = commonView;
        this.GARAGE_TITLE = DOMHelpers.createElement('div', ['garage__title'], 'Garage');
        this.GARAGE_PAGE = DOMHelpers.createElement('div', ['garage__page'], 'Page #1');
        this.ENTITY_CONTAINER = DOMHelpers.createElement('div', ['entity__container']);
        this.CREATE_CAR_INPUT = DOMHelpers.createElement('input', ['entity_create-car']);
        this.SET_CAR_COLOR = DOMHelpers.createElement('input', ['entity_set-color']);
        this.CREATE_CAR_BUTTON = DOMHelpers.createElement('button', ['entity_create-button', 'button'], 'Create car');
    }

    private appendElements(): void {
        DOMHelpers.appendChildToElement(this.COMMON_VIEW.GARAGE_CONTAINER, this.GARAGE_TITLE);
        DOMHelpers.appendChildToElement(this.COMMON_VIEW.GARAGE_CONTAINER, this.GARAGE_PAGE);
        DOMHelpers.appendChildToElement(this.COMMON_VIEW.NAVIGATION_CONTAINER, this.ENTITY_CONTAINER);
        DOMHelpers.appendChildToElement(this.ENTITY_CONTAINER, this.CREATE_CAR_INPUT);
        DOMHelpers.appendChildToElement(this.ENTITY_CONTAINER, this.SET_CAR_COLOR);
        DOMHelpers.appendChildToElement(this.ENTITY_CONTAINER, this.CREATE_CAR_BUTTON);
    }

    private setUpInputElements(): void {
        this.CREATE_CAR_INPUT.setAttribute('type', 'text');
        this.CREATE_CAR_INPUT.setAttribute('placeholder', 'Enter car name here');
        this.SET_CAR_COLOR.setAttribute('type', 'color');
    }

    public updateGarageTitle(numberOfCars: number): void {
        this.GARAGE_TITLE.innerText = `Garage (${numberOfCars})`;
    }

    private handleCreateCarButtonClick = (): void => {
        const name = (this.CREATE_CAR_INPUT as HTMLInputElement).value;
        const color = (this.SET_CAR_COLOR as HTMLInputElement).value;
        if (name && color) {
            this.onCreateCarButtonClick(name, color);
        }
    };

    public setupDOMElementsAndEventHandlers(): void {
        this.appendElements();
        this.setUpInputElements();
        this.CREATE_CAR_BUTTON.addEventListener('click', this.handleCreateCarButtonClick);
    }
}

export default GarageView;
