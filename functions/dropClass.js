async function dropClass (className){
    const query = new Parse.Query(className);
await query.find().then((classe)=>{
    console.log(classe)
  Parse.Object.destroyAll(classe)
  .then(() => {
    console.log("All objects of "+className+" are successfully delected")
    new Parse.Schema(className).delete()
    .then(console.log("Class "+className+" delected successfully"))
    .catch(console.log)
  })
  .catch(console.log)
})
}
module.exports = dropClass;