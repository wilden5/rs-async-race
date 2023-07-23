import DOMHelpers from '../../utils/DOMHelpers';
import { CarEntity } from '../../types/Interfaces';
import Constants from '../../utils/Constants';
import ReferenceFunctions from '../../utils/ReferenceFunctions';

class MainView {
    public MAIN_ELEMENTS: {
        [key: string]: HTMLElement;
    };

    constructor() {
        this.MAIN_ELEMENTS = {
            WRAPPER: DOMHelpers.createElement('div', ['wrapper']),
            NAVIGATION_CONTAINER: DOMHelpers.createElement('div', ['navigation-panel-container']),
            GARAGE_BUTTON: DOMHelpers.createElement('button', ['garage-button', 'button'], 'Open Garage'),
            WINNERS_BUTTON: DOMHelpers.createElement('button', ['winners-button', 'button'], 'Check Winners'),
            GARAGE_CONTAINER: DOMHelpers.createElement('div', ['garage-container']),
            WINNERS_CONTAINER: DOMHelpers.createElement('div', ['winners-container', 'disabled']),
            GARAGE_TITLE: DOMHelpers.createElement('div', ['garage-title'], 'Garage'),
            GARAGE_PAGE_CONTAINER: DOMHelpers.createElement('div', ['garage-page-container']),
            GARAGE_PAGE: DOMHelpers.createElement('div', ['garage-page'], 'Page #1'),
            GARAGE_BUTTONS_WRAPPER: DOMHelpers.createElement('div', ['garage-buttons-wrapper']),
            CREATE_CONTAINER: DOMHelpers.createElement('div', ['create-container']),
            CREATE_CAR_INPUT: DOMHelpers.createElement('input', ['create-car']),
            SET_CAR_COLOR: DOMHelpers.createElement('input', ['create-color']),
            CREATE_CAR_BUTTON: DOMHelpers.createElement('button', ['create-button', 'button'], 'Create car'),
            UPDATE_CONTAINER: DOMHelpers.createElement('div', ['update-container']),
            UPDATE_CAR_INPUT: DOMHelpers.createElement('input', ['update-car']),
            UPDATE_CAR_COLOR: DOMHelpers.createElement('input', ['update-color']),
            UPDATE_CAR_BUTTON: DOMHelpers.createElement('button', ['update-button', 'button'], 'Update car'),
            CARS_CONTAINER: DOMHelpers.createElement('div', ['cars-container']),
            ID_HOLDER: DOMHelpers.createElement('span', ['id-holder']),
            PAGINATION_CONTAINER: DOMHelpers.createElement('div', ['pagination-container']),
            PAGINATION_NEXT_BUTTON: DOMHelpers.createElement('button', ['pag-next-button', 'button'], 'Next'),
            PAGINATION_PREV_BUTTON: DOMHelpers.createElement('button', ['pag-prev-button', 'button'], 'Previous'),
            FEATURES_CONTAINER: DOMHelpers.createElement('div', ['features-container']),
            GENERATE_CARS_BUTTON: DOMHelpers.createElement('button', ['gen-cars-button', 'button'], 'Generate Cars'),
            RACE_BUTTON: DOMHelpers.createElement('button', ['race-button', 'button'], 'Race'),
            RESET_RACE_BUTTON: DOMHelpers.createElement('button', ['reset-button', 'button'], 'Reset'),
            RACE_WINNER_CONTAINER: DOMHelpers.createElement(
                'div',
                ['race-winner-container'],
                'WINNER IN THE LAST RACE:'
            ),
            WINNER_NAME: DOMHelpers.createElement('span', ['winner-name']),
            WINNERS_TITLE: DOMHelpers.createElement('div', ['winners__title'], 'Winners'),
            WINNERS_PAGE: DOMHelpers.createElement('div', ['winners__page'], 'Page #1'),
            TABLE_WRAPPER: DOMHelpers.createElement('div', ['table-wrapper']),
            TABLE_ROW_HEADER: DOMHelpers.createElement('div', ['table-row', 'header']),
            TABLE_CELL_NUMBER: DOMHelpers.createElement('div', ['table-number', 'header-cell'], 'Number'),
            TABLE_CELL_IMAGE: DOMHelpers.createElement('div', ['table-number', 'header-cell'], 'Car Image'),
            TABLE_CELL_NAME: DOMHelpers.createElement('div', ['table-name', 'header-cell'], 'Name'),
            TABLE_CELL_WINS: DOMHelpers.createElement('div', ['table-wins', 'header-cell'], 'Wins'),
            TABLE_CELL_BEST_TIME: DOMHelpers.createElement('div', ['table-time', 'header-cell'], 'Best Time'),
            TABLE_ROW_WRAPPER: DOMHelpers.createElement('div', ['table-row-wrapper']),
        };
    }

