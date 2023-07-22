import DOMHelpers from '../../utils/DOMHelpers';
import CommonView from '../common/CommonView';

class WinnersView {
    private COMMON_VIEW: CommonView;

    public WINNERS_TITLE: HTMLElement;

    public WINNERS_PAGE: HTMLElement;

    public TABLE_WRAPPER: HTMLElement;

    public TABLE_ROW_HEADER: HTMLElement;

    public TABLE_CELL_NUMBER: HTMLElement;

    public TABLE_CELL_IMAGE: HTMLElement;

    public TABLE_CELL_NAME: HTMLElement;

    public TABLE_CELL_WINS: HTMLElement;

    public TABLE_CELL_BEST_TIME: HTMLElement;

    constructor(commonView: CommonView) {
        this.COMMON_VIEW = commonView;
        this.WINNERS_TITLE = DOMHelpers.createElement('div', ['winners__title'], 'Winners');
        this.WINNERS_PAGE = DOMHelpers.createElement('div', ['winners__page'], 'Page #1');
        this.TABLE_WRAPPER = DOMHelpers.createElement('div', ['table-wrapper']);
        this.TABLE_ROW_HEADER = DOMHelpers.createElement('div', ['table-row', 'header']);
        this.TABLE_CELL_NUMBER = DOMHelpers.createElement('div', ['table-number', 'header-cell'], 'Number');
        this.TABLE_CELL_IMAGE = DOMHelpers.createElement('div', ['table-number', 'header-cell'], 'Color');
        this.TABLE_CELL_NAME = DOMHelpers.createElement('div', ['table-name', 'header-cell'], 'Name');
        this.TABLE_CELL_WINS = DOMHelpers.createElement('div', ['table-wins', 'header-cell'], 'Wins');
        this.TABLE_CELL_BEST_TIME = DOMHelpers.createElement('div', ['table-time', 'header-cell'], 'Best Time');
    }

    private appendElements(): void {
        DOMHelpers.appendChildToElement(this.COMMON_VIEW.WINNERS_CONTAINER, this.WINNERS_TITLE);
        DOMHelpers.appendChildToElement(this.COMMON_VIEW.WINNERS_CONTAINER, this.WINNERS_PAGE);
        DOMHelpers.appendChildToElement(this.COMMON_VIEW.WINNERS_CONTAINER, this.TABLE_WRAPPER);
        DOMHelpers.appendChildToElement(this.TABLE_WRAPPER, this.TABLE_ROW_HEADER);

        DOMHelpers.appendChildToElement(this.TABLE_ROW_HEADER, this.TABLE_CELL_NUMBER);
        DOMHelpers.appendChildToElement(this.TABLE_ROW_HEADER, this.TABLE_CELL_IMAGE);
        DOMHelpers.appendChildToElement(this.TABLE_ROW_HEADER, this.TABLE_CELL_NAME);
        DOMHelpers.appendChildToElement(this.TABLE_ROW_HEADER, this.TABLE_CELL_WINS);
        DOMHelpers.appendChildToElement(this.TABLE_ROW_HEADER, this.TABLE_CELL_BEST_TIME);
    }

    public updateWinnersTitle(numberOfWinners: number): void {
        this.WINNERS_TITLE.innerText = `Winners (${numberOfWinners})`;
    }

    public setupDOMElementsAndEventHandlers(): void {
        this.appendElements();
    }
}

export default WinnersView;
