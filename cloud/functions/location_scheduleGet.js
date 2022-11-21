Parse.Cloud.define ("locationScheduleGet",(req)=>{
    const company = req.params.company;
  if (!company){
    throw("missing company name")
  }
})