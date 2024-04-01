const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {

    res.json([
        {
            condition: "sunny",
            safety: "safe"
        },
        {
            condition: "rainy",
            safety: "mild-safety"
        },
        {
            condition: "thunderstorm",
            safety: "unsafe"
        }
    ])
})

module.exports = router;    //Will make this accessible to the rest of our application