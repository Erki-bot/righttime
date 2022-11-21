const findObjectById = require("./findObjectById")

async function  test2 () {
    const sId = "g8CvoYVGe4";
const id = "HcUGmt6iFw"
const parent = await findObjectById({id : id, className : "Category",includeClass :"services"});
const services = parent.attributes.services
// let cat = new Parse.Object("Category");
let newCatServices = []
services.forEach(s => {
    if (s.id !== sId){
        newCatServices.push(s)
    }
    
});
console.log(services.length);
// parent.set("services",newCatServices);
// parent.save().then(console.log).catch(console.log)
//

//  const relation = parent.relation("services")
// const query = relation.query()
// query.equalTo("id","g8CvoYVGe4")
// query.find().then(console.log).catch(console.log)
// let categories = []
// cats.forEach(element => {
//     categories.push(element)
// });
//console.log(categories)

}
async function test(){}
async function test2(){
    const query = new Parse.Query("Parent")
    const x = await query.get("iT6wnbsD7U")
    console.log(x.attributes)
    const cat = new Parse.Object("Category")
    cat.id = "g5seonEQki";

   x.remove("category2",cat)
   x.save().then(console.log("#############################")).catch(console.log)
}
async function test4(){
    const query = new Parse.Query("Category");
    query.include("services")
    const cats = await query.first()
    const y = cats.attributes.services
    let x =  y.filter(s=>
        s.id === '6VNuMiV4pG'
    )
    console.log(x)
}
module.exports = test