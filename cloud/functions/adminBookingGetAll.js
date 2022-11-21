Parse.Cloud.define ("adminBookingGetAll",(req)=>{
    const company = req.params.company;
  if (!company){
    throw("missing company name")
  }
})