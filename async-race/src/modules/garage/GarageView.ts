import DOMHelpers from '../../utils/DOMHelpers';
import CommonView from '../common/CommonView';

class GarageView {
    private COMMON_VIEW: CommonView;

    public GARAGE_TITLE: HTMLElement;

    public GARAGE_PAGE: HTMLElement;

    public CREATE_CONTAINER: HTMLElement;

    public CREATE_CAR_INPUT: HTMLElement;

    public SET_CAR_COLOR: HTMLElement;

    public CREATE_CAR_BUTTON: HTMLElement;

    public UPDATE_CONTAINER: HTMLElement;

    public UPDATE_CAR_INPUT: HTMLElement;

    public UPDATE_CAR_COLOR: HTMLElement;

    public UPDATE_CAR_BUTTON: HTMLElement;

    public onCreateCarButtonClick: (name: string, color: string) => void = () => {};

    constructor(commonView: CommonView) {
        this.COMMON_VIEW = commonView;
        this.GARAGE_TITLE = DOMHelpers.createElement('div', ['garage__title'], 'Garage');
        this.GARAGE_PAGE = DOMHelpers.createElement('div', ['garage__page'], 'Page #1');
        this.CREATE_CONTAINER = DOMHelpers.createElement('div', ['create-container']);
        this.CREATE_CAR_INPUT = DOMHelpers.createElement('input', ['create-car']);
        this.SET_CAR_COLOR = DOMHelpers.createElement('input', ['create-color']);
        this.CREATE_CAR_BUTTON = DOMHelpers.createElement('button', ['create-button', 'button'], 'Create car');
        this.UPDATE_CONTAINER = DOMHelpers.createElement('div', ['update-container']);
        this.UPDATE_CAR_INPUT = DOMHelpers.createElement('input', ['update-car']);
        this.UPDATE_CAR_COLOR = DOMHelpers.createElement('input', ['update-color']);
        this.UPDATE_CAR_BUTTON = DOMHelpers.createElement('button', ['update-button', 'button'], 'Update car');
    }

    private appendElements(): void {
        DOMHelpers.appendChildToElement(this.COMMON_VIEW.GARAGE_CONTAINER, this.GARAGE_TITLE);
        DOMHelpers.appendChildToElement(this.COMMON_VIEW.GARAGE_CONTAINER, this.GARAGE_PAGE);
        DOMHelpers.appendChildToElement(this.COMMON_VIEW.NAVIGATION_CONTAINER, this.CREATE_CONTAINER);
        DOMHelpers.appendChildToElement(this.COMMON_VIEW.NAVIGATION_CONTAINER, this.UPDATE_CONTAINER);
        DOMHelpers.appendChildToElement(this.CREATE_CONTAINER, this.CREATE_CAR_INPUT);
        DOMHelpers.appendChildToElement(this.CREATE_CONTAINER, this.SET_CAR_COLOR);
        DOMHelpers.appendChildToElement(this.CREATE_CONTAINER, this.CREATE_CAR_BUTTON);
        DOMHelpers.appendChildToElement(this.UPDATE_CONTAINER, this.UPDATE_CAR_INPUT);
        DOMHelpers.appendChildToElement(this.UPDATE_CONTAINER, this.UPDATE_CAR_COLOR);
        DOMHelpers.appendChildToElement(this.UPDATE_CONTAINER, this.UPDATE_CAR_BUTTON);
    }

    private setUpInputElements(): void {
        this.CREATE_CAR_INPUT.setAttribute('type', 'text');
        this.CREATE_CAR_INPUT.setAttribute('placeholder', 'New car name');
        this.SET_CAR_COLOR.setAttribute('type', 'color');

        this.UPDATE_CAR_INPUT.setAttribute('type', 'text');
        this.UPDATE_CAR_INPUT.setAttribute('placeholder', 'Update existing car name');
        this.UPDATE_CAR_COLOR.setAttribute('type', 'color');

        (this.UPDATE_CAR_INPUT as HTMLInputElement).disabled = true;
        (this.UPDATE_CAR_COLOR as HTMLInputElement).disabled = true;
        (this.UPDATE_CAR_BUTTON as HTMLButtonElement).disabled = true;
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
