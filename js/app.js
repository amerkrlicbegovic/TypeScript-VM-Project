//<reference path="-/coin.ts">
var vendingMachine = /** @class */ (function () {
    function vendingMachine() {
        var _this = this;
        this.paid = 0;
        this.acceptCoin = function (coin) {
            _this.paid = _this.paid + coin.Value;
            var element = document.getElementById("total");
            element.innerHTML = _this.paid.toString();
        };
    }
    return vendingMachine;
}());
/// <reference path="vendingMachine.ts" />
var machine = new vendingMachine();
var Quater = /** @class */ (function () {
    function Quater() {
        this.value = .25;
    }
    Object.defineProperty(Quater.prototype, "Value", {
        get: function () {
            return this.value;
        },
        set: function (newValue) {
            this.value = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Quater.prototype.gerImageUrl = function () {
        return "img/Quarter.png";
    };
    return Quater;
}());
var coin = new Quater();
//# sourceMappingURL=app.js.map