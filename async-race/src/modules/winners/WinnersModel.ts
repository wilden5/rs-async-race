import Constants from '../../utils/Constants';

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

    public async init(): Promise<void> {
        await this.setNumberOfWinners();
    }
}

export default WinnersModel;
