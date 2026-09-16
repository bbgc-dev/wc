const catalog = window.COMMON_GROUND_CATALOG;
const app = document.querySelector("#app");
const storageKey = "common-ground-browse-state-v1";

const defaultState = {
  ageVerified: false,
  lastCategory: "pre-rolls",
  recentProductIds: [],
  lastRoute: "#/"
};

const loadState = () => {
  try {
    return { ...defaultState, ...JSON.parse(localStorage.getItem(storageKey) || "{}") };
  } catch {
    return { ...defaultState };
  }
};

let savedState = loadState();

const saveState = (changes) => {
  savedState = { ...savedState, ...changes };
  try {
    localStorage.setItem(storageKey, JSON.stringify(savedState));
  } catch {
    // Browsing still works when storage is unavailable.
  }
};

const getCategory = (id) => catalog.categories.find((category) => category.id === id);
const getProduct = (id) => {
  for (const category of catalog.categories) {
    const product = category.products.find((item) => item.id === id);
    if (product) return { category, product };
  }
  return null;
};

const productHref = (categoryId, productId) => `#/product/${categoryId}/${productId}`;

const categoryCard = (category) => `
  <a class="format-card accent-${category.accent}" href="#/category/${category.id}">
    <span class="format-card-media" aria-hidden="true"><img src="${category.image}" alt="" /></span>
    <span class="format-number">${category.number}</span>
    <span class="format-name">${category.name}</span>
    <span class="format-note">${category.note}</span>
    <span class="format-action">View formats <b aria-hidden="true">↗</b></span>
  </a>
`;

const productCard = (category, product, index) => `
  <article class="product-card">
    <a class="product-card-art art-${index % 3}" href="${productHref(category.id, product.id)}" aria-label="Open ${product.name}">
      <img src="${category.image}" alt="" loading="lazy" />
      <span>${category.number}.${String(index + 1).padStart(2, "0")}</span>
      <strong>${category.short}</strong>
    </a>
    <div class="product-card-copy">
      <p class="product-kind">Format reference</p>
      <h2><a href="${productHref(category.id, product.id)}">${product.name}</a></h2>
      <p>${product.descriptor}</p>
      <a class="text-link" href="${productHref(category.id, product.id)}">Explore the details <span aria-hidden="true">↗</span></a>
    </div>
  </article>
`;

const recentItems = () => savedState.recentProductIds
  .map((id) => getProduct(id))
  .filter(Boolean)
  .slice(0, 3);

const recentSection = () => {
  const items = recentItems();
  if (!items.length) return "";
  return `
    <section class="recent-section page-gutter" aria-labelledby="recent-title">
      <div class="section-heading compact-heading">
        <p class="section-number">[ YOUR TRAIL ]</p>
        <h2 id="recent-title">Recently explored.</h2>
      </div>
      <div class="recent-list">
        ${items.map(({ category, product }) => `
          <a href="${productHref(category.id, product.id)}">
            <span>${category.short}</span>
            <strong>${product.name}</strong>
            <b aria-hidden="true">↗</b>
          </a>
        `).join("")}
      </div>
    </section>
  `;
};

