Parse.Cloud.define ("onboardingSetupSave",(req)=>{
    const company = req.params.company;
  if (!company){
    throw("missing company name")
  }
})