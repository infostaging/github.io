$(document).ready(function(){

  // move the gallery to after the second paragraph of the article page
  // if it is on single pustaka indonesia

  if( $('body').hasClass('single-pustaka-indonesia') && $('#main-gallery').length ){
    $('#main-gallery').hide().insertAfter($('#main-content').find('p:eq(1)')).show();  
  }

  // move the advertisement after the third thumbnail, if the number
  // of the thumbnails is more than 3

  if($('#advertisement_taxonomy_pustaka_cat').length){
    var ads = $('#advertisement_taxonomy_pustaka_cat');
    var cards = $('.article_card_taxonomy_pustaka_cat');

    if(cards.length > 3){

      $(ads).insertAfter($(cards[2]));

    } else {

      $(ads).insertAfter($(cards[cards.length - 1]));

    }

  }

});


$('.copy-to-clipboard').click(function(e){

	e.preventDefault();
	copyToClipboard($(this));

});


function copyToClipboard(element) {
  
  var url = $(element).attr('href');
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val(url).select();
  document.execCommand("copy");
  $temp.remove();
  alert('Link ter-copy: ' + url);	

}


function updateMailto(element,target){
  $(target).attr('href', $(target).attr('data-href') + ': ' + $(element).val());
}



$('.zoom_it').hover(function(){

  if(!$(this).parent().hasClass('zoom_it_wrapper')){

    var width = $(this).width();
    var height = $(this).height();
    $(this).wrap('<div class="zoom_it_wrapper" style="width:'+width+';height:'+height+';"></div>');

  }

});


$('.zoom_closest').hover(function(){

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

  } else {

    var the_sibling = $(this).siblings('.zoom_this_sibling');
    $(the_sibling).find('img').addClass('zoomed');  

  }

  

});

$('.zoom_closest').mouseleave(function(){

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

  } else {

    var the_sibling = $(this).siblings('.zoom_this_sibling');
    $(the_sibling).find('img').removeClass('zoomed');

  }

});



// *** MAILCHIMP AJAX SIGNUP ***

$('.mailchimp').submit(function(){
  console.log('start mailchimp');
  var mailchimpform = $(this);
  $.ajax({
    url:mailchimpform.attr('action'),
    type:'POST',
    data:mailchimpform.serialize(),
    success:function(data){
      alert(data);
      $(mailchimpform).find('input[type=email]').val('')
    }
  });
  return false;
});

// *** END AJAX SIGNUP ***