const renderHome = () => {
  document.title = "Common Ground — Product Format Guide";
  app.innerHTML = `
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-backdrop" aria-hidden="true"><img src="./assets/hero-art.png" alt="" /></div>
      <div class="hero-heading reveal">
        <p class="eyebrow">Five product formats • Halfway House, Midrand</p>
        <h1 id="hero-title">Explore what’s<br /><span>on the shelf.</span></h1>
        <p class="hero-intro">Start with a format, then open a focused reference for the label details and questions that matter.</p>
      </div>
      <div class="format-card-grid reveal" aria-label="Product format guides">
        ${catalog.categories.map(categoryCard).join("")}
      </div>
      <div class="hero-utility"><span>05 categories</span><span>15 format references</span><span>No prices or online orders</span></div>
    </section>

    ${recentSection()}

    <section class="manifesto page-gutter" aria-label="Site purpose">
      <p class="section-number">[ 01 / ORIENTATION ]</p>
      <p class="manifesto-text reveal">Know the format. Read the label. Ask better questions.
        <span>Each category has its own materials, packaging details and questions worth asking before a store visit.</span>
      </p>
    </section>

    <section class="information-grid" aria-labelledby="facts-title">
      <div class="fact-intro reveal">
        <p class="section-number">[ 02 / READ THE FACTS ]</p>
        <h2 id="facts-title">The label is part of the experience.</h2>
      </div>
      <div class="fact-card acid reveal"><span>01</span><h3>Contents</h3><p>Look for a clear ingredient list, declared allergens and the manufacturer or supplier.</p></div>
      <div class="fact-card violet reveal"><span>02</span><h3>Strength</h3><p>Use only verified, product-specific potency and serving information supplied for that batch.</p></div>
      <div class="fact-card orange reveal"><span>03</span><h3>Traceability</h3><p>Batch references, dates and supporting documents should be easy to find and understand.</p></div>
      <div class="fact-card ink reveal"><span>04</span><h3>Warnings</h3><p>Required warnings belong with the product information, written plainly and visibly.</p></div>
    </section>

    <section class="culture" id="culture" aria-labelledby="culture-title">
      <figure class="culture-art reveal"><img src="./assets/culture-art.png" alt="Abstract botanical textures, screen-print grain and urban night reflections" /></figure>
      <div class="culture-copy reveal">
        <p class="section-number">[ 03 / CULTURE DESK ]</p>
        <h2 id="culture-title">More than a shelf.</h2>
        <p>Culture lives in artwork, language, music, clothing and the stories a neighbourhood tells about itself. This space connects local creative energy with useful product literacy.</p>
        <div class="editorial-tags" aria-label="Editorial themes"><span>Local artists</span><span>Design</span><span>Label literacy</span><span>Community notes</span></div>
      </div>
    </section>

    <section class="visit" id="visit" aria-labelledby="visit-title">
      <div><p class="section-number">[ 04 / FIND THE SPACE ]</p><h2 id="visit-title">Halfway House,<br />Midrand.</h2></div>
      <dl class="visit-details">
        <div><dt>Area</dt><dd>Halfway House • near Midrand Mall • Midrand, Gauteng</dd></div>
        <div><dt>Information</dt><dd>Visit the store for current availability, verified product details and label information.</dd></div>
        <div><dt>Before you go</dt><dd>Bring valid identification and check opening hours directly with the store.</dd></div>
      </dl>
    </section>
  `;
};

const renderCategory = (category) => {
  document.title = `${category.name} — Common Ground`;
  saveState({ lastCategory: category.id, lastRoute: `#/category/${category.id}` });
  app.innerHTML = `
    <section class="collection-hero accent-${category.accent}">
      <div class="collection-copy">
        <nav class="breadcrumbs" aria-label="Breadcrumb"><a href="#/">Product index</a><span>/</span><span>${category.name}</span></nav>
        <p class="eyebrow">Category ${category.number} / 05</p>
        <h1>${category.name}</h1>
        <p>${category.intro}</p>
      </div>
      <figure class="collection-poster"><img src="${category.image}" alt="${category.imageAlt}" /><span>${category.number}</span><strong>${category.short}</strong></figure>
    </section>

    <section class="collection-index page-gutter" aria-labelledby="collection-title">
      <div class="collection-toolbar">
        <div><p class="section-number">[ FORMAT INDEX ]</p><h2 id="collection-title">Choose a reference.</h2></div>
        <p>${category.products.length} entries • details confirmed in store</p>
      </div>
      <div class="product-grid">${category.products.map((product, index) => productCard(category, product, index)).join("")}</div>
    </section>

    <section class="category-switcher page-gutter" aria-labelledby="switcher-title">
      <p class="section-number" id="switcher-title">[ KEEP EXPLORING ]</p>
      <div>${catalog.categories.map((item) => `<a class="${item.id === category.id ? "active" : ""}" href="#/category/${item.id}"><span>${item.number}</span>${item.short}</a>`).join("")}</div>
    </section>
  `;
};

