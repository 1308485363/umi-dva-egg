module.exports = option => {
    return async function dou (ctx, next) {
        if (ctx.query.name) {
            ctx.query.name = ctx.query.name.toUpperCase();
            await next();
        } else {
            console.log(option, 'option::::::::')
            ctx.status = 400;
            ctx.body = { name: null }
        }
    }
}