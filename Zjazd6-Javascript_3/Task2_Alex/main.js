const filterName = (name, index) => {
    let length = name.length;
    let newName1 = name.slice(0, index)
    let newName2 = name.slice(index+1, length);
    return newName1 + newName2;
};

console.log(filterName('Sonia', 3));

//Second version

const filter = (name1, index1) => {
    const nameArray = name1.split('');
    nameArray.splice(index1, 1);
    return nameArray.join('');

};
console.log(filter('Sonia', 3));