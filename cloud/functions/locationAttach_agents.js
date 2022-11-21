Parse.Cloud.define ("locationAttach_agents",(req)=>{
    const company = req.params.company;
  if (!company){
    throw("missing company name")
  }
})
