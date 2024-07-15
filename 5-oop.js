/* Возможно данное задание по ошибке находится в этом блоке, так как наследование будет раскрыто только через несколько тем,
сделал как смог на данный момент */

//Базовый класс персонажа 
const BaseClass = function(race, name, language) {
    this.race = race
    this.name = name
    this.language = language
}
BaseClass.prototype.speak = function() {
    console.log(`${this.name} ${this.language}`);
}
//Базовый класс персонажа 

//Доп. класс - ORC
const OrcClass = function(weapon,race, name, language) {
    BaseClass.call(this, race, name, language)
    this.weapon = weapon
}
OrcClass.prototype = Object.create(BaseClass.prototype)
OrcClass.prototype.hit = function() {
    console.log(`Удар!! Урон:${Math.floor(Math.random()*100)}`);
}
const оrc = new OrcClass('Меч','ORC','ORC_01','RU')
оrc.hit()
//Доп. класс - ORC

//Доп. класс - Эльф
const ElfClass = function(race, name, language) {
    BaseClass.call(this, race, name, language)
    this.spells = ['Огонь', 'Ветер', 'Вода']
}
ElfClass.prototype = Object.create(BaseClass.prototype)
ElfClass.prototype.caste = function(spellId) {
    if (this.spells[spellId-1]) {
        console.log(`Применено заклинание: ${this.spells[spellId-1]}. Урон:${Math.floor(Math.random()*100)} `);
    } else {
        console.log('Такого заклинания нет');
    }
}
const elf = new ElfClass('ELF','ELF_02','RU')
//Доп. класс - Эльф