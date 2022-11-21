Parse.Cloud.define("scheduleSetDefaultSchedule",(req)=>{
    const company = req.params.company;
    if (!company){
      throw("missing company name")
    }
})