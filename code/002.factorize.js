function factorize(v) {
    const factors = [...Array(v + 1).keys()];
    
    for (let i = 2; i < v + 1; i++) {
        if (factors[i] == i) {
            for (let j = i * i; j <= v; j += i) {
                factors[j] = i
            }
        }        
    }

    const result = []

    while (v > 1) {
        result.push(factors[v])
        v /= factors[v]
    }

    result.sort((a,b) => a - b);
    return result;
}

export default factorize;