    private appendElements(): void {
        DOMHelpers.appendChildToElement(document.body, this.MAIN_ELEMENTS.WRAPPER);
        DOMHelpers.appendChildToElement(this.MAIN_ELEMENTS.WRAPPER, this.MAIN_ELEMENTS.NAVIGATION_CONTAINER);
        DOMHelpers.appendChildToElement(this.MAIN_ELEMENTS.NAVIGATION_CONTAINER, this.MAIN_ELEMENTS.GARAGE_BUTTON);
        DOMHelpers.appendChildToElement(this.MAIN_ELEMENTS.NAVIGATION_CONTAINER, this.MAIN_ELEMENTS.WINNERS_BUTTON);
        DOMHelpers.appendChildToElement(this.MAIN_ELEMENTS.WRAPPER, this.MAIN_ELEMENTS.GARAGE_CONTAINER);
        DOMHelpers.appendChildToElement(this.MAIN_ELEMENTS.WRAPPER, this.MAIN_ELEMENTS.WINNERS_CONTAINER);
        DOMHelpers.appendChildToElement(this.MAIN_ELEMENTS.GARAGE_CONTAINER, this.MAIN_ELEMENTS.RACE_WINNER_CONTAINER);
        DOMHelpers.appendChildToElement(this.MAIN_ELEMENTS.RACE_WINNER_CONTAINER, this.MAIN_ELEMENTS.WINNER_NAME);
        DOMHelpers.appendChildToElement(this.MAIN_ELEMENTS.GARAGE_CONTAINER, this.MAIN_ELEMENTS.GARAGE_TITLE);
        DOMHelpers.appendChildToElement(this.MAIN_ELEMENTS.GARAGE_CONTAINER, this.MAIN_ELEMENTS.GARAGE_PAGE_CONTAINER);
        DOMHelpers.appendChildToElement(this.MAIN_ELEMENTS.GARAGE_PAGE_CONTAINER, this.MAIN_ELEMENTS.GARAGE_PAGE);
        DOMHelpers.appendChildToElement(
            this.MAIN_ELEMENTS.GARAGE_PAGE_CONTAINER,
            this.MAIN_ELEMENTS.PAGINATION_PREV_BUTTON
        );
        DOMHelpers.appendChildToElement(
            this.MAIN_ELEMENTS.GARAGE_PAGE_CONTAINER,
            this.MAIN_ELEMENTS.PAGINATION_NEXT_BUTTON
        );
        DOMHelpers.appendChildToElement(this.MAIN_ELEMENTS.GARAGE_CONTAINER, this.MAIN_ELEMENTS.CARS_CONTAINER);
        DOMHelpers.appendChildToElement(this.MAIN_ELEMENTS.GARAGE_CONTAINER, this.MAIN_ELEMENTS.PAGINATION_CONTAINER);
        DOMHelpers.appendChildToElement(
            this.MAIN_ELEMENTS.NAVIGATION_CONTAINER,
            this.MAIN_ELEMENTS.GARAGE_BUTTONS_WRAPPER
        );
        DOMHelpers.appendChildToElement(this.MAIN_ELEMENTS.WINNERS_CONTAINER, this.MAIN_ELEMENTS.WINNERS_TITLE);
        DOMHelpers.appendChildToElement(this.MAIN_ELEMENTS.WINNERS_CONTAINER, this.MAIN_ELEMENTS.WINNERS_PAGE);
        DOMHelpers.appendChildToElement(this.MAIN_ELEMENTS.WINNERS_CONTAINER, this.MAIN_ELEMENTS.TABLE_WRAPPER);
        DOMHelpers.appendChildToElement(this.MAIN_ELEMENTS.TABLE_WRAPPER, this.MAIN_ELEMENTS.TABLE_ROW_HEADER);
        DOMHelpers.appendChildToElement(this.MAIN_ELEMENTS.TABLE_WRAPPER, this.MAIN_ELEMENTS.TABLE_ROW_WRAPPER);
        DOMHelpers.appendChildToElement(this.MAIN_ELEMENTS.TABLE_ROW_HEADER, this.MAIN_ELEMENTS.TABLE_CELL_NUMBER);
        DOMHelpers.appendChildToElement(this.MAIN_ELEMENTS.TABLE_ROW_HEADER, this.MAIN_ELEMENTS.TABLE_CELL_IMAGE);
        DOMHelpers.appendChildToElement(this.MAIN_ELEMENTS.TABLE_ROW_HEADER, this.MAIN_ELEMENTS.TABLE_CELL_NAME);
        DOMHelpers.appendChildToElement(this.MAIN_ELEMENTS.TABLE_ROW_HEADER, this.MAIN_ELEMENTS.TABLE_CELL_WINS);
        DOMHelpers.appendChildToElement(this.MAIN_ELEMENTS.TABLE_ROW_HEADER, this.MAIN_ELEMENTS.TABLE_CELL_BEST_TIME);
        DOMHelpers.appendChildToElement(this.MAIN_ELEMENTS.GARAGE_BUTTONS_WRAPPER, this.MAIN_ELEMENTS.CREATE_CONTAINER);
        DOMHelpers.appendChildToElement(this.MAIN_ELEMENTS.GARAGE_BUTTONS_WRAPPER, this.MAIN_ELEMENTS.UPDATE_CONTAINER);
        DOMHelpers.appendChildToElement(
            this.MAIN_ELEMENTS.GARAGE_BUTTONS_WRAPPER,
            this.MAIN_ELEMENTS.FEATURES_CONTAINER
        );
        DOMHelpers.appendChildToElement(this.MAIN_ELEMENTS.GARAGE_BUTTONS_WRAPPER, this.MAIN_ELEMENTS.ID_HOLDER);
        DOMHelpers.appendChildToElement(this.MAIN_ELEMENTS.CREATE_CONTAINER, this.MAIN_ELEMENTS.CREATE_CAR_INPUT);
        DOMHelpers.appendChildToElement(this.MAIN_ELEMENTS.CREATE_CONTAINER, this.MAIN_ELEMENTS.SET_CAR_COLOR);
        DOMHelpers.appendChildToElement(this.MAIN_ELEMENTS.CREATE_CONTAINER, this.MAIN_ELEMENTS.CREATE_CAR_BUTTON);
        DOMHelpers.appendChildToElement(this.MAIN_ELEMENTS.UPDATE_CONTAINER, this.MAIN_ELEMENTS.UPDATE_CAR_INPUT);
        DOMHelpers.appendChildToElement(this.MAIN_ELEMENTS.UPDATE_CONTAINER, this.MAIN_ELEMENTS.UPDATE_CAR_COLOR);
        DOMHelpers.appendChildToElement(this.MAIN_ELEMENTS.UPDATE_CONTAINER, this.MAIN_ELEMENTS.UPDATE_CAR_BUTTON);
        DOMHelpers.appendChildToElement(this.MAIN_ELEMENTS.FEATURES_CONTAINER, this.MAIN_ELEMENTS.RACE_BUTTON);
        DOMHelpers.appendChildToElement(this.MAIN_ELEMENTS.FEATURES_CONTAINER, this.MAIN_ELEMENTS.RESET_RACE_BUTTON);
        DOMHelpers.appendChildToElement(this.MAIN_ELEMENTS.FEATURES_CONTAINER, this.MAIN_ELEMENTS.GENERATE_CARS_BUTTON);
    }

