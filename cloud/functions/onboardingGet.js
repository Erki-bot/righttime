Parse.Cloud.define('onboardingGet',(req)=>{
    const company = req.params.company;
  if (!company){
    throw("missing company name")
  }
})
