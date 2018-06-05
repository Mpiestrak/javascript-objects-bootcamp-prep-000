<<<<<<< HEAD
var playlist = {"Phil Ochs": "Here's to the State of Mississippi", 'My Bloody Valentine': "Sometimes"};
function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign ({}, playlist, {Slowdive: ["Alison"]})
  return playlist
}
function removeFromPlaylist(playlist, Slowdive){
  delete playlist.Slowdive
  return playlist
=======
var playlist = {Creed: "Higher"};
function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign ({}, playlist, {'Phil Ochs': ['Slowdive']})
  
>>>>>>> 2657cffc23d3d4e02240c817f9fc91306f02c07c
}