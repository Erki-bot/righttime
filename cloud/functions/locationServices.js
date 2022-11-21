Parse.Cloud.define ("locationService",(req)=>{
    const company = req.params.company;
  if (!company){
    throw("missing company name")
  }
})