    private setInputElements(): void {
        this.MAIN_ELEMENTS.CREATE_CAR_INPUT.setAttribute('type', 'text');
        this.MAIN_ELEMENTS.CREATE_CAR_INPUT.setAttribute('placeholder', 'New car name');
        this.MAIN_ELEMENTS.SET_CAR_COLOR.setAttribute('type', 'color');

        this.MAIN_ELEMENTS.UPDATE_CAR_INPUT.setAttribute('type', 'text');
        this.MAIN_ELEMENTS.UPDATE_CAR_INPUT.setAttribute('placeholder', 'Select car first to open');
        this.MAIN_ELEMENTS.UPDATE_CAR_COLOR.setAttribute('type', 'color');

        this.setInputElementsStatus(Constants.LOCK_INPUT_FIELDS);
    }

    private setInputElementsStatus(status: string): void {
        const array: HTMLElement[] = [
            this.MAIN_ELEMENTS.UPDATE_CAR_INPUT,
            this.MAIN_ELEMENTS.UPDATE_CAR_COLOR,
            this.MAIN_ELEMENTS.UPDATE_CAR_BUTTON,
        ];
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
        (this.MAIN_ELEMENTS.RESET_RACE_BUTTON as HTMLInputElement).disabled = true;
    }

    public updateNumberOfCarsInGarageTitle(numberOfCars: number): void {
        this.MAIN_ELEMENTS.GARAGE_TITLE.innerText = `Garage (${numberOfCars})`;
    }

    public updateGaragePageNumber(pageNumber: number): void {
        this.MAIN_ELEMENTS.GARAGE_PAGE.innerText = `Page #${pageNumber}`;
    }

