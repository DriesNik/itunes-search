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
	function getSong()
{
var api = 'https://itunes.apple.com/search?limit=5&term='
var song = document.getElementById("userInput").value;
var url = api + song;

$.ajax({
  url: url,
  method: 'get',
  data: {term:song},
  dataType: 'jsonp',
  success: function(data) {
    showMatch(data);
    }
  })
};
	
	


  function showMatch(data){
	  for(var i =0;i<data.resultCount;i++)
  {
    $('#table').append(
      
      "<ul>"
    +  "Artist: " + data.results[i].artistName + " " + "</ul>" +
    "<ul>"  + "Song: " + data.results[i].trackName + " " + "</ul>" +
    "<ul>"  + "Album: " + data.results[i].collectionName + " " + "</ul>"
    );
    
  };
	  
  }
