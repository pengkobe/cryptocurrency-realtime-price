module.exports = app => {
    class Controller extends app.Controller {
        async join() {
            const message = this.ctx.args[0];
            await this.ctx.socket.emit('res', `Hi! I've got your message: ${message}`);
        }
    }
    return Controller
};

