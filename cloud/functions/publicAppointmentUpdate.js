Parse.Cloud.define ("publicAppointmentUpdate",(req)=>{
    const company = req.params.company;
  if (!company){
    throw("missing company name")
  }
})
