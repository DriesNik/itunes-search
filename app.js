function itunesController(){
	var itunesServs = new ItunesService()
	
	this.getMusic = function getMusic(def){
		var artist = def.target.artist.value;
		itunesServs.getMByArtist(artist).then(setSongs);
	}
	function setSongs(songList){
		console.log(songList);
		var temple = ""
		for(var key of songList){
		var url = key.albumArt
		var preview = key.preview
		var artist = key.artist
		var albumArt = key.collection
		var price =key.price
		var title = key.title
		template +=
		
		
		
	}
}
}
