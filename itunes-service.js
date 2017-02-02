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
	clearTable();
var iapi = 'https://itunes.apple.com/search?limit=10&term='
var id = document.getElementById("userInput").value;
var url = iapi + id;

$.ajax({
  url: url,
  method: 'get',
  data: {term:id},
  dataType: 'jsonp',
  success: function(data) {
   new showMatch(data);
    }
  })
};
	
	function clearTable(){
		$("#table").empty();
		
	}


  function showMatch(data){
	  
	  $('#table').append(
	  "<tr> <th>Artist Name</th> <th>Song Name</th> <th>Genre</th> <th>Art</th>  </tr>"
	  )
	  for(var i =0;i<data.resultCount;i++)
  {
    $('#table').append(
      
     
	
	"<tr>" +
    "<td>" + " " + data.results[i].artistName + "</td>" +
    "<td>" + " " + data.results[i].trackName + "</td>" +
    "<td>" + " " + data.results[i].primaryGenreName + "</td>" +
	"<td>" + "<img src = "+data.results[i].artworkUrl100 + ">" + "</td>" +
  "</tr>"
  
    );
    
  };
	  
  }
