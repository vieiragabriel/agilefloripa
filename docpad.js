module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "Agile Floripa - 2º Agile Floripa dia 11 de Junho de 2016",
      description: "2º Agile Floripa dia 11 de Junho de 2016",
      date: "11 de Junho",
      // If your event is free, just comment this line
      //price: "R$ 50,00",
      venue: "CESUSC",
      address: "CESUSC: SC-401, 9301 - Santo Antonio de Lisboa",
      city: "Floripa",
      state: "Santa Catarina"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Submeta sua Palestra!",
        link: "http://call4paperz.com/events/2o-agile-floripa"
    },

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    //forkButton: {
    //    repository: "https://github.com/braziljs/conf-boilerplate"
    //},

    // Site info
    site: {
      theme: "agile-floripa",
      url: "http://agilefloripa.com.br",
      googleanalytics: "UA-73757058-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      'schedule',
      //'speakers',
      //'sponsors',
      'partners',
      'faq'
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
      faq: "FAQ",
      contact: "Contato"
    },

    // The entire schedule
    schedule: [
      {
        name: "Credenciamento + Coffee",
        time: "09:15"
      },
      {
        name: "Abertura",
        time: "10:00"
      },
      {
        name: "Palestras, Painel, Fishbowl, ou Open Space! Submeta e venha produzir conteúdo para comunidade :)",
        time: "10:20"
      },
      {
        name: "Almoço",
        time: "12:50"
      },
      {
        name: "Palestras, Painel, Fishbowl, ou Open Space! Submeta e venha produzir conteúdo para comunidade :)",
        time: "14:20"
      },
      {
        name: "Encerramento + Sorteios",
        time: "16:50"
      },
      {
        name: "Happy Hour",
        time: "17:10"
      }
    ],
    // List of Sponsors
    sponsors: [
      {
        name: "Agile Alliance Brazil",
        logo: "themes/agile-floripa/img/sponsor/agilealliance-brazil_inverted_box.png",
        url: "https://www.agilealliance.org/pt/"
      }
    ],

    // List of Partners
    partners: [
      {
        name: "Agile Alliance Brazil",
        logo: "themes/agile-floripa/img/sponsor/agilealliance-brazil_inverted_box.png",
        url: "https://www.agilealliance.org/pt/"
      },
      {
        name: "Agile Brazil",
        logo: "themes/agile-floripa/img/partner/logoAgileBrazil.png",
        url: "http://www.agilebrazil.com"
      },
      {
        name: "Agile Trends",
        logo: "themes/agile-floripa/img/partner/agile-trends.png",
        url: "http://agiletrendsbr.com/"
      },
      {
        name: "CESUSC",
        logo: "themes/agile-floripa/img/partner/CESUSC.png",
        url: "http://www.cesusc.edu.br/"
      },
      {
        name: "Scrum Rion",
        logo: "themes/agile-floripa/img/partner/scrumrio.png",
        url: "http://scrumrio.com/"
      },
      {
        name: "PHP SC",
        logo: "themes/agile-floripa/img/partner/phpsc.png",
        url: "http://www.phpsc.com.br/"
      },
      {
        name: "Tá Safo",
        logo: "themes/agile-floripa/img/partner/TaSafo.png",
        url: "http://tasafo.org/"
      },
      {
        name: "Caipira Ágil",
        logo: "themes/agile-floripa/img/partner/caipira.png",
        url: "http://www.caipiraagil.com/"
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
