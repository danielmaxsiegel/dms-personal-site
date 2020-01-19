projects = getProjects()

var projectTiles = ''
var modals = ''

for (var i = 0; i < projects.length; i++) {
  projectTiles += getProjectTile(projects[i], i + 1)
  modals += getProjectModal(projects[i], i + 1)
}

var projectTileDiv = document.getElementById("projectGrid");
var modalsDiv = document.getElementById("modalsDiv");

projectTileDiv.innerHTML = projectTiles;
modalsDiv.innerHTML = modals;


function getProjectTile(project, modalKey) {
  var name = project.name
  var sanitizedName = name.toLowerCase().replace(/\s/g, '')

  var projectIcon = '<img class="img-fluid" src="img/projects/icons/' +
    sanitizedName +
    '.png" alt="' + name + ' logo">'

  return '<div class="col-md-6 col-lg-4 text-center">' +
    '<div class="portfolio-item mx-auto small-bottom-margin" data-toggle="modal" data-target="#portfolioModal' + modalKey + '">' +
      '<div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">' +
        '<div class="portfolio-item-caption-content text-center text-white">' +
          '<i class="fas fa-plus fa-3x"></i>' +
        '</div>' +
      '</div>' +
      projectIcon +
    '</div>' +
    '<h5 class="no-bottom-margin project-title">' + name + '</h5>' +
    '<p class="project-desc">' + project.subtitle + '</p>' +
  '</div>'
}

function getProjectModal(project, modalKey) {
  var name = project.name
  var sanitizedName = name.toLowerCase().replace(/\s/g, '')

  var projectImage = ''
  var projectTechnologies = ''
  var projectLink = ''

  if (project.imageType !== '') {
    if (project.imageType === 'video') {
      projectImage = '<video autoplay loop muted playsinline class="img-fluid rounded mb-2">' +
          '<source type="video/mp4" src="img/projects/screenshots/' + sanitizedName + '.mp4">' +
          '<source type="video/webm" src="img/projects/screenshots/' + sanitizedName + '.webm">' +
        '</video>'
    } else {
      projectImage = '<img class="img-fluid rounded mb-2" src="img/projects/screenshots/' +
        sanitizedName + '.png" alt="' + name + '">'
    }
  }

  if (project.technologies !== []) {
    var technologiesString = ''

    for (var i = 0; i < project.technologies.length; ++i) {
      technologiesString += project.technologies[i]
      if (i < project.technologies.length - 1) {
        technologiesString += " / "
      }
    }

    projectTechnologies = '<div class="mb-2 technologies-font">' + technologiesString + '</div>'
  }

  if (project.link !== '') {
    projectLink = '<a href="' + project.link + '" rel="noopener noreferrer" target="_blank">See ' + name + ' here</a>'
  }

  return '<div class="portfolio-modal modal fade" id="portfolioModal' + modalKey + '" tabindex="-1" role="dialog" aria-labelledby="portfolioModal' + modalKey + 'Label" aria-hidden="true">' +
    '<div class="modal-dialog modal-xl" role="document">' +
      '<div class="modal-content">' +
        '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
          '<span aria-hidden="true">' +
            '<i class="fas fa-times"></i>' +
          '</span>' +
        '</button>' +
        '<div class="modal-body text-center">' +
          '<div class="container">' +
            '<div class="row justify-content-center">' +
              '<div class="col-lg-8">' +
                '<h3 class="portfolio-modal-title text-secondary text-uppercase mb-0 project-modal-title">' + name + '</h3>' +
                '<div class="divider-custom">' +
                  '<div class="divider-custom-line"></div>' +
                '</div>' +
                projectImage +
                projectTechnologies +
                '<p class="mb-2">' + project.description + '</p>' +
                '<div class="mb-5">' + projectLink + '</div>' +
                '<button class="btn btn-primary" href="#" data-dismiss="modal">' +
                  '<i class="fas fa-times fa-fw"></i>' +
                  'Close Window' +
                '</button>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>' +
  '</div>'
}

