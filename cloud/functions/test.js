const { query } = require("express");

Parse.Cloud.define("test",(req,res)=>{
    //console.log(req.params);
    const Student = Parse.Object.extend("Eleve");
const erki = new Student();
erki.set("nom" ,req.params.username);
erki.set("prenom",req.params.password);
//Enregistrement
erki.save().then((erki)=>{
  console.log("Un nouvel élève ajouté avec l'ID : "+erki.id);
},(error)=>{
  console.error("Echec de vréation de l'objet. Code d'erreur : "+ error.message);
})
const query = new Parse.Query("Eleve")
query.equalTo("nom",req.params.username)
//res.status(201).json(query.find())
return query.first();
});