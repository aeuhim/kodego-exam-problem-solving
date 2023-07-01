function longestDynasty(dynastyReign) {
    if (!Object.keys(dynastyReign)?.length) {
        return "No Data"
    }

    let startYear = 1000
    let longest = Number.MIN_VALUE
    let result = null

    for (const key of Object.keys(dynastyReign)) {
        if (convertYear(dynastyReign[key]) === "Invalid") {
            continue
        }

        if (convertYear(dynastyReign[key]) - startYear > longest) {
            longest = convertYear(dynastyReign[key]) - startYear
            result = key
        }

        startYear = convertYear(dynastyReign[key])
    }

    return result
}

function convertYear(year) {
    const regex = new RegExp(/^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/);

    if (!regex.test(year) == true) {
        return "Invalid"
    }

    decimalValue = (romanNumeral) => {
        if (romanNumeral == 'I') {
            return 1
        }

        if (romanNumeral == 'V') {
            return 5
        }

        if (romanNumeral == 'X') {
            return 10
        }

        if (romanNumeral == 'L') {
            return 50
        }

        if (romanNumeral == 'C') {
            return 100
        }

        if (romanNumeral == 'D') {
            return 500
        }

        if (romanNumeral == 'M') {
            return 1000
        }
    }

    let result = 0

    for (let idx = 0; idx < year.length; idx++) {
        const current = decimalValue(year.charAt(idx))

        if (idx + 1 >= year.length) {
            result += current
            break
        }

        const offset = decimalValue(year.charAt(idx + 1))

        if (current >= offset) {
            result += current
            continue
        }

        result += offset - current
        idx++
    }

    return result
}

const dynastyReign = { "San Dynasty": "MXLI", "Villoria Dynasty": "MCCCIIII", "Tan Dynasty": "MCCCXCVIII", "Bon Dynasty": "MCDXLV", "Maiko Dynasty": "MDCLXIV", "Paul Dynasty": "MCMXLIX", "Andre Dynasty": "MMMXICX" }
console.log(longestDynasty(dynastyReign))