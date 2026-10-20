/* ============================================================
   BlocPro — ركن المحترف — app.js
   Logique de l’application : langues (ar / en / fr), navigation,
   affichage des cours, quiz et suivi de progression.
   - Arabe   : langue principale (par défaut), affichage RTL
   - English : deuxième langue des utilisateurs
   - Français: langue du spécialiste (contenu maître : js/data.js)
   ============================================================ */

"use strict";

const STORAGE_KEY = "blocpro_progress_v1";
const LEGACY_KEY = "rihab_progress_v1"; // ancien nom provisoire (migration auto)
const LANG_KEY = "blocpro_lang_v1";

/* ---------- Langue courante ---------- */
function loadLang() {
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (LANG_ORDER.includes(saved)) return saved;
  } catch (e) {}
  return "ar"; // langue principale par défaut
}
let currentLang = loadLang();
let COURSES_ACTIVE = [];
function refreshActiveCourses() {
  COURSES_ACTIVE = currentLang === "ar" ? COURSES_AR : currentLang === "en" ? COURSES_EN : COURSES;
}
refreshActiveCourses();

function t(key, params) {
  let s = (I18N[currentLang] && I18N[currentLang][key]) || I18N.fr[key] || key;
  if (params) Object.keys(params).forEach((k) => { s = s.replaceAll("{" + k + "}", params[k]); });
  return s;
}

const PROF_LABEL_KEYS = { doctor: "profDoctor", nurse: "profNurse", midwife: "profMidwife", pharmacist: "profPharmacist", caregiver: "profCaregiver", other: "profOther" };
const OLD_PROF_TO_CODE = { "Médecin": "doctor", "Infirmier / Infirmière": "nurse", "Sage-femme": "midwife", "Pharmacien": "pharmacist", "Aide-soignant": "caregiver", "Autre professionnel de santé": "other" };
function profLabel(value) {
  const code = PROF_LABEL_KEYS[value] ? value : OLD_PROF_TO_CODE[value];
  return code ? t(PROF_LABEL_KEYS[code]) : (value || "");
}

/* ---------- État (progression) ---------- */
function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY) || localStorage.getItem(LEGACY_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) { /* navigateur privé, etc. */ }
  return { user: null, lessonsDone: {}, quizBest: {} };
}
let state = loadState();

function saveState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {}
  updateHeaderUser();
}

/* ---------- Utilitaires ---------- */
const $app = document.getElementById("app");
const SEP = () => (currentLang === "ar" ? " ‹ " : " › ");

