import { fetchNumberOfWinners } from '../utils/APIHelpers';

class WinnersModel {
    private numberOfWinners: number;

    constructor() {
        this.numberOfWinners = 0;
    }

    public async setNumberOfWinners(): Promise<void> {
        this.numberOfWinners = await fetchNumberOfWinners();
    }

    public getNumberOfWinners(): number {
        return this.numberOfWinners;
    }

    public async init(): Promise<void> {
        await this.setNumberOfWinners();
    }
}

export default WinnersModel;
