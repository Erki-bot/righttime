Parse.Cloud.define("scheduleSave",(req)=>{
    const company = req.params.company;
    if (!company){
      throw("missing company name")
    }
    const schedule = new Parse.Object(company+"_Schedule");
    schedule.save(req.params)
})