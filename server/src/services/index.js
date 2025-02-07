"use strict";

module.exports = {
  getConfig: async (ctx) => {
    const config = strapi.config.get("plugin.location-data");
    ctx.send(config);
  },
};
