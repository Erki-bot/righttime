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
async function test(){

    /**const id = '4u8A6wBClk';
     * const test = new Parse.Object('TestCat');
     const erki = {a : "a", b :"b", c : "c"};
     test.addUnique('erki',erki);
     test.save().then(console.log).catch(console.log);
     const query = await new Parse.Query('erkitech_Location').get(id)
     //.then(e => console.log(e.attributes))
     const key = 'Saaaaaaaaaaa.kefdi.lskd'
     query.set(key,'test');
     query.save()
     .then(e => console.log(e.attributes))
     * const todo = new Parse.Object("Todo");
     todo.set("task.name","KIKI");
     todo.set("task.isStarted",true);
     todo.set("task.isEnded",false);
     todo.save().then(console.log)
     * const dropClass = require("./dropClass");
     *     dropClass("erkitech_Break");
     */

    /*const query = new Parse.Query('Parent');
    query.include("child")

    const id = 'VKLUUTdUjg';
    const id = '4u8A6wBClk';
    const catTest = new Parse.Object("TestCat");
    catTest.id = id;
    query.equalTo('child',catTest);
    query.find().t
    const catTest = new Parse.Object("TestCat");
    const parent = new Parse.Object("Parent");
    catTest.set("nom","nom");
    catTest.save().then(console.log)
    parent.set('child',catTest);
    parent.save().then(console.log)
 const dropClass = require("./dropClass")
    dropClass("erkitech_Schedule")
    const p = new Parse.Object("Blabla")
    const r = await p.save({'name': 'kiki'})
    console.log(r.attributes.name);
     */


}
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