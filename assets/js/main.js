document.addEventListener("DOMContentLoaded", () => {
  const sidebars = document.querySelectorAll("[data-sidebar]");
  sidebars.forEach((btn) => {
    const targetId = btn.getAttribute("data-sidebar");
    const sidebar = document.getElementById(targetId);

    btn.addEventListener("click", (e) => {
      e.stopPropagation();

      document.querySelectorAll(".is-active").forEach((el) => {
        if (el !== sidebar) el.classList.remove("is-active");
      });
      sidebar.classList.toggle("is-active");
    });

    document.addEventListener("click", (e) => {
      if (
        sidebar.classList.contains("is-active") &&
        !sidebar.contains(e.target) &&
        !e.target.closest("[data-sidebar]")
      ) {
        sidebar.classList.remove("is-active");
      }
    });

    document.querySelectorAll("a", "button", sidebar).forEach((el) => {
      el.addEventListener("click", () => {
        sidebar.classList.remove("is-active");
      });
    });
  });
});
