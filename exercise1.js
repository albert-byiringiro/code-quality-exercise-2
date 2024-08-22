const calculateAverage = (numbers) => {
    const sum = numbers.reduce((sum, number) => sum += number, 0);
    const count = numbers.length;
    const average = sum / count;

    return average;
}