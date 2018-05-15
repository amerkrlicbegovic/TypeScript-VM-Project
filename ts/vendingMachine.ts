//<reference path="-/coin.ts">

class vendingMachine {
    private paid = 0;
    acceptCoin = ( coin: Quater): void => {
        this.paid = this.paid + coin.Value
        var element = document.getElementById("total")
        element.innerHTML = this.paid.toString();
    }
}