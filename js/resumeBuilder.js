
//below is most of the the text info for the sections on your site

var bio = {
    "name": "Kevin Steele",
    "role": "Web Developer",
    "contacts": {
        "mobile": "(845)-549-6210",
        "email": "kwsteele@optonline.net",
        "github": "KevinWSteele",
        "location": "Hopewell Junction, NY"
    },
    "image": "images/intherain.jpg",
    "welcomeMessage": "Welcome to my super cool interactive resume",
    "skills": ["CSS", "HTML", "JavaScript", "GitHub"]
}




var work = {
    "jobs": [
    {
    "employer": "University of New Haven",
    "title": "Graduate Assistant",
    "location": "West Haven, CT",
    "dates": "September 2015 - present",
    "description": "Tutored students for computer science courses"  
    }  , 
    {
    "employer": "KenCast Inc",
    "title": "Intern",
    "location": "Norwalk, CT",
    "dates": "July 2014 - August 2015",
    "description": "Edited videos, managed live event broadcasts, and made PowerPoint presentations"
    }
    ]
}

var education = {
    "schools": [
        {
        "name": "University of New Haven",
        "location": "West Haven, CT",
        "degree": "Masters",
        "dates": "2015-2017",
        "major": "Computer Science"
        },
        {
        "name": "Binghamton University",
        "location": "Binghamton, NY",
        "degree": "Bachelors",
        "dates": "2009-2013",
        "major": "Cinema"
        }
    ],
        
    "onlinecourses": [
        {"title": "Nanodegree in Web Development",
        "school": "Udacity",
        "dates": "February 2015 - present",
        },
        { "title": "HTML, CSS, and JavaScript",
        "school": "Codeacademy",
        "dates": "November 2014 - January 2015",
        }
    ]
}

var projects = {
    projects: [{
        "title": "Udacity Mug Mockup",
        "dates": "February 2015 - March 2015",
        "description": "Used HTML and CSS to create a site",
        "images": "images/orangemug.jpg"  
        }]
    };



//helps to put the above info into the right format

bio.display = function(){
     
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);
    
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);
    
    var formattedImage = HTMLbioPic.replace("%data%", bio.image);
    $("#header").append(formattedImage);
    
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#topContacts").append(formattedMessage);

    $("#header").append(HTMLskillsStart);
    
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
    
};

bio.display();



work.display= function(){
for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    var formattedEmployerTitleLoc = formattedEmployer + formattedTitle + formattedLocation;
    
    $(".work-entry:last").append(formattedEmployerTitleLoc);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedDescription);
} };

work.display();


projects.display = function() {
    for (project in projects.projects){
    $("#projects").append(HTMLprojectStart);
        
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);
    
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);
    
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);
    
    var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images);
    $(".project-entry:last").append(formattedImages); }
    };
    
projects.display();
       
education.display = function() {
for (school in education.schools) {
    $("#education").append(HTMLschoolStart);
    
    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
    $(".education-entry:last").append(formattedSchoolName);
    
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(formattedSchoolLocation);
    
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    $(".education-entry:last").append(formattedSchoolDegree);
    
    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    $(".education-entry:last").append(formattedSchoolDates);
    
    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
    $(".education-entry:last").append(formattedSchoolMajor);
      //code
}

$(".education-entry:last").append(HTMLonlineClasses);

for (online in education.onlinecourses) {
    
    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlinecourses[online].title);
    $(".education-entry:last").append(formattedTitle);
    
    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlinecourses[online].school);
    $(".education-entry:last").append(formattedSchool);
    
    var formattedDates = HTMLonlineDates.replace("%data%", education.onlinecourses[online].dates);
    $(".education-entry:last").append(formattedDates);
    
}
};

education.display();

/*
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    
    logClicks(x,y);
  // your code goes here.
});

*/

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    
    return name[0] + " " + name[1];
};

//for google map at bottom of page
$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);

//used for box slider 
$(document).ready(function(){
  $('.bxslider').bxSlider({
  auto: true,
  autoControls:true
    });
});

