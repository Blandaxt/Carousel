// click two buttons
// click next to go forward
// click back to go background
// img is cycling based on clicks
// img changes
var pokemons = ["#.jpg", "#.jpg", "#.jpg"]
var alts = ["1", "2", "3"]
var count = 0;
// event listen 1
$("#next").on("click", next);
// event listner 2
$("#back").on("click", back);
// function next
function next() {
  // move to next img sources
  count++;
  if( count == pokemons.length){
    count = 0
  }
  // update theupdate the image with that source
  $("img").attr("src", pokemons[count]).attr("alt", alts[count])
}
// function back
function back() {
  count--;
  if( count == -1){
    count = pokemons.length-1
  }
  $("img").attr("src", pokemons[count]).attr("alt", alts[count])
}
