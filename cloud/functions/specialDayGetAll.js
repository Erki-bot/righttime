Parse.Cloud.define("specialDayGetAll",(req)=>{
    const company = req.params.company;
    if (!company){
      throw("missing company name")
    }
})