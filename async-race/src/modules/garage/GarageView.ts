import DOMHelpers from '../../utils/DOMHelpers';
import CommonView from '../common/CommonView';
import { CarEntity } from '../../types/Interfaces';
import Constants from '../../utils/Constants';

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

    public CARS_CONTAINER: HTMLElement;

    public ID_HOLDER: HTMLElement;

    public onCreateCarButtonClick: (name: string, color: string) => void = () => {};

    public onDeleteButtonClick: (id: number) => void = () => {};

    public onUpdateButtonClick: (name: string, color: string, id: number) => void = () => {};

    public onReceiveExistingCarData: (id: number) => Promise<CarEntity> = () => Promise.resolve({} as CarEntity);

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
        this.CARS_CONTAINER = DOMHelpers.createElement('div', ['cars-container']);
        this.ID_HOLDER = DOMHelpers.createElement('span', ['id-holder']);
    }

    private appendElements(): void {
        DOMHelpers.appendChildToElement(this.COMMON_VIEW.GARAGE_CONTAINER, this.GARAGE_TITLE);
        DOMHelpers.appendChildToElement(this.COMMON_VIEW.GARAGE_CONTAINER, this.GARAGE_PAGE);
        DOMHelpers.appendChildToElement(this.COMMON_VIEW.GARAGE_CONTAINER, this.CARS_CONTAINER);
        DOMHelpers.appendChildToElement(this.COMMON_VIEW.NAVIGATION_CONTAINER, this.CREATE_CONTAINER);
        DOMHelpers.appendChildToElement(this.COMMON_VIEW.NAVIGATION_CONTAINER, this.UPDATE_CONTAINER);
        DOMHelpers.appendChildToElement(this.COMMON_VIEW.NAVIGATION_CONTAINER, this.ID_HOLDER);
        DOMHelpers.appendChildToElement(this.CREATE_CONTAINER, this.CREATE_CAR_INPUT);
        DOMHelpers.appendChildToElement(this.CREATE_CONTAINER, this.SET_CAR_COLOR);
        DOMHelpers.appendChildToElement(this.CREATE_CONTAINER, this.CREATE_CAR_BUTTON);
        DOMHelpers.appendChildToElement(this.UPDATE_CONTAINER, this.UPDATE_CAR_INPUT);
        DOMHelpers.appendChildToElement(this.UPDATE_CONTAINER, this.UPDATE_CAR_COLOR);
        DOMHelpers.appendChildToElement(this.UPDATE_CONTAINER, this.UPDATE_CAR_BUTTON);
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
        const id = (target as HTMLElement).classList[0].split('-')[1];

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
            const carName = DOMHelpers.createElement('span', [`name-${car.id}`, 'car-name'], `${car.name}`);
            const carSvg = DOMHelpers.createElement('div', [`svg-${car.id}`, 'car-image']);
            const selectCarButton = DOMHelpers.createElement('button', [`select-${car.id}`, 'button'], 'Select Car');
            const removeCarButton = DOMHelpers.createElement('button', [`remove-${car.id}`, 'button'], 'Remove Car');
            carSvg.innerHTML = Constants.CAR_SVG;
            const svgPath = carSvg.querySelector('path') as Element;
            svgPath.setAttribute('fill', car.color);

            DOMHelpers.appendChildToElement(carDiv, carName);
            DOMHelpers.appendChildToElement(carDiv, carSvg);
            DOMHelpers.appendChildToElement(carDiv, selectCarButton);
            DOMHelpers.appendChildToElement(carDiv, removeCarButton);
            DOMHelpers.appendChildToElement(this.CARS_CONTAINER, carDiv);
        });
    }

    public setupDOMElementsAndEventHandlers(): void {
        this.appendElements();
        this.setInputElements();
        this.CREATE_CAR_BUTTON.addEventListener('click', this.handleCreateCarButtonClick);
        this.CARS_CONTAINER.addEventListener('click', this.handleCarSpecificButtons);
        this.UPDATE_CAR_BUTTON.addEventListener('click', this.handleUpdateCarButtonClick);
    }
}

export default GarageView;
