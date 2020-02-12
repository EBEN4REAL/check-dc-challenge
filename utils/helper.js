function naira (value) {
    value = value * 1000000 * 350
    value = value.toString().split('')
    const number = Math.floor(value.length / 3)
    for (i = 1; i <= number; i++) {
        const index = value.length - i - (i * 3) + 1
        if (index > 0) {
            value.splice(index, 0, ',')
        } 
    }
    return value.join('')
}

function sort (arr, sortby, order) {
    let newArray
    if (order === 'ascending') {
        newArray = arr.sort((a, b) => a[sortby] - b[sortby])
    } else if (order === 'descending') {
        newArray = arr.sort((a, b) => b[sortby] - a[sortby])
    } else {
        newArray = arr
    }
    newArray.forEach(cur => {
        cur.budgetInMillions = naira(cur.budgetInMillions)
        cur.boxOfficeRevenueInMillions = naira(cur.boxOfficeRevenueInMillions)
    })
    return newArray
}

function sortCharacters (arr, sortby, order) {
    return arr.sort(function(a, b) {
        var characterA = typeof a[sortby] === 'string' ? a[sortby].toUpperCase() : a[sortby]
        var characterB = typeof b[sortby] === 'string' ? b[sortby].toUpperCase() : b[sortby]
        if (characterA < characterB) {
            if (order === 'descending') {
                return 1
            }
            return -1
        }
        if (characterA > characterB) {
            if (order === 'descending') {
                return -1
            }
            return 1
        }

        return 0;
    })
}

module.exports = {
    sort,
    sortCharacters,
    naira
}