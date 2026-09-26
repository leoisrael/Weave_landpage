/* trovul.com — English lives in the HTML; Portuguese here. Elements carry
   data-i18n="key" (innerHTML) or data-i18n-ph="key" (placeholder). The language
   comes from ?lang=, then the visitor's last choice, then the browser. */

(() => {
  const PT = {
    "nav.features": "Recursos",
    "nav.try": "Experimente",
    "nav.film": "Filme",
    "nav.tech": "Tecnologia",
    "nav.companies": "Para empresas",
    "nav.faq": "Dúvidas",
    "nav.cta": "Entrar na lista",

    "hero.badge": "Em testes privados · Windows 10 e 11",
    "hero.t1": "Dois PCs.",
    "hero.t2": "Uma mesa só.",
    "hero.lead":
      "Ouça os dois PCs no mesmo fone, mixe cada app como numa mesa de som e use um só teclado e mouse em todas as telas. O Trovul liga seus PCs pela rede de casa — sem cabos, sem hardware extra.",
    "hero.cta": "Entrar na lista de espera",
    "hero.film": "Ver o filme",
    "hero.p1": "Som dos dois PCs",
    "hero.p2": "Mixer para cada app",
    "hero.p3": "Um teclado e mouse",
    "hero.p4": "Clipboard e arquivos",
    "hero.toast.t": "Conectado ao STREAM-PC",
    "hero.toast.s": "Som, teclado e mouse prontos.",
    "hero.latency": "STREAM-PC → fone",

    "facts.latency": "de áudio entre os PCs no modo Baixo",
    "facts.quality": "estéreo sem compressão, sem perdas",
    "facts.size": "de instalador, roda discreto na bandeja",
    "facts.cables": "cabos, adaptadores ou hardware extra",

    "rep.kicker": "Por que Trovul",
    "rep.title": "O setup com dois PCs, sem a pilha de hardware",
    "rep.lead":
      "Hoje, usar dois PCs significa uma mesa cheia de equipamentos e vários apps que não conversam entre si. O Trovul faz tudo com um app em cada PC.",
    "rep.before": "Hoje",
    "rep.b1": "Uma mesa de som ou interface de áudio para ouvir os dois PCs",
    "rep.b2": "Cabos de linha e isoladores contra chiado",
    "rep.b3": "Um switch KVM, ou um segundo teclado e mouse",
    "rep.b4": "Cabos virtuais, apps de mouse compartilhado e de clipboard remendados",
    "rep.b4c": "horas",
    "rep.note": "Preços típicos de mercado (USD).",
    "rep.after": "Com o Trovul",
    "rep.a1": "Um app em cada PC, pareados com um clique",
    "rep.a2": "Os dois PCs no fone que você já tem",
    "rep.a3": "Um mixer para cada app, dos dois PCs, numa janela só",
    "rep.a4": "Um teclado e mouse, um clipboard, todas as telas",
    "rep.zero": "Nenhum hardware extra.",
    "rep.zero2": "Só a sua rede.",

    "feat.kicker": "O que ele faz",
    "feat.title": "Tudo o que dois PCs deveriam compartilhar",
    "feat.lead":
      "Som, controles e conteúdo passam pelo mesmo link. Pareie uma vez e tudo estará lá sempre que os PCs ligarem.",
    "f.mixer.tag": "Mixer",
    "f.mixer.t": "Um mixer de verdade para os dois PCs",
    "f.mixer.d":
      "Cada app dos dois PCs ganha um dial, um mute e a sua própria saída de som. Salve cenas como Jogo, Live e Reunião e troque tudo com um clique — no app, na bandeja ou num Stream Deck.",
    "f.audio.tag": "Áudio",
    "f.audio.t": "Os dois PCs no mesmo fone",
    "f.audio.d":
      "Toque o som do outro PC neste, ou mande o seu para lá. Cerca de 30 ms em rede cabeada, estéreo 48 kHz sem compressão, e volta sozinho depois de reiniciar ou suspender.",
    "f.audio.hear": "Ouvir aqui",
    "f.audio.send": "Enviar",
    "f.audio.off": "Desligado",
    "f.input.tag": "Teclado e mouse",
    "f.input.t": "Um teclado e mouse para todas as telas",
    "f.input.d":
      "Arrume as telas como na sua mesa e é só passar. O modo jogo mantém o ponteiro dentro do jogo; janelas de administrador, UAC e a tela de bloqueio também funcionam.",
    "f.apps.tag": "Mix da live",
    "f.apps.t": "A mix da live separada da mix do seu fone",
    "f.apps.d":
      "Escolha quais apps vão para o outro PC, cada um no seu volume. Quem assiste ouve o jogo e o seu time — não a sua música. <em>Windows 11.</em>",
    "f.follow.tag": "Seguir o ponteiro",
    "f.follow.t": "O PC que você está usando fica mais alto",
    "f.follow.d":
      "Vá para a tela do outro PC e o som dele vem para a frente no seu fone; volte e ele dá um passo atrás. Seus volumes nunca mudam.",
    "f.clip.tag": "Clipboard",
    "f.clip.t": "Copie aqui, cole lá",
    "f.clip.d":
      "Textos, imagens e pastas inteiras passam entre os PCs. Cópias grandes perguntam antes e mostram o progresso — nada atravessa a rede de surpresa.",
    "f.tray.tag": "Bandeja",
    "f.tray.t": "O mixer a um clique",
    "f.tray.d":
      "Clique no ícone da bandeja para volumes, mutes e cenas sem abrir o app. Pequenos pop-ups avisam quando um PC conecta ou chega um arquivo.",
    "f.deck.tag": "Stream Deck",
    "f.deck.t": "Feito para Stream Deck",
    "f.deck.d":
      "Teclas para cenas, para onde vai o som e mutes; dials de volume no Stream Deck +. Para os dois PCs, sem nada para configurar.",
    "m.duck.t": "Silêncio nas chamadas",
    "m.duck.d": "O outro PC abaixa enquanto alguém fala no Discord ou no Teams.",
    "m.update.t": "Atualiza sozinho",
    "m.update.d": "Instale uma versão nova num PC; o outro recebe pelo link.",
    "m.pair.t": "Pareia uma vez",
    "m.pair.d": "Os PCs se encontram e reconectam sozinhos depois de reiniciar, suspender ou a rede cair.",
    "m.local.t": "Fica em casa",
    "m.local.d": "Nada passa pela internet. Só PCs pareados são aceitos.",

    "try.kicker": "Experimente",
    "try.title": "Passe o ponteiro pela mesa",
    "try.lead":
      "Esta é uma mesa com dois PCs: o GAMING-RIG tem as telas das pontas, o STREAM-PC a do meio. Passe por elas e veja o teclado, o ponteiro e o seu fone acompanharem.",
    "try.kb": "Teclado e mouse no",
    "try.hs": "No seu fone",
    "try.hint": "Dica: no app, o Scroll Lock prende o ponteiro num PC, e Ctrl+Alt+Esc sempre traz ele de volta.",

    "film.kicker": "O filme",
    "film.title": "Um minuto, a mesa inteira",
    "film.lead":
      "O app de verdade, gravado: conectando os PCs, o mixer, a mix da live, teclado e mouse, a bandeja e o Stream Deck.",

    "how.kicker": "Instalação",
    "how.title": "Dois minutos, três passos",
    "how.1t": "Instale nos dois PCs",
    "how.1d": "Um instalador de 6 MB para Windows 10 ou 11. O firewall é configurado para você.",
    "how.2t": "Pareie com um clique",
    "how.2d": "Os PCs se encontram na sua rede. Aceite uma vez — daí em diante eles reconectam sozinhos.",
    "how.3t": "Use os dois como um só",
    "how.3d": "Escolha para onde vai o som, passe pelas telas, copie e cole. Só isso.",

    "who.kicker": "Para quem é",
    "who.title": "Feito para quem tem dois PCs na mesma mesa",
    "who.stream.t": "Streamers com dois PCs",
    "who.stream.d":
      "Jogue num PC, transmita do outro. Um fone, um mouse e uma mix de live que o seu público vai agradecer.",
    "who.game.t": "Gamers com um PC de trabalho",
    "who.game.d": "Deixe Discord, música e trabalho no outro PC e ouça tudo dentro do jogo — sem dar alt-tab.",
    "who.create.t": "Criadores e podcasters",
    "who.create.d":
      "Mande cada app para onde ele pertence e mantenha a mix limpa, com cenas para gravar, transmitir e fazer chamadas.",
    "who.dev.t": "Devs e traders",
    "who.dev.d": "Duas máquinas, um teclado, um clipboard. Copie um log aqui, cole lá; ouça o build terminar no outro PC.",

    "tech.kicker": "Por dentro",
    "tech.title": "Um motor de tempo real próprio",
    "tech.lead":
      "Sem drivers de áudio virtuais, sem ferramentas de mouse de terceiros. O Trovul captura, transporta e toca o som com um motor próprio escrito em Rust, e fala um protocolo próprio entre os PCs.",
    "spec.lat": "Latência",
    "spec.lat.n": "Modos Baixo, Equilibrado e Estável",
    "spec.audio": "Áudio",
    "spec.audio.n": "Estéreo sem compressão em pacotes de 5 ms",
    "spec.buffer": "Reprodução",
    "spec.buffer.v": "Adaptativa",
    "spec.buffer.n": "Buffer anti-jitter com correção de deriva de clock",
    "spec.net": "Rede",
    "spec.net.n": "Cabo ou Wi-Fi, descoberta automática",
    "spec.sec": "Pareamento",
    "spec.sec.n": "Pareado uma vez, comprovado a cada conexão",
    "spec.upd": "Atualizações",
    "spec.upd.n": "Pelo link, verificadas antes de instalar",
    "spec.os": "Plataforma",
    "spec.os.n": "64 bits; envio por app no 11",
    "spec.size": "Tamanho",
    "spec.size.n": "App nativo, fica na bandeja",

    "road.kicker": "O que vem aí",
    "road.title": "Para onde o Trovul vai",
    "road.ready": "Pronto",
    "road.next": "Em seguida",
    "road.later": "Depois",
    "road.r1": "Áudio, mixer, teclado e mouse, clipboard e arquivos, Stream Deck",
    "road.n1": "Arrastar arquivos direto de uma tela para a outra",
    "road.n2": "O mixer no seu celular",
    "road.n3": "Cenas que seguem o app em primeiro plano",
    "road.l1": "A tela do outro PC numa janela",
    "road.l2": "Um microfone para os dois PCs",
    "road.l3": "Três ou mais PCs, e Mac",

    "co.kicker": "Para empresas",
    "co.title": "Um produto completo, pronto para um palco maior",
    "co.lead":
      "O Trovul é um produto Windows funcionando e bem acabado, com tecnologia de tempo real própria — não um protótipo. Estamos abertos a conversar com empresas que queiram levá-lo mais longe.",
    "co.1t": "Tecnologia proprietária",
    "co.1d":
      "Motor de áudio em tempo real, compartilhamento de teclado e mouse e um protocolo de rede local construídos do zero em Rust. Nenhum driver de terceiros para licenciar.",
    "co.2t": "Uma plataforma, não uma função",
    "co.2d":
      "Áudio, mixer, teclado e mouse, clipboard e atualizações num só link — mais uma API local e um plugin de Stream Deck para construir em cima.",
    "co.3t": "Encaixe natural",
    "co.3d":
      "Para fabricantes de headsets, interfaces de áudio e controladores de stream, montadoras de PCs gamer e empresas de KVM ou acesso remoto — software que deixa o hardware e o ecossistema delas mais indispensáveis.",
    "co.t1": "Aquisição",
    "co.t2": "Licenciamento",
    "co.t3": "Parceria OEM",
    "co.t4": "Parceria estratégica",
    "co.t5": "Imprensa",
    "co.t6": "Outro",
    "co.form.t": "Fale com a gente",
    "co.form.s": "Respondemos pessoalmente cada contato de empresa.",
    "co.f.name": "Nome",
    "co.f.company": "Empresa",
    "co.f.email": "E-mail corporativo",
    "co.f.interest": "Interesse",
    "co.f.msg": "Mensagem",
    "co.f.msg.ph": "O que você gostaria de explorar?",
    "co.f.send": "Enviar",

    "faq.title": "Perguntas e respostas",
    "faq.1q": "Preciso de hardware ou cabos extras?",
    "faq.1a":
      "Não. Os dois PCs só precisam estar na mesma rede, por cabo ou Wi-Fi. O Trovul toca no fone, nas caixas e nos dispositivos que você já tem.",
    "faq.2q": "Quais versões do Windows?",
    "faq.2a":
      "Windows 10 e 11, 64 bits. Enviar só os apps escolhidos exige Windows 11 no PC que envia; todo o resto funciona nos dois.",
    "faq.3q": "Meu áudio passa pela internet?",
    "faq.3a": "Não. Os PCs conversam direto um com o outro na sua rede local, e só PCs que você pareou são aceitos.",
    "faq.4q": "Quanto atraso tem?",
    "faq.4a":
      "Cerca de 30 ms no modo Baixo em rede cabeada e 50 ms no padrão. Num Wi-Fi congestionado, o modo Estável adiciona um pouco de atraso e elimina os cortes. O Trovul mostra o número ao vivo e sugere o modo certo.",
    "faq.5q": "Funciona com jogos?",
    "faq.5a":
      "Sim. Todo app que toca som aparece no mixer, jogos incluídos. O modo jogo mantém o ponteiro dentro do jogo até você sair dele, e os pop-ups nunca aparecem sobre um jogo em tela cheia.",
    "faq.6q": "Substitui o Mouse Without Borders ou o Synergy?",
    "faq.6a":
      "Para dois PCs, sim: teclado e mouse, clipboard e arquivos vêm embutidos, no mesmo link do som — inclusive em janelas de administrador, no UAC e na tela de bloqueio.",
    "faq.7q": "Quando posso testar?",
    "faq.7a":
      "O Trovul está em testes privados. Entre na lista de espera e você recebe notícias assim que o acesso antecipado abrir.",

    "wl.title": "Seja um dos primeiros a testar",
    "wl.lead": "O Trovul está em testes privados. Deixe seu e-mail e avisamos quando o acesso antecipado abrir.",
    "wl.ph": "voce@email.com",
    "wl.s0": "Seu setup (opcional)",
    "wl.s1": "PC gamer + PC de live",
    "wl.s2": "PC gamer + PC de trabalho",
    "wl.s3": "Criador / estúdio",
    "wl.s4": "Dev / escritório",
    "wl.s5": "Outro",
    "wl.btn": "Entrar na lista",
    "wl.note": "Sem spam — só as novidades que importam.",

    "foot.tag": "Dois PCs. Uma mesa só.",
    "foot.wl": "Lista de espera",
    "foot.rights": "Todos os direitos reservados.",
    "foot.win": "Windows é marca registrada da Microsoft; Stream Deck, da Corsair.",
  };

  const MSG = {
    en: {
      "form.sending": "Sending…",
      "form.error": "Something went wrong. Please try again in a moment.",
      "form.email": "Please enter a valid email.",
      "form.required": "Please fill in your name, company and email.",
      "form.wl.ok": "You're on the list! We'll be in touch.",
      "form.co.ok": "Thank you — we'll get back to you personally.",
    },
    pt: {
      "form.sending": "Enviando…",
      "form.error": "Algo deu errado. Tente de novo em instantes.",
      "form.email": "Digite um e-mail válido.",
      "form.required": "Preencha nome, empresa e e-mail.",
      "form.wl.ok": "Você está na lista! Em breve damos notícias.",
      "form.co.ok": "Obrigado — vamos responder pessoalmente.",
    },
  };

  const META = {
    pt: {
      title: "Trovul — Dois PCs. Uma mesa só.",
      desc: "O Trovul liga dois PCs Windows pela rede de casa: ouça os dois no mesmo fone, mixe cada app dos dois PCs e use um só teclado e mouse em todas as telas. Sem cabos, sem hardware extra.",
    },
  };

  const store = {
    get() {
      try {
        return localStorage.getItem("trovul.lang");
      } catch {
        return null;
      }
    },
    set(value) {
      try {
        localStorage.setItem("trovul.lang", value);
      } catch {
        /* private mode */
      }
    },
  };

  function detect() {
    const query = new URLSearchParams(location.search).get("lang");
    if (query === "pt" || query === "en") return query;
    const saved = store.get();
    if (saved === "pt" || saved === "en") return saved;
    const langs = navigator.languages?.length ? navigator.languages : [navigator.language || "en"];
    return langs.some((l) => /^pt\b/i.test(l)) ? "pt" : "en";
  }

  const metaDesc = document.querySelector('meta[name="description"]');
  const EN_META = { title: document.title, desc: metaDesc?.content ?? "" };

  const I18N = {
    lang: "en",
    msg(key) {
      return MSG[this.lang]?.[key] ?? MSG.en[key] ?? key;
    },
    apply(lang) {
      this.lang = lang === "pt" ? "pt" : "en";
      const pt = this.lang === "pt";
      document.querySelectorAll("[data-i18n]").forEach((el) => {
        if (el.dataset.en === undefined) el.dataset.en = el.innerHTML;
        const value = pt ? PT[el.dataset.i18n] : undefined;
        el.innerHTML = value ?? el.dataset.en;
      });
      document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
        if (el.dataset.enPh === undefined) el.dataset.enPh = el.placeholder;
        el.placeholder = (pt && PT[el.dataset.i18nPh]) || el.dataset.enPh;
      });
      document.documentElement.lang = pt ? "pt-BR" : "en";
      const meta = pt ? META.pt : EN_META;
      document.title = meta.title;
      if (metaDesc) metaDesc.content = meta.desc;
      document.querySelectorAll(".lang button").forEach((b) => b.classList.toggle("on", b.dataset.lang === this.lang));
    },
  };
  window.I18N = I18N;

  I18N.apply(detect());
  document.querySelectorAll(".lang button").forEach((btn) =>
    btn.addEventListener("click", () => {
      I18N.apply(btn.dataset.lang);
      store.set(I18N.lang);
    }),
  );
})();
