Parse.Cloud.define("scheduleCustumSave",(req)=>{
    const company = req.params.company;
    if (!company){
      throw("missing company name")
    }
})