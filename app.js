/* jshint asi: true */
(function(){
	
	var tableCells = document.querySelectorAll('td')
	for( var i = 0; i < tableCells.length; i++ ) {
		tableCells[i].onclick = function(){
			addCoin( this.id )
		}	
		tableCells[i].oncontextmenu = function(e){
			e.preventDefault()
			removeCoin( this.id )			
		}		
	}
	
	function addCoin ( id ) {
		var el = document.getElementById( id )
		var coinEl = el.querySelector( '.coins' )
		coinEl.innerHTML += '🟡'
		doOdds()
	}
	
	function removeCoin ( id ) {
		var el = document.getElementById( id )
		var coinEl = el.querySelector( '.coins' )
		coinEl.innerHTML = coinEl.innerHTML.replace( '🟡', '' )
		doOdds()
	}
	
	function doOdds () {
		var tableCells = document.querySelectorAll('td')
		var totalCoins = 0
		for( var i = 0; i < tableCells.length; i++ ) {
			var coinEl = tableCells[i].querySelector( '.coins' )
			totalCoins += coinEl.innerHTML.length	
		}
		
		for( var i = 0; i < tableCells.length; i++ ) {
			var oddsEl = tableCells[i].querySelector( '.odds' )
			var coinEl = tableCells[i].querySelector( '.coins' )
			if( totalCoins > 0 ) {
				oddsEl.innerHTML = Number( 100 * ( coinEl.innerHTML.length / totalCoins ) ).toFixed(2) + '%'			
			} else {
				oddsEl.innerHTML = ''
			}
		}
	
	}
})()