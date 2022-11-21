Parse.Cloud.define ("statsAgent_status",(req)=>{
    const company = req.params.company;
  if (!company){
    throw("missing company name")
  }
})
