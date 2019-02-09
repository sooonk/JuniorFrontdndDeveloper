var obj1 = {
    prop1: 'prop1'
}
var obj2 = {
    prop2: 'prop2'
}
var obj3 = {
    prop3: 'prop3'
}

var combined = Object.assign({}, obj1, obj2, obj3);
console.log('combined', combined)