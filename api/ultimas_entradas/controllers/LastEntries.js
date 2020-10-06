const _ = require("lodash");
module.exports = {
  async index(ctx) {
    const stories = await strapi
      .query("historias")
      .find({ _limit: 10, _sort: "updated_at:desc" });
    const objects = await strapi
      .query("objetos")
      .find({ _limit: 10, _sort: "updated_at:desc" });
    const characters = await strapi
      .query("personajes")
      .find({ _limit: 10, _sort: "updated_at:desc" });

    const finalArray = _.orderBy(
      [...stories, ...objects, ...characters],
      ["updated_at"],
      ["desc"]
    );

    return _.slice(finalArray, 0, 8);
  },
};
