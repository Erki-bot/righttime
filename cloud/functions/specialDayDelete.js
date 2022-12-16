Parse.Cloud.define("specialDayDelete",async (req) => {
    const company = req.params.company;
    if (!company) {
        throw("missing company name")
    }
    const className = company + '_SpecialDay'
    const id = req.params.id;
    const sd = await new Parse.Query(className).get(id);
    return await sd.destroy();
})