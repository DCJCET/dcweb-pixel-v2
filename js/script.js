// js/script.js

// GETrANDOM COLOR FUNCTION
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
// map through ever word and change its color
var title = document.getElementsByClassName("bg-text")[0];
var title_text = title.innerHTML;
var title_text_length = title_text.length;
var words = title_text.split(" ");

function animatebg() {
  for (var i = 0; i < words.length; i++) {
    var word = words[i];

    var word_color = getRandomColor();
    var word_html =
      "<span style='color:" + word_color + "'>" + word + "</span>";
    title.innerHTML = title.innerHTML.replace(word, word_html);
  }
}
window.setInterval(animatebg, 15000);
console.log(words);


