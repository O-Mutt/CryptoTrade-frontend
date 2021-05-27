module.exports = [
    { method: 'GET', path: '/api/v1/test', handler: function () {
        return {"foo":"bar"};
    } },
]