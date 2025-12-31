(function () {
    function isWorkHash(hash) {
      return /^#work-\d+$/.test(hash || "");
    }
  
    function setView() {
      const hash = window.location.hash || "#hero";
  
      const allWorksLink = document.getElementById("all-works-link");
      const worksList = document.getElementById("works-list");
      const detailSections = Array.from(document.querySelectorAll(".work-detail"));
  
      const hero = document.getElementById("hero");
      const about = document.getElementById("about");
      const projects = document.getElementById("projects");
  
      if (isWorkHash(hash)) {
        if (worksList) worksList.style.display = "none";
  
        detailSections.forEach((sec) => {
          sec.classList.toggle("is-active", "#" + sec.id === hash);
        });
  
        if (hero) hero.style.display = "none";
        if (about) about.style.display = "none";
  
        if (allWorksLink) allWorksLink.classList.add("is-visible");
  
        if (projects) {
          projects.scrollIntoView({ behavior: "auto", block: "start" });
        }
        return;
      }
  
      // Default/list view
      if (hero) hero.style.display = "";
      if (about) about.style.display = "";
  
      if (worksList) worksList.style.display = "";
  
      detailSections.forEach((sec) => sec.classList.remove("is-active"));
  
      if (allWorksLink) allWorksLink.classList.remove("is-visible");
    }
  
    window.addEventListener("hashchange", setView);
    window.addEventListener("DOMContentLoaded", setView);
  })();
  