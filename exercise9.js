const calculateSumOfMatrix = (matrix) => {
    let flattenMatrix = matrix.flat(Infinity);
    return flattenMatrix.reduce((sum, number) => sum += number, 0);
}