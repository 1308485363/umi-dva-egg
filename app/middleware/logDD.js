module.exports = option => {
    return async function dou (ctx, next) {
        console.log('执行:::::::::::');
        await next();
    }
}