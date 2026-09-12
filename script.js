// =========================================================
// THE SUITE PALACE — site behavior
// =========================================================

document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- Nav: solid background after leaving hero ---------- */
const nav = document.getElementById("nav");

const onScroll = () => {
  if (window.scrollY > window.innerHeight * 0.7) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
};
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ---------- Mobile menu ---------- */
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("menu-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("menu-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

/* ---------- Scroll reveal ---------- */
const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
);

revealItems.forEach((item) => revealObserver.observe(item));

/* ---------- Gallery: tap-to-reveal caption on touch devices ---------- */
const isTouch = window.matchMedia("(hover: none)").matches;

if (isTouch) {
  document.querySelectorAll(".piece").forEach((piece) => {
    piece.addEventListener("click", () => {
      document.querySelectorAll(".piece.tapped").forEach((p) => {
        if (p !== piece) p.classList.remove("tapped");
      });
      piece.classList.toggle("tapped");
    });
  });
}

/* ---------- Newsletter (front-end only — wire to your provider) ---------- */
const newsletterForm = document.getElementById("newsletterForm");
const newsletterNote = document.getElementById("newsletterNote");

newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("newsletterEmail").value.trim();

  if (!email) return;

  // NOTE: this only confirms in the UI. To actually collect emails,
  // connect this form to a service (Mailchimp, Google Forms, your
  // own backend, etc.) and POST `email` there instead.
  newsletterNote.textContent = "Thank you — you're on the list.";
  newsletterForm.reset();
});