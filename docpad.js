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
      'speakers',
      //'sponsors',
      'partners',
      'faq'
      // 'contact'
    ],
    sections_schedule: [
      'about_schedule'
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
        name: "Rafael Caceres",
        photo: "themes/agile-floripa/img/speaker/rafael-caceres.jpg",
        bio: "Empreendedor-Fluxonomista-Desenvolvedor e Cientista da Computação pela Universidade Estadual do Oeste do Paraná tem 15 anos de experiência com desenvolvimento web. É um dos fundadores da Taller, um ateliê de negócios digitais que cria produtos sob medida para seus clientes, onde trabalha com gestão de fluxo. É parte do time que organiza a Agile Brazil. Entusiasta do software livre, viciado em seriados e livros, gosta muito de xadrez, anarquismo, cozinhar e gerar ideias mirabolantes.",
        company: "Taller",
        link: {
          href: "http://twitter.com/rafaelcaceres",
          text: "@rafaelcaceres"
        },
        presentation: {
          title: "Talk: Kanban no fluxo único de portfolio de projetos",
          description: "Contar a experiência da taller com fluxo único e como  isso vem nos ajudando a lidar com a variabilidade na entrada de projetos para clientes, além de mostrar alguns modelos de trabalho sem estimativas, feedback constante, métricas que importam e integração de toda cadeia de valor.",
          time: "11:10"
        }
      },
      {
        name: "Priscila Machado e Rodrigo Vieira",
        photo: "themes/agile-floripa/img/speaker/priscila-rodrigo.jpg",
        company: "Bravi",
        bio: "Priscila é: UX Designer. Programadora. Agilista. Diferentona do TI desde 2004. Louca do Design Thinking, Lean Startup e tudo que se relaciona a entrega de valor ao usuário. Praticante de esportes, danças e atividades aleatórias e não relacionadas. Engajada em confraternizações que contenham coxinha e cerveja. Rodrigo é nerd de nascença, rei da piada fraca, formado em computação na Federal do ES, trabalha com desenvolvimento Web desde os tempos do Netscape e HotDog. Adora estudar e se envolver em todo tipo de iniciativa: agile, user research,  UX, copywriting, tradução, data science, matemática, programação funcional, reativa, etc etc. No momento atua como Product Owner na Bravi Software, focado em produtos de análise preditiva e de comportamento no setor educacional. É pai do Henrique e casado com outra nerd, garantindo o futuro da espécie.",
        link: {
          href: "https://twitter.com/agirlnamedpri",
          text: "@agirlnamedpri"
        },
        presentation: {
          title: "Fishbowl: Interação entre PO e UX Designer. Quem dá a palavra final?",
          description: "Tanto o PO e UX Designer são cheios de opiniões e de razões. O PO traz os requisitos de alto nível e desafios, mas cabe ao UX trabalhar através de pesquisas, protótipos e validações para dar vida às idéias. Muitas vezes, o UX designer toma liberdades (ops!) e não segue as exigências exatamente por causa de suas próprias crenças e dos padrões de design Quem deve possuir a decisão final? PO: O PO claro. Melhor fazer uma UI feia que atende o que o cliente quer UX Designer: Capaz! O Designer claro! O cliente não sabe o que quer até que a gente mostre a ele. E agora? Como eles devem trabalhar juntos? Vamos falar do que estamos fazendo/aprendendo/desenvolvendo aqui na Bravi, e chamar a galera pra colaborar",
          time: "11:35"
        }
      },
      {
        name: "João Eduardo Hornburg",
        photo: "themes/agile-floripa/img/speaker/joao_hornburg.jpg",
        company: "Resultados Digitais",
        bio: "João Hornburg é formado em computação pela UFSC. Trabalha com desenvolvimento ágil desde 2009, tendo passado por diversas tecnologias, processos e produtos. Atualmente é Scrum Master na Resultados Digitais, onde seu maior foco está em alavancar a produtividade e a qualidade das entregas do time.",
        presentation: {
          title: "Talk: Qualidade: na prática a teoria é outra",
          description: "No desenvolvimento ágil de software, qualidade é um dos aspectos mais valorizados. Ou deveria ser. A maioria dos desenvolvedores tem boas noções de como entregar software com qualidade, pelo menos em teoria. Práticas como TDD, pair programming, clean code, entre outras, deveriam garantir a qualidade da nossa entrega. Mas na prática, continuamos entregando software com baixa qualidade. Nessa apresentação, vou expor algumas hipóteses sobre o porque de mesmo sabendo a teoria, nossa prática ser tão diferente.",
          time: "12:00"
        }
      },
      {
        name: "Carol Wirtti e Samuel Cavalcante",
        photo: "themes/agile-floripa/img/speaker/user.png",
        company: "Digitho",
        presentation: {
          title: "Talk: “No estimate” do jeito errado",
          description: "Sabe aquela sensação de estar trabalhando entregando e parecer que não entrega nada, pois é, foi o que aconteceu quando resolvemos parar de estimar. Quando resolvemos fazer isso acreditávamos na felicidade e caímos no “Extreme Go Horse”. Quero apresentar o que levou nossos times a chegar ao XGH e como saímos dele, sem estimar em pontos. ",
          time: "12:25"
        }
      },
      {
        name: "Almoço",
        time: "12:50"
      },
      {
        name: "Gabriel Vieira",
        photo: "themes/agile-floripa/img/speaker/gabriel-vieira.jpg",
        company: "Evolução Ágil",
		bio: "Engenheiro de Software com DevOps na veia! Atua como consultor e engenheiro em projetos voltados para Educação a Distância, pensando sempre em sistemas com forte customização, alta complexidade e disponibilidade. Realiza consultoria para auxiliar a reorganizar times de software utilizando princípios ágeis, DevOps e boas práticas, independente de linguagem de programação. Atua na comunidade ágil desde 2009, é parte do comitê do Agile Brazil à 3 anos e apaixonado pelas pessoas e suas interações.",
        link: {
          href: "https://twitter.com/gabrielvieira",
          text: "@gabrielvieira"
        },
        presentation: {
          title: "Fishbowl: Como meu time é meu amante?!?!",
          description: "Dividir a vida com a pessoa amada não é fácil, imagina só dividir uma sprint com aquele \"criador ambulante de bug que se chama de profissional\"? Vamos conversar sobre como fazer para conseguir amenizar ou resolver conflitos como estes e o que pode ser feito para notar a auto sabotagem e o mimimi sem fim!",
          time: "14:20"
        }
      },
      {
        name: "Samuel Crescencio",
        photo: "themes/agile-floripa/img/speaker/samuel-crescencio.jpg",
        company: "Lean IT 101",
        link: {
          href: "https://twitter.com/screscencio",
          text: "@screscencio"
        },
        presentation: {
          title: "Talk: Lean e Agile Aplicado em áreas fora da TI",
          description: "Nessa talk vamos trazer cases de como exploramos os benefĩcios da gestão de fluxo para gerenciar processos de negócio de áreas não TI. Vamos estudar 1 how to e 2 cases da aplicação de mapeamento do fluxo de valor e kanban para gestão de fluxo: 1 - no governo, envolvendo a transformação do escritório de projetos do Datasus, no Ministério da Saúde, com um portfólio de milhões de reais. 2 - Gestão de Pessoas - Como agilizamos o departamento de desenvolvimento humano da Blue Ticket aplicando o kanban para gestão do fluxo de contratações e para a gestão de atividades. De quebra, vou deixar um how to sobre como aplicar o kanban para gestão de marketing e vendas.",
          time: "14:45"
        }
      },
      {
        name: "Juliano Ribeiro",
        photo: "themes/agile-floripa/img/speaker/juliano-ribeiro.jpg",
        company: "Objective Solutions",
        bio: "Especialista em Orientação à objetos pelo CESUMAR, é Certified Scrum Professional pela Scrum Alliance, Learning 3.0 Facilitator pela Happy Melly e Certified Delphi Developer pela Embarcadero. Desenvolve software profissionalmente desde 1994. Possui projetos em diversas linguagens como Clipper, Delphi, Java, iOS e Android. Experiência em liderança de equipes de desenvolvimento tendo implementado práticas de XP e Scrum em diversas empresas. Trabalha como Team Member, Scrum Master e Agile Coach desde 2009. Leciona treinamentos de Scrum, Kanban e XP. Organiza e apoia edições do Agile Tour desde 2009. É palestrante recorrente nos principais eventos sobre agilidade no Brasil e no exterior. É o chairman da edição 2016 do Agile Brazil, a maior conferência sobre o assunto na América Latina. Na Objective Solutions atua como profissional sênior, em consultoria e especificação.",
        link: {
          href: "http://twitter.com/JulianoRibeiro",
          text: "@JulianoRibeiro"
        },
        presentation: {
          title: "Talk: Controlefobia",
          description: "Processos e equipes ágeis são caracterizados por terem poucas regras, poucas imposições e muita liberdade. Nesse contexto falar de controle acaba sendo quase um sacrilégio, um pecado passivo de uma dolorosa penitência. Mas esse termo é mal compreendido no universo ágil. O problema em si não é o controle, mas o que fazemos para obtê-lo: Se comprometemos os valores e princípios ágeis para ter controle isso faz dele um vilão. Mas agora se conseguimos ter controle mantendo os valores e princípios intactos ele se torna uma poderosa ferramenta para evolução e melhoria em processos agéis. Mas é possível ter controle e não comprometer nossos valores? Nessa palestra vamos demonstrar essa possibilidade e, principalmente, desfazer seu preconceito.",
          time: "15:10"
        }
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
