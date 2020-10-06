const _ = require("lodash");
module.exports = {
    async index(ctx) {
        const limit = ctx.query.limit ? ctx.query.limit : '8'
        const stories = await strapi
            .query("historias")
            .find({ _limit: 10, _sort: "updated_at:desc" });
        const storiesConId = stories.map(story => ({ ...story, tipo: 'historias' }))
        const objects = await strapi
            .query("objetos")
            .find({ _limit: 10, _sort: "updated_at:desc" });
        const objectsConId = objects.map(object => ({ ...object, tipo: 'objetos' }))
        const characters = await strapi
            .query("personajes")
            .find({ _limit: 10, _sort: "updated_at:desc" });
        const charactersConId = characters.map(character => ({ ...character, tipo: 'personajes' }))
        const finalArray = _.orderBy(
            [...storiesConId, ...objectsConId, ...charactersConId],
            ["updated_at"],
            ["desc"]
        );
        return _.slice(finalArray, 0, parseInt(limit));
    },
};
