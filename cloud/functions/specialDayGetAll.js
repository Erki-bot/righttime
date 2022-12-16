Parse.Cloud.define("specialDayGetAll",async (req) => {
    const company = req.params.company;
    if (!company) {
        throw("missing company name")
    }
    const className = company + "_SpecialDay";
    const query = await new Parse.Query(className).find();
    return query.map((sd) => {
        return {...sd.attributes, id: sd.id}
    });
})