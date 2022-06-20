
//export const bigNums = (a) => parseInt(a.join('').replace(/\$|,/g, ''),10)

export const bigNums = (a) => parseFloat(a.join('').replace(/\$|,/g, ''),10)