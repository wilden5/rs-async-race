import DOMHelpers from '../../utils/DOMHelpers';
import Constants from '../../utils/Constants';

class CommonView {
    public COMMON_ELEMENTS: {
        [key: string]: HTMLElement;
    };

    constructor() {
        this.COMMON_ELEMENTS = {
            FOOTER_CONTAINER: DOMHelpers.createElement('div', ['footer-container']),
            FOOTER_AUTHOR: DOMHelpers.createElement('a', ['footer-author'], '🥴wilden5'),
            FOOTER_SCHOOL: DOMHelpers.createElement('a', ['footer-school']),
            FOOTER_SCHOOL_IMG: DOMHelpers.createElement('img', ['footer-school-img']),
        };
    }

    private appendElements(): void {
        DOMHelpers.appendChildToElement(DOMHelpers.getElement('.wrapper'), this.COMMON_ELEMENTS.FOOTER_CONTAINER);
        DOMHelpers.appendChildToElement(this.COMMON_ELEMENTS.FOOTER_CONTAINER, this.COMMON_ELEMENTS.FOOTER_AUTHOR);
        DOMHelpers.appendChildToElement(this.COMMON_ELEMENTS.FOOTER_CONTAINER, this.COMMON_ELEMENTS.FOOTER_SCHOOL);
        DOMHelpers.appendChildToElement(this.COMMON_ELEMENTS.FOOTER_SCHOOL, this.COMMON_ELEMENTS.FOOTER_SCHOOL_IMG);
    }

    private setFooterLinks = (): void => {
        (this.COMMON_ELEMENTS.FOOTER_AUTHOR as HTMLLinkElement).setAttribute('href', Constants.WILDEN_GITHUB_LINK);
        (this.COMMON_ELEMENTS.FOOTER_AUTHOR as HTMLLinkElement).setAttribute('target', '_blank');

        (this.COMMON_ELEMENTS.FOOTER_SCHOOL as HTMLLinkElement).setAttribute('href', Constants.RS_SCHOOL_LINK);
        (this.COMMON_ELEMENTS.FOOTER_SCHOOL as HTMLLinkElement).setAttribute('target', '_blank');

        (this.COMMON_ELEMENTS.FOOTER_SCHOOL_IMG as HTMLImageElement).setAttribute('src', Constants.RS_SCHOOL_IMG_LINK);
        (this.COMMON_ELEMENTS.FOOTER_SCHOOL_IMG as HTMLImageElement).setAttribute('alt', 'rs-school-image');
    };

    public setupDOMElementsAndEventHandlers(): void {
        this.appendElements();
        this.setFooterLinks();
    }
}

export default CommonView;
