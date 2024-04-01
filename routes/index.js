// import router in routes
const router= require('express').Router();
// import api file 
const apiRoutes = require('./api');
// route use api
router.use('/api', apiRoutes);

// route use api use 
router.use((req,res) => {
    return res.status(404).send('Not created');
});
// module exports
module.exports = router;

