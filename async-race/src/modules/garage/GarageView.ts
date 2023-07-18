import DOMHelpers from '../../utils/DOMHelpers';
import CommonView from '../common/CommonView';
import { CarEntity } from '../../types/Interfaces';
import Constants from '../../utils/Constants';

class GarageView {
    private COMMON_VIEW: CommonView;

    public GARAGE_TITLE: HTMLElement;

    private GARAGE_PAGE_CONTAINER: HTMLElement;

    public GARAGE_PAGE: HTMLElement;

    public CREATE_CONTAINER: HTMLElement;

    public CREATE_CAR_INPUT: HTMLElement;

    public SET_CAR_COLOR: HTMLElement;

    public CREATE_CAR_BUTTON: HTMLElement;

    public UPDATE_CONTAINER: HTMLElement;

    public UPDATE_CAR_INPUT: HTMLElement;

    public UPDATE_CAR_COLOR: HTMLElement;

    public UPDATE_CAR_BUTTON: HTMLElement;

    public CARS_CONTAINER: HTMLElement;

    public ID_HOLDER: HTMLElement;

    public PAGINATION_CONTAINER: HTMLElement;

    public PAGINATION_NEXT_BUTTON: HTMLElement;

    public PAGINATION_PREV_BUTTON: HTMLElement;

    public FEATURES_CONTAINER: HTMLElement;

    public GENERATE_CARS_BUTTON: HTMLElement;

    public onCreateCarButtonClick: (name: string, color: string) => void = () => {};

    public onDeleteButtonClick: (id: number) => void = () => {};

    public onUpdateButtonClick: (name: string, color: string, id: number) => void = () => {};

    public onReceiveExistingCarData: (id: number) => Promise<CarEntity> = () => Promise.resolve({} as CarEntity);

    public onPrevButtonClick: () => void = () => {};

    public onNextButtonClick: () => void = () => {};

    public onGenerateButtonClick: () => void = () => {};

    public onStartEngineButtonClick: (id: number, status: string) => void = () => {};

    constructor(commonView: CommonView) {
        this.COMMON_VIEW = commonView;
        this.GARAGE_TITLE = DOMHelpers.createElement('div', ['garage-title'], 'Garage');
        this.GARAGE_PAGE_CONTAINER = DOMHelpers.createElement('div', ['garage-page-container']);
        this.GARAGE_PAGE = DOMHelpers.createElement('div', ['garage-page'], 'Page #1');
        this.CREATE_CONTAINER = DOMHelpers.createElement('div', ['create-container']);
        this.CREATE_CAR_INPUT = DOMHelpers.createElement('input', ['create-car']);
        this.SET_CAR_COLOR = DOMHelpers.createElement('input', ['create-color']);
        this.CREATE_CAR_BUTTON = DOMHelpers.createElement('button', ['create-button', 'button'], 'Create car');
        this.UPDATE_CONTAINER = DOMHelpers.createElement('div', ['update-container']);
        this.UPDATE_CAR_INPUT = DOMHelpers.createElement('input', ['update-car']);
        this.UPDATE_CAR_COLOR = DOMHelpers.createElement('input', ['update-color']);
        this.UPDATE_CAR_BUTTON = DOMHelpers.createElement('button', ['update-button', 'button'], 'Update car');
        this.CARS_CONTAINER = DOMHelpers.createElement('div', ['cars-container']);
        this.ID_HOLDER = DOMHelpers.createElement('span', ['id-holder']);
        this.PAGINATION_CONTAINER = DOMHelpers.createElement('div', ['pagination-container']);
        this.PAGINATION_NEXT_BUTTON = DOMHelpers.createElement('button', ['pag-next-button', 'button'], 'Next');
        this.PAGINATION_PREV_BUTTON = DOMHelpers.createElement('button', ['pag-prev-button', 'button'], 'Previous');
        this.FEATURES_CONTAINER = DOMHelpers.createElement('div', ['features-container']);
        this.GENERATE_CARS_BUTTON = DOMHelpers.createElement('button', ['gen-cars-button', 'button'], 'Generate Cars');
    }

