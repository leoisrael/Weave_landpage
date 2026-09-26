/* trovul.com — interactions: nav, reveal, demos, forms. No dependencies. */

(() => {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const t = (key) => (window.I18N ? window.I18N.msg(key) : key);

  // ---------- Nav ----------
  const nav = $("#nav");
  const menuBtn = $("#menu-btn");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 12);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const closeMenu = () => {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  };
  menuBtn.addEventListener("click", () => {
    const open = !nav.classList.contains("open");
    nav.classList.toggle("open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
  });
  $$("#nav-links a").forEach((a) => a.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  // ---------- Reveal on scroll (siblings stagger) ----------
  const revealables = $$("[data-reveal]");
  revealables.forEach((el) => {
    const group = $$(":scope > [data-reveal]", el.parentElement);
    const index = group.indexOf(el);
    if (index > 0) el.style.setProperty("--delay", `${Math.min(index, 6) * 0.07}s`);
  });
  if ("IntersectionObserver" in window && !reduced) {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    revealables.forEach((el) => io.observe(el));
  } else {
    revealables.forEach((el) => el.classList.add("in"));
  }

  // ---------- Spotlight on cards ----------
  $$(".card").forEach((card) => {
    card.addEventListener("pointermove", (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    });
  });

  // ---------- Hero stage follows the pointer a little ----------
  const stage = $("#hero-stage");
  if (stage && !reduced && window.matchMedia("(pointer: fine) and (min-width: 1081px)").matches) {
    const hero = $(".hero");
    hero.addEventListener("pointermove", (e) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      stage.style.transform = `rotateY(${-9 + x * 6}deg) rotateX(${5 - y * 5}deg)`;
    });
    hero.addEventListener("pointerleave", () => (stage.style.transform = ""));
  }

  // ---------- Where the sound goes ----------
  const flow = $("#flow");
  $$(".card-audio .segmented button").forEach((btn) => {
    btn.addEventListener("click", () => {
      $$(".card-audio .segmented button").forEach((b) => b.classList.toggle("on", b === btn));
      flow.dataset.dir = btn.dataset.dir;
    });
  });

  // ---------- Film ----------
  const video = $("#film-video");
  const playBtn = $("#play-btn");
  if (video && playBtn) {
    const player = video.closest(".player");
    playBtn.addEventListener("click", () => {
      video.play().catch(() => {});
    });
    video.addEventListener("play", () => {
      player.classList.add("playing");
      video.controls = true;
    });
    video.addEventListener("ended", () => player.classList.remove("playing"));
    video.addEventListener("error", () => player.classList.add("playing"), true);
  }

  // ---------- Lightbox ----------
  const lightbox = $("#lightbox");
  const lightImg = $("img", lightbox);
  const closeLightbox = () => {
    lightbox.hidden = true;
    document.body.style.overflow = "";
  };
  $$("[data-zoom]").forEach((btn) => {
    btn.addEventListener("click", () => {
      lightImg.src = btn.dataset.zoom;
      lightImg.alt = $("img", btn)?.alt ?? "";
      lightbox.hidden = false;
      document.body.style.overflow = "hidden";
    });
  });
  lightbox.addEventListener("click", closeLightbox);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
  });

  // ---------- Forms (Formsubmit) ----------
  const ENDPOINT = "https://formsubmit.co/ajax/trovul@outlook.com";

  async function submit(form, payload, okKey) {
    const button = $("button[type=submit]", form);
    const msg = $(".form-msg", form);
    if ($(".honey", form)?.value) return; // a bot filled the hidden field
    button.disabled = true;
    msg.className = "form-msg";
    msg.textContent = t("form.sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...payload, _template: "table", _captcha: "false", lang: window.I18N?.lang ?? "en" }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || String(data.success) === "false") throw new Error(data.message || res.statusText);
      msg.className = "form-msg ok";
      msg.textContent = t(okKey);
      form.reset();
      confetti();
    } catch {
      msg.className = "form-msg err";
      msg.textContent = t("form.error");
    } finally {
      button.disabled = false;
    }
  }

  const waitlist = $("#waitlist-form");
  waitlist?.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = waitlist.email.value.trim();
    if (!waitlist.email.checkValidity() || !email) {
      const msg = $(".form-msg", waitlist);
      msg.className = "form-msg err";
      msg.textContent = t("form.email");
      waitlist.email.focus();
      return;
    }
    submit(
      waitlist,
      { email, setup: waitlist.setup.value || "-", _subject: "Trovul — new person on the waitlist" },
      "form.wl.ok",
    );
  });

  function confetti() {
    if (reduced) return;
    const colors = ["#8b5cf6", "#a78bfa", "#22d3ee", "#34d399", "#f4f4fa"];
    for (let i = 0; i < 60; i++) {
      const c = document.createElement("span");
      c.className = "confetti";
      c.style.left = `${Math.random() * 100}vw`;
      c.style.background = colors[i % colors.length];
      c.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
      c.style.setProperty("--t", `${2 + Math.random() * 1.8}s`);
      c.style.setProperty("--dx", `${(Math.random() - 0.5) * 200}px`);
      c.style.animationDelay = `${Math.random() * 0.4}s`;
      document.body.appendChild(c);
      setTimeout(() => c.remove(), 4500);
    }
  }

  // ---------- Footer year ----------
  const year = $("#year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
