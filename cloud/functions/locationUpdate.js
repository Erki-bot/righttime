Parse.Cloud.define ("locationUpdate",(req)=>{
    const company = req.params.company;
  if (!company){
    throw("missing company name")
  }
})
