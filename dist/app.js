const formats = {
  "pre-roll": {
    kicker: "Format 01",
    title: "Pre-roll formats",
    description: "A prepared format combining plant material, paper and a filter or tip. Individual entries should describe only verified, product-specific facts.",
    verify: "Declared contents, weight, batch reference and supplied potency documentation.",
    disclose: "Materials, required warnings, manufacturer or supplier and storage information."
  },
  beverage: {
    kicker: "Format 02",
    title: "Infused wine",
    description: "A packaged drink format. Product information needs to distinguish container contents from any stated serving information.",
    verify: "Ingredients, allergens, total volume, batch reference and supplied potency documentation.",
    disclose: "Serving information, storage instructions, manufacturer or supplier and required warnings."
  },
  vaporizer: {
    kicker: "Format 03",
    title: "Vaporizer formats",
    description: "A device or cartridge format whose components and compatibility should be described precisely rather than assumed.",
    verify: "Device type, ingredients or extract details, compatibility, batch reference and supplied documentation.",
    disclose: "Manufacturer or supplier, handling and storage information and required warnings."
  },
  edible: {
    kicker: "Format 04",
    title: "Edible formats",
    description: "A food-format product whose ingredient, allergen and portion information must remain prominent and product specific.",
    verify: "Ingredients, allergens, package contents, batch reference and supplied potency documentation.",
    disclose: "Stated portions, storage information, manufacturer or supplier and required warnings."
  },
  merch: {
    kicker: "Format 05",
    title: "Merchandise",
    description: "Apparel and accessories can extend an approved visual identity through useful objects and limited creative editions.",
    verify: "Materials, dimensions or sizing, care information and maker details.",
    disclose: "Availability and purchasing would require a separately approved ordinary-merchandise scope."
  }
};

const gate = document.querySelector("#age-gate");
const ageMessage = document.querySelector("#age-message");
document.body.classList.add("gated");

document.querySelector("#age-yes").addEventListener("click", () => {
  gate.hidden = true;
  document.body.classList.remove("gated");
  document.querySelector(".brand").focus();
});

document.querySelector("#age-no").addEventListener("click", () => {
  ageMessage.textContent = "This informational experience is intended for adults. You may close this page.";
});

const menuButton = document.querySelector("#menu-button");
const mobileMenu = document.querySelector("#mobile-menu");
menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  mobileMenu.hidden = open;
});
mobileMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  mobileMenu.hidden = true;
  menuButton.setAttribute("aria-expanded", "false");
}));

const formatDialog = document.querySelector("#format-dialog");
document.querySelectorAll("[data-format]").forEach((button) => {
  button.addEventListener("click", () => {
    const item = formats[button.dataset.format];
    document.querySelector("#dialog-kicker").textContent = item.kicker;
    document.querySelector("#dialog-title").textContent = item.title;
    document.querySelector("#dialog-description").textContent = item.description;
    document.querySelector("#dialog-verify").textContent = item.verify;
    document.querySelector("#dialog-disclose").textContent = item.disclose;
    formatDialog.showModal();
  });
});
document.querySelector("#dialog-close").addEventListener("click", () => formatDialog.close());

[formatDialog].forEach((dialog) => dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
}));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });
document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const progressBar = document.querySelector("#progress-bar");
const updateProgress = () => {
  const available = document.documentElement.scrollHeight - window.innerHeight;
  const percent = available > 0 ? (window.scrollY / available) * 100 : 0;
  progressBar.style.width = `${Math.min(100, Math.max(0, percent))}%`;
};
window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();

document.querySelectorAll("figure img").forEach((image) => {
  const markLoaded = () => image.closest("figure").classList.add("loaded");
  if (image.complete && image.naturalWidth > 0) markLoaded();
  else image.addEventListener("load", markLoaded, { once: true });
});
