$(document).ready(function() { 


var music = new Howl({
    src: ['3.mp3'],
    autoplay: true,
    loop: true,
      volume: 0.5,
      buffer: false
  });
music.play();


var angArr = [0,-30,-60,-90,0,-30,-60,-90,90,60,30,0,-60,-90,-60,-30,0];
var rotationinterval = -10;
for (i=0;i<33;i++)
{
    let color='red';
    let color2='';
    
if (i%2)
{
    color='';
    color2 = 'red';
}

let addSTR = '';
addSTR += '<div class="tile spinl eng '+color2+'"><span style="transform:rotate('+(angArr[0]+(i*rotationinterval))+'deg);">l</span></div><div class="tile spinl eng '+color2+'"><span style="transform:rotate('+(angArr[1]+(i*rotationinterval))+'deg);">e</span></div><div class="tile spinl eng '+color2+'"><span style="transform:rotate('+(angArr[2]+(i*rotationinterval))+'deg);">f</span></div><div class="tile spinl eng '+color2+'"><span style="transform:rotate('+(angArr[3]+(i*rotationinterval))+'deg);">t</span></div>';
addSTR += '<div class="tile spinr heb '+color+'"><span style="transform:rotate('+(angArr[4]+(i*rotationinterval))+'deg);">ן</span></div><div class="tile spinr heb '+color+'"><span style="transform:rotate('+(angArr[5]+(i*rotationinterval))+'deg);">י</span></div><div class="tile spinr heb '+color+'"><span style="transform:rotate('+(angArr[6]+(i*rotationinterval))+'deg);">מ</span></div><div class="tile spinr heb '+color+'"><span style="transform:rotate('+(angArr[7]+(i*rotationinterval))+'deg);">י</span></div>';
addSTR += '<div class="tile spinr eng '+color2+'"><span style="transform:rotate('+(angArr[8]+(i*rotationinterval))+'deg);">r</span></div><div class="tile spinr eng '+color2+'"><span style="transform:rotate('+(angArr[9]+(i*rotationinterval))+'deg);">i</span></div><div class="tile spinr eng '+color2+'"><span style="transform:rotate('+(angArr[10]+(i*rotationinterval))+'deg);">g</span></div><div class="tile eng spinr '+color2+'"><span style="transform:rotate('+(angArr[11]+(i*rotationinterval))+'deg);">h</span></div><div class="tile eng spinr '+color2+'"><span style="transform:rotate('+(angArr[12]+(i*rotationinterval))+'deg);">t</span></div>';
addSTR += '<div class="tile spinl heb '+color+'"><span style="transform:rotate('+(angArr[13]+(i*rotationinterval))+'deg);">ל</span></div><div class="tile spinl heb '+color+'"><span style="transform:rotate('+(angArr[14]+(i*rotationinterval))+'deg);">א</span></div><div class="tile spinl heb '+color+'"><span style="transform:rotate('+(angArr[15]+(i*rotationinterval))+'deg);">מ</span></div><div class="tile spinl heb '+color+' "><span style="transform:rotate('+(angArr[16]+(i*rotationinterval))+'deg);">ש</span></div></br>';
$('.container').append(addSTR);
}
// var i=0;
// $( ".tile" ).each(function( index ) {
//  $(this).css({ 'transform': 'rotate(' + i + 'deg)'});
//  i=i-30;
// });



});