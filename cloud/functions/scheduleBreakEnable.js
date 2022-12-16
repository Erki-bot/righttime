Parse.Cloud.define("scheduleBreakEnable",async (req) => {
    const company = req.params.company;
    if (!company) {
        throw("missing company name")
    }
    const bclassName = company + '_Break';
    const lclassName = company + '_Location';
    const day = req.params.day;
    const bId = req.params.breakId;
    const lId = req.params.locationId;
    const lQuery = new Parse.Query(lclassName);
    const bk = new Parse.Object(bclassName);
    bk.id = bId;
    const key = 'breakTime.'+day+'.disable';
    bk.set(key,false);
    await bk.save();
    lQuery.include('breaks');
    lQuery.include('services');
    return await lQuery.get(lId);
})