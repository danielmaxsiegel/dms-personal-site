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

  return '<div class="col-sm-12 col-md-4 col-lg-3 text-center">' +
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
  var projectImage2 = ''
  var projectTechnologies = ''
  var projectLink = ''

  if (project.imageType !== '') {
    if (project.imageType === 'video') {
      projectImage = '<video autoplay loop muted playsinline class="content-desktop img-fluid rounded mb-2">' +
          '<source type="video/mp4" src="img/projects/screenshots/' + sanitizedName + '.mp4">' +
          '<source type="video/webm" src="img/projects/screenshots/' + sanitizedName + '.webm">' +
          '<img src="img/projects/screenshots/' + sanitizedName + '.png" alt="' + name + ' screenshot" title="Your browser does not support the <video> tag">' +
        '</video>'
    } else {
      projectImage = '<img class="img-fluid rounded mb-2" src="img/projects/screenshots/' +
        sanitizedName + '.png" alt="' + name + '">'
    }
  }

  if (project.image2Type !== '') {
    if (project.image2Type === 'video') {
      projectImage2 = '<video autoplay loop muted playsinline class="content-desktop img-fluid rounded mb-2">' +
          '<source type="video/mp4" src="img/projects/screenshots/' + sanitizedName + '2.mp4">' +
          '<source type="video/webm" src="img/projects/screenshots/' + sanitizedName + '2.webm">' +
          '<img src="img/projects/screenshots/' + sanitizedName + '.png" alt="' + name + ' screenshot" title="Your browser does not support the <video> tag">' +
        '</video>'
    } else {
      projectImage2 = '<img class="img-fluid rounded mb-2" src="img/projects/screenshots/' +
        sanitizedName + '2.png" alt="' + name + '">'
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
                projectImage2 +
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
        "name": "Twitter BubbleMaker",
        "subtitle": "Make Your Own Bubble",
        "description": "Browsing Twitter can be difficult because you may see people criticizing the things you like. So, we developed a solution that lets you put yourself in a bubble, and only look at positive tweets! Our program loads tweets from Twitter on a topic of a users choice, then filters out the tweets with negative sentiment using a machine learning algorithm. The negative tweets then have their negative words changed to be positive, and the user is returned only tweets that are positive either naturally or thanks to the algorithm.",
        "technologies": ["Python", "TensorFlow", "TweePy", "NLTK"],
        "imageType": "",
        "image2Type": "",
        "link": "https://github.com/AI-at-GBC/tweet-analysis"
      },
      {
        "name": "Speaker Recognition",
        "subtitle": "ML for Voice Classification",
        "description": "In order to learn data pre-processing and data classification, we created speaker recognition algorithms. The linked repository contains code to transform voice clips into a data set that can be used to train models, and multiple predictive models which can read in that data. One classification method uses a Residual Neural Network, while the other runs image recognition on spectrograms of the audio clips.",
        "technologies": ["Python", "PyDub", "Librosa", "FFMPEG", "FastAI", "TensorFlow"],
        "imageType": "",
        "image2Type": "",
        "link": "https://github.com/AI-at-GBC/voice-classifier"
      },
      {
        "name": "Python for Pythons",
        "subtitle": "AI-Powered Snake Detector",
        "description": "As a prototype for the AI logic behind a mobile application that can be used to detect different types of snakes, we trained different Convolutional Neural Network (CNN) models from the Tensorflow 2 Detection Model Zoo in an effort to benchmark different methods, build a model that works for our purposes, and of course, to learn. We annotated images and trained three different types of CNN - Single Shot MultiBox Detector (SSD), Faster Region Based Convolutional Network (Faster R-CNN), and You Only Look Once v5 (YOLOv5).",
        "technologies": ["Python", "TensorFlow", "ModelZoo", "PyTorch"],
        "imageType": "png",
        "image2Type": "",
        "link": "https://github.com/AI-at-GBC/Python_for_Pythons-Snake_Detection"
      },
      {
        "name": "KSI Analysis",
        "subtitle": "Predicting Injuries With ML",
        "description": "A project to learn how to determine the best hyperparameters for a classical machine learning task. For this project, we created a series of random forest models which review structured traffic accident data from Toronto and predict the severity of injury likely obtained by the involved parties.",
        "technologies": ["Python", "Pandas", "Numpy", "SciKit-Learn"],
        "imageType": "",
        "image2Type": "",
        "link": "https://github.com/AI-at-GBC/ksi_analysis"
      },
      {
        "name": "Made in Canada",
        "subtitle": "Patriotic Browser Extension",
        "description": "Made In Canada is a Chromium browser extension that provides a small banner whenever you visit a (listed) website that provides goods or services that are produced in Canada.",
        "technologies": [],
        "imageType": "png",
        "image2Type": "",
        "link": "https://chrome.google.com/webstore/detail/made-in-canada/nfmnjgklnagmnjikambimgcokimcfjkp"
      },
      {
    		"name": "5to9",
    		"subtitle": "Side Project Collective",
    		"description": "5to9 is a collective for developers who love passion projects and collaboration. It's an effort by some peers from university and myself to create a group where people can work on side projects collaboratively, without necessarily planning on monetizing them. The group has done work on machine learning projects, mood trackers, and things that are just for fun.",
    		"technologies": [],
    		"imageType": "",
        "image2Type": "",
    		"link": "http://5to9.io"
    	},
      {
    		"name": "Shelfaudit",
    		"subtitle": "Author Diversity Analyzer",
        "description": "As an avid reader, I find myself often using Goodreads to track the books I've read, and see how others feel about them. I realized that most people who fill out profiles on Goodreads don't read much beyond the limited selection presented to them in high school, and there's very little diversity in the selection - so I created ShelfAudit, a tool that helps you analyze the diversity of your bookshelf. The goal is just to point out the raw numbers - not commend or condemn anyone.",
    		"technologies": ["PHP", "Laravel", "AngularJS"],
    		"imageType": "video",
    		"image2Type": "video",
      "link": "http://shelfaudit.io"
    	},
      {
    		"name": "Quality Poetry",
    		"subtitle": "Randomly Generated Poetry",
        "description": "A joke about captioning professional photography on Instagram with poetry that a teenager might write evolved into Quality Poetry. It's an API that serves procedurally-generated, badly written poems to a webapp and a Twitter account.",
    		"technologies": ["TypeScript", "AngularJS", "NodeJS", "Twitter API", "Systemd"],
    		"imageType": "png",
        "image2Type": "",
    		"link": "https://twitter.com/QualityPoetry"
    	},
      {
    		"name": "Okay Pill",
    		"subtitle": "Fashion Brand Website with a Twist",
        "description": "Okay pill is a clothing brand built around mental health awareness whose original website I volunteered to build as a favour to the founder. The messaging on the site is utilitarian, telling you that everything will be okay once you take your pill; but when you enter your email, it twists to have messaging about the side effects and anxieties of mood-altering medications.",
    		"technologies": ["NodeJS", "ReactJS"],
    		"imageType": "png",
        "image2Type": "",
    		"link": ""
    	},
      {
    		"name": "Crowdium",
    		"subtitle": "Can you e-lance a whole business?",
        "description": "While I was working at X Movement, I was feeling entrepreneurial - but didn't have the time to execute on anything. Or an idea to execute on, for that matter! So, I came up with a project to have e-Lancers on Fiverr create an entire business - I asked someone for a target market, someone else for a pain point of that target market, etcetera - and eventually had a surprisingly good idea and designs for a mental health support app that matches people who have similar problems into accountability groups! Maybe one day, I'll even build the thing.",
    		"technologies": [],
    		"imageType": "png",
        "image2Type": "png",
      "link": ""
    	},
      {
    		"name": "Music Visualizer",
    		"subtitle": "Unity Project",
        "description": "A simple audio visualizer built for fun in Unity, with scripts written in C#. The program detects the beat of music and pulses lights accordingly. It was meant to be an early prototype of a more fleshed-out music visualizer.",
    		"technologies": ["Unity", "C#"],
    		"imageType": "video",
        "image2Type": "",
    		"link": ""
    	},
      {
    		"name": "HowAmI",
    		"subtitle": "Mood Tracking iOS App",
        "description": "At X Movement, the development team had a daily check-in where we summed up how we were feeling in one word. To keep things interesting, I threw together a little angularJS app to help my team find more descriptive words. Later, it was built into an iOS app.",
    		"technologies": ["Swift", "AngularJS", "PHP"],
    		"imageType": "png",
        "image2Type": "",
    		"link": ""
    	},
      {
    		"name": "Scal3d",
    		"subtitle": "Virtual Reality + Edtech",
        "description": "An immersive, 3D visualization of the universe. Built in Unity and intended for use with an Oculus Rift, Scal3d is a sample of of useful, immersive and fun education technology.",
    		"technologies": ["Unity", "C#", "Oculus Rift"],
    		"imageType": "video",
        "image2Type": "",
        "link": ""
    	},
      {
    		"name": "Crowdlet",
    		"subtitle": "Event-Enhancing Wearable Technology",
        "description": "Part of my university capstone was creating a technology startup. What my group came up with was wearable technology that enhances interactivity in live entertainment spaces using social media, allowing users to control the colour of their wristbands by using twitter hashtags. Each hashtag corresponds to a specific colour, curated by the event's coordinator. The bracelet was created using a web-enabled microcontroller in a custom 3D printed chassis, and web technologies.",
    		"technologies": ["Arduino", "NodeJS", "Objective-C", "Tinkercad"],
    		"imageType": "png",
        "image2Type": "",
        "link": ""
    	},
      {
    		"name": "LotOLife",
    		"subtitle": "Procedural People Generator",
        "description": "A tool that procedurally generates a fake human being using real-world statistics. Starting with gender and country of origin, the tool attempts to generate personal information, abilities, and more. The name comes from the fact that there’s a “Lot O’ Life”, and that the random selection of traits in life is kind of like playing the Lotto.",
    		"technologies": ["PHP", "Lithium", "Bootstrap"],
    		"imageType": "",
        "image2Type": "",
        "link": ""
    	},
      {
    		"name": "Mashees",
    		"subtitle": "User-Generated Content Mash-Ups",
        "description": "A fun tool that creates a mashup of gifs, audio and text. Content is driven by the users, so the amount of potential combinations is almost unlimited! Built in Node.js and React.",
    		"technologies": ["NodeJS", "Postgres", "ReactJS"],
    		"imageType": "png",
        "image2Type": "",
        "link": ""
    	}
    ]
}
