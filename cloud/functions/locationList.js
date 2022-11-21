Parse.Cloud.define ("locationList",(req)=>{
    const company = req.params.company;
  if (!company){
    throw("missing company name")
  }
})
