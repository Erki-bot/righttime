Parse.Cloud.define ("locationAttach_created_services",(req)=>{
    const company = req.params.company;
  if (!company){
    throw("missing company name")
  }
})
