Parse.Cloud.define("serviceGetName",(req)=>{
    const company = req.params.company;
    if (!company){
      throw("missing company name")
    }
})