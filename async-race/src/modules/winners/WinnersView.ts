import DOMHelpers from '../../utils/DOMHelpers';
import CommonView from '../common/CommonView';

class WinnersView {
    private COMMON_VIEW: CommonView;

    public WINNERS_TITLE: HTMLElement;

    public WINNERS_PAGE: HTMLElement;

    constructor(commonView: CommonView) {
        this.COMMON_VIEW = commonView;
        this.WINNERS_TITLE = DOMHelpers.createElement('div', ['winners__title'], 'Winners');
        this.WINNERS_PAGE = DOMHelpers.createElement('div', ['winners__page'], 'Page #1');
    }

    private appendElements(): void {
        DOMHelpers.appendChildToElement(this.COMMON_VIEW.WINNERS_CONTAINER, this.WINNERS_TITLE);
        DOMHelpers.appendChildToElement(this.COMMON_VIEW.WINNERS_CONTAINER, this.WINNERS_PAGE);
    }

    public updateWinnersTitle(numberOfWinners: number): void {
        this.WINNERS_TITLE.innerText = `Winners (${numberOfWinners})`;
    }

    public setupDOMElementsAndEventHandlers(): void {
        this.appendElements();
    }
}

export default WinnersView;
