const shop = {
    name:'hashem Store',
    yearlyAmount:500000,
    monthlyIncome:70000,
    employe:'10 Person',
    product:{
        harpic:'750ML',
        Detol:'Cool',
        Veet:'50 Gm',
        MrBrasho:'250ml'
    }
}
// console.log(shop)
const myShop = JSON.stringify(shop)
console.log(myShop)

const convert = JSON.parse(myShop)
console.log(convert)