// Wait for window load
// $(window).load(function() {
//     alert("Your book is overdue"); 
//     // $(".se-pre-con").fadeOut("slow");;
// });

$(window).on('load',function () {
    $(".se-pre-con").fadeOut('slow');
});



// clicking on the navbar buttons
$("#navbarContainer div").on("click", function (event) {
    $("#navbarContainer div #aboutmeID").addClass("aboutMeSpan");
    $("#navbarContainer div #experienceID").addClass("experienceSpan");
    $("#navbarContainer div #projectsID").addClass("projectsSpan");
    $("#navbarContainer div #clubsID").addClass("clubsSpan");

    $("#navbarContainer div span").removeClass("selected");
    $(this).children("span").addClass("selected");
    
    if ($(this).hasClass("aboutMe")){
        $("#navbarContainer div #aboutMeID").removeClass("aboutMeSpan");
    } else if ($(this).hasClass("experiences")){
        $("#navbarContainer div #experienceID").removeClass("experienceSpan");
    } else if ($(this).hasClass("projects")){
        $("#navbarContainer div #projectsID").removeClass("projectsSpan");
    } else if ($(this).hasClass("clubs")){
        $("#navbarContainer div #clubsID").removeClass("clubsSpan");
    } 
});


// hovering over navbar buttons
$("#navbarContainer div").on("mouseenter", function () {
    $(this).children("span").addClass("hover")
});

$("#navbarContainer div").on("mouseleave", function () {
    $(this).children("span").removeClass("hover")
});


// clicking on about me
$(".aboutMe").on("click", function () {
    $(".pages").css("display", "none")
    $("#aboutMeTop").css("display", "block")
    $("#aboutMeBottom").css("display", "block")
});


// clicking on experience
$(".experiences").on("click", function () {
    $(".pages").css("display", "none")
    $("#experienceTop").css("display", "block")
    $("#experienceBottom").css("display", "block")
});

// clicking on projects
$(".projects").on("click", function () {
    $(".pages").css("display", "none")
    $("#projectsTop").css("display", "block")
    $("#projectsBottom").css("display", "block")
});

// clicking on clubs
$(".clubs").on("click", function () {
    $(".pages").css("display", "none")
    $("#clubsTop").css("display", "block")
    $("#clubsBottom").css("display", "block")
});


var clickCountProjects = 0;
var totalProjectsNum = 6;
//clicking on left arrow in projects page
$("#leftarrowproject").on("click", function () {
    clickCountProjects --;
    console.log(clickCountProjects);
    //if the number is negative
    if (clickCountProjects % totalProjectsNum < 0) {
        clickCountProjects = Math.abs(totalProjectsNum - 1 )  
    }
    console.log(clickCountProjects);
    if (clickCountProjects % totalProjectsNum == 0) {
        $('.project').fadeOut(500) 
        $('#project1').delay(500).fadeIn(500)
    } else if (clickCountProjects % totalProjectsNum == 1) {
        $('.project').fadeOut(500)
        $('#project2').delay(500).fadeIn(500)
    } else if (clickCountProjects % totalProjectsNum == 2) {
        $('.project').fadeOut(500)
        $('#project3').delay(500).fadeIn(500)
    } else if (clickCountProjects % totalProjectsNum == 3) {
        $('.project').fadeOut(500)
        $('#project4').delay(500).fadeIn(500)
    } else if (clickCountProjects % totalProjectsNum == 4) {
        $('.project').fadeOut(500)
        $('#project5').delay(500).fadeIn(500)
    } else if (clickCountProjects % totalProjectsNum == 5) {
        $('.project').fadeOut(500)
        $('#project6').delay(500).fadeIn(500)
    };

    $("#projectnum").text(clickCountProjects % totalProjectsNum + 1); // update the pager
});

//clicking on right arrow in projects page
$("#rightarrowproject").on("click", function () {
    clickCountProjects ++;
    if (clickCountProjects % totalProjectsNum == 0) {
        $('.project').fadeOut(500)
        $('#project1').delay(500).fadeIn(500)
    } else if (clickCountProjects % totalProjectsNum == 1) {
        $('.project').fadeOut(500)
        $('#project2').delay(500).fadeIn(500)
    } else if (clickCountProjects % totalProjectsNum == 2) {
        $('.project').fadeOut(500)
        $('#project3').delay(500).fadeIn(500)
    } else if (clickCountProjects % totalProjectsNum == 3) {
        $('.project').fadeOut(500)
        $('#project4').delay(500).fadeIn(500)
    } else if (clickCountProjects % totalProjectsNum == 4) {
        $('.project').fadeOut(500)
        $('#project5').delay(500).fadeIn(500)
    } else if (clickCountProjects % totalProjectsNum == 5) {
        $('.project').fadeOut(500)
        $('#project6').delay(500).fadeIn(500)
    };
    $("#projectnum").text(clickCountProjects % totalProjectsNum + 1);
});


