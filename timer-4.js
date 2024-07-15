function timer() {
    const newУear = new Date(`01-01-${new Date().getFullYear() + 1}, 00:00:00`)
    const date = new Date();
    const gap = newУear - date
    const month =  Math.floor(gap / 1000/60/60/24/30.425)
    const day =  Math.trunc((gap / 1000/60/60/24) - ((30.425 * month)))
    const hour = Math.floor(gap / 1000/60/60 % 24)
    const minuts = Math.floor(gap / 1000/60 % 60)
    const second = Math.floor(gap / 1000 % 60)
    document.querySelector('.timer').innerHTML = 
    `До нового года осталось: ${month} месяцев ${day} дня ${hour} часа ${minuts} минут ${second} секунд`
}
const time = setInterval(()=>{
    timer()
},1000)

// Попробовал сделать еще такой вариант
function timer() {
    const newУear = new Date(`01-01-${new Date().getFullYear() + 1}, 00:00:00`)
    const date = new Date();
    const gap = newУear - date
    //Текущей дате присваиваю начало месяца
    const startDate = new Date().setDate(1)
    //Проверяю сколько дней в месяце и вычитаю последний день месяца (28,29,30 или 31 число) из текущего дня, получаю остаток дней.
    let day;
    if (new Date(startDate + 1000*60*60*24*31).getDate() > 27) {
        day = new Date(startDate + 1000*60*60*24*31).getDate() - date.getDate()
    } else if (new Date(startDate + 1000*60*60*24*30).getDate() > 27) {
        day = new Date(startDate + 1000*60*60*24*30).getDate() - date.getDate()
    } else if (new Date(startDate + 1000*60*60*24*29).getDate() > 27) {
        day = new Date(startDate + 1000*60*60*24*29).getDate() - date.getDate()
    } else {
        day = new Date(startDate + 1000*60*60*24*28).getDate() - date.getDate()
    }
    const month = 12 - date.getMonth() - 1
    const hour = Math.floor(gap / 1000/60/60 % 24)
    const minuts = Math.floor(gap / 1000/60 % 60)
    const second = Math.floor(gap / 1000 % 60)
    document.querySelector('.timer').innerHTML = 
    `До нового года осталось: ${month} месяцев ${day} дня ${hour} часа ${minuts} минут ${second} секунд`
}
const time = setInterval(()=>{
    timer()
},1000)
