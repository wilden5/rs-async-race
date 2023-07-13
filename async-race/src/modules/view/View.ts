import DOMHelpers from '../utils/DOMHelpers';

class View {
    public WRAPPER: HTMLElement;

    public NAVIGATION_CONTAINER: HTMLElement;

    public GARAGE_BUTTON: HTMLElement;

    public WINNERS_BUTTON: HTMLElement;

    public GARAGE_CONTAINER: HTMLElement;

    public WINNERS_CONTAINER: HTMLElement;

    public GARAGE_TITLE: HTMLElement;

    public GARAGE_PAGE: HTMLElement;

    constructor() {
        this.WRAPPER = DOMHelpers.createElement('div', ['wrapper']);
        this.NAVIGATION_CONTAINER = DOMHelpers.createElement('div', ['navigation-panel-container']);
        this.GARAGE_BUTTON = DOMHelpers.createElement('button', ['garage-button', 'button'], 'Open Garage');
        this.WINNERS_BUTTON = DOMHelpers.createElement('button', ['winners-button', 'button'], 'Check Winners');
        this.GARAGE_CONTAINER = DOMHelpers.createElement('div', ['garage-container']);
        this.WINNERS_CONTAINER = DOMHelpers.createElement('div', ['winners-container'], 'WINNERS');
        this.GARAGE_TITLE = DOMHelpers.createElement('div', ['garage__title'], 'Garage');
        this.GARAGE_PAGE = DOMHelpers.createElement('div', ['garage__page'], 'Page #1');
    }

    private appendElements(): void {
        DOMHelpers.appendChildToElement(document.body, this.WRAPPER);
        DOMHelpers.appendChildToElement(this.WRAPPER, this.NAVIGATION_CONTAINER);
        DOMHelpers.appendChildToElement(this.NAVIGATION_CONTAINER, this.GARAGE_BUTTON);
        DOMHelpers.appendChildToElement(this.NAVIGATION_CONTAINER, this.WINNERS_BUTTON);
        DOMHelpers.appendChildToElement(this.WRAPPER, this.GARAGE_CONTAINER);
        DOMHelpers.appendChildToElement(this.WRAPPER, this.WINNERS_CONTAINER);
        DOMHelpers.appendChildToElement(this.GARAGE_CONTAINER, this.GARAGE_TITLE);
        DOMHelpers.appendChildToElement(this.GARAGE_CONTAINER, this.GARAGE_PAGE);
    }

    public init(): void {
        this.appendElements();
    }
}

export default View;