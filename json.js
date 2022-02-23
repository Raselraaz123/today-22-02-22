console.log('rasel')

const shop = {
    name: 'ro store',
    stablic: 1993,
    emply: 40,
    prod: ['tv', 'phone', 'fan', 'ac']
}


const shopFlide=JSON.stringify(shop)
console.log(shopFlide)
const convert=JSON.parse(shopFlide)
console.log(convert.prod)

const friend = {
    name1: 'mamun1',
    name2: 'mamun22',
    name3: 'mamun33',
    name4: {
        mama: 'nojrol',
        mama2: 'mashod',
        mama3:'jafor'

    },
    name5: 'mamun44',
    name6: 'mamun66',
    name7: ['jamal','kamal','shohel','jakir'],
  

}
const constringify = JSON.stringify(friend);
console.log(constringify)
const retur = JSON.parse(constringify)
console.log(retur);
console.log('Roman office a gasa')