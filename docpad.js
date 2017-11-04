module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "Agile Floripa - 4º Agile Floripa dia 9 de Dezembro de 2017",
      description: "4º Agile Floripa dia 9 de Dezembro de 2017",
      date: "9 de Dezembro",
      // If your event is free, just comment this line
      //price: "Inscrições abertas!",
      venue: "SENAI/CTAI",
	  address: "Rodovia SC 401, 3730 - Saco Grande, 88032-005",
      addressGoogle: "SENAI Florianópolis (CTAI)",
      city: "Florianópolis",
      state: "Santa Catarina"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Inscrições de R$75 até R$110",
        link: "https://inscricoes.agilebrazil.com/events/34/attendances/new"
    },

    // callToActionSubmission: {
    //     text: "Submeta sua Palestra!",
    //     link: "https://goo.gl/forms/7Dgelxsm6U2b5qRy2"
    // },

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
      'courses',
      'location',
      'schedule',
      'speakers',
      //'sponsors',
      'partners',
      'faq'
      // 'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "Sobre",
      courses: "Curso",
      location: "Local",
      speakers: "Palestrantes",
      schedule: "Grade",
      sponsors: "Patrocinadores",
      partners: "Parceiros",
      faq: "FAQ",
      contact: "Contato"
    },

    courses: [
      {
        name: "Rodrigo Yoshima",
        photo: "themes/agile-floripa/img/speaker/RodrigoYoshima.jpg",
        company: "",
        bio: "Técnico em Processamento de Dados e Bacharel em Administração de Empresas e Economia. É Advanced Accredited Lean Kanban Trainer (AAKT) e Kanban Coach Professional (KCP) pela Lean-Kanban University. Com mais de 20 anos de experiência na área de tecnologia, Rodrigo atua como consultor e instrutor em melhoria de processos tendo implantado métodos Lean e Agile em mais de 200 equipes em mais de 30 empresas. Casado, pai e velejador.",
        presentation: {
          title: "Treinamento Kanban (KMP I) + Ingresso FREE para o 4º Agile Floripa (válido enquanto houverem vagas no evento)",
          //featured: "\\o/ BIS ",
          description: "Aprenda a melhorar os processos da sua empresa de forma evolucionária, lidando com a resistência a mudanças e ajustando aos objetivos da sua organização. A Aspercom é pioneira no Brasil na aplicação do Método Kanban em pequenas, médias e grandes empresas nos mais variados setores. Com a nossa experiência você aprende neste treinamento como melhorar o seu processo de forma evolucionária - lidando com a resistência natural das pessoas a mudanças - tornando seu processo ajustado aos objetivos de negócio da sua organização! Este treinamento é certificado Lean-Kanban University (Kanban Method Professional I).",
          local: "CIASC",
          date: "7 e 8 de Dezembro",
          time: "08:00 às 17:00",
          value: "Early Bird (10 vagas ou até 15/Nov): R$ 1.150 / Normal (10 vagas ou até 5/Dez): R$ 1.350",
		  cta: 'http://aspercom.com.br/kanban-floripa/',
		  ctaText: 'Inscreva-se'
        }
      }
    ],

    // The entire schedule
    schedule: [
      {
        name: "Credenciamento e Welcome coffee.",
        time: "08:30"
      },
      {
         name: "",
          // photo: "themes/agile-floripa/img/speaker/antonio.jpg",
          company: "",
          bio: "",
          presentation: {
              title: "",
              description: "",
              time: ""
          }
      },
      {
          name: "",
          // photo: "themes/agile-floripa/img/speaker/antonio.jpg",
          company: "",
          bio: "",
          presentation: {
              title: "",
              description: "",
              time: ""
          }
      },
      {
          name: "Coffee break",
          time: "10:40"
      },
      {
          name: "",
          // photo: "themes/agile-floripa/img/speaker/antonio.jpg",
          company: "",
          bio: "",
          presentation: {
              title: "",
              description: "",
              time: ""
          }
      },
      {
          name: "",
          // photo: "themes/agile-floripa/img/speaker/antonio.jpg",
          company: "",
          bio: "",
          presentation: {
              title: "",
              description: "",
              time: ""
          }
      },
      {
        name: "Almoço",
        time: "12:30"
      },
      {
          name: "",
          // photo: "themes/agile-floripa/img/speaker/antonio.jpg",
          company: "",
          bio: "",
          presentation: {
              title: "",
              description: "",
              time: ""
          }
      },
      {
          name: "",
          // photo: "themes/agile-floripa/img/speaker/antonio.jpg",
          company: "",
          bio: "",
          presentation: {
              title: "",
              description: "",
              time: ""
          }
      },
      {
        name: "Coffee break",
        time: "15:40"
      },
      {
          name: "",
          // photo: "themes/agile-floripa/img/speaker/antonio.jpg",
          company: "",
          bio: "",
          presentation: {
              title: "",
              description: "",
              time: ""
          }
      },
      {
        name: "Encerramento + Sorteios e Happy Hour \\o/",
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
        name: "CIASC",
        logo: "themes/agile-floripa/img/partner/CIASC.png",
        url: "http://www.ciasc.sc.gov.br/"
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
      },
      {
        name: "GUT-SC",
        logo: "themes/agile-floripa/img/partner/gutsc.jpg",
        url: "http://gutssc.wordpress.com/"
      },
      {
        name: "SENAI",
        logo: "themes/agile-floripa/img/partner/senai.png",
        url: "http://sc.senai.br/"
      },
      {
        name: "Agilidade",
        logo: "themes/agile-floripa/img/partner/agilidade.jpg",
        url: "http://agilidade.org/"
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
