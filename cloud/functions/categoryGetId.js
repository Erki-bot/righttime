Parse.Cloud.define("categoryGetId",(req)=>{
    const company = req.params.company;
    if (!company){
      throw("missing company name")
    }
})