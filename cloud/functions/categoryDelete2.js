Parse.Cloud.define("categoryDelete",async (req) =>{
    const company = req.params.company;
    if (!company){
      throw("missing company name")
    }
    const  cat = new Parse.Object("Category");
    cat.id = req.params.id;;
   //cat.save();
    
      return await cat.destroy();;
  })