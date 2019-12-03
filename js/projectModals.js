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
  return '<div class="col-md-6 col-lg-4 text-center">' +
    '<div class="portfolio-item mx-auto small-bottom-margin" data-toggle="modal" data-target="#portfolioModal' + modalKey + '">' +
      '<div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">' +
        '<div class="portfolio-item-caption-content text-center text-white">' +
          '<i class="fas fa-plus fa-3x"></i>' +
        '</div>' +
      '</div>' +
      '<img class="img-fluid" src="img/projects/icons/' + project.name.toLowerCase().replace(/\s/g, '') + '.png" alt="' + project.name + ' logo">' +
    '</div>' +
    '<h5 class="no-bottom-margin project-title">' + project.name + '</h5>' +
    '<p class="project-desc">' + project.subtitle + '</p>' +
  '</div>'
}

function getProjectModal(project, modalKey) {
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
                '<h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">' + project.name + '</h2>' +
                '<div class="divider-custom">' +
                  '<div class="divider-custom-line"></div>' +
                  '<div class="divider-custom-icon">' +
                    '<i class="fas fa-star"></i>' +
                  '</div>' +
                  '<div class="divider-custom-line"></div>' +
                '</div>' +
                '<img class="img-fluid rounded mb-5" src="' + project.imageUrl + '" alt="' + project.name + '">' +
                '<p class="mb-5">' + project.description + '</p>' +
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
    		"description": "",
    		"technologies": "teamwork",
    		"imageUrl": "/img/projects/screenshots/.png"
    	},
      {
    		"name": "Crowdium",
    		"subtitle": "Can you e-lance a whole business?",
        "description": "",
    		"technologies": "",
    		"imageUrl": "/img/projects/screenshots/.png"
    	},
      {
    		"name": "Shelfaudit",
    		"subtitle": "Author diversity analyzer",
        "description": "",
    		"technologies": "",
    		"imageUrl": "/img/projects/screenshots/.png"
    	},
      {
    		"name": "Quality Poetry",
    		"subtitle": "Randomly Generated Poetry",
        "description": "",
    		"technologies": "",
    		"imageUrl": "/img/projects/screenshots/.png"
    	},
      {
    		"name": "LotOLife",
    		"subtitle": "Procedural People Generator",
        "description": "",
    		"technologies": "",
    		"imageUrl": "/img/projects/screenshots/.png"
    	},
      {
    		"name": "Okay Pill",
    		"subtitle": "A Fashion Brand Website with a Twist",
        "description": "",
    		"technologies": "React",
    		"imageUrl": "/img/projects/screenshots/.png"
    	},
      {
    		"name": "Music Visualizer",
    		"subtitle": "Unity Project",
        "description": "",
    		"technologies": "",
    		"imageUrl": "/img/projects/screenshots/.png"
    	},
      {
    		"name": "HowAmI",
    		"subtitle": "Mood Tracking iOS App",
        "description": "",
    		"technologies": "",
    		"imageUrl": "/img/projects/screenshots/.png"
    	},
      {
    		"name": "Scal3d",
    		"subtitle": "Edtech Virtual Reality Experience",
        "description": "",
    		"technologies": "",
    		"imageUrl": "/img/projects/screenshots/.png"
    	},
      {
    		"name": "Crowdlet",
    		"subtitle": "Event-Enhancing Wearable Technology",
        "description": "",
    		"technologies": "",
    		"imageUrl": "/img/projects/screenshots/.png"
    	},
      {
    		"name": "Mashees",
    		"subtitle": "User-Generated Content Mash-Ups",
        "description": "",
    		"technologies": "",
    		"imageUrl": "/img/projects/screenshots/.png"
    	}
    ]
}
