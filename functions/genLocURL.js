const formatString = require("./formatString");

async function genLocURL(company,businessLocationName)
{
    const className = company + '_Location'
    let url = formatString(company)+"."+formatString(businessLocationName||"")
    const query = new Parse.Query(className);
    query.equalTo("url",url);
    let locList = await query.find();
    while(locList.length !== 0){
        url = url + parseInt(Math.random()*1000);
        query.equalTo("url",url);
        locList = await query.find();
    }
    return url;
}
module.exports = genLocURL;