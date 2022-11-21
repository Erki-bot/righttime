Parse.Cloud.define("scheduleBufferSave",(req)=>{
    const company = req.params.company;
    if (!company){
      throw("missing company name")
    }
})