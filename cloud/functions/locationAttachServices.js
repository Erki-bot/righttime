const affiche =require( '../../functions/affiche')
Parse.Cloud.define ("locationAttachServices",async (req) => {
  const company = req.params.company;
  if (!company) {
    throw("missing company name")
  }
  const locClassName = company + '_Location';
  const serClassName = company + '_Service';
  const locationId = req.params.locationId;
  const serviceIDList = req.params.serviceList;

  let query = new Parse.Query(locClassName);
  //Récupérer la location
  let location = await query.get(locationId);
  for (const sid of serviceIDList) {
    /**
     * Cette méthode crée un nouveau service lors de location.addUnique(). Ce que qui n'est pas normal
     *  const service = new Parse.Object(serClassName);
     *     service.id = s.id;
     *      const sq = new Parse.Query(serClassName);
     *     try
     *     {
     *       const service = await sq.get(s.id);
     *
     *     }catch (e) {
     *
     *     }
     */
    const service = new Parse.Object(serClassName);
    service.id = sid;
    affiche(5,sid);
    location.addUnique('services', service);
  }
  return await location.save()

})
