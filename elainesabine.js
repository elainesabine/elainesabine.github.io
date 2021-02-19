$(window).on('load',function () {
    $(".se-pre-con").delay(1300).fadeOut(500);
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
    $('#namewrapper img').imagesLoaded( { background: true }, function() {
        window.location.replace("index.html");
    });
});

// clicking on experience
$(".experiences").on("click", function () {
    $('#slideshowExperience li').imagesLoaded( { background: true }, function() {
        window.location.replace("experience.html");
    });
});

// clicking on projects
$(".projects").on("click", function () {
    $('#slideshowProjects li').imagesLoaded( { background: true }, function() {
        window.location.replace("projects.html");
    });

});

// clicking on clubs
$(".clubs").on("click", function () {
    $('#slideshowClubs li').imagesLoaded( { background: true }, function() {
        window.location.replace("clubs.html");
    });
});



var clickCountProjects = 0;
var totalProjectsNum = 8;
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
    } else if (clickCountProjects % totalProjectsNum == 6) {
        $('.project').fadeOut(500)
        $('#project7').delay(500).fadeIn(500)
    } else if (clickCountProjects % totalProjectsNum == 7) {
        $('.project').fadeOut(500)
        $('#project8').delay(500).fadeIn(500)
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
    } else if (clickCountProjects % totalProjectsNum == 6) {
        $('.project').fadeOut(500)
        $('#project7').delay(500).fadeIn(500)
    } else if (clickCountProjects % totalProjectsNum == 7) {
        $('.project').fadeOut(500)
        $('#project8').delay(500).fadeIn(500)
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
var totalClubsNum = 5;
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
    } else if (clickCountClubs % totalClubsNum == 4) {
        $('.club').fadeOut(500)
        $('#club5').delay(500).fadeIn(500)
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
    } else if (clickCountClubs % totalClubsNum == 4) {
        $('.club').fadeOut(500)
        $('#club5').delay(500).fadeIn(500)
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

// choose random color for loading page
var colors = ['#8ac8dc', '#ed6772', '#6ba7cf', '#4077ad'];
var random_color = colors[Math.floor(Math.random() * colors.length)];
$('.se-pre-con').css('background-color', random_color);

