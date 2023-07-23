import DOMHelpers from '../../utils/DOMHelpers';
import { CarEntity } from '../../types/Interfaces';
import Constants from '../../utils/Constants';

class MainView {
    public WRAPPER: HTMLElement;

    public NAVIGATION_CONTAINER: HTMLElement;

    public GARAGE_BUTTON: HTMLElement;

    public WINNERS_BUTTON: HTMLElement;

    public GARAGE_CONTAINER: HTMLElement;

    public WINNERS_CONTAINER: HTMLElement;

    public GARAGE_TITLE: HTMLElement;

    public GARAGE_PAGE_CONTAINER: HTMLElement;

    public GARAGE_PAGE: HTMLElement;

    public GARAGE_BUTTONS_WRAPPER: HTMLElement;

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

    public RACE_BUTTON: HTMLElement;

    public RESET_RACE_BUTTON: HTMLElement;

    public RACE_WINNER_CONTAINER: HTMLElement;

    public WINNER_NAME: HTMLElement;

    public WINNERS_TITLE: HTMLElement;

    public WINNERS_PAGE: HTMLElement;

    public TABLE_WRAPPER: HTMLElement;

    public TABLE_ROW_HEADER: HTMLElement;

    public TABLE_CELL_NUMBER: HTMLElement;

    public TABLE_CELL_IMAGE: HTMLElement;

    public TABLE_CELL_NAME: HTMLElement;

    public TABLE_CELL_WINS: HTMLElement;

    public TABLE_CELL_BEST_TIME: HTMLElement;

    public TABLE_ROW_WRAPPER: HTMLElement;

    public onCreateCarButtonClick: (name: string, color: string) => void = () => {};

    public onDeleteButtonClick: (id: number) => void = () => {};

    public onUpdateButtonClick: (name: string, color: string, id: number) => void = () => {};

    public onReceiveExistingCarData: (id: number) => Promise<CarEntity> = () => Promise.resolve({} as CarEntity);

    public onPrevButtonClick: () => void = () => {};

    public onNextButtonClick: () => void = () => {};

    public onGenerateButtonClick: () => void = () => {};

    public onStartEngineButtonClick: (id: number) => void = () => {};

    public onRaceButtonClick: () => Promise<void> = async () => {};

    public onStopEngineButtonClick: (id: number, action: string) => Promise<void> = async () => {};

    public onResetButtonClick: () => Promise<void> = async () => {};

    constructor() {
        this.WRAPPER = DOMHelpers.createElement('div', ['wrapper']);
        this.NAVIGATION_CONTAINER = DOMHelpers.createElement('div', ['navigation-panel-container']);
        this.GARAGE_BUTTON = DOMHelpers.createElement('button', ['garage-button', 'button'], 'Open Garage');
        this.WINNERS_BUTTON = DOMHelpers.createElement('button', ['winners-button', 'button'], 'Check Winners');
        this.GARAGE_CONTAINER = DOMHelpers.createElement('div', ['garage-container']);
        this.WINNERS_CONTAINER = DOMHelpers.createElement('div', ['winners-container', 'disabled']);
        this.GARAGE_TITLE = DOMHelpers.createElement('div', ['garage-title'], 'Garage');
        this.GARAGE_PAGE_CONTAINER = DOMHelpers.createElement('div', ['garage-page-container']);
        this.GARAGE_PAGE = DOMHelpers.createElement('div', ['garage-page'], 'Page #1');
        this.GARAGE_BUTTONS_WRAPPER = DOMHelpers.createElement('div', ['garage-buttons-wrapper']);
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
        this.RACE_BUTTON = DOMHelpers.createElement('button', ['race-button', 'button'], 'Race');
        this.RESET_RACE_BUTTON = DOMHelpers.createElement('button', ['reset-button', 'button'], 'Reset');
        this.RACE_WINNER_CONTAINER = DOMHelpers.createElement(
            'div',
            ['race-winner-container'],
            'WINNER IN THE LAST RACE:'
        );
        this.WINNER_NAME = DOMHelpers.createElement('span', ['winner-name']);
        this.WINNERS_TITLE = DOMHelpers.createElement('div', ['winners__title'], 'Winners');
        this.WINNERS_PAGE = DOMHelpers.createElement('div', ['winners__page'], 'Page #1');
        this.TABLE_WRAPPER = DOMHelpers.createElement('div', ['table-wrapper']);
        this.TABLE_ROW_HEADER = DOMHelpers.createElement('div', ['table-row', 'header']);
        this.TABLE_CELL_NUMBER = DOMHelpers.createElement('div', ['table-number', 'header-cell'], 'Number');
        this.TABLE_CELL_IMAGE = DOMHelpers.createElement('div', ['table-number', 'header-cell'], 'Color');
        this.TABLE_CELL_NAME = DOMHelpers.createElement('div', ['table-name', 'header-cell'], 'Name');
        this.TABLE_CELL_WINS = DOMHelpers.createElement('div', ['table-wins', 'header-cell'], 'Wins');
        this.TABLE_CELL_BEST_TIME = DOMHelpers.createElement('div', ['table-time', 'header-cell'], 'Best Time');
        this.TABLE_ROW_WRAPPER = DOMHelpers.createElement('div', ['table-row-wrapper']);
    }

