$("h1").click(function(){
    $("img").fadeIn(3000);    
}); 


var audio = $("#mysoundclip")[0];
  console.log(audio);
  $("button.play").click(function() {
      audio.play();
  });
