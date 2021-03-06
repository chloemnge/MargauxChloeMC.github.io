var $slideLink = $("#slide-link"),
    slideLinkText = $slideLink.find("span")[0];

$slideLink.on("mouseenter", linkOver);

function linkOver() {
  TweenLite.to(slideLinkText, 0.3, {y: -25, ease: Cubic.easeIn, onComplete: function() {
    TweenLite.fromTo(slideLinkText, 0.3, {y: 25}, {y: 0, ease: Cubic.easeOut})
  }});
}

// Import data
// Using d3js
d3.json('repartition_francais.json', function(err, data) {
  $('#cacao-data-1').text(JSON.stringify(data, null, 2));
})

function showBlock(imageId) {
  document.getElementById(imageId).style.display = "block";
  
}

// Clicks on buttons by id
$("#button4").click(function(){
    $("#answer4").toggle();
});

$("#button2").click(function(){
    $("#answer2").toggle();
});

$("#button3").click(function(){
    $("#answer3").toggle();
});
