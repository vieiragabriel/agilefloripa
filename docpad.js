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
        photo: "themes/agile-floripa/img/speaker/bruno-brandes.jpg",
        company: "Take",
        bio: "Apaixonado por aprender coisas novas e trabalhar com pessoas. Fundou em 2012, a Studio Ws3, uma empresa focada principalmente em tecnologias ASP.NET MVC. Atualmente trabalha como Iteration Manager e analista de sistemas na Take.net, e concilia estas atividades com as de ser proprietário de uma empresa que ainda busca crescimento no mercado. Formado em Sistemas de Informação pelo Centro Universitário UNA e trabalhando com tecnologia há 8 anos, está focado em melhorar sua jornada em projetos de softwares.",
        presentation: {
          title: "Desafios das estimativas - Utilizando métricas científicas com Kanban",
          description: "Na maioria das vezes, estimativas são feitas para saber o Retorno Sobre Investimento (ROI). Pretendo compartilhar minha jornada até aqui, abordando como abandonar timeboxes e estimativas com a implantação do Kanban. Vou apresentar como isso possibilitou o alcance a dados científicos do processo, deixando o fluxo de trabalho mais previsível e mais ágil, aumentando valor e qualidade das entregas.",
          time: "10:00"
        }
      },
      {
        name: "Coffee",
        time: "10:30"
      },
      {
        name: "Matheus Braun Magrin",
        photo: "themes/agile-floripa/img/speaker/matheus_magrin.jpg",
        company: "Bravi",
        bio: "Cientista de dados na Bravi Software, na qual atua com empresas do ramo da educação. Além disso foi programador em projetos internacionais de Learning Analytics e de Gerência de Instituições de Ensino. É formado em Ciências da Computação pela Universidade Federal de Santa Catarina (UFSC). Matheus também é permacultor e além de estudar agroflorestas e bioconstrução, tem estudado qual o impacto da Permacultura Social na produção de tecnologia.",
        presentation: {
          title: "Como a Permacultura pode contribuir com a Cultura Ágil",
          description: "O que uma metodologia para planejamento de assentamentos humanos sustentáveis, o movimento Ágil e o jeito de solucionar problemas do Design Thinking tem em comum? Apesar de terem surgido em áreas de atuação bem distintas, seus princípios básicos possuem afinidades surpreendentes. Vamos conhecer melhor a Permacultura e como ela pode auxiliar na criação de soluções inovadoras no mundo da tecnologia.",
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
          description: "Os limites não explícitos de autonomia e a burocratização dos processos de decisão estão entre as principais causas de medo e baixa pró-atividade das organizações. Nesta palestra, mostraremos como estamos tornando os limites da autonomia visíveis para pessoas e equipes sem burocratizar os processos de decisão e mudança das empresas com quem trabalhamos.",
          time: "11:30"
        }
      },
      {
        name: "Almoço",
        time: "12:00"
      },
      {
        name: "Marcelo Benez",
        photo: "themes/agile-floripa/img/speaker/marcelo-benez.jpg",
        company: "Blueticket",
        bio: "Atualmente na posição de gerente de produto e tecnologia na Blueticket com o desafio de alinhar os objetivos estratégicos de crescimento da empresa, gerando confiança e conveniência na entrega de valor para seus clientes através das disciplinas ágeis de gestão.",
        presentation: {
          title: "Agilidade com foco em aproximar pessoas de experiências ao vivo",
          description: "A proposta é apresentar os bastidores dos ciclos de melhorias que foram adotadas ao longos dos últimos 5 anos. Como os princípios ágeis contribuíram (ou não) na conciliação entre as necessidades de entrega de software com o propósito da Blueticket. A importância de interpretar e aplicar melhorias entendendo as condições do meio: estágio do negócio, maturidade do time, estágio do produto, etc.",
          time: "13:30"
        }
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
          description: "Quando se chega num novo ambiente que é disfuncional, é difícil formular um plano para resolver os problemas. Tudo está pegando fogo e o tempo é escasso. Nesta sessão quero compartilhar estratégias e dicas que aprendi na comunidade e com a vivência em consultoria, que sirvam como um guia para quando você se depara com um sistema de trabalho problemático e precisa torná-lo otimizado e saudável.",
          time: "15:30"
        }
      },
      {
        name: "Mariana Graf",
        photo: "themes/agile-floripa/img/speaker/Mariana-Graf.jpg",
        company: "Taller",
        bio: "Cientista Social com MBA em Gestão de Pessoas, atua no núcleo de criação da Taller como People, com foco na facilitação das relações sociais e no bem estar dos profissionais antes de tudo. Apaixonada pelas relações humanas, trabalha mantendo o mindset ágil em suas práticas relacionadas às pessoas. Participa dos comitês organizadores de comunidades como Agile Brazil, Agile Trends e Agile Floripa e adora compartilhar conhecimento.",
        presentation: {
          title: "A importância da transparência na cultura ágil",
          description: "A transparência garante que os colaboradores se sintam pertencentes aos projetos e à empresa e seus resultados. Compartilho algumas ações fora do desenvolvimento de software e design que poderão ser norteadoras e estratégicas na hora de manter a clareza, o engajamento e alinhamento entre os profissionais e mostrando ainda porquê a transparência pode impulsionar seu negócio e reter seus talentos.",
          time: "16:00"
        }
      },
      {
        name: "Rodrigo Yoshima",
        photo: "themes/agile-floripa/img/speaker/RodrigoYoshima.jpg",
        company: "Aspercom",
        bio: "Técnico em Processamento de Dados e Bacharel em Administração de Empresas e Economia. É Advanced Accredited Lean Kanban Trainer (AAKT) e Kanban Coach Professional (KCP) pela Lean-Kanban University. Com mais de 20 anos de experiência na área de tecnologia, Rodrigo atua como consultor e instrutor em melhoria de processos tendo implantado métodos Lean e Agile em mais de 200 equipes em mais de 30 empresas. Casado, pai e velejador.",
        presentation: {
          title: "O que é agilidade sob as lentes do Kanban?",
          description: "Você realmente sabe o que é agilidade? Você entende como funciona um sistema baseado em Fluxo? Sabe o momento certo de se comprometer com as entregas? Entende sobre métricas importantes para o seu negócio? Concorda que é possível sim ser previsível mesmo dentro de um sistema complexo? Sabe como, quando e onde deve direcionar os seus esforços de melhoria de processos? Essas e outras perguntas Rodrigo Yoshima - especialista em Agile, Lean e Kanban - responderá nessa palestra onde serão apresentadas as tendências mais recentes da gestão moderna.",
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
