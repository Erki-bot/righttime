Parse.Cloud.define ("appointmentGetAllUser",(req)=>{
    const company = req.params.company;
  if (!company){
    throw("missing company name")
  }
})
