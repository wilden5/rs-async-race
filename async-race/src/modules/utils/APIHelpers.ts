export async function fetchNumberOfCarsInGarage(): Promise<number> {
    const response = await fetch('http://127.0.0.1:3000/garage');
    const data: number[] = await response.json();
    return data.length;
}

export async function fetchNumberOfWinners(): Promise<number> {
    const response = await fetch('http://127.0.0.1:3000/winners');
    const data: number[] = await response.json();
    return data.length;
}
