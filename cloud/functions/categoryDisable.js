Parse.Cloud.define("categoryDisable",(req)=>{
    const company = req.params.company;
    if (!company){
      throw("missing company name")
    }
})