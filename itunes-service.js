function ItunesService(){
	
	this.getMbyArtist = function( artist, cd) {
		var url = "https://itunes.apple.com/search?" + artist;
		
	$("#get-music-button").text("loading?");
	
	return $.getJSON(url).then(function(response){
		var songList = response.results.map(function (song){
		return{
		
		title: song.trackName,
		album: song.collectionName,
		artist: song.artistName,
		art: song.artworkUrl60,
		genre: song.primaryGenreName,
		
		
		
		};
		})
		$('#get-music-button').text('GET MUSIC');
        return songList;
		})
	}
	}
function getSearch(){
	var iApi = "https://itunes.apple.com/search?term=";
	var userInput = getInput();
	var url = iApi + userInput
	$.ajax({
		url : url,
		method: 'get',
		data: {term:userInput},
		dataType:"jsonp"
	});
}

function getInput()
{
	var input = document.getElementById("userInput").value;
	
	return input;
}