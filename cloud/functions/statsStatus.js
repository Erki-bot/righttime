Parse.Cloud.define ("statsStatus",(req)=>{
    const company = req.params.company;
  if (!company){
    throw("missing company name")
  }
})
