Parse.Cloud.define("serviceGetAll",async (req)=>{
  const company = req.params.company;
  if (!company){
    throw("missing company name")
  }
    //console.clear()
    const query = new Parse.Query(company+"_Service");
    // const res =  await query.find()
    query.include("category")
    /*
    const serviceList = res.map(async (s)=>{
    //   let returnValue = s.attributes
     let returnValue = s;
      const category = returnValue.attributes.category;
      let categoryName = null;

      try {
        let categoryId = category.id;
        const query2 = new Parse.Query('Category');
        await query2.get(categoryId)
        .then((cat) => {
          categoryName = cat.get('name');
        })
      }
     catch{
      
     }   
     returnValue = {...returnValue,"categoryName" : categoryName};
     // returnValue = {categoryName : categoryName,name : "erki"}
      console.log(returnValue)

      return returnValue;
    })

    console.clear()
     console.log("Liste des services : ")
    console.log(serviceList);
    */    
    return await query.find();
})