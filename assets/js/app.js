/* Music Exam — 應用程式
   單頁、無建置：雜湊路由 + 學習／測試兩個分頁 + 進度儲存 */

(function () {
  "use strict";

  const $ = (s, r) => (r || document).querySelector(s);
  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  };
  const esc = (s) =>
    String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  const STORE = "musicexam.progress.v1";
  const state = {
    progress: loadProgress(),
    tab: "study",
  };

  function loadProgress() {
    try {
      return JSON.parse(localStorage.getItem(STORE)) || {};
    } catch (e) {
      return {};
    }
  }
  function saveProgress() {
    try {
      localStorage.setItem(STORE, JSON.stringify(state.progress));
    } catch (e) {}
  }

  /* ---------- data helpers ---------- */
  const units = () => COURSE.units;
  const allLessons = () =>
    units().flatMap((u) => u.lessons.map((l) => ({ unit: u, lesson: l })));
  const findLesson = (uid, lid) => {
    const u = units().find((x) => x.id === uid);
    if (!u) return null;
    const l = u.lessons.find((x) => x.id === lid);
    return l ? { unit: u, lesson: l } : null;
  };
  const lessonKey = (uid, lid) => uid + "/" + lid;

  function bestScore(uid, lid) {
    const p = state.progress[lessonKey(uid, lid)];
    return p && typeof p.best === "number" ? p.best : null;
  }
  function isDone(uid, lid) {
    const b = bestScore(uid, lid);
    return b != null && b >= 0.8;
  }

  function renderProgress() {
    const total = allLessons().length;
    const done = allLessons().filter((x) => isDone(x.unit.id, x.lesson.id)).length;
    $("#progressText").textContent = done + " / " + total + " 課完成";
    $("#progressBar").style.width = (total ? (done / total) * 100 : 0) + "%";
  }

  function renderNav(active) {
    const nav = $("#topnav");
    nav.innerHTML = "";
    nav.appendChild(navLink("#/", "首頁", active === "home"));
    units().forEach((u) => {
      u.lessons.forEach((l, i) => {
        nav.appendChild(
          navLink(
            "#/" + u.id + "/" + l.id,
            u.short + " · 第" + "一二三"[i] + "課",
            active === u.id + "/" + l.id
          )
        );
      });
    });
  }
  function navLink(href, text, on) {
    const a = el("a", on ? "on" : "", esc(text));
    a.href = href;
    return a;
  }

  /* ---------- home ---------- */
  function renderHome() {
    renderNav("home");
    const app = $("#app");
    app.innerHTML = "";

    const hero = el("section", "hero");
    hero.innerHTML = `
      <p class="eyebrow">${esc(COURSE.kicker || "音樂科 · 考試溫習")}</p>
      <h1>${esc(COURSE.title)}</h1>
      <p>${esc(COURSE.intro)}</p>
      <div class="hero-meta">
        <span><b>${units().length}</b> 個單元</span>
        <span><b>${allLessons().length}</b> 課</span>
        <span>每課 <b>學習重點</b> ＋ <b>測試</b></span>
        <span>內容整理自課堂影片 <b>${esc(COURSE.sourceLabel || "")}</b></span>
      </div>`;
    app.appendChild(hero);

    units().forEach((u) => {
      const sec = el("section", "unit");
      const head = el("div", "unit-head");
      head.innerHTML = `<span class="num">${esc(u.num)}</span><h2>${esc(u.title)}</h2>`;
      sec.appendChild(head);
      const sub = el("p", "unit-sub", esc(u.subtitle || ""));
      sec.appendChild(sub);

      const cards = el("div", "cards");
      u.lessons.forEach((l, i) => {
        const a = el("a", "card");
        a.href = "#/" + u.id + "/" + l.id;
        const b = bestScore(u.id, l.id);
        const dots = l.quiz
          .map((_, qi) => `<i class="${b != null && qi / l.quiz.length < b ? "on" : ""}"></i>`)
          .join("");
        a.innerHTML = `
          ${isDone(u.id, l.id) ? '<span class="done" title="已完成">✓</span>' : ""}
          <span class="k">${esc(u.short)} · 第${"一二三四五"[i]}課</span>
          <h3>${esc(l.title)}</h3>
          <p>${esc(l.lede)}</p>
          <span class="tags">${(l.tags || [])
            .slice(0, 3)
            .map((t) => `<span class="tag">${esc(t)}</span>`)
            .join("")}</span>
          <span class="dots">${dots}</span>`;
        cards.appendChild(a);
      });
      sec.appendChild(cards);
      app.appendChild(sec);
    });

    renderProgress();
    window.scrollTo(0, 0);
  }

  /* ---------- lesson ---------- */
  function renderLesson(uid, lid) {
    const found = findLesson(uid, lid);
    if (!found) return renderHome();
    const { unit, lesson } = found;
    renderNav(uid + "/" + lid);
    const app = $("#app");
    app.innerHTML = "";

    const crumbs = el("p", "crumbs");
    crumbs.innerHTML = `<a href="#/">首頁</a> ／ ${esc(unit.num)} ${esc(unit.title)} ／ 第${
      "一二三四五"[unit.lessons.indexOf(lesson)]
    }課`;
    app.appendChild(crumbs);

    const head = el("header", "lesson-head");
    head.innerHTML = `
      <p class="eyebrow">${esc(unit.short)} · 第${"一二三四五"[unit.lessons.indexOf(lesson)]}課</p>
      <h1>${esc(lesson.title)}</h1>
      <p class="lede">${esc(lesson.lede)}</p>`;
    app.appendChild(head);

    const tabs = el("div", "tabs");
    const bStudy = el("button", state.tab === "study" ? "on" : "", "學習重點");
    const bQuiz = el("button", state.tab === "quiz" ? "on" : "", "測試");
    bStudy.onclick = () => {
      state.tab = "study";
      renderLesson(uid, lid);
    };
    bQuiz.onclick = () => {
      state.tab = "quiz";
      renderLesson(uid, lid);
    };
    tabs.appendChild(bStudy);
    tabs.appendChild(bQuiz);
    app.appendChild(tabs);

    const body = el("div");
    app.appendChild(body);

    if (state.tab === "study") renderStudy(body, unit, lesson);
    else renderQuiz(body, unit, lesson);

    const nav = el("div", "foot-nav");
    const idx = allLessons().findIndex(
      (x) => x.unit.id === uid && x.lesson.id === lid
    );
    const all = allLessons();
    if (idx > 0) {
      const p = all[idx - 1];
      const a = el("a");
      a.href = "#/" + p.unit.id + "/" + p.lesson.id;
      a.innerHTML = `<small>← 上一課</small>${esc(p.lesson.title)}`;
      nav.appendChild(a);
    }
    if (idx < all.length - 1) {
      const n = all[idx + 1];
      const a = el("a", "next");
      a.href = "#/" + n.unit.id + "/" + n.lesson.id;
      a.innerHTML = `<small>下一課 →</small>${esc(n.lesson.title)}`;
      nav.appendChild(a);
    }
    app.appendChild(nav);
    window.scrollTo(0, 0);
  }

  function mediaBlock(m) {
    if (!m) return null;
    const fig = el("figure", "panel fig");
    fig.style.margin = "0 0 18px";
    if (m.video) {
      fig.innerHTML = `
        <video controls preload="metadata" playsinline ${m.poster ? `poster="${esc(m.poster)}"` : ""}>
          <source src="${esc(m.video)}" type="video/mp4">
        </video>
        <figcaption>${esc(m.caption || "")}</figcaption>`;
    } else if (m.image) {
      fig.innerHTML = `<img src="${esc(m.image)}" alt="${esc(m.alt || "")}">
        <figcaption>${esc(m.caption || "")}</figcaption>`;
    }
    return fig;
  }

  function renderStudy(root, unit, lesson) {
    const wrap = el("div", "grid-2");

    const left = el("div");
    const m = mediaBlock(lesson.media);
    if (m) left.appendChild(m);

    const box = el("section", "panel panel-pad");
    box.appendChild(el("h2", null, "學習重點"));
    if (lesson.focus) {
      box.appendChild(
        el("p", null, `<span style="color:var(--ink-3);font-size:13px;letter-spacing:.1em">本課重點</span><br>${esc(lesson.focus)}`)
      );
    }
    const ul = el("ul", "points");
    (lesson.points || []).forEach((p) => {
      const li = el("li");
      li.innerHTML = `<b>${esc(p.t)}</b>${p.note ? `<span class="note">${esc(p.note)}</span>` : ""}`;
      ul.appendChild(li);
    });
    box.appendChild(ul);
    left.appendChild(box);

    wrap.appendChild(left);

    const right = el("div");

    if (lesson.keypoint) {
      const kb = el("div", "panel panel-pad");
      kb.style.marginBottom = "18px";
      kb.innerHTML = `<div class="keybox" style="margin:0">
        <p class="kh">記住這一句</p><p>${esc(lesson.keypoint)}</p></div>`;
      right.appendChild(kb);
    }

    if (lesson.terms && lesson.terms.length) {
      const tp = el("section", "panel panel-pad");
      tp.style.marginBottom = "18px";
      tp.appendChild(el("h2", null, "音樂詞彙"));
      const g = el("div", "terms");
      lesson.terms.forEach((t) => {
        const d = el("div", "term");
        d.innerHTML = `<b>${esc(t.en)}</b><span>${esc(t.zh)}${t.note ? " · " + esc(t.note) : ""}</span>`;
        g.appendChild(d);
      });
      tp.appendChild(g);
      right.appendChild(tp);
    }

    if (lesson.timeline && lesson.timeline.length) {
      const tl = el("section", "panel panel-pad");
      tl.style.marginBottom = "18px";
      tl.appendChild(el("h2", null, "影片導覽"));
      const list = el("ol", "timeline");
      lesson.timeline.forEach((t) => {
        const li = el("li");
        li.innerHTML = `<b>${esc(t.label)} <span class="t">${esc(t.at)}</span></b><span>${esc(t.text)}</span>`;
        list.appendChild(li);
      });
      tl.appendChild(list);
      right.appendChild(tl);
    }

    if (lesson.listen && lesson.listen.length) {
      const lp = el("section", "panel panel-pad");
      lp.appendChild(el("h2", null, "聽一聽"));
      lesson.listen.forEach((a, i) => lp.appendChild(audioRow(a, "聽段 " + (i + 1))));
      right.appendChild(lp);
    }

    wrap.appendChild(right);
    root.appendChild(wrap);

    if (lesson.figures && lesson.figures.length) {
      const fp = el("section", "panel panel-pad");
      fp.style.marginTop = "20px";
      fp.appendChild(el("h2", null, "樂譜與圖片"));
      const hint = el("p", null, "點擊圖片可放大看清楚樂譜。");
      hint.style.cssText = "margin:-4px 0 14px;font-size:12.5px;color:var(--ink-3)";
      fp.appendChild(hint);
      const g = el("div", "figgrid" + (lesson.figures.length === 3 ? " three" : ""));
      lesson.figures.forEach((f) => {
        const fig = el("figure", f.wide ? "wide" : "");
        const img = el("img");
        img.src = f.src;
        img.alt = f.alt || "";
        img.loading = "lazy";
        img.style.cursor = "zoom-in";
        img.onclick = () => openLightbox(f.src, f.caption || "");
        fig.appendChild(img);
        const cap = el("figcaption", null, esc(f.caption || ""));
        fig.appendChild(cap);
        g.appendChild(fig);
      });
      fp.appendChild(g);
      root.appendChild(fp);
    }
  }

  /* ---------- lightbox ---------- */
  function openLightbox(src, caption) {
    const box = el("div", "lb");
    box.innerHTML = `<img src="${esc(src)}" alt=""><p>${esc(caption)}</p>`;
    box.onclick = () => box.remove();
    document.body.appendChild(box);
    document.addEventListener(
      "keydown",
      function esc2(e) {
        if (e.key === "Escape") {
          box.remove();
          document.removeEventListener("keydown", esc2);
        }
      }
    );
  }

  function audioRow(a, label) {
    const d = el("div", "listen");
    d.innerHTML = `<button class="ico" type="button" aria-label="播放">▶</button>
      <small>${esc(label)}${a.note ? " · " + esc(a.note) : ""}</small>
      <input type="range" min="0" max="100" value="0" aria-label="播放進度">`;
    const audio = new Audio(a.src);
    const btn = $("button", d);
    const range = $("input", d);
    btn.onclick = () => {
      if (audio.paused) {
        audio.play();
        btn.textContent = "❚❚";
      } else {
        audio.pause();
        btn.textContent = "▶";
      }
    };
    audio.ontimeupdate = () => {
      if (audio.duration) range.value = (audio.currentTime / audio.duration) * 100;
    };
    audio.onended = () => (btn.textContent = "▶");
    range.oninput = () => {
      if (audio.duration) audio.currentTime = (range.value / 100) * audio.duration;
    };
    return d;
  }

  /* ---------- quiz ---------- */
  function renderQuiz(root, unit, lesson) {
    const qs = lesson.quiz || [];
    const results = new Array(qs.length).fill(null);

    const top = el("div", "quiz-top");
    top.innerHTML = `<span class="meta">共 ${qs.length} 題 · 每題作答後即時講解</span>`;
    const reset = el("button", "btn ghost", "重新作答");
    top.appendChild(reset);
    root.appendChild(top);

    const listEl = el("div");
    qs.forEach((q, i) => listEl.appendChild(renderQuestion(q, i, (ok) => {
      results[i] = ok;
      updateScore();
    })));
    root.appendChild(listEl);

    const bar = el("div", "scorebar");
    bar.innerHTML = `<div><div class="big" id="scoreBig">0<span style="font-size:16px;color:var(--ink-3)"> / ${qs.length}</span></div>
        <div class="lbl">答對題數</div></div>
      <div class="msg" id="scoreMsg">作答後會顯示成績。</div>`;
    root.appendChild(bar);

    function updateScore() {
      const answered = results.filter((r) => r !== null).length;
      const right = results.filter((r) => r === true).length;
      $("#scoreBig", bar).innerHTML =
        right + `<span style="font-size:16px;color:var(--ink-3)"> / ${qs.length}</span>`;
      const pct = qs.length ? right / qs.length : 0;
      const msg = $("#scoreMsg", bar);
      if (answered < qs.length) {
        msg.textContent = `已回答 ${answered} 題，還有 ${qs.length - answered} 題。`;
      } else {
        let verdict = "再溫一次學習重點，然後重做。";
        if (pct === 1) verdict = "全對，這一課可以跳過。";
        else if (pct >= 0.8) verdict = "達標（80% 以上），記錄已更新。";
        msg.textContent = `完成 ${right} / ${qs.length}（${Math.round(pct * 100)}%）。${verdict}`;
        const key = lessonKey(unit.id, lesson.id);
        const prev = state.progress[key] || {};
        const best = Math.max(prev.best || 0, pct);
        state.progress[key] = { best, last: pct, at: Date.now() };
        saveProgress();
        renderProgress();
      }
    }

    reset.onclick = () => {
      renderQuiz(root, unit, lesson);
    };
  }

  function qCard(i, q) {
    const card = el("div", "q");
    card.innerHTML = `<p class="qn">第 ${i + 1} 題</p>
      <p class="qt">${esc(q.q)}${q.en ? `<span class="en">${esc(q.en)}</span>` : ""}</p>`;
    return card;
  }

  function verdict(card, ok, explain) {
    const v = el("div", "verdict " + (ok ? "ok" : "bad"));
    v.innerHTML = `<b>${ok ? "正確" : "再想想"}</b><span>${esc(explain || "")}</span>`;
    card.appendChild(v);
  }

  function renderQuestion(q, i, report) {
    const card = qCard(i, q);

    if (q.type === "mcq" || q.type === "listen") {
      if (q.type === "listen") {
        const box = el("div", "listen");
        box.innerHTML = `<button class="ico" type="button" aria-label="播放">▶</button>
          <small>${esc(q.audioNote || "聽這段音樂，選出答案")}</small>
          <input type="range" min="0" max="100" value="0" aria-label="播放進度">`;
        const audio = new Audio(q.audio);
        const b = $("button", box), r = $("input", box);
        b.onclick = () => { if (audio.paused) { audio.play(); b.textContent = "❚❚"; } else { audio.pause(); b.textContent = "▶"; } };
        audio.ontimeupdate = () => { if (audio.duration) r.value = (audio.currentTime / audio.duration) * 100; };
        audio.onended = () => (b.textContent = "▶");
        r.oninput = () => { if (audio.duration) audio.currentTime = (r.value / 100) * audio.duration; };
        card.appendChild(box);
      }
      const opts = el("div", "opts");
      q.options.forEach((o, oi) => {
        const btn = el("button", "opt");
        btn.type = "button";
        btn.innerHTML = `<span class="l">${"ABCDEF"[oi]}</span><span>${esc(o)}</span>`;
        btn.onclick = () => {
          if (card.dataset.locked) return;
          card.dataset.locked = "1";
          const ok = oi === q.answer;
          [...opts.children].forEach((c, ci) => {
            c.disabled = true;
            if (ci === q.answer) c.classList.add("right");
            else if (ci === oi) c.classList.add("wrong");
          });
          verdict(card, ok, q.explain);
          report(ok);
        };
        opts.appendChild(btn);
      });
      card.appendChild(opts);
      return card;
    }

    if (q.type === "tf") {
      const opts = el("div", "opts");
      ["正確", "錯誤"].forEach((label, oi) => {
        const btn = el("button", "opt");
        btn.type = "button";
        btn.innerHTML = `<span class="l">${"FT"[oi]}</span><span>${esc(label)}</span>`;
        btn.onclick = () => {
          if (card.dataset.locked) return;
          card.dataset.locked = "1";
          const ok = (oi === 0) === q.answer;
          [...opts.children].forEach((c, ci) => {
            c.disabled = true;
            if ((ci === 0) === q.answer) c.classList.add("right");
            else if (ci === oi) c.classList.add("wrong");
          });
          verdict(card, ok, q.explain);
          report(ok);
        };
        opts.appendChild(btn);
      });
      card.appendChild(opts);
      return card;
    }

    if (q.type === "fill") {
      const row = el("div", "gap");
      const input = el("input");
      input.type = "text";
      input.placeholder = q.placeholder || "輸入答案";
      input.autocomplete = "off";
      const btn = el("button", "btn", "核對");
      btn.type = "button";
      row.appendChild(input);
      row.appendChild(btn);
      card.appendChild(row);

      const norm = (s) =>
        String(s).toLowerCase().replace(/[\s，,。.、·'"'"-]/g, "");
      const check = () => {
        if (card.dataset.locked) return;
        const ok = (q.accept || []).some((a) => norm(a) === norm(input.value));
        if (!input.value.trim()) return;
        card.dataset.locked = "1";
        btn.disabled = true;
        input.disabled = true;
        input.style.borderColor = ok ? "var(--teal)" : "var(--bad)";
        if (!ok) input.value = input.value + "　→　" + (q.accept && q.accept[0]);
        verdict(card, ok, q.explain);
        report(ok);
      };
      btn.onclick = check;
      input.onkeydown = (e) => { if (e.key === "Enter") check(); };
      return card;
    }

    if (q.type === "order") {
      const hint = el("p", null, `<span style="color:var(--ink-3);font-size:13px">${esc(q.hint || "依次點選，排成正確次序。")}</span>`);
      hint.style.margin = "0 0 8px";
      card.appendChild(hint);
      const slots = el("div");
      slots.id = "answerSlots";
      const pool = el("div");
      pool.id = "orderBox";
      pool.style.marginTop = "10px";
      card.appendChild(slots);
      card.appendChild(pool);

      let picked = [];
      const render = () => {
        slots.innerHTML = "";
        picked.forEach((p, idx) => {
          const c = el("button", "chip", idx + 1 + ". " + esc(q.items[p]));
          c.type = "button";
          c.onclick = () => { if (card.dataset.locked) return; picked.splice(idx, 1); render(); };
          slots.appendChild(c);
        });
        [...pool.children].forEach((c, ci) => {
          c.classList.toggle("used", picked.includes(ci));
        });
      };
      q.items.forEach((it, ci) => {
        const c = el("button", "chip", esc(it));
        c.type = "button";
        c.onclick = () => { if (card.dataset.locked || picked.includes(ci)) return; picked.push(ci); render(); };
        pool.appendChild(c);
      });
      render();

      const btn = el("button", "btn", "核對次序");
      btn.type = "button";
      btn.style.marginTop = "12px";
      btn.onclick = () => {
        if (card.dataset.locked) return;
        if (picked.length !== q.items.length) {
          btn.textContent = "請排好全部 " + q.items.length + " 項";
          setTimeout(() => (btn.textContent = "核對次序"), 1400);
          return;
        }
        card.dataset.locked = "1";
        btn.disabled = true;
        const ok = picked.every((p, idx) => p === q.answer[idx]);
        if (!ok) {
          const note = el("p", null, `<span style="font-size:13px;color:var(--ink-2)">正確次序：${esc(
            q.answer.map((a) => q.items[a]).join(" → ")
          )}</span>`);
          note.style.margin = "8px 0 0";
          card.appendChild(note);
        }
        verdict(card, ok, q.explain);
        report(ok);
      };
      card.appendChild(btn);
      return card;
    }

    if (q.type === "match") {
      const grid = el("div");
      grid.style.display = "grid";
      grid.style.gap = "8px";
      const selectors = [];
      q.left.forEach((leftItem) => {
        const row = el("div");
        row.style.display = "flex";
        row.style.alignItems = "center";
        row.style.gap = "10px";
        row.style.flexWrap = "wrap";
        const label = el("span", null, esc(leftItem));
        label.style.minWidth = "140px";
        label.style.fontSize = "14.5px";
        const sel = el("select");
        sel.style.cssText =
          "font-family:inherit;font-size:14px;padding:8px 10px;border:1px solid var(--line);border-radius:10px;background:#fdfbf7;color:var(--ink)";
        sel.innerHTML =
          `<option value="-1">請選擇…</option>` +
          q.right.map((r, ri) => `<option value="${ri}">${esc(r)}</option>`).join("");
        selectors.push(sel);
        row.appendChild(label);
        row.appendChild(sel);
        grid.appendChild(row);
      });
      card.appendChild(grid);
      const btn = el("button", "btn", "核對配對");
      btn.type = "button";
      btn.style.marginTop = "12px";
      btn.onclick = () => {
        if (card.dataset.locked) return;
        if (selectors.some((s) => s.value === "-1")) {
          btn.textContent = "每項都要選";
          setTimeout(() => (btn.textContent = "核對配對"), 1400);
          return;
        }
        card.dataset.locked = "1";
        btn.disabled = true;
        selectors.forEach((s) => (s.disabled = true));
        const ok = selectors.every((s, si) => Number(s.value) === q.answer[si]);
        verdict(card, ok, q.explain);
        report(ok);
      };
      card.appendChild(btn);
      return card;
    }

    return card;
  }

  /* ---------- router ---------- */
  let lastKey = null;
  function route() {
    const h = (location.hash || "#/").replace(/^#\/?/, "");
    const parts = h.split("/").filter(Boolean);
    if (parts.length === 0) {
      state.tab = "study";
      lastKey = null;
      renderHome();
    } else if (parts.length === 2) {
      const key = parts[0] + "/" + parts[1];
      if (key !== lastKey) {
        state.tab = "study";
        lastKey = key;
      }
      renderLesson(parts[0], parts[1]);
    } else {
      renderHome();
    }
  }

  window.addEventListener("hashchange", route);
  document.addEventListener("DOMContentLoaded", route);
  if (document.readyState !== "loading") route();
})();