    public updateWinnersTitle(numberOfWinners: number): void {
        this.MAIN_ELEMENTS.WINNERS_TITLE.innerText = `Winners (${numberOfWinners})`;
    }

    private handleCreateCarButtonClick = (): void => {
        const name = (this.MAIN_ELEMENTS.CREATE_CAR_INPUT as HTMLInputElement).value;
        const color = (this.MAIN_ELEMENTS.SET_CAR_COLOR as HTMLInputElement).value;
        if (name && color) {
            ReferenceFunctions.onCreateCarButtonClick(name, color);
            (this.MAIN_ELEMENTS.CREATE_CAR_INPUT as HTMLInputElement).value = '';
            (this.MAIN_ELEMENTS.SET_CAR_COLOR as HTMLInputElement).value = Constants.DEFAULT_COLOR_PICKER;
        }
    };

    private handleUpdateCarButtonClick = (): void => {
        const name = (this.MAIN_ELEMENTS.UPDATE_CAR_INPUT as HTMLInputElement).value;
        const color = (this.MAIN_ELEMENTS.UPDATE_CAR_COLOR as HTMLInputElement).value;
        const id = this.MAIN_ELEMENTS.ID_HOLDER.innerText;
        if (name && color) {
            ReferenceFunctions.onUpdateButtonClick(name, color, Number(id));
            this.setInputElementsStatus(Constants.LOCK_INPUT_FIELDS);
            (this.MAIN_ELEMENTS.UPDATE_CAR_INPUT as HTMLInputElement).value = '';
            (this.MAIN_ELEMENTS.UPDATE_CAR_COLOR as HTMLInputElement).value = Constants.DEFAULT_COLOR_PICKER;
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
            this.setButtonsStatus(DOMHelpers.getElements('.gen-cars-button'), true);
            this.setButtonsStatus(DOMHelpers.getElements('.create-button'), true);
            (this.MAIN_ELEMENTS.PAGINATION_NEXT_BUTTON as HTMLButtonElement).disabled = true;
            (this.MAIN_ELEMENTS.PAGINATION_PREV_BUTTON as HTMLButtonElement).disabled = true;
            (this.MAIN_ELEMENTS.RACE_BUTTON as HTMLButtonElement).disabled = true;
            ReferenceFunctions.onRaceButtonClick().then(() => {
                (this.MAIN_ELEMENTS.RESET_RACE_BUTTON as HTMLButtonElement).disabled = false;
            });
        }

        if ((target as HTMLElement).innerText.toLowerCase().includes(Constants.RESET_RACE_IDENTIFIER)) {
            (this.MAIN_ELEMENTS.RESET_RACE_BUTTON as HTMLButtonElement).disabled = true;
            const carIds: string[] = [];
            ReferenceFunctions.onResetButtonClick()
                .then(() => {
                    DOMHelpers.getElements('.car-wrapper').forEach((item) => {
                        carIds.push(item.classList[0].split('-')[1]);
                    });
                })
                .then(() => {
                    const promises = carIds.map((carId) => {
                        return ReferenceFunctions.onStopEngineButtonClick(Number(carId), Constants.ENGINE_STOP)
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
                    (this.MAIN_ELEMENTS.RACE_BUTTON as HTMLButtonElement).disabled = false;
                    this.setButtonsStatus(DOMHelpers.getElements('.select-button'), false);
                    this.setButtonsStatus(DOMHelpers.getElements('.remove-button'), false);
                    this.setButtonsStatus(DOMHelpers.getElements('.gen-cars-button'), false);
                    this.setButtonsStatus(DOMHelpers.getElements('.create-button'), false);
                    (this.MAIN_ELEMENTS.PAGINATION_NEXT_BUTTON as HTMLButtonElement).disabled = false;
                    (this.MAIN_ELEMENTS.PAGINATION_PREV_BUTTON as HTMLButtonElement).disabled = false;
                });
        }

        if ((target as HTMLElement).innerText.toLowerCase().includes(Constants.GENERATE_CARS_IDENTIFIER)) {
            ReferenceFunctions.onGenerateButtonClick();
        }
    };

    private handleCarSpecificButtons = (event: Event): void => {
        const { target } = event;

        if (Constants.EXCLUDED_ELEMENTS_FROM_DELEGATION.includes((target as HTMLElement).tagName.toLowerCase())) {
            return;
        }

        const id = (target as HTMLElement).classList[0].split('-')[1];

        if ((target as HTMLElement).innerText.toLowerCase().includes(Constants.START_ENGINE_IDENTIFIER)) {
            ReferenceFunctions.onStartEngineButtonClick(Number(id));
            (DOMHelpers.getElement(`.start-${id}`) as HTMLButtonElement).disabled = true;
            (DOMHelpers.getElement(`.stop-${id}`) as HTMLButtonElement).disabled = false;
        }

        if ((target as HTMLElement).innerText.toLowerCase().includes(Constants.STOP_ENGINE_IDENTIFIER)) {
            ReferenceFunctions.onStopEngineButtonClick(Number(id), Constants.ENGINE_STOP)
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
            ReferenceFunctions.onDeleteButtonClick(Number(id));
        }

        if ((target as HTMLElement).innerText.toLowerCase().includes(Constants.SELECT_BUTTON_IDENTIFIER)) {
            ReferenceFunctions.onReceiveExistingCarData(Number(id)).then((specificCar) => {
                (this.MAIN_ELEMENTS.UPDATE_CAR_INPUT as HTMLInputElement).value = specificCar.name;
                (this.MAIN_ELEMENTS.UPDATE_CAR_COLOR as HTMLInputElement).value = specificCar.color;
                this.MAIN_ELEMENTS.ID_HOLDER.innerText = specificCar.id.toString();
            });
            this.setInputElementsStatus(Constants.UNLOCK_INPUT_FIELDS);
        }
    };

    public renderCarsInGarage(cars: CarEntity[]): void {
        this.MAIN_ELEMENTS.CARS_CONTAINER.innerHTML = '';
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
            DOMHelpers.appendChildToElement(this.MAIN_ELEMENTS.CARS_CONTAINER, carDiv);
        });
    }

