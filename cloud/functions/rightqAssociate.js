Parse.Cloud.define ("rightqAssociate",(req)=>{
    const company = req.params.company;
  if (!company){
    throw("missing company name")
  }
})