const renderProduct = (category, product) => {
  document.title = `${product.name} — Common Ground`;
  const recent = [product.id, ...savedState.recentProductIds.filter((id) => id !== product.id)].slice(0, 6);
  saveState({ lastCategory: category.id, recentProductIds: recent, lastRoute: productHref(category.id, product.id) });
  const index = category.products.findIndex((item) => item.id === product.id);
  app.innerHTML = `
    <article class="product-detail">
      <div class="detail-art art-${index % 3}" aria-hidden="true">
        <img src="${category.image}" alt="" />
        <span>${category.number}.${String(index + 1).padStart(2, "0")}</span>
        <strong>${category.short}</strong>
        <i>FORMAT REFERENCE</i>
      </div>
      <div class="detail-copy">
        <nav class="breadcrumbs" aria-label="Breadcrumb"><a href="#/">Product index</a><span>/</span><a href="#/category/${category.id}">${category.name}</a><span>/</span><span>${product.name}</span></nav>
        <p class="eyebrow">Informational product format</p>
        <h1>${product.name}</h1>
        <p class="detail-descriptor">${product.descriptor}</p>
        <p class="detail-summary">${product.summary}</p>
        <a class="back-link" href="#/category/${category.id}">← Back to ${category.short}</a>
      </div>
    </article>

    <section class="detail-facts page-gutter" aria-label="Product information guide">
      <div class="detail-fact-heading"><p class="section-number">[ LABEL CHECK ]</p><h2>What should be clear.</h2></div>
      <ol>${product.checks.map((check, checkIndex) => `<li><span>${String(checkIndex + 1).padStart(2, "0")}</span>${check}</li>`).join("")}</ol>
      <div class="questions-panel"><p class="section-number">[ ASK IN STORE ]</p><h2>Useful questions.</h2><ul>${product.questions.map((question) => `<li>${question}</li>`).join("")}</ul></div>
    </section>

    <section class="detail-note page-gutter">
      <strong>Product-specific details come first.</strong>
      <p>Packaging, ingredients and batch documentation are the source of truth. Current availability and verified specifications should be confirmed directly with the store.</p>
    </section>

    ${recentSection()}
  `;
};

const renderNotFound = () => {
  document.title = "Page not found — Common Ground";
  app.innerHTML = `<section class="not-found page-gutter"><p class="eyebrow">404 / Off the shelf</p><h1>That reference isn’t here.</h1><a class="button button-primary" href="#/">Return to the product index</a></section>`;
};

const activateReveals = () => {
  const elements = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  elements.forEach((element) => observer.observe(element));
};

const closeMenu = () => {
  const menu = document.querySelector("#site-menu");
  const button = document.querySelector("#menu-button");
  menu.hidden = true;
  button.setAttribute("aria-expanded", "false");
  button.querySelector("span").textContent = "Explore";
  button.querySelector("b").textContent = "+";
  document.body.classList.remove("menu-open");
};

const renderRoute = () => {
  const route = window.location.hash || "#/";
  const parts = route.replace(/^#\//, "").split("/").filter(Boolean);
  closeMenu();

  if (!parts.length) {
    renderHome();
    saveState({ lastRoute: "#/" });
  } else if (parts[0] === "category" && parts[1]) {
    const category = getCategory(parts[1]);
    category ? renderCategory(category) : renderNotFound();
  } else if (parts[0] === "product" && parts[1] && parts[2]) {
    const result = getProduct(parts[2]);
    result && result.category.id === parts[1] ? renderProduct(result.category, result.product) : renderNotFound();
  } else if (parts[0] === "culture" || parts[0] === "visit") {
    renderHome();
    requestAnimationFrame(() => document.querySelector(`#${parts[0]}`)?.scrollIntoView());
  } else {
    renderNotFound();
  }

  activateReveals();
  app.focus({ preventScroll: true });
  if (parts[0] !== "culture" && parts[0] !== "visit") window.scrollTo(0, 0);
};

const gate = document.querySelector("#age-gate");
const ageMessage = document.querySelector("#age-message");
if (savedState.ageVerified) gate.hidden = true;
else document.body.classList.add("gated");

document.querySelector("#age-yes").addEventListener("click", () => {
  gate.hidden = true;
  document.body.classList.remove("gated");
  saveState({ ageVerified: true });
  document.querySelector(".brand").focus();
});

document.querySelector("#age-no").addEventListener("click", () => {
  ageMessage.textContent = "This informational experience is intended for adults. You may close this page.";
});

const menuButton = document.querySelector("#menu-button");
const siteMenu = document.querySelector("#site-menu");
menuButton.addEventListener("click", () => {
  const willOpen = menuButton.getAttribute("aria-expanded") !== "true";
  if (!willOpen) return closeMenu();
  siteMenu.hidden = false;
  menuButton.setAttribute("aria-expanded", "true");
  menuButton.querySelector("span").textContent = "Close";
  menuButton.querySelector("b").textContent = "×";
  document.body.classList.add("menu-open");
  siteMenu.querySelector("a").focus();
});

document.querySelector("#menu-close").addEventListener("click", () => {
  closeMenu();
  menuButton.focus();
});
siteMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !siteMenu.hidden) {
    closeMenu();
    menuButton.focus();
  }
});

const progressBar = document.querySelector("#progress-bar");
const updateProgress = () => {
  const available = document.documentElement.scrollHeight - window.innerHeight;
  const percent = available > 0 ? (window.scrollY / available) * 100 : 0;
  progressBar.style.width = `${Math.min(100, Math.max(0, percent))}%`;
};
window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("hashchange", renderRoute);
renderRoute();
updateProgress();
