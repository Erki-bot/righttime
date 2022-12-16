Parse.Cloud.define("accountSave",async (req) => {
    const company = req.params.company;
    if (!company) {
        throw("missing company name")
    }
    const sch = req.params.schedule;
    //delete sch.id;
    try{
        const query = new Parse.Query(company+'_Account')
        const sd = await query.first()
        return await sd.save(sch)
    }catch (e){
        const schedule = new Parse.Object(company + "_Account");
        return await schedule.save(sch);
    }
})