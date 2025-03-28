//Generic Classes
var Box = /** @class */ (function () {
    function Box(value) {
        this.value = value;
    }
    Box.prototype.getValue = function () {
        return this.value;
    };
    return Box;
}());
// Usage
var numberBox = new Box(42); // 'T' is inferred as 'number'
var stringBox = new Box("hello"); // 'T' is inferred as 'string'
var numValue = numberBox.getValue();
var strValue = stringBox.getValue();
