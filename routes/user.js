const express = require( 'express' )  

const router = express.Router( ) 

router.get( '/new', ( req, res) => {
	res.send( 'Yay new user!' )
} )

router.get( '/delete', ( req, res) => {
	res.send( 'deleted user :(' )
} )


module.exports = router