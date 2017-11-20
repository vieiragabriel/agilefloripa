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
        text: "Inscrições de R$90 até R$110",
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
      'schedule',
      'workshops',
      'speakers',
      //'sponsors',
      'partners',
      'location',
      'faq'
      // 'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "Sobre",
      courses: "Curso",
      speakers: "Palestrantes",
      schedule: "Trilha 1 - Palestras",
      workshops: "Trilha 2 - Workshops",
      sponsors: "Patrocinadores",
      partners: "Parceiros",
      location: "Local do Evento (Trilha 1 e 2)",
      faq: "FAQ",
      contact: "Contato"
    },

    courses: [
      {
        name: "Luiz Cláudio Parzianello",
        photo: "themes/agile-floripa/img/speaker/LuizParzianello.jpg",
        company: "",
        bio: "Consultor, palestrante e professor universitário. Atua na área de TI há mais de 25 anos e de gestão há 15 anos, sendo um dos pioneiros na adoção e disseminação das Metodologias Ágeis no Brasil. Tornou-se especialista em resolução de problemas complexos de negócio utilizando pensamento sistêmico e modelos de análise (Lean Business Analysis, autor) e de gestão (Agile Management). Atuou para empresas como Grupo RBS, Sicredi, Unicred, Banrisul, Citibank, ThyssenKrupp Elevadores, FAURGS, REFAP/ Petrobrás, GetNet, Ministério do Planejamento de Angola, entre outras. Engenheiro Eletricista pela PUCRS e Mestre em Sistemas Eletrônicos pela USP, é sócio-fundador da empresa Surya Gestão Digital e professor em MBA nas instituições UniRitter, UNISC, IMED e CESUSC. Foi fundador e presidente do IIBA Porto Alegre Chapter (International Institute of Business Analysis) e um dos autores da Agile Extension to the BABOK (Business Analysis Body of Knowledge), projeto conjunto entre IIBA e Agile Alliance.",
        presentation: {
          title: "Lean Business Analysis for Product Owners.",
          //featured: "\\o/ BIS ",
          description: "Desenvolver novas capacidades analíticas e gerenciais em Gestores de Produto (Product Owners) e Analistas de Negócios a partir de conceitos, práticas e ferramentas da Lean Business Analysis, com o objetivo de acelerar a conquista de melhores resultados no desenvolvimento de produtos digitais e projetos de negócio.",
          local: "SENAI Florianópolis (CTAI) - Florianópolis, SC",
          date: "7 e 8 de Dezembro",
          time: "09:00 às 18:00",
          value: "Promocional (até 16/Nov): R$ 790 / Agile Floripa (até 30/11): R$ 890 / Normal (até 04/12): R$ 990",
      cta: 'https://www.sympla.com.br/lean-business-analysis-for-product-owners-16h__206842',
      ctaText: 'Inscreva-se'
        }
      },
      {
        name: "Rodrigo Yoshima",
        photo: "themes/agile-floripa/img/speaker/RodrigoYoshima.jpg",
        company: "",
        bio: "Técnico em Processamento de Dados e Bacharel em Administração de Empresas e Economia. É Advanced Accredited Lean Kanban Trainer (AAKT) e Kanban Coach Professional (KCP) pela Lean-Kanban University. Com mais de 20 anos de experiência na área de tecnologia, Rodrigo atua como consultor e instrutor em melhoria de processos tendo implantado métodos Lean e Agile em mais de 200 equipes em mais de 30 empresas. Casado, pai e velejador.",
        presentation: {
          title: "Treinamento Kanban (KMP I) + Ingresso FREE para o 4º Agile Floripa (válido enquanto houverem vagas no evento)",
          //featured: "\\o/ BIS ",
          description: "Aprenda a melhorar os processos da sua empresa de forma evolucionária, lidando com a resistência a mudanças e ajustando aos objetivos da sua organização. A Aspercom é pioneira no Brasil na aplicação do Método Kanban em pequenas, médias e grandes empresas nos mais variados setores. Com a nossa experiência você aprende neste treinamento como melhorar o seu processo de forma evolucionária - lidando com a resistência natural das pessoas a mudanças - tornando seu processo ajustado aos objetivos de negócio da sua organização! Este treinamento é certificado Lean-Kanban University (Kanban Method Professional I).",
          local: "CIASC - R. Murilo Andriani, 327 - Itacorubi, SC, 88034-902",
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
            name: "Credenciamento",
            time: "08:15"
        },
        {
            name: "Abertura",
            time: "08:45"
        },
        {
            name: "Luiz Claudio Parzianello",
            photo: "themes/agile-floripa/img/speaker/LuizParzianello.jpg",
            company: "",
            bio: "Consultor, palestrante e professor universitário. Atua na área de TI há mais de 25 anos e de gestão há 15 anos, sendo um dos pioneiros na adoção e disseminação das Metodologias Ágeis no Brasil. Tornou-se especialista em resolução de problemas complexos de negócio utilizando pensamento sistêmico e modelos de análise (Lean Business Analysis, autor) e de gestão (Agile Management). Atuou para empresas como Grupo RBS, Sicredi, Unicred, Banrisul, Citibank, ThyssenKruppElevadores, FAURGS, REFAP/Petrobrás, GetNet, Ministério do Planejamento de Angola, entre outras. Engenheiro Eletricista pela PUCRS e Mestre em Sistemas Eletrônicos pela USP, é sócio-fundadorda empresa Surya Gestão Digital e professor em MBA nas instituições UniRitter, UNISC, IMED e CESUSC. Foi fundador e presidente do IIBA Porto Alegre Chapter (International Institute of Business Analysis) e um dos autores da Agile Extension to the BABOK (Business Analysis Body of Knowledge), projeto conjunto entre IIBA e Agile Alliance.",
            presentation: {
                title: "Keynote: Pragmatismo, Agilidade e Resultados na Gestão de Negócios",
                description: "O pragmatismo sempre esteve no discurso dos profissionais que escreveram e fizeram o Manifesto Ágil se tornar uma realidade mundial. Da mesma forma, acreditamos que o crescimento ou a sobrevivência de negócios no século XXI depende de uma gestão focada em resultados, que vai além da implantação de práticas e ferramentas ágeis. A gestão é responsabilidade de todos e esta palestra irá demonstrar a maior mudança que ainda falta no mundo empresarial.",
                time: "09:00"
            }
        },
        {
            name: "Coffee break",
            time: "10:00"
        },
        {
            name: "Paulo Antiquera",
            photo: "themes/agile-floripa/img/speaker/user.png",
            company: "ArcTouch",
            bio: "Tenho desenvolvido software por quase toda minha vida, profissionalmente a uns 20 anos. Nos últimos 7 anos venho procurando formas mais eficazes de gerar valor aos clientes. Nesta jornada já misturei práticas das mais diversas fontes: Xp, Kanban, Scrum, PMI... Como sou apaixonado por software já fiz de tudo um pouco na área:\n\n* Escrevi muito código (<3): Delphi, Asp, PHP, C, C++, Java, Javascript, Shell...\n* Tive que automatizar tarefas (principalmente builds), cuidar de repositórios de fontes, fazer muito merge, liberar versões de sistema, subir ambientes para teste e produção...\n* Já tive que montar arquitetura de sistemas, backend, frontend, desenhar armazenamento de dados, integração entre sistemas (XML para cá, json para lá, protocolo, socket, tcp, udp...)\n* Certa vez quando olhei para minha mesa tinha uma carta dizendo: parabéns você foi promovido, agora olha para frente, você precisa dar um jeito de estes 40 caras na sua frente deixarem os nossos clientes satisfeitos...\n* Negociei escopo, negociei prazo, negociei orçamento, negociei estratégia, conheci os stakeholders, anotei que eles queriam, fiz aquele diagrama de sequencia que os devs precisavam, escrevi a história épica, quebrei em features, depois em user stories...\n* Conversei bastante, sobre excelência técnica, testes automatizados, ciclos de feedback curtos, sobre pagar os débitos técnicos, sobre autonomia, entrega contínua, fluxo, melhoria contínua...\n\nE o melhor, tudo isto continua fazendo parte da minha vida \o/,  mas não ao mesmo tempo. Agora gosto de fazer uma coisa por vez, a coisa certa e somente a coisa certa!",
            presentation: {
                title: "The HEART, Osborn! First, we attack his HEART! Lições e Estratégias Aprendidas em 7 anos de Agilidade",
                description: "A medida em que métodos vão surgindo para endereçar problemas, cada vez mais de alto nível, perdemos inconscientemente a conexão com a essência, que é resolver os problemas de negócio. Frameworks são importantes, mas o sucesso das práticas passa pela compreensão de todo contexto do negócio e a natureza do trabalho.\n\nDe que agilidade estamos falando\n* Faça a coisa certa e somente a coisa certa.\n* Primeiro a eficácia. A eficiência é pressuposto.\n* Ciclos de feedback curtos.\n* Todas as fichas na coisa certa.\n\nO aprendizado\nAo trabalhar com métodos ágeis desde 2010, houve falhas e bons resultados. Por conta do ambiente (contexto), neste período, foram constatadas uma série de questões e, dentre estas, 10 lições aprendidas:\n\n1. Inicie pelo Mindset\n2. De a devida importância ao contexto\n3. Respeite os estágios de aprendizado\n4. A compreensão vem com a vivência\n5. Saiba que nem toda pipoca estoura\n6. Procure excelência técnica para obter sustentabilidade\n7. Como gestor mantenha o foco no bastão\n8. Seja um organismo e não um mecanismo\n9. Diga o quê, não como\n10. Traga a organização para o jogo.",
                time: "10:30"
            }
        },
        {
            name: "Paula Martins & Clóvis Melo",
            photo: "themes/agile-floripa/img/speaker/paula_e_clovis.jpg",
            company: "Unicred",
            bio: "Paula Martins:\n\nHá 15 anos na área de TI, de desenvolvedora, analista de testes, líder até Analista de Governança e Agile coaching. Formada em Gestão em tecnologia da informação, certificação em Coaching Comportamental em TI. Ministrante de treinamentos internos empresarial, participante e palestrante do grupo de usuários de testes de software em Porto Alegre.\n\nClóvis Melo:\n\nExperiência com Governança de TI de 5 anos em Liderança e acompanhamento do Planejamento Estratégico, definição e apuração dos principais indicadores de desempenho da TI. Gerenciamento dos Processos de TI com avaliação de Riscos e acompanhamento do nível de maturidade dos processos com utilização da metodologia COBIT e ITIL.",
            presentation: {
                title: "Como a Governança de TI pode acelerar a transformação ágil",
                description: "Com o novo modelo e mindset de agilidade, existem algumas áreas que devem caminhar junto e apoiar este novo formato de trabalho e a Governança tem papel fundamental para essa transformação, apoiando de forma que os times estabeleçam transparência, confiança e principalmente colaboração. Detentora do alinhamento entre negócios e TI,  a Governança tem informações e controles que podem acelerar este movimento.",
                time: "11:10"
            }
        },
        {
            name: "Raphael Tucunduva Gonçalves",
            photo: "themes/agile-floripa/img/speaker/user.png",
            company: "CIASC",
            bio: "",
            presentation: {
                title: "Aprimorando a administração pública: Métodos ágeis em prol do príncípio da eficiência na Administração Pública",
                description: "A palestra pretende apresentar a experiência de adoção de técnicas ágeis por um conjunto de times do Centro de Informática e  Automação do Estado de SC (CIASC). A intenção é que se evidenciem os benefícios que esse esforço propicia para o atendimento ao Princípio Constitucional da Eficiência na Administração Pública, no intento de estimular que práticas análogas se propaguem para outros grupos  voltados a atender necessidades dos cidadãos catarinenses.",
                time: "11:50"
            }
        },
        {
            name: "Almoço",
            time: "12:30"
        },
        {
            // name: "Em breve",
            // photo: "themes/agile-floripa/img/speaker/user.jpg",
            // company: "Lambda3",
            // bio: "Personal & Professional Coach, Agilista criativo, curioso e detalhista, apaixonado por música, cachorros, tatuagens, batata frita, praia, cultura organizacional e comportamento humano. 20 anos de experiência em TI, ajudando times a entregarem software de qualidade e alto valor de negócio.",
            presentation: {
                title: "Em breve",
                // description: "",
                time: "14:00"
            }
        },
        {
            name: "Helal Ferrari Cabral",
            photo: "themes/agile-floripa/img/speaker/helal.jpg",
            company: "Taller",
            bio: "Analista de negócios apaixonado por processos. Através do desenvolvimento emergi para o mundo dos negócios de tecnologia :-), CERTIFIED PPTO.",
            presentation: {
                title: "Pare de priorizar e começe a selecionar",
                description: "Priorização significa que existe uma fila fixa de items que devem ser processados. No contexto do desenvolvimento de software de escopo aberto, não priorizamos um conjunto de demandas, e sim selecionamos as melhores com critérios definidos com o cliente dentro de uma nuvem de ideias. O objetivo dessa palestra é mostrar como criar e usar esses critérios para ter uma melhor seleção das demanas que serão criadas pelo time.",
                time: "14:40"
            }
        },
        {
            name: "Allex Espindola Erckmann",
            photo: "themes/agile-floripa/img/speaker/allexespindola.jpg",
            company: "Intelbras",
            bio: "Natural de Florianópolis/SC, graduado em Gestão da Tecnologia da Informação pelo SENAC e Pós Graduado em Gerenciamento de Projetos de TI pela Unisul, é certificado SAFe Practitioner e SAFe Agilist pela Scaled Agile Academy. Trabalhou durante 5 anos com gestão de projetos tradicionais e desde 2012 trabalha com métodos ágeis. Participou do comitê estratégico de implantação do SAFe na Softplan, onde atuou durante 6 anos como Scrum Master e RTE (Release Train Engineer). Atualmente, desempenha o papel de Scrum Master e Agile Coach em uma imersão ágil em escala, para projetos de P&D da Intelbras, em parceria com o CITeB (Centro de Inovação e Tecnologia de Biguaçu/SC).",
            presentation: {
                title: "Os Desafios e Benefícios da Agilidade para Times Remotos - Dicas e Técnicas para Garantir Resultados Expressivos.",
                description: "O objetivo desta palestra é apresentar um case de como estamos conseguindo emergir o mindset ágil para 30 pessoas, de 7 times remotos, em um projeto de P&D da Intelbras. Quais os principais desafios enfrentados? Quais as práticas que estão impulsionando as pessoas a serem mais ágeis? Aplicando benefícios do Lean, SAFe, Scrum e Kanban, estamos obtendo resultados expressivos de produtividade e engajamento, auxiliado por métricas de fluxo, projeções probabilísticas, ferramentas de gestão e indicadores de mercado. Atualmente existem tantas boas práticas, métodos, metodologias e frameworks, que a real essência da agilidade acaba sendo esquecida. Seguir uma linha sem considerar o benefício de outra pode se tornar o seu fracasso. Então reflita sobre isso, avalie o seu contexto atual, considere possibilidades, sem julgar que isso ou aquilo é errado. Se esta dando certo? Ok! Porquê não? O verdadeiro crime é não seguir os seus princípios independente da metodologia aplicada.",
                time: "15:20"
            }
        },
        {
            name: "Coffee break",
            time: "16:00"
        },
        {
            name: "Coaracy Silva",
            photo: "themes/agile-floripa/img/speaker/coracyjunior.jpg",
            company: "Senior Sistemas",
            bio: "Minha missão é ajudar a pessoas a se engajar e a atingir resultados. Tenho mais de 20 anos de experiência em gestão empresarial e vivo o mundo de projetos de software a 12 anos. Faço parte da equipe responsável pela transformação ágil na Senior Sistemas.",
            presentation: {
                title: "Kanban no Marketing - Como começar?",
                description: "Você trabalha com marketing? Tem muitos projetos em paralelo? Se perde no meio de tanto trabalho? Não consegue ter visibilidade de tudo que está fazendo? E ainda por cima não consegue mostrar o resultado do seu trabalho? Essa palestra é para você. Começamos em junho/17 a aplicação de método Kanban no time de Marketing (12 pessoas) aqui na Senior Sistemas (Blumenau/SC), do zero mesmo, aplicando os princípios e as práticas. O time não tinha nenhum método estruturado de trabalho e está adorando o método Kanban. Você vai entender que para começar basta dar o primeiro passo!",
                time: "16:30"
            }
        },
        {
            name: "Ricardo Delcastanher",
            photo: "themes/agile-floripa/img/speaker/delcastanher.jpg",
            company: "SERPRO",
            bio: "Bacharel em Ciências da Computação, especialista em Software Livre, Certified ScrumMaster e Kanban Management Professional. Empreendedor serial durante mais de uma década, atualmente é Agile Coach no SERPRO em tempo integral. Valoriza pessoas e suas interações mais que processos e ferramentas.",
            presentation: {
                title: "Manifesto para Desenvolvimento Ágil de ATIVIDADES NÃO Software ",
                description: "O Manifesto para Desenvolvimento Ágil de Software precisa ser reescrito? Provavelmente não. É possível ser ágil além do desenvolvimento e o Management 3.0 pode te ajudar nisso. A palestra ambienta o expectador numa discussão do Agile Europe 2016, onde os participantes reclamavam da falta de frameworks ágeis para áreas não software. Passo por uma reflexão sobre “Indivíduos e interações mais que processos e ferramentas” e apresento o Management 3.0 como uma ferramenta para áreas não software, fazendo um paralelo com os princípios do Manifesto Ágil.",
                time: "17:10"
            }
        },
        {
            name: "Gabriel Pacheco",
            photo: "themes/agile-floripa/img/speaker/gabriel-pacheco.jpg",
            company: "Softplan",
            bio: "Profissional com vasta experiência em TI na área de desenvolvimento de software tendo trabalhado em startup e empresas de pequeno e grande porte, público e privado, atuando ao longo da carreira como Coordenador, Líder, Agile Coach, Scrum Master, Gestor de Projetos, Analista, Engenheiro de Software e recentemente também como Consultor Ágil; Graduado em Ciência da Computação, Especialista em Engenharia de Software, MBA em Gerenciamento de Projetos, cursando MBA em Gestão Estratégica de Pessoas, Empreteco, possuo as certificações PMP, PSM, SAFe Agilist e CSPO. Experiência em transformação ágil e ágil em escala ajudando times e organizações na melhoria de métodos, processos e ferramentas para maximizar geração de valor, melhoria contínua, comunicação, e gestão de pessoas através de conceitos do Lean, SAFe, Scrum, Kanban, XP, Management 3.0 e OKR.",
            presentation: {
                title: "Agilidade em Suporte de 2º nível",
                description: "A ideia é trazer ao público a experiência da aplicação de conceitos ágeis, gestão de pessoas e a Filosofia de Gestão em uma equipe de Suporte de 2º nível com 19 integrantes que nunca ouviram o que é Ágil. Discussão sobre acertos e erros e também apresentar os resultados através dos indicadores de acompanhamento. Como foi possível melhorar o atendimento de SLA, prioridades, e também o clima de trabalho com o uso da agilidade. Mudança de mindset da equipe com foco na entrega de valor no atendimento ao cliente, e um desafio maior, como foi organizar tudo isso com pessoas trabalhando remotamente em 5 cidades diferentes.",
                time: "17:50"
            }
        },
        {
            name: "Encerramento + Sorteios e Happy Hour \\o/",
            time: "18:30"
        }
    ],

    // Workshops
    workshops: [
        {
            title: "STATIK - Começando com Kanban (em escala) na próxima segunda-feira",
            time: "10:30",
            instructors: [
                {
                    name: "Rodrigo Yoshima",
                    photo: "themes/agile-floripa/img/speaker/RodrigoYoshima.jpg",
                    bio: "Técnico em Processamento de Dados e Bacharel em Administração de Empresas e Economia. É Advanced Accredited Lean Kanban Trainer (AAKT) e Kanban Coach Professional (KCP) pela Lean-Kanban University. Com mais de 20 anos de experiência na área de tecnologia, Rodrigo atua como consultor e instrutor em melhoria de processos tendo implantado métodos Lean e Agile em mais de 200 equipes em mais de 30 empresas. Casado, pai e velejador."
                }
            ],
            description: "Poucas pessoas sabem, mas o modelo STATIK é uma das ferramentas de coaching mais poderosas do Kanban. O STATIK é uma maneira sistemática e objetiva de começar a mapear sua corrente de valor, desenhar seu board kanban, habilitando a colaboração e potencializando a melhoria do fluxo na melhor forma Kaizen. Quer começar a desfrutar dos benefícios do Kanban como agilidade, previsibilidade e governança na próxima segunda-feira, mesmo que tenha centenas de pessoas? Então este workshop é para você!"
        },
        {
            title: "Almoço",
            time: "12:30"
        },
        {
            title: "A importância da empatia na construção de produtos de valor",
            time: "14:00",
            instructors: [
                {
                    name: "Day Andrade",
                    photo: "themes/agile-floripa/img/speaker/DayAndrade.jpg",
                    bio: "Scrum Master na Concrete, trabalha desde 2010 na área de TI e possui formação em Ciência da Computação. Coach pela Metaforum e pela SBC, Facilitadora, Embaixadora Choice, ama Comportamento Humano e participar de projetos de impacto social."
                },
                {
                    name: "Andressa Chiara",
                    photo: "themes/agile-floripa/img/speaker/AndressaChiara.jpg",
                    bio: "Gerente de Produto (PO) na Concrete, trabalha com produtos digitais há 9 anos, liderando projetos em TI para web /mobile. Certificada como PMP, CSM, PSMI, CSPO, Lean-Kanban. Contribui com iniciativas de inclusão como a Code Like a Girl."
                }
            ],
            description: "Há diversas técnicas para ajudar na criação de um excelente produto. No entanto, nosso esforço pode ser em vão se não aproveitarmos a criatividade do time, entrarmos em consenso sobre nossos objetivos, prioridades e validarmos nossas hipóteses, escutando nossos usuários. Neste workshop você aprenderá técnicas de consenso 100% na prática, buscando, através de muita empatia, alinhar as demandas dos stakeholders com as necessidades dos usuários e da equipe envolvida. Público alvo: pessoas que trabalham ou gostariam de trabalhar com criação de produtos e em projetos, dentro e fora de TI."
        },
        {
            title: "Coffee break",
            time: "16:00"
        },
        {
            title: "Refactoring Conversation Smells",
            time: "16:30",
            instructors: [
                {
                    name: "Luiz Claudio Parzianello",
                    photo: "themes/agile-floripa/img/speaker/LuizParzianello.jpg"
                }
            ],
            description: "Como um praticante ágil, você provavelmente se comunica com muitas pessoas diferentes todos os dias. Todas as suas conversas são eficazes? Ou você às vezes você ou outra pessoa se encontra explicando e re-explicando, discutindo uma posição, lutando sobre \"semântica\", ou encurralado? Estas conversas dão errado de formas consistentes, que surgem dos métodos inatos das pessoas de processamento e catalogação de informações. Venha a este tutorial para aprender esses \"conversations smells\" e formas sistemáticas -- um conjunto simples de padrões e perguntas-para enfrentá-los e obter suas conversas destravadas."
        },
        {
            title: "Encerramento + Sorteios e Happy Hour \\o/ (no auditório principal)",
            time: "18:30"
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
