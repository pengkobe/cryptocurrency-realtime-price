module.exports = app => {
    const nsp = app.io.of('/');

    app.redis.get('for_sub_pub').subscribe('currency_info_change', (err, count) => {
        console.info('----init----: This client is currently subscribed num：', count)
    });

    app.redis.get('for_sub_pub').on("message", (channel, message) => {
        console.log(`Received ${message} from ${channel}`);
        message = JSON.parse(message);
        let cache = app.cache;

        // find and update, todo: make O(n) to O(1)
        if (cache) {
            for (let curr of cache) {
                if (curr.name == message.name) {
                    for (let val of message.changeList) {
                        curr[val.property] = val.value;
                    }
                }
            }
        }

        nsp.emit('info_updated', message);
    });

    return async (ctx, next) => {
        ctx.socket.emit('res', 'connected!');
        ctx.app.redis.get('for_cache').set(ctx.socket.id, 'login');
        await next();
        ctx.app.redis.get('for_cache').set(ctx.socket.id, 'logout');
    };
};