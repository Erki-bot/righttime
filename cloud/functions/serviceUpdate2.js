Parse.Cloud.define('serviceUpdate2',async (req) =>{
    const service =  new Parse.Object('Service');
    //Getting the service to update (store in 's')
    const s = req.params.service;
    //Getting the category of the service
    const catId = req.params.categoryId;
    service.id = s.id;
    console.clear();
    const cat = new Parse.Object("Category");
    if(catId){
        cat.id = catId; const service =  new Parse.Object('Service');
        service.set("category",cat);
        cat.remove("services",service)
    }
    else{
        service.set("category",null)
    }
    const newService = await service.save(s).catch(console.log);
   
    if(catId){
        const query = new Parse.Query("Category");
        query.include("services")
        const catList = await query.find();
        catList.forEach(async (c)=>{
           
            try {
                c.remove("services",newService)
                // const newCatServiceList =  c.attributes.services.filter(it=>
                //     it.id !== newService.id
                // )
                // c.set("services",newCatServiceList);
               await c.save()      
            } catch (error) {
                console.log(error)
            }})
        cat.addUnique('services',newService)
           await cat.save()
    }
   return newService
})