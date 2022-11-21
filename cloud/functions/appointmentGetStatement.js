Parse.Cloud.define ("appointmentGetStatement",(req)=>{
    const company = req.params.company;
  if (!company){
    throw("missing company name")
  }
})
