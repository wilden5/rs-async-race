import DOMHelpers from '../../utils/DOMHelpers';
import Constants from '../../utils/Constants';

class CommonView {
    public WRAPPER: HTMLElement;

    public NAVIGATION_CONTAINER: HTMLElement;

    public GARAGE_BUTTON: HTMLElement;

    public WINNERS_BUTTON: HTMLElement;

    public GARAGE_CONTAINER: HTMLElement;

    public WINNERS_CONTAINER: HTMLElement;

    public FOOTER_CONTAINER: HTMLElement;

    public FOOTER_AUTHOR: HTMLElement;

    public FOOTER_SCHOOL: HTMLElement;

    public FOOTER_SCHOOL_IMG: HTMLElement;

    constructor() {
        this.WRAPPER = DOMHelpers.createElement('div', ['wrapper']);
        this.NAVIGATION_CONTAINER = DOMHelpers.createElement('div', ['navigation-panel-container']);
        this.GARAGE_BUTTON = DOMHelpers.createElement('button', ['garage-button', 'button'], 'Open Garage');
        this.WINNERS_BUTTON = DOMHelpers.createElement('button', ['winners-button', 'button'], 'Check Winners');
        this.GARAGE_CONTAINER = DOMHelpers.createElement('div', ['garage-container']);
        this.WINNERS_CONTAINER = DOMHelpers.createElement('div', ['winners-container', 'disabled']);
        this.FOOTER_CONTAINER = DOMHelpers.createElement('div', ['footer-container']);
        this.FOOTER_AUTHOR = DOMHelpers.createElement('a', ['footer-author'], '🥴wilden5');
        this.FOOTER_SCHOOL = DOMHelpers.createElement('a', ['footer-school']);
        this.FOOTER_SCHOOL_IMG = DOMHelpers.createElement('img', ['footer-school-img']);
    }

    private appendElements(): void {
        DOMHelpers.appendChildToElement(document.body, this.WRAPPER);
        DOMHelpers.appendChildToElement(this.WRAPPER, this.NAVIGATION_CONTAINER);
        DOMHelpers.appendChildToElement(this.NAVIGATION_CONTAINER, this.GARAGE_BUTTON);
        DOMHelpers.appendChildToElement(this.NAVIGATION_CONTAINER, this.WINNERS_BUTTON);
        DOMHelpers.appendChildToElement(this.WRAPPER, this.GARAGE_CONTAINER);
        DOMHelpers.appendChildToElement(this.WRAPPER, this.WINNERS_CONTAINER);
        DOMHelpers.appendChildToElement(this.WRAPPER, this.FOOTER_CONTAINER);
        DOMHelpers.appendChildToElement(this.FOOTER_CONTAINER, this.FOOTER_AUTHOR);
        DOMHelpers.appendChildToElement(this.FOOTER_CONTAINER, this.FOOTER_SCHOOL);
        DOMHelpers.appendChildToElement(this.FOOTER_SCHOOL, this.FOOTER_SCHOOL_IMG);
    }

    private handleGarageButtonClick = (): void => {
        this.WINNERS_CONTAINER.classList.add('disabled');
        this.GARAGE_CONTAINER.classList.remove('disabled');
    };

    private handleWinnersButtonClick = (): void => {
        this.GARAGE_CONTAINER.classList.add('disabled');
        this.WINNERS_CONTAINER.classList.remove('disabled');
    };

    private setFooterLinks = (): void => {
        (this.FOOTER_AUTHOR as HTMLLinkElement).setAttribute('href', Constants.WILDEN_GITHUB_LINK);
        (this.FOOTER_AUTHOR as HTMLLinkElement).setAttribute('target', '_blank');

        (this.FOOTER_SCHOOL as HTMLLinkElement).setAttribute('href', Constants.RS_SCHOOL_LINK);
        (this.FOOTER_SCHOOL as HTMLLinkElement).setAttribute('target', '_blank');

        (this.FOOTER_SCHOOL_IMG as HTMLImageElement).setAttribute('src', Constants.RS_SCHOOL_IMG_LINK);
        (this.FOOTER_SCHOOL_IMG as HTMLImageElement).setAttribute('alt', 'rs-school-image');
    };

    public setupDOMElementsAndEventHandlers(): void {
        this.appendElements();
        this.setFooterLinks();
        this.GARAGE_BUTTON.addEventListener('click', this.handleGarageButtonClick);
        this.WINNERS_BUTTON.addEventListener('click', this.handleWinnersButtonClick);
    }
}

export default CommonView;
