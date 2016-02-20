module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "Agile Floripa",
      description: "1º Agile Floripa dia 12 de Março de 2016",
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
        text: "Inscreva-se!",
        link: "https://inscricoes.agilebrazil.com/events/18/attendances/new"
    },

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    //forkButton: {
    //    repository: "https://github.com/braziljs/conf-boilerplate"
    //},

    // Site info
    site: {
      theme: "agile-floripa",
      url: "http://braziljs.github.io/conf-boilerplate/",
      googleanalytics: "UA-73757058-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
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
        name: "Simone Pittner",
        photo: "themes/agile-floripa/img/speaker/SimonePittner.jpg",
        bio: "Engenheira de Telecomunicações e Software, Psicopedagoga e CSP e outras siglas :P. Entusiasta de agilidade, com experiência práticas. Empreendedora na BLUEAgile, Trainer da Adaptworks, ex-COO da SocialBase. Mãe, bailarina aposentada, eterna curiosa, Paixão por pessoas, praia e natureza e cuupcakes. Membro da comissão organizadora do Agile Brasil desde 2012 e Agile Trends São Paulo desde 2013.",
        company: "BLUEAgile",
        link: {
          href: "http://twitter.com/simonepittner",
          text: "@simonepittner"
        },
        presentation: {
          title: "Desajustados",
          description: "\"Aqui estão os loucos. Os desajustados. Os rebeldes. Os encrenqueiros. Os que fogem ao padrão. Aqueles que veem as coisas de um jeito diferente. Eles não se adaptam às regras, nem respeitam o status quo. Você pode citá-los ou achá-los desagradáveis, glorificá-los ou desprezá-los. Mas a única coisa que você não pode fazer é ignorá-los. Porque eles mudam as coisas. Eles empurram adiante a raça humana. E enquanto alguns os veem como loucos, nós os vemos como gênios. Porque as pessoas que são loucas o bastante para pensarem que podem mudar o mundo são as únicas que realmente podem fazê-lo.\" | Jack Kerouac. Isso é ser Agile!",
          time: "10:20"
        }
      },
      {
        name: "Talk/fishbowl/painel 1",
        time: "11:10"
      },
      {
        name: "Talk/fishbowl/painel 2",
        time: "11:35"
      },
      {
        name: "Talk/fishbowl/painel 3",
        time: "12:00"
      },
      {
        name: "Talk/fishbowl/painel 4",
        time: "12:25"
      },
      {
        name: "Almoço",
        time: "12:50"
      },
      {
        name: "Talk/fishbowl/painel 5",
        time: "14:20"
      },
      {
        name: "Talk/fishbowl/painel 6",
        time: "14:45"
      },
      {
        name: "Talk/fishbowl/painel 7",
        time: "15:10"
      },
      {
        name: "Coffee",
        time: "15:35"
      },
      {
        name: "Manoel Pimentel",
        photo: "themes/agile-floripa/img/speaker/ManoelPimentel.jpg",
        bio: "É Agile Coach/Trainer na Adaptworks Treinamentos e Presidente da Agile Alliance Brazil. Trabalha há mais de 18 anos na área de TI, onde possui uma profunda experiência em ajudar, como coach ou trainner, a transição/experimentação Ágil (Scrum, XP, FDD, Lean, SAFe) em grandes e complexas organizações (por exemplo: Sicoob, Bancoob, Stefanini, Oi, GVT, XP, Petrobras, ITA, Itaú, Localiza). Manoel é um dos pioneiros no movimento Ágil no Brasil. Ajudou na tradução oficial do Manifesto Ágil para o Português. É membro ativo da organização do Agile Brazil (inclusive sendo chairman da edição 2013). Ele também é o fundador da Revisa e Blog Visão Ágil. Já escreveu para portais internacionais como InfoQ, AgileJournal, ScrumAlliance, AgileAlliance e revistas como SQL Magazine, JavaMagazine, Mundo J e outras. Revisou e Escreveu o prefácio do Livro Agile Project Management (Editora AltaBooks) em Português e do Livro Scrum – Gestão Ágil para Projetos de Sucesso (Editora Casa do Código). Também é um co-autores do livro Métodos Ágeis para o Desenvolvimento de Software (Editora Bookman). É o mais ativo licensed trainer de Management 3.0 no Brasil, tendo inclusive, contribuído para formação e licenciamento de outros grandes facilitadores do cenário nacional. Também é detentor das certificações SPC (Scaled Agile Academy), CAC (Alpha Coach – WorthEthic), CSM, CSPO e CSP (ScrumAlliance).",
        company: "Adaptworks",
        link: {
          href: "http://twitter.com/manoelp",
          text: "@manoelp"
        },
        presentation: {
          title: "The Teenage Mutant Ninja Agilists",
          description: "Nessa palestra, você vai conhecer a história dos Teenage Mutant Ninja Agilists. Um TMNA é um verdadeiro bicho estranho. Um adolescente, que recém chegou aos 15 anos. Adolescente que ao mesmo tempo encanta, por sua destreza, também pode assustar por ser tão difícil de compreender/conviver. Que ao mesmo tempo que pode ajudar  a eliminar desperdícios e na criação valor para toda a cadeia de negócio, pode ser extremamente mortal quando nas mãos erradas. Essa é uma palestra do tipo provocativa-reflexiva-autobiográfica que objetiva fazer uma grande revisão através de histórias reais de sucesso e falhas em experimentações ágeis.  Toda essa revisão será importante para entender o que são os métodos ágeis e, para onde eles irão face aos novos desafios que a adolescência e a vida adulta estão mostrando.",
          time: "16h00"
        }
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
        url: "http://braziljs.org"
      },
      {
        name: "Agile Trends",
        logo: "themes/agile-floripa/img/partner/agile-trends.png",
        url: "http://braziljs.org"
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
