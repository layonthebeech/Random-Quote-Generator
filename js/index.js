
$(document).ready(function() {
  function changeQuote(quote, author) {
    var quoteHtml = '<div>"' + quote   + '"\n - ' + author + '</div>';
    $("#quoteText").fadeOut(function() {
      $('#quoteText').html(quoteHtml);
       $("#quoteText").fadeIn();
    });
   
    
  }
  $('#action-button').click(function() {
    $.ajax({
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
    data: {
      format: 'json'
    },
    headers: {  
      'X-Mashape-Key': 'r02Q5jzFAqmshUX5kOewxZ90v0tLp1jyM65jsnGKm4EcqgZfJa', 
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    },
    success: function(data) {
      var quote = $.parseJSON(data);
      changeQuote(quote.quote,quote.author);
    }
    });
  });
});

$("#tweet").click(function() {
  var tweet = $('#quoteText').text();
window.open('https://twitter.com/intent/tweet?text='+tweet, 'sharer', 'toolbar=0,status=0,width=620,height=280');
});



window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);
 
  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };
 
  return t;
}(document, "script", "twitter-wjs"));