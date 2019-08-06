var videoRoutes = require('./videoRoutes');

module.exports = (app) => {
    app.use('/api/video', videoRoutes);
    return app;
};
