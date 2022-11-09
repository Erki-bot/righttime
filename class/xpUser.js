class XPUser extends Parse.User{
    constructor(p){
        super(p);
    }
}
Parse.Object.registerSubclass("_User",XPUser);
module.exports = XPUser;