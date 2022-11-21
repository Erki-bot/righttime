Parse.Cloud.define("scheduleBreakGetAll",(req)=>{
    const company = req.params.company;
    if (!company){
      throw("missing company name")
    }
})