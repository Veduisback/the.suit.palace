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

/* =========================================================
   SCROLL REVEALS
   ========================================================= */

/*
  Normal reveal animation for everything EXCEPT the
  collection pieces.

  Collection pieces have their own cinematic scroll system
  below.
*/
const revealItems = document.querySelectorAll(
  ".reveal:not(.piece)"
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
    rootMargin: "0px 0px -60px 0px"
  }
);

revealItems.forEach((item) => {
  revealObserver.observe(item);
});


/* =========================================================
   COLLECTION — CINEMATIC SIDE-SLIDE
   ========================================================= */

/*
  Every collection image gets a direction.

  Odd numbered pieces:
      enter from LEFT

  Even numbered pieces:
      enter from RIGHT
*/
const catalogPieces = [
  ...document.querySelectorAll(".collection .piece")
];

catalogPieces.forEach((piece, index) => {
  piece.dataset.slideDirection =
    index % 2 === 0 ? "left" : "right";
});


/*
  Utility: keep a number between 0 and 1.
*/
const clamp = (value, min, max) => {
  return Math.min(Math.max(value, min), max);
};


/*
  Cubic ease-out.

  This makes the piece move quickly at first and then
  decelerate smoothly as it reaches its final position.

  That gives us the cinematic "camera settling" feeling.
*/
const easeOutCubic = (value) => {
  return 1 - Math.pow(1 - value, 3);
};


/*
  Main cinematic animation.

  We use requestAnimationFrame instead of changing the
  transform directly inside the scroll event.

  This keeps the animation smooth and prevents excessive
  layout updates while scrolling.
*/
let catalogAnimationFrame = null;

const updateCatalogAnimation = () => {
  catalogAnimationFrame = null;

  /*
    Respect accessibility settings.
    If the user prefers reduced motion, don't animate.
  */
  if (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    catalogPieces.forEach((piece) => {
      piece.style.setProperty("--catalog-x", "0px");
      piece.style.opacity = "1";
      piece.classList.add("is-catalog-settled");
    });

    return;
  }


  const viewportHeight = window.innerHeight;


  catalogPieces.forEach((piece) => {
    const rect = piece.getBoundingClientRect();


    /*
      Animation starts when the piece is still near the
      bottom of the viewport.

      This means the image doesn't suddenly appear.
      It begins sliding while approaching the frame.
    */
    const startPoint = viewportHeight * 0.98;


    /*
      Animation finishes when the piece reaches roughly
      the middle/lower-middle part of the screen.
    */
    const endPoint = viewportHeight * 0.42;


    /*
      Calculate how far through the animation the piece is.

      0 = completely outside / starting
      1 = completely settled
    */
    let progress =
      (startPoint - rect.top) /
      (startPoint - endPoint);


    progress = clamp(progress, 0, 1);


    /*
      Smooth cinematic easing.
    */
    const easedProgress = easeOutCubic(progress);


    /*
      Maximum horizontal travel.

      clamp() makes the movement responsive:

      small screen  -> around 120px
      normal screen -> around 20vw
      huge screen   -> never more than 320px
    */
    const maxDistance = Math.min(
      Math.max(window.innerWidth * 0.20, 120),
      320
    );


    /*
      Determine which side this piece comes from.
    */
    const direction =
      piece.dataset.slideDirection === "left"
        ? -1
        : 1;


    /*
      At progress 0:
          x = +/- maxDistance

      At progress 1:
          x = 0
    */
    const x =
      direction *
      maxDistance *
      (1 - easedProgress);


    /*
      Fade in slightly as the image enters.

      It reaches full opacity before the movement is
      completely finished, which feels more cinematic.
    */
    const opacity = clamp(
      progress * 1.35,
      0,
      1
    );


    piece.style.setProperty(
      "--catalog-x",
      `${x}px`
    );

    piece.style.opacity = String(opacity);


    /*
      Once the piece is effectively finished, mark it
      settled so the browser doesn't keep treating it
      as an active animated element.
    */
    if (progress >= 0.999) {
      piece.classList.add("is-catalog-settled");
    } else {
      piece.classList.remove("is-catalog-settled");
    }
  });
};


/*
  Only schedule one animation frame at a time.
*/
const requestCatalogAnimation = () => {
  if (catalogAnimationFrame !== null) return;

  catalogAnimationFrame =
    window.requestAnimationFrame(updateCatalogAnimation);
};


/*
  Update while scrolling.
*/
window.addEventListener(
  "scroll",
  requestCatalogAnimation,
  { passive: true }
);


/*
  Also update after resizing because the viewport height
  and maximum slide distance can change.
*/
window.addEventListener(
  "resize",
  requestCatalogAnimation,
  { passive: true }
);


/*
  Run once immediately so the correct positions exist
  before the user starts scrolling.
*/
requestCatalogAnimation();
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