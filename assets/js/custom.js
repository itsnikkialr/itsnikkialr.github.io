(function () {
    function isWorkHash(hash) {
      return /^#work-\d+$/.test(hash || "");
    }
  
    function scrollToId(id) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "auto", block: "start" });
    }
  
    function showListView() {
      const worksList = document.getElementById("works-list");
      const detailSections = Array.from(document.querySelectorAll(".work-detail"));
      const allWorksLink = document.getElementById("all-works-link");
      const hero = document.getElementById("hero");
      const about = document.getElementById("about");
  
      // mark page state
      document.body.classList.remove("is-detail-view");
  
      if (hero) hero.style.display = "";
      if (about) about.style.display = "";
  
      if (worksList) worksList.style.display = "";
      detailSections.forEach((sec) => sec.classList.remove("is-active"));
  
      if (allWorksLink) allWorksLink.classList.remove("is-visible");
    }
  
    function showDetailView(hash) {
      const worksList = document.getElementById("works-list");
      const detailSections = Array.from(document.querySelectorAll(".work-detail"));
      const allWorksLink = document.getElementById("all-works-link");
      const hero = document.getElementById("hero");
      const about = document.getElementById("about");
  
      // mark page state
      document.body.classList.add("is-detail-view");
  
      if (worksList) worksList.style.display = "none";
  
      detailSections.forEach((sec) => {
        sec.classList.toggle("is-active", "#" + sec.id === hash);
      });
  
      if (hero) hero.style.display = "none";
      if (about) about.style.display = "none";
  
      if (allWorksLink) allWorksLink.classList.add("is-visible");
  
      // Keep the detail view aligned with the Projects section
      scrollToId("projects");
    }
  
    function setViewFromHash() {
      const hash = window.location.hash || "#hero";
  
      if (isWorkHash(hash)) {
        showDetailView(hash);
        return;
      }
  
      // List view (hero/about/projects visible)
      showListView();
  
      // Only scroll when user actually has a section hash
      if (hash === "#projects") scrollToId("projects");
      if (hash === "#about") scrollToId("about");
      if (hash === "#hero") scrollToId("hero");
    }
  
    // IMPORTANT: On initial page load/refresh, always start at landing page
    window.addEventListener("DOMContentLoaded", () => {
      // Clear any persisted hash so refresh always lands on the hero
      if (window.location.hash) {
        history.replaceState(null, "", window.location.pathname + window.location.search);
      }
  
      showListView();
      scrollToId("hero");
    });
  
    // Normal in-page navigation after load (Projects/About/All works/Project clicks)
    window.addEventListener("hashchange", setViewFromHash);
  })();
  