    private appendElements(): void {
        DOMHelpers.appendChildToElement(document.body, this.WRAPPER);
        DOMHelpers.appendChildToElement(this.WRAPPER, this.NAVIGATION_CONTAINER);
        DOMHelpers.appendChildToElement(this.NAVIGATION_CONTAINER, this.GARAGE_BUTTON);
        DOMHelpers.appendChildToElement(this.NAVIGATION_CONTAINER, this.WINNERS_BUTTON);
        DOMHelpers.appendChildToElement(this.WRAPPER, this.GARAGE_CONTAINER);
        DOMHelpers.appendChildToElement(this.WRAPPER, this.WINNERS_CONTAINER);
        DOMHelpers.appendChildToElement(this.GARAGE_CONTAINER, this.RACE_WINNER_CONTAINER);
        DOMHelpers.appendChildToElement(this.RACE_WINNER_CONTAINER, this.WINNER_NAME);
        DOMHelpers.appendChildToElement(this.GARAGE_CONTAINER, this.GARAGE_TITLE);
        DOMHelpers.appendChildToElement(this.GARAGE_CONTAINER, this.GARAGE_PAGE_CONTAINER);
        DOMHelpers.appendChildToElement(this.GARAGE_PAGE_CONTAINER, this.GARAGE_PAGE);
        DOMHelpers.appendChildToElement(this.GARAGE_PAGE_CONTAINER, this.PAGINATION_PREV_BUTTON);
        DOMHelpers.appendChildToElement(this.GARAGE_PAGE_CONTAINER, this.PAGINATION_NEXT_BUTTON);
        DOMHelpers.appendChildToElement(this.GARAGE_CONTAINER, this.CARS_CONTAINER);
        DOMHelpers.appendChildToElement(this.GARAGE_CONTAINER, this.PAGINATION_CONTAINER);
        DOMHelpers.appendChildToElement(this.NAVIGATION_CONTAINER, this.GARAGE_BUTTONS_WRAPPER);
        DOMHelpers.appendChildToElement(this.WINNERS_CONTAINER, this.WINNERS_TITLE);
        DOMHelpers.appendChildToElement(this.WINNERS_CONTAINER, this.WINNERS_PAGE);
        DOMHelpers.appendChildToElement(this.WINNERS_CONTAINER, this.TABLE_WRAPPER);
        DOMHelpers.appendChildToElement(this.TABLE_WRAPPER, this.TABLE_ROW_HEADER);
        DOMHelpers.appendChildToElement(this.TABLE_WRAPPER, this.TABLE_ROW_WRAPPER);
        DOMHelpers.appendChildToElement(this.TABLE_ROW_HEADER, this.TABLE_CELL_NUMBER);
        DOMHelpers.appendChildToElement(this.TABLE_ROW_HEADER, this.TABLE_CELL_IMAGE);
        DOMHelpers.appendChildToElement(this.TABLE_ROW_HEADER, this.TABLE_CELL_NAME);
        DOMHelpers.appendChildToElement(this.TABLE_ROW_HEADER, this.TABLE_CELL_WINS);
        DOMHelpers.appendChildToElement(this.TABLE_ROW_HEADER, this.TABLE_CELL_BEST_TIME);
        DOMHelpers.appendChildToElement(this.GARAGE_BUTTONS_WRAPPER, this.CREATE_CONTAINER);
        DOMHelpers.appendChildToElement(this.GARAGE_BUTTONS_WRAPPER, this.UPDATE_CONTAINER);
        DOMHelpers.appendChildToElement(this.GARAGE_BUTTONS_WRAPPER, this.FEATURES_CONTAINER);
        DOMHelpers.appendChildToElement(this.GARAGE_BUTTONS_WRAPPER, this.ID_HOLDER);
        DOMHelpers.appendChildToElement(this.CREATE_CONTAINER, this.CREATE_CAR_INPUT);
        DOMHelpers.appendChildToElement(this.CREATE_CONTAINER, this.SET_CAR_COLOR);
        DOMHelpers.appendChildToElement(this.CREATE_CONTAINER, this.CREATE_CAR_BUTTON);
        DOMHelpers.appendChildToElement(this.UPDATE_CONTAINER, this.UPDATE_CAR_INPUT);
        DOMHelpers.appendChildToElement(this.UPDATE_CONTAINER, this.UPDATE_CAR_COLOR);
        DOMHelpers.appendChildToElement(this.UPDATE_CONTAINER, this.UPDATE_CAR_BUTTON);
        DOMHelpers.appendChildToElement(this.FEATURES_CONTAINER, this.RACE_BUTTON);
        DOMHelpers.appendChildToElement(this.FEATURES_CONTAINER, this.RESET_RACE_BUTTON);
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

    private setFeaturesButtonsInitialState(): void {
        (this.RESET_RACE_BUTTON as HTMLInputElement).disabled = true;
    }

    public updateNumberOfCarsInGarageTitle(numberOfCars: number): void {
        this.GARAGE_TITLE.innerText = `Garage (${numberOfCars})`;
    }

    public updateGaragePageNumber(pageNumber: number): void {
        this.GARAGE_PAGE.innerText = `Page #${pageNumber}`;
    }

    public updateWinnersTitle(numberOfWinners: number): void {
        this.WINNERS_TITLE.innerText = `Winners (${numberOfWinners})`;
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

    private setButtonsStatus(elementList: HTMLElement[], status: boolean): void {
        elementList.forEach((item) => {
            const buttonItem = item as HTMLButtonElement;
            buttonItem.disabled = status;
        });
    }

    private handleFeatureButtons = (event: Event): void => {
        const { target } = event;

        if (Constants.EXCLUDED_ELEMENTS_FROM_DELEGATION.includes((target as HTMLElement).tagName.toLowerCase())) {
            return;
        }

        if ((target as HTMLElement).innerText.toLowerCase().includes(Constants.START_RACE_IDENTIFIER)) {
            this.setButtonsStatus(DOMHelpers.getElements('.start-button'), true);
            this.setButtonsStatus(DOMHelpers.getElements('.stop-button'), false);
            this.setButtonsStatus(DOMHelpers.getElements('.select-button'), true);
            this.setButtonsStatus(DOMHelpers.getElements('.remove-button'), true);
            (this.RACE_BUTTON as HTMLButtonElement).disabled = true;
            this.onRaceButtonClick().then(() => {
                (this.RESET_RACE_BUTTON as HTMLButtonElement).disabled = false;
            });
        }

        if ((target as HTMLElement).innerText.toLowerCase().includes(Constants.RESET_RACE_IDENTIFIER)) {
            (this.RESET_RACE_BUTTON as HTMLButtonElement).disabled = true;
            const carIds: string[] = [];
            this.onResetButtonClick()
                .then(() => {
                    DOMHelpers.getElements('.car-wrapper').forEach((item) => {
                        carIds.push(item.classList[0].split('-')[1]);
                    });
                })
                .then(() => {
                    const promises = carIds.map((carId) => {
                        return this.onStopEngineButtonClick(Number(carId), Constants.ENGINE_STOP)
                            .then(() => {
                                (DOMHelpers.getElement(`.stop-${carId}`) as HTMLButtonElement).disabled = true;
                                (DOMHelpers.getElement(`.start-${carId}`) as HTMLButtonElement).disabled = false;
                            })
                            .then(() => {
                                const carToAnimate: HTMLElement = DOMHelpers.getElement(`.car-${carId}`);
                                carToAnimate.style.transform = 'none';
                            });
                    });
                    return Promise.all(promises);
                })
                .then(() => {
                    (this.RACE_BUTTON as HTMLButtonElement).disabled = false;
                    this.setButtonsStatus(DOMHelpers.getElements('.select-button'), false);
                    this.setButtonsStatus(DOMHelpers.getElements('.remove-button'), false);
                });
        }

        if ((target as HTMLElement).innerText.toLowerCase().includes(Constants.GENERATE_CARS_IDENTIFIER)) {
            this.onGenerateButtonClick();
        }
    };

    private handleCarSpecificButtons = (event: Event): void => {
        const { target } = event;

        if (Constants.EXCLUDED_ELEMENTS_FROM_DELEGATION.includes((target as HTMLElement).tagName.toLowerCase())) {
            return;
        }

        const id = (target as HTMLElement).classList[0].split('-')[1];

        if ((target as HTMLElement).innerText.toLowerCase().includes(Constants.START_ENGINE_IDENTIFIER)) {
            this.onStartEngineButtonClick(Number(id));
            (DOMHelpers.getElement(`.start-${id}`) as HTMLButtonElement).disabled = true;
            (DOMHelpers.getElement(`.stop-${id}`) as HTMLButtonElement).disabled = false;
        }

        if ((target as HTMLElement).innerText.toLowerCase().includes(Constants.STOP_ENGINE_IDENTIFIER)) {
            this.onStopEngineButtonClick(Number(id), Constants.ENGINE_STOP)
                .then(() => {
                    (DOMHelpers.getElement(`.stop-${id}`) as HTMLButtonElement).disabled = true;
                    (DOMHelpers.getElement(`.start-${id}`) as HTMLButtonElement).disabled = false;
                })
                .then(() => {
                    const carToAnimate: HTMLElement = DOMHelpers.getElement(`.car-${id}`);
                    carToAnimate.style.transform = 'none';
                });
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
            const carSvg = DOMHelpers.createElement('div', [`car-${car.id}`, 'car']);
            const carRoute = DOMHelpers.createElement('div', [`route-${car.id}`, 'car-route']);
            const carFinishFlag = DOMHelpers.createElement('div', [`finish-${car.id}`, 'car-finish-flag']);
            const selectCarButton = DOMHelpers.createElement(
                'button',
                [`select-${car.id}`, 'select-button', 'car-button'],
                'Select Car'
            );
            const removeCarButton = DOMHelpers.createElement(
                'button',
                [`remove-${car.id}`, 'remove-button', 'car-button'],
                'Remove Car'
            );
            const startCarEngineButton = DOMHelpers.createElement(
                'button',
                [`start-${car.id}`, 'start-button', 'car-button'],
                'Start Engine'
            );
            const stopCarEngineButton = DOMHelpers.createElement(
                'button',
                [`stop-${car.id}`, 'stop-button', 'car-button'],
                'Stop Engine'
            );
            (stopCarEngineButton as HTMLButtonElement).disabled = true;
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

    public createWinnersTableMarkup(carN: number, name: string, wins: number, time: number): void {
        const row = DOMHelpers.createElement('div', ['car-row']);
        const carNumber = DOMHelpers.createElement('div', ['car-number', 'car-cell'], carN.toString());
        const carImage = DOMHelpers.createElement('div', ['car-image', 'car-cell'], 'none');
        const carName = DOMHelpers.createElement('div', ['car-name', 'car-cell'], name);
        const carWins = DOMHelpers.createElement('div', ['car-wins', 'car-cell'], wins.toString());
        const carTime = DOMHelpers.createElement('div', ['car-time', 'car-cell'], (time / 1000).toFixed(2).toString());

        DOMHelpers.appendChildToElement(row, carNumber);
        DOMHelpers.appendChildToElement(row, carImage);
        DOMHelpers.appendChildToElement(row, carName);
        DOMHelpers.appendChildToElement(row, carWins);
        DOMHelpers.appendChildToElement(row, carTime);
        DOMHelpers.appendChildToElement(DOMHelpers.getElement('.table-row-wrapper'), row);
    }

    private handleToGarageButtonClick = (): void => {
        this.WINNERS_CONTAINER.classList.add('disabled');
        this.GARAGE_CONTAINER.classList.remove('disabled');
        DOMHelpers.getElement('.garage-buttons-wrapper').classList.remove('disabled');
    };

    private handleToWinnersButtonClick = (): void => {
        this.GARAGE_CONTAINER.classList.add('disabled');
        this.WINNERS_CONTAINER.classList.remove('disabled');
        DOMHelpers.getElement('.garage-buttons-wrapper').classList.add('disabled');
    };

    public setupDOMElementsAndEventHandlers(): void {
        this.appendElements();
        this.setInputElements();
        this.setFeaturesButtonsInitialState();
        this.CREATE_CAR_BUTTON.addEventListener('click', this.handleCreateCarButtonClick);
        this.CARS_CONTAINER.addEventListener('click', this.handleCarSpecificButtons);
        this.UPDATE_CAR_BUTTON.addEventListener('click', this.handleUpdateCarButtonClick);
        this.PAGINATION_PREV_BUTTON.addEventListener('click', this.onPrevButtonClick);
        this.PAGINATION_NEXT_BUTTON.addEventListener('click', this.onNextButtonClick);
        this.FEATURES_CONTAINER.addEventListener('click', this.handleFeatureButtons);
        this.GARAGE_BUTTON.addEventListener('click', this.handleToGarageButtonClick);
        this.WINNERS_BUTTON.addEventListener('click', this.handleToWinnersButtonClick);
    }
}

export default MainView;
