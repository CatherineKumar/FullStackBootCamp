const express = require ('express')
const router = express.Router()

router.get('/users', (req, res) => {
    //nores.send('USER LIST')
    res.json({message:'HERE ARE YOUR USERS'})
}
)

router.get('/ex-error', (req,res) => {
    res.status(404).json({error: 'USER NOT FOUND'})
})

module.exports = router