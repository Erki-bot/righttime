Parse.Cloud.define ("appointmentUpdate",(req)=>{
    const company = req.params.company;
  if (!company){
    throw("missing company name")
  }
})
