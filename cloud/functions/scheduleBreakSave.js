Parse.Cloud.define("scheduleBreakSave",async (req) => {
    const company = req.params.company;
    if (!company) {
        throw("missing company name")
    }
    //{company : company, bk : newBreak, locationId : states.currentLocation.id}
    const bclassName = company + '_Break';
    const lclassName = company + '_Location';
    const bk = req.params.bk;
    const bkObject = await new Parse.Object(bclassName).save(bk);
    const location = new Parse.Object(lclassName);
    location.id = req.params.locationId;
    location.addUnique('breaks',bkObject);
    await location.save()
    return await new Parse.Query(lclassName).include('breaks').get(location.id);
        })