Parse.Cloud.define ("locationAvailabilitySave",async (req) => {
    const company = req.params.company;
    if (!company) {
        throw("missing company name")
    }
    const className = company+'_Location';
    const day = req.params.day;
    const state = req.params.state;
    const startTime = req.params.startTime;
    const endTime = req.params.endTime;
    const locationId = req.params.locationId;
    const location = new Parse.Object (className);
    location.id = locationId;
   // const location = await new Parse.Query (className).get(locationId);
    const query = await new Parse.Query (className)


    try{
        let stateKey = 'availability.'+day+'.isWorkDay';
        location.set(stateKey,state);
    }
    catch (e) {
        
    }
    if (startTime){
        let stateKey = 'availability.'+day+'.startTime';
        location.set(stateKey,startTime);
    }
    if (endTime){
        let stateKey = 'availability.'+day+'.endTime';
        location.set(stateKey,endTime);
    }

     await location.save();
    return await query.get(locationId);
    //return  location
})
