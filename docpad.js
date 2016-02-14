module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "Agile Floripa",
      description: "Conference description",
      date: "12 de Março",
      // If your event is free, just comment this line
      price: "R$ 50,00",
      venue: "CESUSC",
      address: "CESUSC: SC-401, 9301 - Santo Antonio de Lisboa",
      city: "Floripa",
      state: "Santa Catarina"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Increva-se!",
        link: "http://eventick.com.br"
    },

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    //forkButton: {
    //    repository: "https://github.com/braziljs/conf-boilerplate"
    //},

    // Site info
    site: {
      theme: "agile-floripa",
      url: "http://braziljs.github.io/conf-boilerplate/",
      googleanalytics: "UA-33656081-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      'schedule',
      'speakers',
      'sponsors',
      'partners'
      // 'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "Sobre",
      location: "Local",
      speakers: "Palestrantes",
      schedule: "Grade",
      sponsors: "Patrocinadores",
      partners: "Parceiros",
      contact: "Contato"
    },

    // The entire schedule
    schedule: [
      {
        name: "Abertura",
        time: "10:00"
      },
      {
        name: "Simone Pittner",
        photo: "themes/agile-floripa/img/speaker/SimonePittner.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Linux Foundation",
        link: {
          href: "http://twitter.com/linus",
          text: "@simonepittner"
        },
        presentation: {
          title: "Desajustados",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "10:20"
        }
      },
      {
        name: "Talks",
        time: "11:10"
      },
      {
        name: "Coffee",
        time: "11:50"
      },
      {
        name: "Talks",
        time: "12:10"
      },
      {
        name: "Almoço",
        time: "12:50"
      },
      {
        name: "Talks",
        time: "14:20"
      },
      {
        name: "Talks",
        time: "15:00"
      },
      {
        name: "Coffee",
        time: "15:40"
      },
      {
        name: "Manoel Pimentel",
        photo: "themes/agile-floripa/img/speaker/ManoelPimentel.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Delta Command",
        link: {
          href: "http://twitter.com/littlechuck",
          text: "@manoelp"
        },
        presentation: {
          title: "How to kill a elephant with one finger",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "16h00"
        }
      },
      {
        name: "Encerramento",
        time: "16:50"
      },
      {
        name: "Happy Hour",
        time: "17:00"
      }
    ],

    // List of Sponsors
    sponsors: [
      {
        name: "Eventick",
        logo: "themes/yellow-swan/img/sponsor.png",
        url: "http://eventick.com.br"
      }
    ],

    // List of Partners
    partners: [
      {
        name: "BrazilJS",
        logo: "themes/yellow-swan/img/partner.png",
        url: "http://braziljs.org"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    },

    // Site Path
    getUrl: function() {
    	return this.site.url;
    }
  }
};