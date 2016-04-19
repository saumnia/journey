//bird movement

var $bird = $('.bird');
var offset = $bird.height()/2;
var lastPos = 0;

$(document).on('mousemove', function(event) {
	var pos = event.pageY - offset;
	$bird.css('top', pos);
});

//bird confetti

var partytime = function() {
	$('<div class="confetti"></div>').css({'top':$bird.css('top'), 'transform':'rotate('+Math.floor(Math.random()*360)+'deg)', 'opacity':Math.random()}).appendTo('body');

	$('.confetti').each(function() {
		var $this = $(this);
		if (parseInt($this.css('left')) <= -15)
			$this.remove();
	});
}
setInterval(partytime, 50);

//butterfly controls

var keyD = false;
var keyU = false;
var shifting = false;
var speed = 20;


var tone = $('#ek')[0];
var fly = function() {
    if (keyD && parseInt($butter.css('top')) < ($(window).height()*.8)) {
            $butter.css('top','+='+speed+'px');
    }
    if (keyU && parseInt($butter.css('top')) > 30) {
            $butter.css('top','-='+speed+'px');
    }

};
setInterval(fly, 50)


var playsound = function() {
    
    if ((keyD || keyU) && shifting) {

        if ((parseInt($butter.css('top')) < ($(window).height()*.1)))
            tone = $('#ek')[0];
        
        else if ((parseInt($butter.css('top')) < ($(window).height()*.2)))
            tone = $('#dou')[0];

        else if ((parseInt($butter.css('top')) < ($(window).height()*.3)))
            tone = $('#teen')[0];
        
        else if ((parseInt($butter.css('top')) < ($(window).height()*.4)))
            tone = $('#char')[0];
        
        else if ((parseInt($butter.css('top')) < ($(window).height()*.5)))
            tone = $('#panch')[0];
       
        else if ((parseInt($butter.css('top')) < ($(window).height()*.6)))
            tone = $('#che')[0];

        else if ((parseInt($butter.css('top')) < ($(window).height()*.7)))
            tone = $('#saat')[0];
        
        else if ((parseInt($butter.css('top')) < ($(window).height()*.8)))
            tone = $('#aath')[0];
        
        else if ((parseInt($butter.css('top')) < ($(window).height()*.9)))
            tone = $('#nau')[0];

        tone.load();
        tone.play();
    }
};
var music = setInterval(playsound, 300);


var $butter= $('.butter');
$(document).on('keydown',function(event){
        // UP
        if (event.which == 38) {
                keyU = true;
        }
        // DOWN
        else if (event.which == 40) {
                keyD = true;
        }


        if (event.which == "16")
            shifting = true;
});

$(document).on('keyup',function(event){
        
        // UP
        if (event.which == 38) {
                keyU = false;
        }
        // DOWN
        else if (event.which == 40) {
                keyD= false;
        }


        if (event.which == "16")
            shifting = false;

});

var $butter= $('.butter');
var partay = function() {
    $('<div class="circles"></div>').css({'top':$butter.css('top'), 'transform':'rotate('+Math.floor(Math.random()*360)+'deg)', 'opacity':Math.random()}).appendTo('body');

    $('.circles').each(function() {
        var $this = $(this);
        if (parseInt($this.css('left')) <= -15)
            $this.remove();
    });
}
setInterval(partay, 50)



var mpress = false;
var note = $('#nine')[0];

var playmusic = function() {
        // console.log(mpress);
        if (mpress) {
                note.load();
                note.play();
        }
        else {
                //note.pause();
        }
};
var music = setInterval(playmusic, 300);

$('.one').mouseenter(function() {
        note = $('#one')[0];
        $('.note').text('1');
});
$('.two').mouseenter(function() {
        note = $('#two')[0];
        $('.note').text('2');
});
$('.three').mouseenter(function() {
        note = $('#three')[0];
        $('.note').text('3');
});
$('.four').mouseenter(function() {
        note = $('#four')[0];
        $('.note').text('4');
});
$('.five').mouseenter(function() {
        note = $('#five')[0];
        $('.note').text('5');
});
$('.six').mouseenter(function() {
        note = $('#six')[0];
        $('.note').text('6');
});
$('.seven').mouseenter(function() {
        note = $('#seven')[0];
        $('.note').text('7');
});
$('.eight').mouseenter(function() {
        note = $('#eight')[0];
        $('.note').text('8');
});
$('.nine').mouseenter(function() {
        note = $('#nine')[0];
        $('.note').text('9');
});


$(document).on('mousedown', function() {
                mpress = true;
         }).on('mouseup', function() {
                mpress = false;
});

//butterfly music

// var $butter= $('.butter');

// $(document).on('keydown',function(event){
//         if (event.which == 16) {
//                 keyS = true;
//         }
//         else{

//         }
// });

/*window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(e) {
    if (e.keyCode == "16") {
        //Play Music
        document.getElementById('#ek').play()
    }
}*/




