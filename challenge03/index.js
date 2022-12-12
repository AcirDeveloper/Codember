import fs from 'fs-extra'

const colors = fs.readFileSync('./colors.txt')
const colorsArr = eval(colors.toString())

function getZebrasCount(colors) {
    let maxZebraCount = 0
    let maxZebraColor = ''

    let lastColor = ''
    let nextColor = colors[0]
    let currentZebraCount = 1

    colors.forEach((currentColor) => {
        if (currentColor !== nextColor || lastColor === currentColor) {
            currentZebraCount = 1 // reseto el contador
        }
        currentZebraCount++
        nextColor = lastColor
        lastColor = currentColor
        if (currentZebraCount > maxZebraCount) {
            maxZebraCount = currentZebraCount
            maxZebraColor = lastColor
        }
    })

    return {
        maxZebraColor,
        maxZebraCount,
    }
}

console.time('challenge03')
const solution = getZebrasCount(colorsArr)
console.log(`submit ${solution.maxZebraCount}@${solution.maxZebraColor}`)
console.timeEnd('challenge03')
