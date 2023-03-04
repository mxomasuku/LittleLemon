const ages = [3, 2, 21, 445, 546, 646, 6]

const companies = [{name: 'PICH', category: 'Media', start: '2019', end: 2026},
    {name: 'Indulgence', category: 'Retail', start: '2021', end: 2026},
    {name: 'reDezign', category: 'Retail', start: '2023', end: 2050},
    {name: 'LawFirm', category: 'Service', start: '2023', end: 2050},]

// companies.forEach((company)=>{
//     console.log(company)
// })

const services = companies.map((company)=> {
    return company.category
})

console.log(services)
// let canDrink = [] 
// for(i=0; i < ages.length; i++){
//     if(ages[i] > 21){
//         canDrink.push(ages[i])
//     }
// }



const canDrink = ages.filter((age)=>{
    if(age < 21){
        return true
    }

})

console.log(canDrink)