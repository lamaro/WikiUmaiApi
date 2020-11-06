const _ = require("lodash");
module.exports = {
    async index(ctx) {
        const planetas = await strapi
            .query("planetas")
            .find({ _sort: "updated_at:desc" });
        const finalArray = planetas.map((planeta) => _.omit(planeta, ['descripcion','historias', 'personajes', 'hitos', 'objetos']))
        return finalArray
    },
    async planetaBySlug(ctx) {
        const { slug } = ctx.params
        const planetas = await strapi
            .query("planetas")
            .find({ _where: [{ slug }] });

        const finalArrayHistorias = planetas[0].historias.map((historia) => _.omit(historia, ['contenido', 'sinopsis', 'planeta']))
        const finalArrayPersonajes = planetas[0].personajes.map((personaje) => _.omit(personaje,
            ['sinopsis', 'raza', 'introduccion', 'genero', 'edad', 'altura', 'profesion', 'habilidades', 'caracteristicas', 'galeria','objeto']
        ))
        const finalArrayObjetos = planetas[0].objetos.map((objeto) => _.omit(objeto, ['planeta', 'tipo', 'origen', 'contexto_uso', 'modo_uso', 'impacto_social', 'descripcion']))

        const finalArray = [{ ...planetas[0], historias: finalArrayHistorias, personajes: finalArrayPersonajes, objetos: finalArrayObjetos }]

        return finalArray
    }
};
