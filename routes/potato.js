const express = require( 'express' )  

const router = express.Router( ) 

// router.use(express.static('public', 'index2.html'))
router.use(express.static('public'))


router.get( '/ping', ( req, res) => {	
  res.sendFile(__dirname + '/index2.html')
} )

router.get( '/delete', ( req, res) => {
	res.send( 'pong' )
} )


module.exports = router