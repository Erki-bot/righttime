Parse.Cloud.define ("publicAccountXpusersList",(req)=>{
    const company = req.params.company;
  if (!company){
    throw("missing company name")
  }
})
