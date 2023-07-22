import Constants from '../../utils/Constants';
import { WinnerData } from '../../types/Interfaces';
import DOMHelpers from '../../utils/DOMHelpers';

class WinnersModel {
    private numberOfWinners: number;

    constructor() {
        this.numberOfWinners = 0;
    }

    public async setNumberOfWinners(): Promise<void> {
        const response = await fetch(Constants.WINNERS_URL);
        const data: number[] = await response.json();
        this.numberOfWinners = data.length;
    }

    public getNumberOfWinners(): number {
        return this.numberOfWinners;
    }

    public async createWinner(id: number, wins: number, time: number): Promise<void> {
        const data = {
            id,
            wins,
            time,
        };
        console.log(data);
        const response = await fetch(Constants.WINNERS_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            console.log('Winner was added');
        } else {
            console.log('Error when trying to add winner');
        }
    }

    public async updateWinner(id: number, wins: number, time: number): Promise<void> {
        const data = {
            wins,
            time,
        };
        const response = await fetch(`${Constants.WINNERS_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (response.ok) {
            console.log('car was updated');
        } else {
            console.log('error when trying to update car');
        }
    }

    public async getWinners(): Promise<WinnerData[]> {
        const response = await fetch(Constants.WINNERS_URL);
        return response.json();
    }

    public async getSpecificWinner(id: number): Promise<WinnerData | null> {
        try {
            const response = await fetch(`${Constants.WINNERS_URL}/${id}`);

            if (response.ok) {
                console.log('winner found');
                return await response.json();
            }
            console.log('Winner not found');
            return null;
        } catch (error) {
            return null;
        }
    }

    public populateWinnerTable(name: string, wins: number, time: number): void {
        const row = DOMHelpers.createElement('div', ['car-row']);
        const carNumber = DOMHelpers.createElement(
            'div',
            ['car-number', 'car-cell'],
            this.getNumberOfWinners().toString()
        );
        const carImage = DOMHelpers.createElement('div', ['car-image', 'car-cell'], 'none');
        const carName = DOMHelpers.createElement('div', ['car-name', 'car-cell'], name);
        const carWins = DOMHelpers.createElement('div', ['car-wins', 'car-cell'], wins.toString());
        const carTime = DOMHelpers.createElement('div', ['car-wins', 'car-cell'], (time / 1000).toFixed(2).toString());

        DOMHelpers.appendChildToElement(row, carNumber);
        DOMHelpers.appendChildToElement(row, carImage);
        DOMHelpers.appendChildToElement(row, carName);
        DOMHelpers.appendChildToElement(row, carWins);
        DOMHelpers.appendChildToElement(row, carTime);
        DOMHelpers.appendChildToElement(DOMHelpers.getElement('.table-wrapper'), row);
    }

    public async init(): Promise<void> {
        await this.setNumberOfWinners();
    }
}

export default WinnersModel;
