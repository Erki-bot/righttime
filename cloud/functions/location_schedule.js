Parse.Cloud.define ("location_schedule",(req)=>{
    const company = req.params.company;
  if (!company){
    throw("missing company name")
  }
})