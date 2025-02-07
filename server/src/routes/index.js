// custom route to expose the values in config/plugins.js to the front end
module.exports = {
  "admin": {
    type: "admin",
    routes: [
      {
        method: "GET",
        path: "/config",
        handler: "plugin::location-data.location-data.configController",
        config: {
          policies: ["admin::isAuthenticatedAdmin"],
        },
      },
    ],
  },
};
