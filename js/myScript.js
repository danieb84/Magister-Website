/**
 * Created by danielle matthews.
 */

/*jQuery Script for interactive display of screens from the Magister App with accompanying descriptions.
 * The display is in the form of a slide-show completely controlled by the user.
 *
 * The next step is to create a generic function that can be reused for any slide-show with any number of pages.
 * */

var $page = ".slide-show";//HTML element 700% wide divided into 7 sections, each containing a screen shot of th Magister app

//next and back buttons for screen shots
var $next1 = "#slide1 .next";
var $next2 = "#slide2 .next";
var $next3 = "#slide3 .next";
var $next4 = "#slide4 .next";
var $next5 = "#slide5 .next";
var $next6 = "#slide6 .next";
var $next7 = "#slide7 .next";
var $back1 = "#slide2 .back";
var $back2 = "#slide3 .back";
var $back3 = "#slide4 .back";
var $back4 = "#slide5 .back";
var $back5 = "#slide6 .back";
var $back6 = "#slide7 .back";

//CSS to be applied when next/back buttons are clicked
var $goTo1 = {'-webkit-transform':'translateX(0)',transition:'0.5s ease-in'};
var $goTo2 = {'-webkit-transform':'translateX(-14.28%)',transition:'0.5s ease-in'};
var $goTo3 = {'-webkit-transform':'translateX(-28.56%)',transition:'0.5s ease-in'};
var $goTo4 = {'-webkit-transform':'translateX(-42.84%)',transition:'0.5s ease-in'};
var $goTo5 = {'-webkit-transform':'translateX(-57.12%)',transition:'0.5s ease-in'};
var $goTo6 = {'-webkit-transform':'translateX(-71.40%)',transition:'0.5s ease-in'};
var $goTo7 = {'-webkit-transform':'translateX(-85.68%)',transition:'0.5s ease-in'};

//accompanying descriptions that change as the screen shot view changes
var $descr1 = "#descr1";
var $descr2 = "#descr2";
var $descr3 = "#descr3";
var $descr4 = "#descr4";
var $descr5 = "#descr5";
var $descr6 = "#descr6";
var $descr7 = "#descr7";


$($descr2).hide();
$($descr3).hide();
$($descr4).hide();
$($descr5).hide();
$($descr6).hide();
$($descr7).hide();

//next buttons
$($next1).click(function(){
    $($page).css($goTo2);
    $($descr1).fadeOut();
    $($descr2).fadeIn();
});
$($next2).click(function(){
    $($page).css($goTo3);
    $($descr2).fadeOut();
    $($descr3).fadeIn();
});
$($next3).click(function(){
    $($page).css($goTo4);
    $($descr3).fadeOut();
    $($descr4).fadeIn();
});
$($next4).click(function(){
    $($page).css($goTo5);
    $($descr4).fadeOut();
    $($descr5).fadeIn();
});
$($next5).click(function(){
    $($page).css($goTo6);
    $($descr5).fadeOut();
    $($descr6).fadeIn();
});
$($next6).click(function(){
    $($page).css($goTo7);
    $($descr6).fadeOut();
    $($descr7).fadeIn();
});
$($next7).click(function(){
    $($page).css($goTo1);
    $($descr7).fadeOut();
    $($descr1).fadeIn();
});

//back buttons
$($back1).click(function(){
    $($page).css($goTo1);
    $($descr2).fadeOut();
    $($descr1).fadeIn();
});
$($back2).click(function(){
    $($page).css($goTo2);
    $($descr3).fadeOut();
    $($descr2).fadeIn();
});
$($back3).click(function(){
    $($page).css($goTo3);
    $($descr4).fadeOut();
    $($descr3).fadeIn();
});
$($back4).click(function(){
    $($page).css($goTo4);
    $($descr5).fadeOut();
    $($descr4).fadeIn();
});
$($back5).click(function(){
    $($page).css($goTo5);
    $($descr6).fadeOut();
    $($descr5).fadeIn();
});
$($back6).click(function(){
    $($page).css($goTo6);
    $($descr7).fadeOut();
    $($descr6).fadeIn();
});