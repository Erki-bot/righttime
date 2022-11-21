Parse.Cloud.define ("locationSave",(req)=>{
    const company = req.params.company;
  if (!company){
    throw("missing company name")
  }
})
