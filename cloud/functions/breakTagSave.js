
Parse.Cloud.define ("breakTagSave",async (req)=>{
    const company = req.params.company;
  if (!company){
    throw("missing company name")
  }
  const className = company+'_Tag'
  const tg = req.params.tag;
  const tag = new Parse.Object(className);
  return await tag.save(tg);
})
