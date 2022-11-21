Parse.Cloud.define ("adminBooking",(req)=>{
    const company = req.params.company;
  if (!company){
    throw("missing company name")
  }
})