    private appendElements(): void {
        DOMHelpers.appendChildToElement(this.COMMON_VIEW.GARAGE_CONTAINER, this.GARAGE_TITLE);
        DOMHelpers.appendChildToElement(this.COMMON_VIEW.GARAGE_CONTAINER, this.GARAGE_PAGE_CONTAINER);
        DOMHelpers.appendChildToElement(this.GARAGE_PAGE_CONTAINER, this.GARAGE_PAGE);
        DOMHelpers.appendChildToElement(this.GARAGE_PAGE_CONTAINER, this.PAGINATION_PREV_BUTTON);
        DOMHelpers.appendChildToElement(this.GARAGE_PAGE_CONTAINER, this.PAGINATION_NEXT_BUTTON);
        DOMHelpers.appendChildToElement(this.COMMON_VIEW.GARAGE_CONTAINER, this.CARS_CONTAINER);
        DOMHelpers.appendChildToElement(this.COMMON_VIEW.GARAGE_CONTAINER, this.PAGINATION_CONTAINER);
        DOMHelpers.appendChildToElement(this.COMMON_VIEW.NAVIGATION_CONTAINER, this.CREATE_CONTAINER);
        DOMHelpers.appendChildToElement(this.COMMON_VIEW.NAVIGATION_CONTAINER, this.UPDATE_CONTAINER);
        DOMHelpers.appendChildToElement(this.COMMON_VIEW.NAVIGATION_CONTAINER, this.FEATURES_CONTAINER);
        DOMHelpers.appendChildToElement(this.COMMON_VIEW.NAVIGATION_CONTAINER, this.ID_HOLDER);
        DOMHelpers.appendChildToElement(this.CREATE_CONTAINER, this.CREATE_CAR_INPUT);
        DOMHelpers.appendChildToElement(this.CREATE_CONTAINER, this.SET_CAR_COLOR);
        DOMHelpers.appendChildToElement(this.CREATE_CONTAINER, this.CREATE_CAR_BUTTON);
        DOMHelpers.appendChildToElement(this.UPDATE_CONTAINER, this.UPDATE_CAR_INPUT);
        DOMHelpers.appendChildToElement(this.UPDATE_CONTAINER, this.UPDATE_CAR_COLOR);
        DOMHelpers.appendChildToElement(this.UPDATE_CONTAINER, this.UPDATE_CAR_BUTTON);
        DOMHelpers.appendChildToElement(this.FEATURES_CONTAINER, this.GENERATE_CARS_BUTTON);
    }

    private setInputElements(): void {
        this.CREATE_CAR_INPUT.setAttribute('type', 'text');
        this.CREATE_CAR_INPUT.setAttribute('placeholder', 'New car name');
        this.SET_CAR_COLOR.setAttribute('type', 'color');

        this.UPDATE_CAR_INPUT.setAttribute('type', 'text');
        this.UPDATE_CAR_INPUT.setAttribute('placeholder', 'Select car first to open');
        this.UPDATE_CAR_COLOR.setAttribute('type', 'color');

        this.setInputElementsStatus(Constants.LOCK_INPUT_FIELDS);
    }

    private setInputElementsStatus(status: string): void {
        const array: HTMLElement[] = [this.UPDATE_CAR_INPUT, this.UPDATE_CAR_COLOR, this.UPDATE_CAR_BUTTON];
        if (status === Constants.LOCK_INPUT_FIELDS) {
            array.forEach((item) => {
                const inputElement: HTMLInputElement = item as HTMLInputElement;
                inputElement.disabled = true;
            });
        }

        if (status === Constants.UNLOCK_INPUT_FIELDS) {
            array.forEach((item) => {
                const inputElement: HTMLInputElement = item as HTMLInputElement;
                inputElement.disabled = false;
            });
        }
    }

    public updateNumberOfCarsInGarageTitle(numberOfCars: number): void {
        this.GARAGE_TITLE.innerText = `Garage (${numberOfCars})`;
    }

    public updateGaragePageNumber(pageNumber: number): void {
        this.GARAGE_PAGE.innerText = `Page #${pageNumber}`;
    }

    private handleCreateCarButtonClick = (): void => {
        const name = (this.CREATE_CAR_INPUT as HTMLInputElement).value;
        const color = (this.SET_CAR_COLOR as HTMLInputElement).value;
        if (name && color) {
            this.onCreateCarButtonClick(name, color);
            (this.CREATE_CAR_INPUT as HTMLInputElement).value = '';
            (this.SET_CAR_COLOR as HTMLInputElement).value = Constants.DEFAULT_COLOR_PICKER;
        }
    };

    private handleUpdateCarButtonClick = (): void => {
        const name = (this.UPDATE_CAR_INPUT as HTMLInputElement).value;
        const color = (this.UPDATE_CAR_COLOR as HTMLInputElement).value;
        const id = this.ID_HOLDER.innerText;
        if (name && color) {
            this.onUpdateButtonClick(name, color, Number(id));
            this.setInputElementsStatus(Constants.LOCK_INPUT_FIELDS);
            (this.UPDATE_CAR_INPUT as HTMLInputElement).value = '';
            (this.UPDATE_CAR_COLOR as HTMLInputElement).value = Constants.DEFAULT_COLOR_PICKER;
        }
    };

