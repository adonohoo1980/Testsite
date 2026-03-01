(function () {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Mobile menu
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("mobileMenu");

  function closeMenu() {
    if (!menu || !hamburger) return;
    menu.hidden = true;
    hamburger.setAttribute("aria-expanded", "false");
  }

  function toggleMenu() {
    if (!menu || !hamburger) return;
    const isOpen = !menu.hidden;
    menu.hidden = isOpen;
    hamburger.setAttribute("aria-expanded", String(!isOpen));
  }

  if (hamburger && menu) {
    hamburger.addEventListener("click", toggleMenu);

    // Close when clicking a link
    menu.addEventListener("click", (e) => {
      const target = e.target;
      if (target && target.tagName === "A") closeMenu();
    });

    // Close on escape
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });
  }

  // Fake form handler (replace with your real endpoint)
  const form = document.getElementById("quickForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const data = new FormData(form);
      const payload = Object.fromEntries(data.entries());

      // For now, just open an email draft with the info.
      const subject = encodeURIComponent("Quote Request - Donohoo & Sons");
      const body = encodeURIComponent(
        `Name: ${payload.name || ""}\n` +
        `Email: ${payload.email || ""}\n` +
        `Phone: ${payload.phone || ""}\n` +
        `Need: ${payload.need || ""}\n` +
        `Notes: ${payload.notes || ""}\n`
      );

      window.location.href = `mailto:quotes@donohooinsurance.com?subject=${subject}&body=${body}`;
    });
  }
})();