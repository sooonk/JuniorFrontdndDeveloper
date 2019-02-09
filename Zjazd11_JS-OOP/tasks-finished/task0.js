console.log(this);

function logThis() {
    console.log(this);
}
var testObj = {};
logThis()

testObj.logThis = logThis;
testObj.logThis();