// eslint-disable-next-line import/prefer-default-export
export async function fetchNumberOfCarsInGarage(): Promise<number> {
    const response = await fetch('http://127.0.0.1:3000/garage');
    const data: number[] = await response.json();
    return data.length;
}
