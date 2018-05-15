class Quater {
    private value: number = .25;
    get Value(){
        return this.value;
    }
    set Value(newValue: number){
        this.value = newValue;
    }
    gerImageUrl (): string {
        return "img/Quarter.png"
    }
}

var coin = new Quater();
