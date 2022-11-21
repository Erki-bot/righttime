Parse.Cloud.define ("locationAgent",(req)=>{
    const company = req.params.company;
  if (!company){
    throw("missing company name")
  }
})
