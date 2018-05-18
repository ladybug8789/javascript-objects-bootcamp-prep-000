var playlist = {
  artistName: 'song titles'
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}


function removeFromPlaylist(playlist, artistName) {
<<<<<<< HEAD
    delete playlist[artistName]
=======
    delete playlist.['artistName']
>>>>>>> f16de7bf519404da7caed7bf36d1ee2ff30238b3
    return playlist
}