    private handleCarSpecificButtons = (event: Event): void => {
        const { target } = event;

        if (Constants.EXCLUDED_ELEMENTS_FROM_DELEGATION.includes((target as HTMLElement).tagName.toLowerCase())) {
            return;
        }

        const id = (target as HTMLElement).classList[0].split('-')[1];

        if ((target as HTMLElement).innerText.toLowerCase().includes(Constants.START_ENGINE_IDENTIFIER)) {
            this.onStartEngineButtonClick(Number(id), Constants.ENGINE_START);
        }

        if ((target as HTMLElement).innerText.toLowerCase().includes(Constants.REMOVE_BUTTON_IDENTIFIER)) {
            this.onDeleteButtonClick(Number(id));
        }

        if ((target as HTMLElement).innerText.toLowerCase().includes(Constants.SELECT_BUTTON_IDENTIFIER)) {
            this.onReceiveExistingCarData(Number(id)).then((specificCar) => {
                (this.UPDATE_CAR_INPUT as HTMLInputElement).value = specificCar.name;
                (this.UPDATE_CAR_COLOR as HTMLInputElement).value = specificCar.color;
                this.ID_HOLDER.innerText = specificCar.id.toString();
            });
            this.setInputElementsStatus(Constants.UNLOCK_INPUT_FIELDS);
        }
    };

    public renderCarsInGarage(cars: CarEntity[]): void {
        this.CARS_CONTAINER.innerHTML = '';
        cars.forEach((car) => {
            const carDiv = DOMHelpers.createElement('div', [`id-${car.id}`, 'car-wrapper']);
            const carButtonsContainer = DOMHelpers.createElement('div', ['car-buttons-container']);
            const carName = DOMHelpers.createElement('div', [`name-${car.id}`, 'car-name'], `${car.name}`);
            const carSvg = DOMHelpers.createElement('div', [`svg-${car.id}`, 'car-image']);
            const carRoute = DOMHelpers.createElement('div', [`route-${car.id}`, 'car-route']);
            const carFinishFlag = DOMHelpers.createElement('div', [`finish-${car.id}`, 'car-finish-flag']);
            const selectCarButton = DOMHelpers.createElement(
                'button',
                [`select-${car.id}`, 'car-button'],
                'Select Car'
            );
            const removeCarButton = DOMHelpers.createElement(
                'button',
                [`remove-${car.id}`, 'car-button'],
                'Remove Car'
            );
            const startCarEngineButton = DOMHelpers.createElement(
                'button',
                [`start-${car.id}`, 'car-button'],
                'Start Engine'
            );
            const stopCarEngineButton = DOMHelpers.createElement(
                'button',
                [`stop-${car.id}`, 'car-button'],
                'Stop Engine'
            );
            carSvg.innerHTML = Constants.CAR_SVG;
            const svgPath = carSvg.querySelector('path') as Element;
            svgPath.setAttribute('fill', car.color);

            DOMHelpers.appendChildToElement(carDiv, carName);
            DOMHelpers.appendChildToElement(carDiv, carButtonsContainer);
            DOMHelpers.appendChildToElement(carButtonsContainer, startCarEngineButton);
            DOMHelpers.appendChildToElement(carButtonsContainer, stopCarEngineButton);
            DOMHelpers.appendChildToElement(carDiv, carSvg);
            DOMHelpers.appendChildToElement(carDiv, carRoute);
            DOMHelpers.appendChildToElement(carRoute, carFinishFlag);
            DOMHelpers.appendChildToElement(carButtonsContainer, selectCarButton);
            DOMHelpers.appendChildToElement(carButtonsContainer, removeCarButton);
            DOMHelpers.appendChildToElement(this.CARS_CONTAINER, carDiv);
        });
    }

    public setupDOMElementsAndEventHandlers(): void {
        this.appendElements();
        this.setInputElements();
        this.CREATE_CAR_BUTTON.addEventListener('click', this.handleCreateCarButtonClick);
        this.CARS_CONTAINER.addEventListener('click', this.handleCarSpecificButtons);
        this.UPDATE_CAR_BUTTON.addEventListener('click', this.handleUpdateCarButtonClick);
        this.PAGINATION_PREV_BUTTON.addEventListener('click', this.onPrevButtonClick);
        this.PAGINATION_NEXT_BUTTON.addEventListener('click', this.onNextButtonClick);
        this.GENERATE_CARS_BUTTON.addEventListener('click', this.onGenerateButtonClick);
    }
}

export default GarageView;