    public createWinnersTableMarkup(carN: number, name: string, wins: number, time: number): void {
        const row = DOMHelpers.createElement('div', ['car-row']);
        const carNumber = DOMHelpers.createElement('div', ['car-number', 'car-cell'], carN.toString());
        const carImage = DOMHelpers.createElement('div', ['car-image', 'car-cell'], 'none');
        const carName = DOMHelpers.createElement('div', ['car-name', 'car-cell'], name);
        const carWins = DOMHelpers.createElement('div', ['car-wins', 'car-cell'], wins.toString());
        const carTime = DOMHelpers.createElement(
            'div',
            ['car-time', 'car-cell'],
            `${(time / 1000).toFixed(2).toString()}s`
        );

        DOMHelpers.appendChildToElement(row, carNumber);
        DOMHelpers.appendChildToElement(row, carImage);
        DOMHelpers.appendChildToElement(row, carName);
        DOMHelpers.appendChildToElement(row, carWins);
        DOMHelpers.appendChildToElement(row, carTime);
        DOMHelpers.appendChildToElement(DOMHelpers.getElement('.table-row-wrapper'), row);
    }

    private handleToGarageButtonClick = (): void => {
        this.MAIN_ELEMENTS.WINNERS_CONTAINER.classList.add('disabled');
        this.MAIN_ELEMENTS.GARAGE_CONTAINER.classList.remove('disabled');
        DOMHelpers.getElement('.garage-buttons-wrapper').classList.remove('disabled');
    };

    private handleToWinnersButtonClick = (): void => {
        this.MAIN_ELEMENTS.GARAGE_CONTAINER.classList.add('disabled');
        this.MAIN_ELEMENTS.WINNERS_CONTAINER.classList.remove('disabled');
        DOMHelpers.getElement('.garage-buttons-wrapper').classList.add('disabled');
    };

    public setupDOMElementsAndEventHandlers(): void {
        this.appendElements();
        this.setInputElements();
        this.setFeaturesButtonsInitialState();
        this.MAIN_ELEMENTS.CREATE_CAR_BUTTON.addEventListener('click', this.handleCreateCarButtonClick);
        this.MAIN_ELEMENTS.CARS_CONTAINER.addEventListener('click', this.handleCarSpecificButtons);
        this.MAIN_ELEMENTS.UPDATE_CAR_BUTTON.addEventListener('click', this.handleUpdateCarButtonClick);
        this.MAIN_ELEMENTS.PAGINATION_PREV_BUTTON.addEventListener('click', ReferenceFunctions.onPrevButtonClick);
        this.MAIN_ELEMENTS.PAGINATION_NEXT_BUTTON.addEventListener('click', ReferenceFunctions.onNextButtonClick);
        this.MAIN_ELEMENTS.FEATURES_CONTAINER.addEventListener('click', this.handleFeatureButtons);
        this.MAIN_ELEMENTS.GARAGE_BUTTON.addEventListener('click', this.handleToGarageButtonClick);
        this.MAIN_ELEMENTS.WINNERS_BUTTON.addEventListener('click', this.handleToWinnersButtonClick);
    }
}

export default MainView;
