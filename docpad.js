module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "Agile Floripa - 3º Agile Floripa dia 18 de Março de 2017",
      description: "3º Agile Floripa dia 18 de Março de 2017",
      date: "18 de Março",
      // If your event is free, just comment this line
      price: "R$ 50,00",
      venue: "CIASC",
	  address: "R. Murilo Andriani, 327 - Itacorubi, Florianópolis - SC",
      addressGoogle: "CIASC - Centro de Informática e Automação do Estado de Santa Catarina, R. Murilo Andriani, 327 - Itacorubi, SC, 88034-902",
      city: "Floripa",
      state: "Santa Catarina"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Inscreva-se!",
        link: "https://inscricoes.agilebrazil.com/events/30/attendances/new"
    },

    callToActionSubmission: {
        text: "Submeta sua Palestra!",
        link: "https://goo.gl/forms/eJ4Dvj99DCKemPkk2"
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
          title: "Treinamento Kanban (KMP I) + Ingresso FREE para o 3º Agile Floripa",
          featured: "\\o/ BIS ",
          description: "Aprenda a melhorar os processos da sua empresa de forma evolucionária, lidando com a resistência a mudanças e ajustando aos objetivos da sua organização. A Aspercom é pioneira no Brasil na aplicação do Método Kanban em pequenas, médias e grandes empresas nos mais variados setores. Com a nossa experiência você aprende neste treinamento como melhorar o seu processo de forma evolucionária - lidando com a resistência natural das pessoas a mudanças - tornando seu processo ajustado aos objetivos de negócio da sua organização! Este treinamento é certificado Lean-Kanban University (Kanban Method Professional I).",
          local: "CIASC",
          date: "16 e 17 de março",
          time: "08:00 às 17:00",
          value: "R$ 900,00",
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
        name: "Annelise Gripp",
        photo: "themes/agile-floripa/img/speaker/annelise.jpg",
        company: "Integrare Consultoria e Capacitação",
        bio: "Como consultora, seu trabalho consiste em expandir, compartilhar e aplicar seus conhecimentos, habilidades e experiências nas empresas, implantando projetos utilizando Metodologia Ágil (XP, Kanban, Scrum), Agile Coach (coaching aplicado a líderes e times) e Personal/Executive Coach (desenvolvimento de competências para alcançar resultados). Fundadora do Rio Agile. Nos últimos 7 anos se dedicou aos estudos das Metodologias Ágeis, onde projetos, produtos e pessoas desenvolvem um trabalho juntos, entregando software com rapidez, qualidade e satisfação, para o cliente e para equipe.",
        presentation: {
          title: "Transformação Ágil, a arte de transformar lagartas em borboletas!",
          description: "-",
          time: "09:00"
        }
      },
      {
          name: "Antonio de Campos",
          photo: "themes/agile-floripa/img/speaker/user.png",
          company: "Createfy",
          bio: "Mini-bio",
          presentation: {
              title: "Porque eu deveria saber mais sobre Management 3.0?",
              description: "Já ouviu falar de Management 3.0 mas não conhece muito e quer decidir se deve aprender mais sobre ele? Tem dúvidas se as práticas e ferramentas de Management 3.0 podem te ajudar a resolver problemas de gestão e organização no seu time e na sua empresa? Esta palestra vai te ajudar a entender como usar algumas das ferramentas mais úteis e quais situações elas se propõem a resolver. Além disso, vou te mostrar algumas das muitas ótimas fontes de pesquisa para você aprender mais sobre Management 3.0 e mudar o seu ambiente de trabalho (radicalmente ou de leve, você escolhe). Se isso não te ajudar a se decidir, não sei o que fará! =) Tenho utilizado e ensinado ferramentas de Management 3.0 em várias empresas nos últimos anos e vejo o como elas podem fazer muita diferença e resolver problemas já tidos como parte da cultura e das limitações de empresas, gestores (recém promovidos e experientes) e até mesmo de times auto-geridos. Esta palestra pretende gerar mais interesse do público no assunto e motivá-lo a sair das abordagens manjadas.",
              time: "10:00"
          }
      },
      {
          name: "Coffee break",
          time: "10:40"
      },
      {
          name: "Felipe Rodrigues",
          photo: "themes/agile-floripa/img/speaker/felipero.jpg",
          company: "Crafters Innovation Studio",
		  bio: "Empreendedor nato, fundou a Crafters Innovation Studio para ajudar empresas a desenvolver produtos com uma melhor proposta de valor. Especializado em inovação para novos modelos de negócio, customer discovery e análise estratégica de dados. Há 12 anos transformando sonhos em negócios.",
          presentation: {
              title: "Não faça um MVP!",
              description: "Cada vez mais, os empreendedores acreditam que o MVP vai ajudar a transpor as barreiras financeiras de suas Startups, ao mesmo tempo que despendem um esforço desproporcional para construí-lo. Na maioria das vezes o MVP custa caro e traz pouco retorno. Muitas startup tem dificuldades para conseguir investimento mesmo com um ótimo MVP. Quando é que as startups vão entender que uma ideia e um MVP não é o primeiro passo? Qual é a alternativa? Nesta palestra, vamos tentar explorar alguns desses assuntos.",
              time: "11:10"
          }
      },
      {
          name: "Carlos Eduardo Polegato",
          photo: "themes/agile-floripa/img/speaker/user.png",
          company: "Softplan",
		  bio: "Carlos Eduardo Polegato, desenvolvedor de sistemas e agilista, sete anos de experiência com ágil, participou da transição completa do modelo tradicional para o ágil de uma empresa de grande porte. Atualmente possuí o papel de líder de times de desenvolvimento de um sistema complexo, com mais de cem profissionais envolvidos, líder de mercado. Tem como função promover agilidade em escala, incentivar e facilitar boas práticas de engenharia de software, promover melhoria contínua e desenvolver profissionalmente os integrantes dos times. Formado em ciência da computação em 2007, possui pós-graduação em engenharia de software, MBA em gestão de projetos, certificação Scrum Master Professional e certificação SAFe practicioner.",
          presentation: {
              title: "Métricas e indicadores ágeis, como está a saúde de seu time?",
              description: "Esta palestra irá apresentar alguns indicadores utilizados por times ágeis para demonstrar eficiência e desempenho. O objetivo destes indicadores é exibir pontos para reflexões auxiliando sempre a melhoria contínua, instigando os times a saírem de sua zona de conforto. Não se trata de indicadores intrusivos, são indicadores criados e acompanhados pelo próprio time com a intenção de deixar transparente a seus integrantes o que deve ser melhorado e o que está bom. É muito citado nas literaturas gráficos burn down, fluxo acumulativo, indicadores para lead time e cycle time, estes são extremamente importantes, nos dão visão de previsibilidade e gargalos, porém se os times não estão maduros suficientes não os instiga a sair do status quo e buscar por novos desafios. A proposta é apresentar subjetividades em números, demonstrar o índice de story points reprovadas, o esforço em retrabalho que poderia ser economizado, fator de foco, medir fatores externos que podem prejudicar o bom andamento da execução da tarefa, como da previsibilidade assertiva a defeitos. O propósito é apresentar estes e outros indicadores que são utilizados na realidade atual de uma equipe de trabalho, para que possa servir como inspiração e base para outras.",
              time: "11:50"
          }
      },
      {
        name: "Almoço",
        time: "12:30"
      },
      {
          name: "Rafael Justino & Victor Bernardo",
          photo: "themes/agile-floripa/img/speaker/user.png",
          company: "Resultados Digitais",
          bio: "Rafael Justino é Gestor de Produto na Resultados Digitais. Agilista, cristão, casado, pai. Analista de Sistemas que cansou de entregar certo a coisa errada. Hoje, une técnica e tecnologia com comunicação e relacionamentos, para construir produtos de software que realmente gerem resultados para os clientes e parceiros da Resultados Digitais. & Victor Hugo Bernardo é Gerente de Engenharia na Resultados Digitais, casado e pai da Heloísa. Apaixonado pela arte de Desenvolver Software e formar equipes de alta performance.",
          presentation: {
              title: "Escalabilidade sem perder agilidade na Resultados Digitais",
              description: "A identidade da RD se traduz em seu Código de Cultura e tem orientado nossas decisões aqui dentro desde o começo. Uma organização baseada em valores como transparência, descentralização, autonomia e agilidade tem nos trazido aprendizados a cada etapa de crescimento e desafios. Vamos apresentar do ponto de vista de gestão de produto, engenharia e pessoas as decisões que tomamos nesse processo de crescimento, e como aplicamos a metodologia de OKRs, o modelo de estrutura aos moldes do Spotify e as nossas adaptações para manter a organização produtiva e sustentável. Ao final, vamos compartilhar um pouco das mudanças que temos em vista para o futuro próximo. Esperamos que a nossa experiência traga ideias e reflexões pra que você saia da palestra querendo atuar como agente de mudança também em sua organização!",
              time: "14:00"
          }
      },
      {
        name: "Elias Nogueira",
        photo: "themes/agile-floripa/img/speaker/eliasnogueira.jpg",
        company: "Adptworks",
        bio: "Agile Coach, Instrutor e QA Engineer. Elias Nogueira ajuda empresas e times a aplicar práticas ágeis em pequena e larga escala com um grande fooo em qualidade e teste de software.",
        presentation: {
          title: "O testador está morto! (Um novo conceito para os testes)",
          description: "-",
          time: "14:40"
        }
      },
      {
        name: "Coffee break",
        time: "15:40"
      },
      {
        name: "Painel: Pra onde estamos levando a agilidade?",
        time: "16:10"
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
