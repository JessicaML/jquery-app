const express = require( 'express' )  
const app = express( ) 

const potato = require(__dirname + '/routes/potato' )

app.use( '/doing', potato)

app.use(express.static('public'))

app.get('/', (req, res) => {
	console.log( "this consoles on the server" )
	res.render('index.html')
})

app.listen( 3000, f => {
	console.log( "server running!" )
})