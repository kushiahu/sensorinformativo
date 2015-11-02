$("#hdr__sponsor > div:gt(0)").hide();

setInterval(function() { 
  $('#hdr__sponsor > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#hdr__sponsor');
},  5000);