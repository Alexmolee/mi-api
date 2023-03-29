const { Router  } = require('express');
const router = Router();




router.get('/test', (req,res) => {
    const data = {
        "name": "Alejandro",
        "website" : "Alejandro.com"
    }
    res.json(data);
})




module.exports = router;