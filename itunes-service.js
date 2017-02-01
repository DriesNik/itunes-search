function ItunesService(){
	
	this.getMbyArtist = function( artist, cd) {
		var url = "https://itunes.apple.com/search?" + artist;
		
	$("#get-music-button").text("loading?");
	
	return $.getJSON(url).then(function(response){
		var songList = response.results.map(function (song){
		return{
		
		title = song.trackName
		
		
		
		}
		}
	}
	}
}