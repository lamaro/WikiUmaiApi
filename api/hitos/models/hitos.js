const slugify = require('slugify');

module.exports = {
    lifecycles: {
        async beforeCreate(data) {
            console.log('before creating', data)
            if (data.titulo) {
                data.slug = slugify(data.titulo,{lower:true});
            }
        },
        async beforeUpdate(params, data) {
            console.log('before updating', data)
            if (data.titulo) {
               data.slug = slugify(data.titulo,{lower:true});
            }
        },
    },
};