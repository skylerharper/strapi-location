module.exports = {
    configController: async (ctx) => {
        const config = strapi.config.get("plugin.location-data");
        ctx.send(config);
      },
};