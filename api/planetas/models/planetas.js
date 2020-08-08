const slugify = require('slugify');

module.exports = {
    lifecycles: {
        async beforeCreate(data) {
            console.log('before creating', data)
            if (data.nombre) {
                data.slug = slugify(data.nombre,{lower:true});
            }
        },
        async beforeUpdate(params, data) {
            console.log('before updating', data)
            if (data.nombre) {
               data.slug = slugify(data.nombre,{lower:true});
            }
        },
    },
};