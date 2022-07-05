function fizzBuzz(val) {
    const words = []
    if (val % 2 === 0) words.push('fizz')
    if (val % 3 === 0) words.push('buzz');    
    return words.join('');
}

export default fizzBuzz;