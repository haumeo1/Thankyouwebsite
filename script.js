var isClose = false;
$('.envelope').click(function() {
  
  if (isClose == false) {
    setTimeout("$('.envelope_top').toggleClass('envelope_top_close')",150);
    $('.paper').toggleClass('paper_close');
    isClose = true;
  } else {
    setTimeout("$('.paper').toggleClass('paper_close')",150);
    $('.envelope_top').toggleClass('envelope_top_close');
    isClose = false;
  }
  
})