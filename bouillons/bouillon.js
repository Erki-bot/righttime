async function getServiceList (){
    const query = new Parse.Query("Service");
    const res = await query.find()
    const serviceList = res
    .map(async (s)=>{
      let returnValue = s.attributes
      const category = returnValue.category;
      let categoryName = null;
  
      try {
        categoryId = category.id;
        const query2 = new Parse.Query('Category');
        await query2.get(categoryId)
        .then((cat) => {
          categoryName = cat.get('name');
        })
      }
     catch{
      
     }   
      returnValue = {...returnValue,categoryName : categoryName}
      console.log(returnValue)
    })
  }
  //rtStore.dispatch(rtActions.getOnb("no"))