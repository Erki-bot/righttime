Parse.Cloud.define("specialDaySave",(req)=>{
    const company = req.params.company;
    if (!company){
      throw("missing company name")
    }
})