import DOMHelpers from '../../utils/DOMHelpers';
import Constants from '../../utils/Constants';

class CommonView {
    public FOOTER_CONTAINER: HTMLElement;

    public FOOTER_AUTHOR: HTMLElement;

    public FOOTER_SCHOOL: HTMLElement;

    public FOOTER_SCHOOL_IMG: HTMLElement;

    constructor() {
        this.FOOTER_CONTAINER = DOMHelpers.createElement('div', ['footer-container']);
        this.FOOTER_AUTHOR = DOMHelpers.createElement('a', ['footer-author'], '🥴wilden5');
        this.FOOTER_SCHOOL = DOMHelpers.createElement('a', ['footer-school']);
        this.FOOTER_SCHOOL_IMG = DOMHelpers.createElement('img', ['footer-school-img']);
    }

    private appendElements(): void {
        DOMHelpers.appendChildToElement(DOMHelpers.getElement('.wrapper'), this.FOOTER_CONTAINER);
        DOMHelpers.appendChildToElement(this.FOOTER_CONTAINER, this.FOOTER_AUTHOR);
        DOMHelpers.appendChildToElement(this.FOOTER_CONTAINER, this.FOOTER_SCHOOL);
        DOMHelpers.appendChildToElement(this.FOOTER_SCHOOL, this.FOOTER_SCHOOL_IMG);
    }

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
    }
}

export default CommonView;
