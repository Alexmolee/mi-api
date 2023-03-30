const { Router  } = require('express');
const router = Router();




router.get('/test', (req,res) => {
    const api_key = 'Tu Api Key';
    fetch('https://api.openai.com/v1/models', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${api_key}`
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      
    })
    .catch(error => console.error(error));
    res.json(data);
})




module.exports = router;