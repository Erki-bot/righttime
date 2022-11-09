Parse.Cloud.define('serviceUpdate',async (req) =>{
    const service =  new Parse.Object('Service');
    service.id = req.params.id;
   return await service.save(req.params);
})