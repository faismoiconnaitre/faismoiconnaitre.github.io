$(document).ready(function(){if($.browser.msie&&$.browser.version==6.0){DD_belatedPNG.fix("img, #tt, #tm, #tb, #dm, #db, #lt, #lm, #lb");}else{if($("#notif").length>0){$("#notif").delay(500).slideDown();$("#notif a.close").click(function(){$.ajax({url:"read-new-message.html",cache:false});$("#notif").slideUp();return false;});}}});