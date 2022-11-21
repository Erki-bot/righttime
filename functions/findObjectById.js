const findObjectById = async ({id,className,includeClass}) => {
    try {
        let query = null
        includeClass? query = new Parse.Query(className).include(includeClass) :  query = new Parse.Query(className);
        
   return (await query.get(id));
    } catch (error) {
        console.log(error)
    }
  }
  module.exports = findObjectById