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

  // ---------- The desk demo ----------
  const desk = $("#desk");
  if (desk) {
    const area = $(".desk-screens", desk);
    const pointer = $("#desk-pointer");
    const screens = $$(".screen", area);
    const pcLabel = $("#desk-pc");
    const hs = {
      local: $("#hs-local"),
      remote: $("#hs-remote"),
      localV: $("#hs-local-v"),
      remoteV: $("#hs-remote-v"),
    };
    let pos = { x: 60, y: 80 };
    let target = { x: 60, y: 80 };
    let userUntil = 0;
    let current = null;
    let running = false;
    let start = performance.now();

    const setPc = (pc) => {
      if (pc === current) return;
      current = pc;
      const remote = pc === "remote";
      pcLabel.textContent = remote ? "STREAM-PC" : "GAMING-RIG";
      pcLabel.className = remote ? "remote" : "local";
      pointer.style.setProperty("--pc", remote ? "rgba(34,211,238,.95)" : "rgba(167,139,250,.95)");
      hs.local.style.width = remote ? "30%" : "100%";
      hs.remote.style.width = remote ? "100%" : "30%";
      hs.localV.textContent = remote ? "30%" : "100%";
      hs.remoteV.textContent = remote ? "100%" : "30%";
    };

    const autoTarget = (now) => {
      // A slow tour: across all three screens and back, with a gentle wave.
      const w = area.clientWidth;
      const h = area.clientHeight;
      const phase = ((now - start) / 9000) % 1;
      const tri = phase < 0.5 ? phase * 2 : 2 - phase * 2;
      const eased = 0.5 - Math.cos(tri * Math.PI) / 2;
      return { x: w * (0.08 + eased * 0.84), y: h * (0.5 + Math.sin(phase * Math.PI * 4) * 0.18) };
    };

    const frame = (now) => {
      if (!running) return;
      if (now > userUntil) target = autoTarget(now);
      pos.x += (target.x - pos.x) * 0.18;
      pos.y += (target.y - pos.y) * 0.18;
      pointer.style.transform = `translate(${pos.x - 5}px, ${pos.y - 3}px)`;
      const areaRect = area.getBoundingClientRect();
      for (const s of screens) {
        const r = s.getBoundingClientRect();
        const inside = pos.x >= r.left - areaRect.left && pos.x <= r.right - areaRect.left;
        s.classList.toggle("active", inside);
        if (inside) setPc(s.dataset.pc);
      }
      requestAnimationFrame(frame);
    };

    const move = (e) => {
      const r = area.getBoundingClientRect();
      target = {
        x: Math.max(0, Math.min(r.width, e.clientX - r.left)),
        y: Math.max(0, Math.min(r.height, e.clientY - r.top)),
      };
      userUntil = performance.now() + 2500;
    };
    area.addEventListener("pointermove", move);
    area.addEventListener("pointerdown", move);
    area.addEventListener("pointerleave", () => {
      userUntil = performance.now() + 600;
      start = performance.now() - 9000 * (pos.x / Math.max(1, area.clientWidth)) * 0.5;
    });

    setPc("local");
    const deskIo = new IntersectionObserver((entries) => {
      const visible = entries.some((e) => e.isIntersecting);
      if (visible && !running) {
        running = true;
        requestAnimationFrame(frame);
      } else if (!visible) {
        running = false;
      }
    });
    deskIo.observe(desk);
  }

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

  const company = $("#company-form");
  company?.addEventListener("submit", (e) => {
    e.preventDefault();
    const required = ["name", "company", "email"];
    const missing = required.find((n) => !company[n].value.trim() || !company[n].checkValidity());
    if (missing) {
      const msg = $(".form-msg", company);
      msg.className = "form-msg err";
      msg.textContent = t(missing === "email" ? "form.email" : "form.required");
      company[missing].focus();
      return;
    }
    submit(
      company,
      {
        name: company.name.value.trim(),
        company: company.company.value.trim(),
        email: company.email.value.trim(),
        interest: company.interest.value,
        message: company.message.value.trim() || "-",
        _subject: `Trovul — company inquiry (${company.interest.value})`,
      },
      "form.co.ok",
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
