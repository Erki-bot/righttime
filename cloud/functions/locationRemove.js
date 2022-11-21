Parse.Cloud.define ("locationRemove",(req)=>{
    const company = req.params.company;
  if (!company){
    throw("missing company name")
  }
})
