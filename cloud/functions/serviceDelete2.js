Parse.Cloud.define("serviceDelete",async (req)=>{
    const service =  new Parse.Object('Service');
    service.id = req.params.id;
    return await service.destroy();
})