Parse.Cloud.define ("breakTagGetAll",(req)=>{
    const company = req.params.company;
  if (!company){
    throw("missing company name")
  }
})