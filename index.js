function getDivisorsCount(num) {
    if (Number.isInteger(num) && num > 0) {
        let count = 0;
        let i = 1
        while (i <= num) {
            if (num % i === 0) {
                count += 1
            }
            i++
        }
        return count
    } else {
       return alert(`${num} должен быть целым числом и больше нуля!`)
    }
}
console.log(getDivisorsCount(4))

