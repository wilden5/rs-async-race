import DOMHelpers from '../../utils/DOMHelpers';

class CommonView {
    public WRAPPER: HTMLElement;

    public NAVIGATION_CONTAINER: HTMLElement;

    public GARAGE_BUTTON: HTMLElement;

    public WINNERS_BUTTON: HTMLElement;

    public GARAGE_CONTAINER: HTMLElement;

    public WINNERS_CONTAINER: HTMLElement;

    constructor() {
        this.WRAPPER = DOMHelpers.createElement('div', ['wrapper']);
        this.NAVIGATION_CONTAINER = DOMHelpers.createElement('div', ['navigation-panel-container']);
        this.GARAGE_BUTTON = DOMHelpers.createElement('button', ['garage-button', 'button'], 'Open Garage');
        this.WINNERS_BUTTON = DOMHelpers.createElement('button', ['winners-button', 'button'], 'Check Winners');
        this.GARAGE_CONTAINER = DOMHelpers.createElement('div', ['garage-container']);
        this.WINNERS_CONTAINER = DOMHelpers.createElement('div', ['winners-container', 'disabled']);
    }

    private appendElements(): void {
        DOMHelpers.appendChildToElement(document.body, this.WRAPPER);
        DOMHelpers.appendChildToElement(this.WRAPPER, this.NAVIGATION_CONTAINER);
        DOMHelpers.appendChildToElement(this.NAVIGATION_CONTAINER, this.GARAGE_BUTTON);
        DOMHelpers.appendChildToElement(this.NAVIGATION_CONTAINER, this.WINNERS_BUTTON);
        DOMHelpers.appendChildToElement(this.WRAPPER, this.GARAGE_CONTAINER);
        DOMHelpers.appendChildToElement(this.WRAPPER, this.WINNERS_CONTAINER);
    }

    private handleGarageButtonClick = (): void => {
        this.WINNERS_CONTAINER.classList.add('disabled');
        this.GARAGE_CONTAINER.classList.remove('disabled');
    };

    private handleWinnersButtonClick = (): void => {
        this.GARAGE_CONTAINER.classList.add('disabled');
        this.WINNERS_CONTAINER.classList.remove('disabled');
    };

    public setupDOMElementsAndEventHandlers(): void {
        this.appendElements();
        this.GARAGE_BUTTON.addEventListener('click', this.handleGarageButtonClick);
        this.WINNERS_BUTTON.addEventListener('click', this.handleWinnersButtonClick);
    }
}

export default CommonView;