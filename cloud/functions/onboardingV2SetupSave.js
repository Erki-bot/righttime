Parse.Cloud.define("onboardingV2SetupSave",(req)=>{
    const company = req.params.company;
  if (!company){
    throw("missing company name")
  }
})