// projects arrow click to change slideshow
$(document).ready(function() {
    var slideshow;
    slideshow = $('#slideshowProjects').wipe();
    slideshow.pause();

    $('#leftarrowproject').click(function(event) {
        event.preventDefault();
        slideshow.prev();
        slideshow.pause();
        // alert("left");
    });

    $('#rightarrowproject').click(function(event) {
        event.preventDefault();
        slideshow.next();
        slideshow.pause();
        // alert("right ")
    });
});



//CLUBSSSS
var clickCountClubs = 0;
var totalClubsNum = 4;
//clicking on left arrow in clubs page
$("#leftarrowclub").on("click", function () {
    clickCountClubs --;

    //if the number is negative
    if (clickCountClubs % totalClubsNum < 0) {
        clickCountClubs = Math.abs(totalClubsNum - 1 )  
    }
    console.log(clickCountClubs % totalClubsNum);
    if (clickCountClubs % totalClubsNum == 0) {
        $('.club').fadeOut(500) 
        $('#club1').delay(500).fadeIn(500)
    } else if (clickCountClubs % totalClubsNum == 1) {
        $('.club').fadeOut(500)
        $('#club2').delay(500).fadeIn(500)
    } else if (clickCountClubs % totalClubsNum == 2) {
        $('.club').fadeOut(500)
        $('#club3').delay(500).fadeIn(500)
    } else if (clickCountClubs % totalClubsNum == 3) {
        $('.club').fadeOut(500)
        $('#club4').delay(500).fadeIn(500)
    };

    $("#clubnum").text(clickCountClubs % totalClubsNum + 1); // update the pager
});

//clicking on right arrow in clubs page
$("#rightarrowclub").on("click", function () {
    clickCountClubs ++;
    console.log(clickCountClubs % totalClubsNum);
    if (clickCountClubs % totalClubsNum == 0) {
        $('.club').fadeOut(500)
        $('#club1').delay(500).fadeIn(500)
    } else if (clickCountClubs % totalClubsNum == 1) {
        $('.club').fadeOut(500)
        $('#club2').delay(500).fadeIn(500)
    } else if (clickCountClubs % totalClubsNum == 2) {
        $('.club').fadeOut(500)
        $('#club3').delay(500).fadeIn(500)
    } else if (clickCountClubs % totalClubsNum == 3) {
        $('.club').fadeOut(500)
        $('#club4').delay(500).fadeIn(500)
    }
    $("#clubnum").text(clickCountClubs % totalClubsNum + 1);
});


// clubs arrow click to change slideshow
$(document).ready(function() {
    var slideshow;
    slideshow = $('#slideshowClubs').wipe();
    slideshow.pause();

    $('#leftarrowclub').click(function(event) {
        event.preventDefault();
        slideshow.prev();
        slideshow.pause();
        // alert("left");
    });

    $('#rightarrowclub').click(function(event) {
        event.preventDefault();
        slideshow.next();
        slideshow.pause();
        // alert("right ")
    });
});


// EXPERIENCE
var clickCountexperience = 0;
var totalexperienceNum = 2;
//clicking on left arrow in experience page
$("#leftarrowexperience").on("click", function () {
    clickCountexperience --;
    console.log(clickCountexperience);
    //if the number is negative
    if (clickCountexperience % totalexperienceNum < 0) {
        clickCountexperience = Math.abs(totalexperienceNum - 1 )  
    }
    console.log(clickCountexperience);
    // console.log(clickCountexperience % totalexperienceNum);
    if (clickCountexperience % totalexperienceNum == 0) {
        $('.experience').fadeOut(500) 
        $('#experience1').delay(500).fadeIn(500)
    } else if (clickCountexperience % totalexperienceNum == 1) {
        $('.experience').fadeOut(500)
        $('#experience2').delay(500).fadeIn(500)
    }
    $("#experiencenum").text(clickCountexperience % totalexperienceNum + 1); // update the pager
});

//clicking on right arrow in experience page
$("#rightarrowexperience").on("click", function () {
    clickCountexperience ++;
    console.log(clickCountexperience % totalexperienceNum);
    if (clickCountexperience % totalexperienceNum == 0) {
        $('.experience').fadeOut(500)
        $('#experience1').delay(500).fadeIn(500)
    } else if (clickCountexperience % totalexperienceNum == 1) {
        $('.experience').fadeOut(500)
        $('#experience2').delay(500).fadeIn(500)
    }
    $("#experiencenum").text(clickCountexperience % totalexperienceNum + 1);
});


// experience arrow click to change slideshow
$(document).ready(function() {
    var slideshow;
    slideshow = $('#slideshowExperience').wipe();
    slideshow.pause();

    $('#leftarrowexperience').click(function(event) {
        event.preventDefault();
        slideshow.prev();
        slideshow.pause();
        // alert("left");
    });

    $('#rightarrowexperience').click(function(event) {
        event.preventDefault();
        slideshow.next();
        slideshow.pause();
        // alert("right ")
    });
});


