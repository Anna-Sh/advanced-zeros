function getPrimesList( n ) {
    const sqrt = Math.sqrt(n);
    let currentValue = n;
    let multiplier = 2;

    const result = [];

    while (currentValue > 1 && multiplier <= sqrt) {
        if (currentValue % multiplier === 0)
        {
            result.push(multiplier);
            currentValue /= multiplier;
        }
        else if (multiplier === 2)
        {
            multiplier++;
        }
        else
        {
            multiplier += 2;
        }
    }

    if (currentValue !== 1) {
        result.push(currentValue);
    }

    return result.reduce( (accumulator, element) => {

        const existing = accumulator.find( ( el ) => el.number === element );

        if (existing) {
            existing.exp++;
        } else {
            accumulator.push({
                number: element,
                exp: 1
            });
        }

        return accumulator

    }, []);
}

module.exports = function getZerosCount(number, base) {

    let result = null;

    const basePrimes = getPrimesList(base);

    for (let prime of basePrimes) {

        let k = 0;

        for (let i = prime.number; i <= number; i *= prime.number) {
            k += Math.floor(number / i);
        }

        k = Math.floor( k / prime.exp );

        if (!result || k < result) {
            result = k;
        }

    }
    return result;
};



