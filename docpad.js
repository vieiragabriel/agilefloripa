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
      price: "R$ 50,00",
      venue: "CESUSC",
	  address: "Rod. José Carlos Daux (SC401), 9301 - Km 10, Santo Antônio de Lisboa - Florianópolis/SC",
      addressGoogle: "CESUSC: Rod. José Carlos Daux, 80 - Santo Antonio de Lisboa",
      city: "Floripa",
      state: "Santa Catarina"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Inscreva-se!",
        link: "https://inscricoes.agilebrazil.com/events/19/attendances/new"
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
          title: "Treinamento Kanban (KMP I) + Ingresso FREE para o 2º Agile Floripa",
          featured: "\\o/ Novidade!",
          description: "Quer melhorar os processos da sua empresa de tecnologia? A Aspercom é pioneira no Brasil na aplicação do Método Kanban em pequenas, médias e grandes empresas nos mais variados setores. Com a nossa experiência você aprende neste treinamento como melhorar o seu processo de forma evolucionária - lidando com a resistência natural das pessoas a mudanças - tornando seu processo ajustado aos objetivos de negócio da sua organização! Este treinamento é certificado Lean-Kanban University (Kanban Method Professional I).",
          local: "CESUSC",
          date: "09 e 10 de Junho",
          time: "08:00 às 17:00",
          value: "R$ 750,00",
		  cta: 'http://aspercom.com.br/kanban-floripa/',
		  ctaText: 'Inscreva-se'
        }
      }
    ],

    // The entire schedule
    schedule: [
      {
        name: "Credenciamento",
        time: "08:30"
      },
      {
        name: "Abertura",
        time: "09:00"
      },
      {
        name: "Victor Hugo Germano",
        photo: "themes/agile-floripa/img/speaker/VictorHugoGermano.jpg",
        company: "Lambda3",
        bio: "Desenvolvedor há 13 anos, escalador e mais recentemente: empreendedor. Formado pela UFSC e Trabalhando com métodos ágeis desde 2004, já viu várias empresas falirem. Depois de inúmeras tentativas 'in company' de mudança cultural, cansou de trabalhar para os outros e decidiu o óbvio: fazer a própria empresa dar certo. Assim nasceu a Lambda3, empresa multidisciplinar que atualmente possui projetos Ágeis de diversos tamanhos entregando valor de negócio com inovação e muito bom humor. Victor também é maluco o bastante para acreditar que é possível um mundo sem gerentes. Neste momento, Victor é um dos diretores do Board da Agile Alliance Global, e conselheiro da Agile Alliance Brazil",
        presentation: {
          title: "Keynote - Victor Hugo Germano",
          description: "",
          time: "09:10"
        }
      },
      {
        name: "Bruno Brandes",
        photo: "themes/agile-floripa/img/speaker/user.png",
        company: "Take",
        bio: "",
        presentation: {
          title: "Desafios das estimativas - Utilizando métricas científicas com Kanban",
          description: "",
          time: "10:00"
        }
      },
      {
        name: "Coffee",
        time: "10:30"
      },
      {
        name: "Matheus Braun Magrin",
        photo: "themes/agile-floripa/img/speaker/user.png",
        company: "Bravi",
        bio: "",
        presentation: {
          title: "Como a Permacultura pode contribuir com a Cultura Ágil",
          description: "",
          time: "11:00"
        }
      },
      {
        name: "Danilo Garcia",
        photo: "themes/agile-floripa/img/speaker/user.png",
        company: "Creatify",
        bio: "",
        presentation: {
          title: "Organização sem burocracia: Uso de Delegation Board em diferentes cenários",
          description: "",
          time: "11:30"
        }
      },
      {
        name: "Almoço",
        time: "12:00"
      },
      {
        name: "Em breve",
        time: "13:30"
      },
      {
        name: "Open Space",
        time: "14:00"
      },
      {
        name: "Coffee",
        time: "15:00"
      },
      {
        name: "Wesley Tiago Zapellini",
        photo: "themes/agile-floripa/img/speaker/WesleyTiagoZapellini.jpg",
        company: "Plataformatec",
        bio: "Catarinense perdido em São Paulo desde 2013. Gerente de Projetos Ágeis na Plataformatec, ajuda times de alta performance a entregar valor aos clientes. Formado em Sistemas de Informação pela UFSC, teve seu primeiro contato com metodologias ágeis em 2011, ainda em Florianópolis, quando implantou Scrum em uma pequena equipe.",
        presentation: {
          title: "Estratégias para otimizar um sistema de trabalho",
          description: "",
          time: "15:30"
        }
      },
      {
        name: "Mariana Graf",
        photo: "themes/agile-floripa/img/speaker/user.png",
        company: "Taller",
        bio: "",
        presentation: {
          title: "A importância da transparência na cultura ágil",
          description: "",
          time: "16:00"
        }
      },
      {
        name: "Rodrigo Yoshima",
        photo: "themes/agile-floripa/img/speaker/RodrigoYoshima.jpg",
        company: "Aspercom",
        bio: "Técnico em Processamento de Dados e Bacharel em Administração de Empresas e Economia. É Advanced Accredited Lean Kanban Trainer (AAKT) e Kanban Coach Professional (KCP) pela Lean-Kanban University. Com mais de 20 anos de experiência na área de tecnologia, Rodrigo atua como consultor e instrutor em melhoria de processos tendo implantado métodos Lean e Agile em mais de 200 equipes em mais de 30 empresas. Casado, pai e velejador.",
        presentation: {
          title: "Keynote - Rodrigo Yoshima",
          description: "",
          time: "16:30"
        }
      },
      {
        name: "Encerramento + Sorteios e Happy Hour \\o/",
        time: "17:20"
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
