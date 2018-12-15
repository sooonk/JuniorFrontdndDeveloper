// let names = ['Ania', 'Ewelina', 'Karina', 'Elina'];
// names.push('Andromeda');
// names.push('Natasha');
//
// let startIndex = names.indexOf('Ewelina'); console.warn(`should be ${1} and get `, startIndex);
// startIndex += 2;
//
// let newNames = names.slice(startIndex, names.indexOf('Natasha'));
// console.warn('should be Elina and Andromeda', newNames);
// newNames.unshift('Shepard');
//
// console.log(names, newNames, newNames[1] === names[3]);

let numbers = [];

for(let i = 0; i <= 35; i++) {
    numbers.push(i);
}

for(let i = 0; i <= numbers.length; i++) {
    if(i <= 15) {
        console.log(i);
    }

    if(i >= 15 && i <=25) {
        console.log('continue');
        continue;
    }

    if (i > 25 && i % 2 === 0) {
        console.warn(i);
    }

    if(i === 31) {
        console.log('break');
        break;
    }

    console.log('Iteration ', i);
}