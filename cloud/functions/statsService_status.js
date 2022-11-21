Parse.Cloud.define ("statsService_status",(req)=>{
    const company = req.params.company;
  if (!company){
    throw("missing company name")
  }
})
