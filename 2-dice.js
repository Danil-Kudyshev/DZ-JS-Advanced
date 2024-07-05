function castDice(dice) {
    return Math.ceil(Math.random() * Number(dice.replace('D','')))
}