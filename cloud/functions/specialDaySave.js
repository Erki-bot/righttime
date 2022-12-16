Parse.Cloud.define("specialDaySave",async (req) => {
    const company = req.params.company;
    if (!company) {
        throw("missing company name")
    }
    const day = req.params.day;
    const className = company + "_SpecialDay";
    const sd = new Parse.Object(className);
    const query = new Parse.Query(className);
    query.equalTo("name",day.name);

    const sp = await query.find();
    if( sp.length !== 0){
        throw ("this name is already took by another special day");
    }
    return await sd.save(day);
})