class Car {
    #mark;
    #model;
    #mileage;
    constructor(mark, model, mileage) {
        this.#mark = mark
        this.#model = model
        this.#mileage = mileage
    }
    //Изменить пробег
    set mileage(mileage) {
        this.#mileage = mileage
    }
    //Получить пробег(Не понял по заданию, нужно это было делать или нет)
    get mileage() {
        return this.#mileage
    }
    info () {
        console.log(`Марка:${this.#mark}, Модель:${this.#model}, Пробег:${this.#mileage} км.`);
    }
}