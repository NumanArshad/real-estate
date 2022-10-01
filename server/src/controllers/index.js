/**
 * Created by Mb
 */

module.exports = {
  auth: require("./auth.controller"),
  user: require("./admin/users.controller"),
  properties: require("./admin/properties.controller"),
  blogs: require("./admin/blogs.controller"),
  towns: require("./admin/towns.controller"),
  maps: require("./admin/map.controller"),
  contactUs: require("./admin/contact.us.controller")
};