function getProjects() {
  return [
      {
    		"name": "5to9",
    		"subtitle": "Side Project Collective",
    		"description": "A collective for developers who love passion projects and collaboration. 5to9 is an effort by myself and some fellows from university to create a group where people can work on side projects without necessarily planning on monetizing them. The group has done work in NodeJS, Swift, Java, Python/Jupyter Notebook and more.",
    		"technologies": [],
    		"imageType": "",
    		"link": "https://5to9.io"
    	},
      // {
    	// 	"name": "Crowdium",
    	// 	"subtitle": "Can you e-lance a whole business?",
      //   "description": "While I was working at X Movement, I was feeling entrepreneurial but didn't have time to execute on anything (or an idea to execute on). ",
    	// 	"technologies": [],
    	// 	"imageUrl": "",
      // "link": ""
    	// },
      // {
    	// 	"name": "Shelfaudit",
    	// 	"subtitle": "Author diversity analyzer",
      //   "description": "",
    	// 	"technologies": [],
    	// 	"imageUrl": "",
      // "link": ""
    	// },
      {
    		"name": "Quality Poetry",
    		"subtitle": "Randomly Generated Poetry",
        "description": "A joke about captioning professional photography on Instagram with poetry that a teenager might write evolved into Quality Poetry. It's an API that serves procedurally-generated, badly written poems to a webapp and a Twitter account.",
    		"technologies": ["TypeScript", "AngularJS", "NodeJS", "Twitter API", "Systemd"],
    		"imageType": "png",
    		"link": "https://twitter.com/QualityPoetry"
    	},
      {
    		"name": "Okay Pill",
    		"subtitle": "A Fashion Brand Website with a Twist",
        "description": "Okay pill is a clothing brand built around mental health awareness whose original website I volunteered to build as a favour to the founder. The messaging on the site is utilitarian, telling you that everything will be okay once you take your pill; but when you enter your email, it twists to have messaging about the side effects and anxieties of mood-altering medications.",
    		"technologies": ["NodeJS", "ReactJS"],
    		"imageType": "png",
    		"link": ""
    	},
      {
    		"name": "Music Visualizer",
    		"subtitle": "Unity Project",
        "description": "A simple audio visualizer built for fun in Unity, with scripts written in C#. The program detects the beat of music and pulses lights accordingly. It was meant to be an early prototype of a more fleshed-out music visualizer.",
    		"technologies": ["Unity", "C#"],
    		"imageType": "video",
    		"link": ""
    	},
      {
    		"name": "HowAmI",
    		"subtitle": "Mood Tracking iOS App",
        "description": "At X Movement, the development team had a daily check-in where we summed up how we were feeling in one word. To keep things interesting, I threw together a little angularJS app to help my team find more descriptive words. Later, it was built into an iOS app.",
    		"technologies": ["Swift", "AngularJS", "PHP"],
    		"imageType": "png",
    		"link": ""
    	},
      {
    		"name": "Scal3d",
    		"subtitle": "Virtual Reality + Edtech",
        "description": "An immersive, 3D visualization of the universe. Built in Unity and intended for use with an Oculus Rift, Scal3d is a sample of of useful, immersive and fun education technology.",
    		"technologies": ["Unity", "C#", "Oculus Rift"],
    		"imageType": "video",
        "link": ""
    	},
      {
    		"name": "Crowdlet",
    		"subtitle": "Event-Enhancing Wearable Technology",
        "description": "Part of my university capstone was creating a technology startup. What my group came up with was wearable technology that enhances interactivity in live entertainment spaces using social media, allowing users to control the colour of their wristbands by using twitter hashtags. Each hashtag corresponds to a specific colour, curated by the event's coordinator. The bracelet was created using a web-enabled microcontroller in a custom 3D printed chassis, and web technologies.",
    		"technologies": ["Arduino", "NodeJS", "Objective-C", "Tinkercad"],
    		"imageType": "png",
        "link": ""
    	},
      {
    		"name": "LotOLife",
    		"subtitle": "Procedural People Generator",
        "description": "A tool that procedurally generates a fake human being using real-world statistics. Starting with gender and country of origin, the tool attempts to generate personal information, abilities, and more. The name comes from the fact that there’s a “Lot O’ Life”, and that the random selection of traits in life is kind of like playing the Lotto.",
    		"technologies": [],
    		"imageType": "",
        "link": ""
    	},
      {
    		"name": "Mashees",
    		"subtitle": "User-Generated Content Mash-Ups",
        "description": "A fun tool that creates a mashup of gifs, audio and text. Content is driven by the users, so the amount of potential combinations is almost unlimited! Built in Node.js and React.",
    		"technologies": ["NodeJS", "Postgres", "ReactJS"],
    		"imageType": "png",
        "link": ""
    	}
    ]
}