function esc(html) {
  return String(html).replace(/[&<>"']/g, (c) => (
    { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[c]
  ));
}
function findCourse(id) { return COURSES_ACTIVE.find((c) => c.id === id); }
function lessonsDoneCount(course) {
  const done = state.lessonsDone[course.id] || [];
  return course.lecons.filter((l) => done.includes(l.id)).length;
}
function courseProgress(course) {
  if (!course.lecons.length) return 0;
  return Math.round((lessonsDoneCount(course) / course.lecons.length) * 100);
}
function quizPassed(course) {
  const b = state.quizBest[course.id];
  return !!(b && b.percent >= 70);
}
function courseCompleted(course) {
  return courseProgress(course) === 100 && quizPassed(course);
}
function progressBar(pct) {
  return `<div class="progress" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100"><div style="width:${pct}%"></div></div>`;
}

/* ---------- Langues : application à l’interface statique ---------- */
function applyStaticI18n() {
  document.documentElement.lang = currentLang;
  document.documentElement.dir = LANG_DIR[currentLang];
  document.title = t("pageTitle");
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", t("metaDescription"));
  document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => { el.placeholder = t(el.dataset.i18nPlaceholder); });
  const tag = document.getElementById("logo-tagline");
  if (tag) tag.textContent = t("logoTagline");
  const disclaimerText = document.getElementById("disclaimer-text");
  if (disclaimerText) disclaimerText.textContent = t("disclaimer");
  const switcher = document.getElementById("lang-switch");
  if (switcher) {
    switcher.setAttribute("aria-label", t("langLabel"));
    switcher.querySelectorAll("[data-lang]").forEach((btn) => {
      const active = btn.dataset.lang === currentLang;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }
  const profSelect = document.getElementById("login-profession");
  if (profSelect) {
    const current = profSelect.value;
    profSelect.innerHTML = `<option value="">${esc(t("choose"))}</option>` +
      PROFESSION_KEYS.map((code) => `<option value="${code}">${esc(t(PROF_LABEL_KEYS[code]))}</option>`).join("");
    profSelect.value = current;
  }
  updateHeaderUser();
}

function setLang(lang) {
  if (!LANG_ORDER.includes(lang) || lang === currentLang) { applyStaticI18n(); return; }
  currentLang = lang;
  try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
  refreshActiveCourses();
  filterText = ""; filterCat = ""; filterNiv = "";
  applyStaticI18n();
  router();
}
document.querySelectorAll("#lang-switch [data-lang]").forEach((btn) => {
  btn.addEventListener("click", () => setLang(btn.dataset.lang));
});

/* ---------- En-tête : zone utilisateur ---------- */
function updateHeaderUser() {
  const zone = document.getElementById("header-user");
  if (!zone) return;
  if (state.user) {
    zone.innerHTML = `<a class="user-chip" href="#/tableau-de-bord">👋 ${esc(state.user.nom.split(" ")[0])}</a>`;
  } else {
    zone.innerHTML = `<button class="btn btn-primary btn-small" id="btn-login" type="button">${esc(t("loginDemo"))}</button>`;
    document.getElementById("btn-login").addEventListener("click", openLogin);
  }
}
function openLogin() { document.getElementById("login-modal").hidden = false; }
function closeLogin() { document.getElementById("login-modal").hidden = true; }
document.getElementById("login-close").addEventListener("click", closeLogin);
document.getElementById("login-modal").addEventListener("click", (e) => {
  if (e.target.id === "login-modal") closeLogin();
});
document.getElementById("login-form").addEventListener("submit", (e) => {
  e.preventDefault();
  state.user = {
    nom: document.getElementById("login-nom").value.trim(),
    profession: document.getElementById("login-profession").value
  };
  saveState();
  closeLogin();
  location.hash = "#/tableau-de-bord";
  router();
});

/* ---------- Vues ---------- */
function courseCard(course) {
  const pct = courseProgress(course);
  const b = state.quizBest[course.id];
  const badge = courseCompleted(course)
    ? `<span class="tag" style="background:var(--ok-bg);color:var(--ok)">${esc(t("badgeCompleted"))}</span>`
    : "";
  return `
  <article class="card">
    <div class="card-icon" aria-hidden="true">${course.icone}</div>
    <div class="tags">
      <span class="tag">${esc(course.categorie)}</span>
      <span class="tag tag-niveau">${esc(course.niveau)}</span>
      <span class="tag">⏱ ${esc(course.duree)}</span>
      ${badge}
    </div>
    <h3>${esc(course.titre)}</h3>
    <p>${esc(course.description)}</p>
    <div>
      ${progressBar(pct)}
      <span class="progress-label">${esc(t("lessonsDonePct", { pct }))}${b ? " · " + esc(t("bestQuizShort", { score: b.score, total: b.total })) : ""}</span>
    </div>
    <a class="btn btn-primary" href="#/cours/${course.id}">${pct > 0 ? esc(t("continueCourse")) : esc(t("discoverCourse"))}</a>
  </article>`;
}

function viewHome() {
  const totalLessons = COURSES_ACTIVE.reduce((n, c) => n + c.lecons.length, 0);
  const totalQuestions = COURSES_ACTIVE.reduce((n, c) => n + c.quiz.length, 0);
  const greeting = state.user ? t("hello", { name: esc(state.user.nom.split(" ")[0]) }) : t("welcome");
  $app.innerHTML = `
    <section class="hero">
      <h1>${greeting}<br>${esc(t("heroLine2"))}</h1>
      <p>${esc(t("heroText"))}</p>
      <div class="hero-actions">
        <a class="btn btn-light" href="#/formations">${esc(t("heroCourses"))}</a>
        <a class="btn btn-outline" style="background:transparent;color:#fff;border-color:#fff" href="#/tableau-de-bord">${esc(t("heroDashboard"))}</a>
      </div>
    </section>
    <section class="stats-row">
      <div class="stat"><strong>${COURSES_ACTIVE.length}</strong> ${esc(t("statCourses"))}</div>
      <div class="stat"><strong>${totalLessons}</strong> ${esc(t("statLessons"))}</div>
      <div class="stat"><strong>${totalQuestions}</strong> ${esc(t("statQuestions"))}</div>
      <div class="stat"><strong>100 %</strong> ${esc(t("statPace"))}</div>
    </section>
    <h2 class="section-title">${esc(t("homeCoursesTitle"))}</h2>
    <p class="section-sub">${esc(t("homeCoursesSub"))}</p>
    <div class="grid">${COURSES_ACTIVE.map(courseCard).join("")}</div>
    <h2 class="section-title">${esc(t("howTitle"))}</h2>
    <div class="grid">
      <div class="card"><div class="card-icon">1️⃣</div><h3>${esc(t("how1T"))}</h3><p>${esc(t("how1X"))}</p></div>
      <div class="card"><div class="card-icon">2️⃣</div><h3>${esc(t("how2T"))}</h3><p>${esc(t("how2X"))}</p></div>
      <div class="card"><div class="card-icon">3️⃣</div><h3>${esc(t("how3T"))}</h3><p>${esc(t("how3X"))}</p></div>
    </div>`;
}

let filterText = "", filterCat = "", filterNiv = "";
function viewCatalog() {
  const cats = [...new Set(COURSES_ACTIVE.map((c) => c.categorie))];
  const nivs = [...new Set(COURSES_ACTIVE.map((c) => c.niveau))];
  $app.innerHTML = `
    <h1>${esc(t("catalogTitle"))}</h1>
    <p class="muted">${esc(t("catalogSub"))}</p>
    <div class="filters">
      <input type="search" id="f-texte" placeholder="${esc(t("searchPh"))}" value="${esc(filterText)}" aria-label="${esc(t("catalogTitle"))}">
      <select id="f-cat" aria-label="${esc(t("allCategories"))}">
        <option value="">${esc(t("allCategories"))}</option>
        ${cats.map((c) => `<option ${c === filterCat ? "selected" : ""}>${esc(c)}</option>`).join("")}
      </select>
      <select id="f-niv" aria-label="${esc(t("allLevels"))}">
        <option value="">${esc(t("allLevels"))}</option>
        ${nivs.map((n) => `<option ${n === filterNiv ? "selected" : ""}>${esc(n)}</option>`).join("")}
      </select>
    </div>
    <div id="catalog-grid"></div>`;
  const renderGrid = () => {
    const q = filterText.trim().toLowerCase();
    const list = COURSES_ACTIVE.filter((c) =>
      (!q || (c.titre + " " + c.description + " " + c.categorie).toLowerCase().includes(q)) &&
      (!filterCat || c.categorie === filterCat) &&
      (!filterNiv || c.niveau === filterNiv)
    );
    document.getElementById("catalog-grid").innerHTML = list.length
      ? `<div class="grid">${list.map(courseCard).join("")}</div>`
      : `<div class="empty">${esc(t("noResults"))}</div>`;
  };
  renderGrid();
  document.getElementById("f-texte").addEventListener("input", (e) => { filterText = e.target.value; renderGrid(); });
  document.getElementById("f-cat").addEventListener("change", (e) => { filterCat = e.target.value; renderGrid(); });
  document.getElementById("f-niv").addEventListener("change", (e) => { filterNiv = e.target.value; renderGrid(); });
}

function viewCourse(id) {
  const course = findCourse(id);
  if (!course) return viewNotFound();
  const pct = courseProgress(course);
  const done = state.lessonsDone[course.id] || [];
  const b = state.quizBest[course.id];
  $app.innerHTML = `
    <nav class="breadcrumb"><a href="#/">${esc(t("navHome"))}</a>${SEP()}<a href="#/formations">${esc(t("navCourses"))}</a>${SEP()}${esc(course.titre)}</nav>
    <section class="course-head">
      <div class="tags"><span class="tag">${esc(course.categorie)}</span><span class="tag tag-niveau">${esc(course.niveau)}</span><span class="tag">⏱ ${esc(t("totalDuration", { d: course.duree }))}</span></div>
      <h1>${course.icone} ${esc(course.titre)}</h1>
      <p>${esc(course.description)}</p>
      <p class="muted"><small>${esc(t("masterNote"))}</small></p>
      <h3>${esc(t("objectives"))}</h3>
      <ul>${course.objectifs.map((o) => `<li>${esc(o)}</li>`).join("")}</ul>
      ${progressBar(pct)}
      <p class="progress-label">${esc(t("yourProgress", { done: lessonsDoneCount(course), total: course.lecons.length, pct }))}${b ? " · " + esc(t("bestQuizFull", { score: b.score, total: b.total, percent: b.percent })) + (b.percent >= 70 ? " ✅" : "") : ""}</p>
    </section>
    <h2 class="section-title">${esc(t("lessonsTitle"))}</h2>
    <ol class="lesson-list">
      ${course.lecons.map((l, i) => `
      <li class="lesson-item">
        <span class="check" aria-hidden="true">${done.includes(l.id) ? "✅" : "⬜"}</span>
        <div class="grow"><h3>${i + 1}. ${esc(l.titre)}</h3><span class="muted">⏱ ${esc(l.duree)}</span></div>
        <a class="btn ${done.includes(l.id) ? "btn-outline" : "btn-primary"} btn-small" href="#/cours/${course.id}/lecon/${i}">${done.includes(l.id) ? esc(t("reread")) : esc(t("startLesson"))}</a>
      </li>`).join("")}
    </ol>
    <div class="quiz-banner">
      <div><strong>${esc(t("quizBannerTitle"))}</strong><br><span class="muted">${esc(t("quizBannerText", { n: course.quiz.length }))}</span></div>
      <a class="btn btn-primary" href="#/cours/${course.id}/quiz">${b ? esc(t("retakeQuiz")) : esc(t("takeQuiz"))}</a>
    </div>`;
}

function viewLesson(id, idx) {
  const course = findCourse(id);
  if (!course) return viewNotFound();
  const i = Number(idx);
  const lesson = course.lecons[i];
  if (!lesson) return viewNotFound();
  const done = (state.lessonsDone[course.id] || []).includes(lesson.id);
  const prev = i > 0 ? `<a class="btn btn-outline" href="#/cours/${course.id}/lecon/${i - 1}">${esc(t("prevLesson"))}</a>` : `<span></span>`;
  const next = i < course.lecons.length - 1
    ? `<a class="btn btn-primary" href="#/cours/${course.id}/lecon/${i + 1}">${esc(t("nextLesson"))}</a>`
    : `<a class="btn btn-primary" href="#/cours/${course.id}/quiz">${esc(t("goQuiz"))}</a>`;
  $app.innerHTML = `
    <nav class="breadcrumb"><a href="#/formations">${esc(t("navCourses"))}</a>${SEP()}<a href="#/cours/${course.id}">${esc(course.titre)}</a>${SEP()}${esc(t("lessonOf", { i: i + 1, n: course.lecons.length }))}</nav>
    <article class="lesson-body">
      <h1>${esc(lesson.titre)}</h1>
      <p class="muted">${esc(t("readingTime", { d: lesson.duree }))}</p>
      <p>${esc(lesson.intro)}</p>
      <h2>${esc(t("keyPoints"))}</h2>
      <ul>${lesson.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
      <div class="retenir"><strong>${esc(t("remember"))}</strong> ${esc(lesson.retenir)}</div>
      <div style="margin-top:24px;text-align:center">
        <button type="button" id="btn-done" class="btn ${done ? "btn-done" : "btn-primary"}">${done ? esc(t("lessonDoneUndo")) : esc(t("markDone"))}</button>
      </div>
    </article>
    <div class="nav-lessons">${prev}${next}</div>`;
  document.getElementById("btn-done").addEventListener("click", () => {
    const arr = state.lessonsDone[course.id] || (state.lessonsDone[course.id] = []);
    const k = arr.indexOf(lesson.id);
    if (k >= 0) arr.splice(k, 1); else arr.push(lesson.id);
    saveState();
    viewLesson(id, idx);
    $app.focus();
  });
}

function viewQuiz(id) {
  const course = findCourse(id);
  if (!course) return viewNotFound();
  const b = state.quizBest[course.id];
  $app.innerHTML = `
    <nav class="breadcrumb"><a href="#/formations">${esc(t("navCourses"))}</a>${SEP()}<a href="#/cours/${course.id}">${esc(course.titre)}</a>${SEP()}Quiz</nav>
    <h1>${esc(t("quizTitle", { title: course.titre }))}</h1>
    <p class="muted">${esc(t("quizIntro", { n: course.quiz.length }))}${b ? " " + esc(t("quizBestCurrent", { score: b.score, total: b.total, percent: b.percent })) : ""}</p>
    <div id="quiz-result-zone"></div>
    <form id="quiz-form" novalidate>
      ${course.quiz.map((q, qi) => `
      <div class="quiz-q" id="qq-${qi}">
        <fieldset>
          <legend>${esc(t("questionN", { n: qi + 1, q: q.question }))}</legend>
          ${q.choix.map((ch, ci) => `
          <label class="choice" data-q="${qi}" data-c="${ci}">
            <input type="radio" name="q${qi}" value="${ci}">
            <span>${esc(ch)}</span>
          </label>`).join("")}
          <div class="explanation" id="exp-${qi}" hidden></div>
        </fieldset>
      </div>`).join("")}
      <p id="quiz-warning" class="muted" role="alert"></p>
      <button type="submit" class="btn btn-primary btn-block">${esc(t("validateAnswers"))}</button>
    </form>`;

  document.getElementById("quiz-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const answers = course.quiz.map((q, qi) => {
      const sel = document.querySelector(`input[name="q${qi}"]:checked`);
      return sel ? Number(sel.value) : null;
    });
    const missing = answers.findIndex((a) => a === null);
    if (missing >= 0) {
      document.getElementById("quiz-warning").textContent = t("missingAnswer", { n: missing + 1 });
      document.getElementById("qq-" + missing).scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    document.getElementById("quiz-warning").textContent = "";
    let score = 0;
    course.quiz.forEach((q, qi) => {
      const good = answers[qi] === q.reponse;
      if (good) score++;
      document.querySelectorAll(`.choice[data-q="${qi}"]`).forEach((lbl) => {
        const ci = Number(lbl.dataset.c);
        lbl.classList.remove("correct", "wrong");
        if (ci === q.reponse) lbl.classList.add("correct");
        else if (ci === answers[qi]) lbl.classList.add("wrong");
      });
      const exp = document.getElementById("exp-" + qi);
      exp.hidden = false;
      exp.innerHTML = `${good ? "<strong>" + esc(t("correct")) + "</strong>" : "<strong>" + esc(t("wrong")) + "</strong>"} ${esc(q.explication)}`;
    });
    const percent = Math.round((score / course.quiz.length) * 100);
    const prevBest = state.quizBest[course.id];
    if (!prevBest || score > prevBest.score) {
      state.quizBest[course.id] = { score, total: course.quiz.length, percent, date: new Date().toISOString() };
      saveState();
    }
    const pass = percent >= 70;
    document.getElementById("quiz-result-zone").innerHTML = `
      <div class="quiz-result ${pass ? "pass" : "fail"}">
        <div class="score">${score}/${course.quiz.length} — ${percent} %</div>
        <p>${esc(pass ? t("passMsg") : t("failMsg"))}</p>
        <a class="btn btn-outline" href="#/cours/${course.id}">${esc(t("backCourse"))}</a>
        <a class="btn btn-primary" href="#/tableau-de-bord">${esc(t("viewDashboard"))}</a>
      </div>`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function viewDashboard() {
  const totalLessons = COURSES_ACTIVE.reduce((n, c) => n + c.lecons.length, 0);
  const doneLessons = COURSES_ACTIVE.reduce((n, c) => n + lessonsDoneCount(c), 0);
  const completed = COURSES_ACTIVE.filter(courseCompleted).length;
  const started = COURSES_ACTIVE.filter((c) => courseProgress(c) > 0 || state.quizBest[c.id]).length;
  const overall = totalLessons ? Math.round((doneLessons / totalLessons) * 100) : 0;
  const userBlock = state.user
    ? `<p>${esc(t("profileHello", { name: state.user.nom, profession: profLabel(state.user.profession) }))}<br>
       <button type="button" class="btn btn-outline btn-small" id="btn-logout">${esc(t("logout"))}</button></p>`
    : `<p>${esc(t("notLogged"))}</p>
       <button type="button" class="btn btn-primary btn-small" id="btn-login-dash">${esc(t("loginDemo"))}</button>`;

  const rows = COURSES_ACTIVE.map((c) => {
    const b = state.quizBest[c.id];
    const statut = courseCompleted(c) ? t("statusCompleted") : (courseProgress(c) > 0 || b) ? t("statusOngoing") : t("statusNotStarted");
    return `<tr>
      <td><a href="#/cours/${c.id}">${esc(c.titre)}</a></td>
      <td>${esc(t("lessonsFraction", { done: lessonsDoneCount(c), total: c.lecons.length, pct: courseProgress(c) }))}</td>
      <td>${b ? `${b.score}/${b.total} (${b.percent} %)` : "—"}</td>
      <td>${esc(statut)}</td>
    </tr>`;
  }).join("");

  $app.innerHTML = `
    <h1>${esc(t("dashTitle"))}</h1>
    <div class="dash-grid">
      <section class="card" style="border-top-color:var(--teal)"><h3>${esc(t("profileTitle"))}</h3>${userBlock}</section>
      <section class="card" style="border-top-color:var(--blue)">
        <h3>${esc(t("globalProgress"))}</h3>
        <div class="big-progress">${overall} %</div>
        ${progressBar(overall)}
        <p class="muted">${esc(t("globalSummary", { done: doneLessons, total: totalLessons, started, completed }))}</p>
      </section>
    </div>
    <h2 class="section-title">${esc(t("detailTitle"))}</h2>
    <div style="overflow-x:auto">
      <table>
        <thead><tr><th>${esc(t("thCourse"))}</th><th>${esc(t("thLessons"))}</th><th>${esc(t("thBestQuiz"))}</th><th>${esc(t("thStatus"))}</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
    <p style="margin-top:26px">
      <a class="btn btn-primary" href="#/formations">${esc(t("continueCourses"))}</a>
      <button type="button" class="btn btn-danger-outline" id="btn-reset">${esc(t("resetProgress"))}</button>
    </p>
    <p class="muted"><small>${esc(t("storageNote"))}</small></p>`;

  const lo = document.getElementById("btn-logout");
  if (lo) lo.addEventListener("click", () => { state.user = null; saveState(); viewDashboard(); });
  const li = document.getElementById("btn-login-dash");
  if (li) li.addEventListener("click", openLogin);
  document.getElementById("btn-reset").addEventListener("click", () => {
    if (confirm(t("resetConfirm"))) {
      state.lessonsDone = {};
      state.quizBest = {};
      saveState();
      viewDashboard();
    }
  });
}

function viewNotFound() {
  $app.innerHTML = `<div class="empty"><h1>${esc(t("notFoundT"))}</h1><p>${esc(t("notFoundX"))}</p><a class="btn btn-primary" href="#/">${esc(t("backHome"))}</a></div>`;
}

/* ---------- Routeur (navigation par liens #/...) ---------- */
function router() {
  const hash = location.hash || "#/";
  const parts = hash.replace(/^#\//, "").split("/").filter(Boolean);
  if (parts.length === 0) viewHome();
  else if (parts[0] === "formations") viewCatalog();
  else if (parts[0] === "tableau-de-bord") viewDashboard();
  else if (parts[0] === "cours" && parts[1] && parts.length === 2) viewCourse(parts[1]);
  else if (parts[0] === "cours" && parts[2] === "lecon") viewLesson(parts[1], parts[3]);
  else if (parts[0] === "cours" && parts[2] === "quiz") viewQuiz(parts[1]);
  else viewNotFound();
  window.scrollTo(0, 0);
  updateHeaderUser();
}

window.addEventListener("hashchange", router);
applyStaticI18n();
router();
