Parse.Cloud.define ("locationRemove",async (req)=>{
    const company = req.params.company;
  if (!company){
    throw("missing company name")
  }
  const location = new Parse.Object (company+"_Location")
    location.id = req.params.id;
  return await location.destroy()
})
