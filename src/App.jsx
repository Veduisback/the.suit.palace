import React, { useEffect, useRef, useState, useCallback } from "react";

import "./index.css";

import FireEffect from "./FireEffect";
import SmokeEffect from "./SmokeEffect";

import img1 from "../assets/img/project-1.jpg";
import img2 from "../assets/img/project-2.jpg";
import img3 from "../assets/img/project-3.jpg";
import img4 from "../assets/img/project-4.jpg";
import img5 from "../assets/img/project-5.jpg";
import img6 from "../assets/img/project-6.jpg";
import img7 from "../assets/img/project-7.png";
import img8 from "../assets/img/project-8.png";

import background1 from "../assets/img/background-1.jpg";
import background2 from "../assets/img/background-2.jpg";
import background3 from "../assets/img/background-3.jpg";
import background4 from "../assets/img/background-4.jpg";
import background5 from "../assets/img/background-5.jpg";

import bgMusic1 from "../assets/audio/background-1.mp3";
import bgMusic2 from "../assets/audio/background-2.mp3";
import bgMusic3 from "../assets/audio/background-3.mp3";
import bgMusic4 from "../assets/audio/background-4.mp3";
import bgMusic5 from "../assets/audio/background-5.mp3";

const IMAGES = [img1, img2, img3, img4, img5];

const PROJECT_LINKS = [
  "https://www.linkedin.com/posts/vedang-jaiswal-83a906317_mernstack-fullstackdevelopment-reactjs-ugcPost-7498743906822578176-TDYE/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFBnCS4BgIpcKxnuFPr0y-5jbmsKz1HbL-o",
  "https://www.linkedin.com/posts/vedang-jaiswal-83a906317_created-a-market-ready-personal-applicant-ugcPost-7473369116821811201-DOEq/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFBnCS4BgIpcKxnuFPr0y-5jbmsKz1HbL-o",
  "https://www.linkedin.com/posts/vedang-jaiswal-83a906317_created-piano-for-laptops-and-you-can-try-ugcPost-7463140944645652481-r_CC/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFBnCS4BgIpcKxnuFPr0y-5jbmsKz1HbL-o",
  "https://www.linkedin.com/posts/vedang-jaiswal-83a906315_finally-completed-my-final-year-project-ugcPost-7460261921334808576-Xo5u/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFBnCS4BgIpcKxnuFPr0y-5jbmsKz1HbL-o",
  "https://www.linkedin.com/posts/vedang-jaiswal-83a906317_won-my-first-fintech-researchathon-me-ugcPost-7440034067984687105-xJpK/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFBnCS4BgIpcKxnuFPr0y-5jbmsKz1HbL-o",
];

/* =========================================================
SCENE 4 LINKS

Replace these "#" values with your four URLs later.
========================================================= */

const SCENE4_LINKS = [
  "https://www.linkedin.com/posts/vedang-jaiswal-83a906317_got-to-attend-hack4soc-today-at-rv-college-ugcPost-7469042828233367552-YXES/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFBnCS4BgIpcKxnuFPr0y-5jbmsKz1HbL-o",
  "https://www.linkedin.com/posts/vedang-jaiswal-83a906317_today-we-got-to-attend-thinkup-20-ideathon-share-7457763857072111616-u5gl/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFBnCS4BgIpcKxnuFPr0y-5jbmsKz1HbL-o",
  "https://www.linkedin.com/posts/vedang-jaiswal-83a906317_won-my-first-fintech-researchathon-me-ugcPost-7440034067984687105-xJpK/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFBnCS4BgIpcKxnuFPr0y-5jbmsKz1HbL-o",
  "https://www.linkedin.com/posts/vedang-jaiswal-83a906317_i-am-delighted-to-share-that-my-team-code-ugcPost-7408400151582605313-Zy2C/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFBnCS4BgIpcKxnuFPr0y-5jbmsKz1HbL-o",
];

const PROJECT_INFO = [
  {
    number: "01",
    category: "Web / Devop",
    title: "Recruitment Website",
    description:
      "A web experience built with multi authority control and encryption",
  },
  {
    number: "02",
    category: "Chatbot / API",
    title: "Personal Chat Assistance",
    description: "An experimental chat interface for consumers",
  },
  {
    number: "03",
    category: "Visuals / Music",
    title: "Piano Desktop",
    description: "A study in visual and harmonic rhythm with notes automation",
  },
  {
    number: "04",
    category: "Python / MediaPipe",
    title: "OpenCV Humanoid Detection",
    description: "Learning project working on Webcam Python features.",
  },
  {
    number: "05",
    category: "Research / Currency",
    title: "Digital Rupees",
    description: "Research excellence on financial growth of India",
  },
];

const BACKGROUNDS = [
  background1,
  background2,
  background3,
  background4,
  background5,
];

const AUDIO_TRACKS = [
  {
    title: "Die For You",
    src: bgMusic1,
  },
  {
    title: "Ticking Away",
    src: bgMusic2,
  },
  {
    title: "Legends Never Die",
    src: bgMusic3,
  },
  {
    title: "Ezio's Family",
    src: bgMusic4,
  },
  {
    title: "Tanjiro No Uta",
    src: bgMusic5,
  },
];

const PIECES = [
  {
    scattered: {
      x: -400,
      y: -350,
      r: -45,
      s: 0.4,
    },
    assembled: {
      x: -140,
      y: -110,
      r: -6,
      s: 1.2,
    },
  },
  {
    scattered: {
      x: 300,
      y: -400,
      r: 50,
      s: 0.4,
    },
    assembled: {
      x: 20,
      y: -140,
      r: 4,
      s: 1.2,
    },
  },
  {
    scattered: {
      x: -50,
      y: -500,
      r: 20,
      s: 0.3,
    },
    assembled: {
      x: -60,
      y: -50,
      r: -2,
      s: 1.2,
    },
  },
  {
    scattered: {
      x: 400,
      y: 300,
      r: -30,
      s: 0.4,
    },
    assembled: {
      x: 30,
      y: -30,
      r: 5,
      s: 1.2,
    },
  },
  {
    scattered: {
      x: -400,
      y: 350,
      r: 35,
      s: 0.4,
    },
    assembled: {
      x: -90,
      y: 20,
      r: 3,
      s: 1.2,
    },
  },
];

/* =========================================================
SCENE 4 IMAGE SETTINGS

These are intentionally kept simple so you can tune them.

start:
How far into Scene 4 scrolling this image begins.

window:
How much scroll distance the image uses to travel
from completely hidden to completely exposed.

x:
Final horizontal position of the image column.

========================================================= */

const SCENE4_PIECES = [
  { start: 0.0, window: 0.28, x: 10, y: -18, width: 400, rotate: 35 },
  { start: 0.12, window: 0.28, x: -3, y: 21, width: 250, rotate: 8 },
  { start: 0.24, window: 0.28, x: -5, y: 58, width: 300, rotate: -30 },
  { start: 0.36, window: 0.28, x: 20, y: 78, width: 350, rotate: -55 },
];
const SCENE4_INFO = [
  {
    title: "HACK4SOC",
    body: "An intense hackathon experience where ideas, teamwork, and rapid problem solving came together.",
  },
  {
    title: "THINKUP 2.0",
    body: "An ideathon experience focused on turning creative ideas into meaningful and practical solutions.",
  },
  {
    title: "FINTECH",
    body: "A researchathon project exploring innovation in the financial technology space.",
  },
  {
    title: "CODE & CREATE",
    body: "A collaborative project built around experimentation, technology, and creating something impactful.",
  },
];

const STAGGER = 0.12;
const WINDOW = 0.55;

const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

const lerp = (a, b, t) => a + (b - a) * t;

/* =========================================================
SCENE 2
========================================================= */

const BLOB_RIGHT_EDGE = [
  { y: 0, x: 99 },
  { y: 100, x: 95 },
];

function getScene2ClipPath(morphProgress) {
  const rightEdgePoints = BLOB_RIGHT_EDGE.map(({ y, x }) => {
    const interpX = lerp(100, x, morphProgress);

    return `${interpX}% ${y}%`;
  });

  return `polygon(
    0% 0%,
    ${rightEdgePoints.join(", ")},
    0% 100%
  )`;
}

const NAV_SECTIONS = [
  {
    id: 0,
    label: "",
  },
  {
    id: 1,
    label: "",
  },
  {
    id: 2,
    label: "",
  },
  {
    id: 3,
    label: "",
  },
  {
    id: 4,
    label: "",
  },
];

const MOBILE_QUERY = "(max-width: 768px)";

export default function App() {
  const [progress, setProgress] = useState(0);

  const [scene1Progress, setScene1Progress] = useState(0);

  const [scene2Progress, setScene2Progress] = useState(0);

  const [scene4Progress, setScene4Progress] = useState(0);

  const [current, setCurrent] = useState(0);

  const [audioOn, setAudioOn] = useState(false);
  const [audioControlsVisible, setAudioControlsVisible] = useState(false);

  const [audioMenuOpen, setAudioMenuOpen] = useState(false);

  const [currentTrack, setCurrentTrack] = useState(0);

  const [footerVisible, setFooterVisible] = useState(false);

  const [cursorPos, setCursorPos] = useState({
    x: -100,
    y: -100,
  });

  const [heroParallax, setHeroParallax] = useState({
    x: 0,
    y: 0,
  });

  const [hoveredProject, setHoveredProject] = useState(null);

  /* Whether we're on a small/touch viewport. Drives several perf-sensitive
     behaviors: disables the FireEffect PixiJS sim, disables the mousemove
     parallax listener, and swaps hover-to-reveal info panels for
     tap-to-reveal. */
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia(MOBILE_QUERY).matches
      : false,
  );

  /* Scene 3 collage: on mobile, first tap reveals the info panel for that
     project; a second tap on the SAME (already-revealed) project lets the
     link navigate normally. */
  const [tappedCollage, setTappedCollage] = useState(null);

  /* Scene 4 hackathon cards: same tap-to-reveal pattern, tracked
     separately from the "shoot" animation trigger below. */
  const [tappedScene4, setTappedScene4] = useState(null);

  /* Scene 4: hovering project-7 "shoots" project-8. Each hover bumps the
     counter for that project's index, which we use as a React key so the
     bullet/flash/trail elements remount and the CSS animation replays
     every time, even on repeated hovers of the same image. */
  const [scene4FireCounts, setScene4FireCounts] = useState({});

  const fireScene4Project = (index) => {
    setScene4FireCounts((prev) => ({
      ...prev,
      [index]: (prev[index] || 0) + 1,
    }));
  };

  const audioRef = useRef(null);
  const loadedTrackRef = useRef(null);

  const ticking = useRef(false);

  const sectionRefs = useRef([]);

  const scene1WrapperRef = useRef(null);

  const scene2WrapperRef = useRef(null);

  const scene3WrapperRef = useRef(null);

  const scene4WrapperRef = useRef(null);

  const heroRef = useRef(null);

  const footerTimerRef = useRef(null);
  const audioControlsTimerRef = useRef(null);

  /* =======================================================
  MOBILE DETECTION
  ======================================================= */

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY);

    const handleChange = () => setIsMobile(mq.matches);

    handleChange();

    if (mq.addEventListener) {
      mq.addEventListener("change", handleChange);

      return () => mq.removeEventListener("change", handleChange);
    }

    // Safari < 14 fallback
    mq.addListener(handleChange);

    return () => mq.removeListener(handleChange);
  }, []);

  /* =======================================================
  CUSTOM CURSOR + HERO PARALLAX

  Skipped entirely on mobile: touch devices don't fire mousemove
  during normal interaction, and skipping avoids the per-event
  getBoundingClientRect() cost on any hybrid device that does.
  ======================================================= */

  useEffect(() => {
    if (isMobile) {
      return undefined;
    }

    const handleMouseMove = (e) => {
      setCursorPos({
        x: e.clientX,
        y: e.clientY,
      });

      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();

        const centerX = rect.left + rect.width / 2;

        const centerY = rect.top + rect.height / 2;

        const distanceX = e.clientX - centerX;

        const distanceY = e.clientY - centerY;

        const normalizedX = distanceX / (rect.width / 2);

        const normalizedY = distanceY / (rect.height / 2);

        const maxMovement = 30;

        setHeroParallax({
          x: clamp(normalizedX * maxMovement, -maxMovement, maxMovement),

          y: clamp(normalizedY * maxMovement, -maxMovement, maxMovement),
        });
      }
    };

    const handleMouseLeave = () => {
      setHeroParallax({
        x: 0,
        y: 0,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isMobile]);

  /* =======================================================
  SCROLL
  ======================================================= */

  const handleScroll = useCallback(() => {
    if (ticking.current) {
      return;
    }

    ticking.current = true;

    requestAnimationFrame(() => {
      /* ===================================================
         SCENE 1 PROGRESS
      =================================================== */

      const scene1Wrapper = scene1WrapperRef.current;

      if (scene1Wrapper) {
        const rect = scene1Wrapper.getBoundingClientRect();

        const scrollable = scene1Wrapper.offsetHeight - window.innerHeight;

        const scrolled = -rect.top;

        setScene1Progress(
          scrollable > 0 ? clamp(scrolled / scrollable, 0, 1) : 0,
        );
      }

      /* ===================================================
         SCENE 2 PROGRESS
      =================================================== */

      const scene2Wrapper = scene2WrapperRef.current;

      if (scene2Wrapper) {
        const rect = scene2Wrapper.getBoundingClientRect();

        const scrollable = scene2Wrapper.offsetHeight - window.innerHeight;

        const scrolled = -rect.top;

        setScene2Progress(
          scrollable > 0 ? clamp(scrolled / scrollable, 0, 1) : 0,
        );
      }

      /* ===================================================
         SCENE 3 PROGRESS
      =================================================== */

      const wrapper = scene3WrapperRef.current;

      if (wrapper) {
        const rect = wrapper.getBoundingClientRect();

        const scrollable = wrapper.offsetHeight - window.innerHeight;

        const scrolled = -rect.top;

        setProgress(scrollable > 0 ? clamp(scrolled / scrollable, 0, 1) : 0);
      }

      /* ===================================================
         SCENE 4 PROGRESS
      =================================================== */

      const scene4Wrapper = scene4WrapperRef.current;

      if (scene4Wrapper) {
        const rect = scene4Wrapper.getBoundingClientRect();

        const scrollable = scene4Wrapper.offsetHeight - window.innerHeight;

        const scrolled = -rect.top;

        setScene4Progress(
          scrollable > 0 ? clamp(scrolled / scrollable, 0, 1) : 0,
        );
      }

      /* ===================================================
         ACTIVE NAVIGATION
      =================================================== */

      const mid = window.innerHeight / 2;

      let activeIdx = 0;

      sectionRefs.current.forEach((el, i) => {
        if (!el) {
          return;
        }

        const rect = el.getBoundingClientRect();

        if (rect.top <= mid && rect.bottom > mid) {
          activeIdx = i;
        }
      });

      setCurrent(activeIdx);

      /* ===================================================
         FOOTER
      =================================================== */

      const scrollPosition = window.innerHeight + window.scrollY;

      const documentHeight = document.documentElement.scrollHeight;

      const reachedBottom = scrollPosition >= documentHeight - 8;

      if (reachedBottom) {
        if (!footerTimerRef.current) {
          footerTimerRef.current = window.setTimeout(() => {
            setFooterVisible(true);

            footerTimerRef.current = null;
          }, 1500);
        }
      } else {
        if (footerTimerRef.current) {
          window.clearTimeout(footerTimerRef.current);

          footerTimerRef.current = null;
        }

        setFooterVisible(false);
      }

      ticking.current = false;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (footerTimerRef.current) {
        window.clearTimeout(footerTimerRef.current);
      }
    };
  }, [handleScroll]);

  /* =======================================================
  NAVIGATION
  ======================================================= */

  const goTo = (i) => {
    const el = sectionRefs.current[i];

    if (el) {
      window.scrollTo({
        top: el.offsetTop,
        behavior: "smooth",
      });
    }
  };

  /* =======================================================
  AUDIO
  ======================================================= */

  const playTrack = useCallback((index) => {
    if (!audioRef.current) {
      return;
    }

    const safeIndex = (index + AUDIO_TRACKS.length) % AUDIO_TRACKS.length;

    const track = AUDIO_TRACKS[safeIndex];

    setCurrentTrack(safeIndex);

    audioRef.current.src = track.src;

    audioRef.current.load();

    loadedTrackRef.current = safeIndex;

    audioRef.current
      .play()
      .then(() => {
        setAudioOn(true);
      })
      .catch(() => {
        setAudioOn(false);
      });
  }, []);

  const toggleAudio = () => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    /* SOUND OFF */

    if (audioOn) {
      audio.pause();

      setAudioOn(false);
      setAudioControlsVisible(false);
      setAudioMenuOpen(false);

      if (audioControlsTimerRef.current) {
        window.clearTimeout(audioControlsTimerRef.current);

        audioControlsTimerRef.current = null;
      }

      return;
    }

    /* SOUND ON */

    const track = AUDIO_TRACKS[currentTrack];

    if (loadedTrackRef.current !== currentTrack) {
      audio.src = track.src;

      audio.load();

      loadedTrackRef.current = currentTrack;
    }

    audio
      .play()
      .then(() => {
        setAudioOn(true);

        if (audioControlsTimerRef.current) {
          window.clearTimeout(audioControlsTimerRef.current);
        }

        audioControlsTimerRef.current = window.setTimeout(() => {
          setAudioControlsVisible(true);

          audioControlsTimerRef.current = null;
        }, 1000);
      })
      .catch(() => {
        setAudioOn(false);
      });
  };

  /* =======================================================
  AUDIO CLEANUP
  ======================================================= */

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }

      if (audioControlsTimerRef.current) {
        window.clearTimeout(audioControlsTimerRef.current);
      }
    };
  }, []);

  /* =======================================================
  AUDIO AUTO NEXT

  When a song ends naturally:

  1 -> 2
  2 -> 3
  3 -> 4
  4 -> 5
  5 -> 1

  playTrack() already handles the wrap-around.
  ======================================================= */

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    const handleTrackEnded = () => {
      playTrack(currentTrack + 1);
    };

    audio.addEventListener("ended", handleTrackEnded);

    return () => {
      audio.removeEventListener("ended", handleTrackEnded);
    };
  }, [currentTrack, playTrack]);

  const skipPrevious = () => {
    playTrack(currentTrack - 1);
  };

  const skipNext = () => {
    playTrack(currentTrack + 1);
  };

  const selectTrack = (index) => {
    playTrack(index);

    setAudioMenuOpen(false);
  };

  /* =======================================================
  SCENE 1 CINEMATIC SCROLL
  ======================================================= */

  const scene1RevealProgress = clamp(scene1Progress / 0.55, 0, 1);

  const cinematicEase = (t) => 1 - Math.pow(1 - t, 3);

  const heroLayerProgress = cinematicEase(scene1RevealProgress);

  const heroExitY = lerp(0, -120, heroLayerProgress);

  const heroOpacity = clamp(1 - heroLayerProgress * 1.25, 0, 1);

  /* =======================================================
  SCENE 2 ANIMATION
  ======================================================= */

  const scene2TextX = lerp(0, 23, scene2Progress);

  const scene2ImageX = lerp(-115, 0, scene2Progress);

  const scene2ImageOpacity = clamp(scene2Progress / 0.18, 0, 1);

  const scene2ImageScale = lerp(0.96, 1, scene2Progress);

  const imageMorphProgress = clamp((scene2Progress - 0.12) / 0.68, 0, 1);

  const scene2ImageClipPath = getScene2ClipPath(imageMorphProgress);

  const activeProject =
    hoveredProject !== null ? PROJECT_INFO[hoveredProject] : null;

  /* =======================================================
     SCENE 3 COLLAGE: HOVER (desktop) / TAP (mobile)
  ======================================================= */

  const handleCollageEnter = (i) => {
    if (isMobile) {
      return;
    }

    setHoveredProject(i);
  };

  const handleCollageLeave = () => {
    if (isMobile) {
      return;
    }

    setHoveredProject(null);
  };

  const handleCollageClick = (e, i) => {
    if (!isMobile) {
      return;
    }

    // First tap on a project reveals its info panel instead of
    // navigating away immediately. Tapping the same, already-revealed
    // project again lets the link open normally.
    if (tappedCollage !== i) {
      e.preventDefault();

      setTappedCollage(i);

      setHoveredProject(i);
    }
  };

  /* =======================================================
     SCENE 4 TEXT MOVEMENT

     The text starts in the center and moves toward the
     right side while the project-7 images enter from the left.

     Change 15 below if you want the final text position
     further right or left.
  ======================================================= */

  const scene4TextProgress = clamp(scene4Progress / 0.75, 0, 1);

  const scene4TextX = lerp(-10, 10, cinematicEase(scene4TextProgress));

  const handleScene4Click = (e, i) => {
    if (SCENE4_LINKS[i] === "#") {
      e.preventDefault();

      return;
    }

    if (!isMobile) {
      return;
    }

    if (tappedScene4 !== i) {
      e.preventDefault();

      setTappedScene4(i);

      fireScene4Project(i);
    }
  };

  const handleScene4Enter = (i) => {
    if (isMobile) {
      return;
    }

    fireScene4Project(i);
  };

  return (
    <div className="app">
      {!isMobile && <SmokeEffect />}

      {/* CUSTOM CURSOR (desktop only, CSS also hides this under 768px) */}

      {!isMobile && (
        <div
          className="custom-cursor-ring"
          style={{
            left: `${cursorPos.x}px`,
            top: `${cursorPos.y}px`,
          }}
        />
      )}

      {/* AUDIO */}

      <audio ref={audioRef} />

      <div className="audio-system">
        {/* MAIN SOUND BUTTON */}

        <button
          className={`audio-controller ${audioOn ? "active" : ""}`}
          onClick={toggleAudio}
          aria-label="Toggle audio"
        >
          <span>{audioOn ? "Music On" : "Music Off"}</span>

          <div className="soundwave">
            <span />
            <span />
            <span />
            <span />
          </div>
        </button>

        {/* AUDIO CONTROLS */}

        <div
          className={`audio-extra-controls ${
            audioControlsVisible ? "visible" : ""
          }`}
        >
          {/* PREVIOUS */}

          <button
            className="audio-skip-button"
            onClick={skipPrevious}
            aria-label="Previous track"
          >
            <svg className="skip-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 6h2v12H6zM20 6v12L9 12z" />
            </svg>
          </button>

          {/* TRACK MENU */}

          <button
            className={`audio-menu-button ${audioMenuOpen ? "open" : ""}`}
            onClick={() => setAudioMenuOpen((open) => !open)}
            aria-label="Open music selection"
            aria-expanded={audioMenuOpen}
          >
            <span>{String(currentTrack + 1).padStart(2, "0")}</span>

            <span className="audio-menu-chevron">↓</span>
          </button>

          {/* NEXT */}

          <button
            className="audio-skip-button"
            onClick={skipNext}
            aria-label="Next track"
          >
            <svg className="skip-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 6h2v12h-2zM4 6v12l11-6z" />
            </svg>
          </button>
        </div>

        {/* TRACK PANEL */}

        <div className={`audio-track-panel ${audioMenuOpen ? "open" : ""}`}>
          <div className="audio-track-panel-header">
            <span>Soundtrack</span>

            <span>
              {String(currentTrack + 1).padStart(2, "0")}
              {" / "}
              {String(AUDIO_TRACKS.length).padStart(2, "0")}
            </span>
          </div>

          <div className="audio-track-list">
            {AUDIO_TRACKS.map((track, index) => (
              <button
                key={track.title}
                className={`audio-track-item ${
                  currentTrack === index ? "active" : ""
                }`}
                onClick={() => selectTrack(index)}
              >
                <span className="audio-track-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="audio-track-name">{track.title}</span>

                <span className="audio-track-status">
                  {currentTrack === index ? "Playing" : ""}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* NAVIGATION */}

      <nav className="nav-indicators" aria-label="Page sections">
        <div className="nav-labels">
          {NAV_SECTIONS.map((sec) => (
            <button
              key={sec.id}
              className={`nav-label-item ${current === sec.id ? "active" : ""}`}
              onClick={() => goTo(sec.id)}
              aria-label={`Scroll to ${sec.label}`}
            >
              <span>{sec.label}</span>
            </button>
          ))}
        </div>

        <div className="nav-track">
          <div
            className="nav-active-bar"
            style={{
              transform: `translateY(${current * 100}%)`,
            }}
          />
        </div>
      </nav>

      {/* ===================================================
         SCENE 1
      =================================================== */}

      <div
        className="scene1-wrapper"
        ref={(el) => {
          sectionRefs.current[0] = el;

          scene1WrapperRef.current = el;
        }}
      >
        <section
          className="scene intro scene1-sticky"
          ref={heroRef}
          style={{
            backgroundImage: `url(${BACKGROUNDS[0]})`,
          }}
        >
          <div className="hero-background" />

          {/* BLACK LAYER */}

          <div
            className="hero-black-layer"
            style={{
              transform: `
                translate3d(
                  ${heroParallax.x}px,
                  calc(
                    ${heroParallax.y}px +
                    ${heroExitY}vh
                  ),
                  0
                )
              `,
              opacity: heroOpacity,
            }}
          />

          {/* HERO CONTENT */}

          <div
            className="hero-content"
            style={{
              transform: `
                translate3d(
                  0,
                  ${heroExitY * 0.72}vh,
                  0
                )
              `,
              opacity: heroOpacity,
            }}
          >
            <button
              className="hero-name"
              aria-label="VEDUISBACK"
              style={{
                "--hero-bg": `url(${BACKGROUNDS[0]})`,
              }}
            >
              <span>VEDUISBACK</span>
            </button>

            <div className="hero-supporting-content">
              <span className="eyebrow">Portfolio / 2026</span>

              <p>
                Bangalore Institute of Technology · 2nd Year
                <br />
                Full-Stack Development &amp; Python Automation
              </p>

              <button
                type="button"
                className="scroll-hint"
                onClick={() => goTo(1)}
                aria-label="Explore Philosophy"
              >
                <span>Explore</span>

                <span className="scroll-hint-arrow" aria-hidden="true">
                  ↓
                </span>
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* ===================================================
         SCENE 2
      =================================================== */}

      <div
        className="scene2-wrapper"
        ref={(el) => {
          sectionRefs.current[1] = el;

          scene2WrapperRef.current = el;
        }}
      >
        <section
          className="scene scene2 scene2-sticky"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(0, 0, 0, 0.40),
                rgba(0, 0, 0, 0.60)
              ),
              url(${BACKGROUNDS[1]})
            `,
          }}
        >
          <div className="scene2-image-container">
            <img
              src={img6}
              alt="Project 6"
              className="scene2-image"
              style={{
                transform: `
                  translate3d(
                    ${scene2ImageX}%,
                    0,
                    0
                  )
                  scale(
                    ${scene2ImageScale}
                  )
                `,

                opacity: scene2ImageOpacity,

                clipPath: scene2ImageClipPath,

                WebkitClipPath: scene2ImageClipPath,
              }}
            />
          </div>

          <div
            className="scene-content scene2-content"
            style={{
              transform: `
                translate3d(
                  ${scene2TextX}vw,
                  0,
                  0
                )
              `,
            }}
          >
            <span className="eyebrow">01 / Philosophy</span>

            <h2>Narrative in Motion</h2>

            <p>
              Working on C,C++ and ML Learning Projects with side projects in
              UI/UX
            </p>
          </div>
        </section>
      </div>

      {/* ===================================================
         SCENE 3
      =================================================== */}

      <div
        className="scene3-wrapper"
        ref={(el) => {
          sectionRefs.current[2] = el;

          scene3WrapperRef.current = el;
        }}
      >
        <section
          className="scene scene3-sticky"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(0, 0, 0, 0.35),
                rgba(0, 0, 0, 0.65)
              ),
              url(${BACKGROUNDS[2]})
            `,
          }}
        >
          <div className="scene3-light-ui" aria-hidden="true">
            <div className="scene3-light-shape scene3-light-shape-1" />
            <div className="scene3-light-shape scene3-light-shape-2" />
            <div className="scene3-light-shape scene3-light-shape-3" />
          </div>

          {/* FireEffect spins up a full PixiJS app with bloom filters and
              continuous sprite generation - too heavy for most mobile
              GPUs, so it's skipped entirely below 768px. The CSS
              radial-gradient overlay (.scene3-sticky::before) and the
              flicker shapes above still carry the scene's atmosphere. */}
          {!isMobile && <FireEffect />}

          <div
            className={`scene3-project-info ${activeProject ? "visible" : ""}`}
            aria-hidden={!activeProject}
          >
            {activeProject && (
              <div className="scene3-project-info-inner" key={hoveredProject}>
                <div className="scene3-project-number">
                  {activeProject.number}
                </div>

                <div className="scene3-project-line" />

                <span className="scene3-project-category">
                  {activeProject.category}
                </span>

                <h3>{activeProject.title}</h3>

                <p>{activeProject.description}</p>

                <span className="scene3-project-indicator">
                  {isMobile ? "Tap again to open" : "Explore Project"}
                </span>
              </div>
            )}
          </div>

          <div className="collage">
            {IMAGES.map((src, i) => {
              const { scattered, assembled } = PIECES[i];

              const start = i * STAGGER;

              const local = clamp((progress - start) / WINDOW, 0, 1);

              const x = lerp(scattered.x, assembled.x, local);

              const y = lerp(scattered.y, assembled.y, local);

              const r = lerp(scattered.r, assembled.r, local);

              const s = lerp(scattered.s, assembled.s, local);

              return (
                <a
                  key={i}
                  href={PROJECT_LINKS[i]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="collage-piece-link"
                  aria-label={`Open Project ${i + 1}`}
                  onMouseEnter={() => handleCollageEnter(i)}
                  onMouseLeave={handleCollageLeave}
                  onFocus={() => handleCollageEnter(i)}
                  onBlur={handleCollageLeave}
                  onClick={(e) => handleCollageClick(e, i)}
                >
                  <img
                    src={src}
                    alt={`Project ${i + 1}`}
                    className="collage-piece"
                    style={{
                      transform: `
                          translate(
                            ${x}%,
                            ${y}%
                          )
                          rotate(
                            ${r}deg
                          )
                          scale(
                            ${s}
                          )
                        `,
                      opacity: local,
                    }}
                  />
                </a>
              );
            })}
          </div>

          <h2 className="scene3-title">Selected Works</h2>
        </section>
      </div>

      {/* ===================================================
         SCENE 4
      =================================================== */}

      <div
        className="scene4-wrapper"
        ref={(el) => {
          sectionRefs.current[3] = el;

          scene4WrapperRef.current = el;
        }}
      >
        <section
          className="scene scene4 scene4-sticky"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(0, 0, 0, 0.40),
                rgba(0, 0, 0, 0.60)
              ),
              url(${BACKGROUNDS[3]})
            `,
          }}
        >
          <div
            className="scene4-content"
            style={{
              transform: `translate3d(${scene4TextX}vw, -50%, 0)`,
            }}
          >
            <span className="eyebrow">02 / Discipline</span>

            <h2>Hackathons</h2>

            <p>Performing above grounds to rise from rest to the best</p>
          </div>

          <div className="scene4-project-column">
            {SCENE4_PIECES.map((piece, i) => {
              const local = clamp(
                (scene4Progress - piece.start) / piece.window,
                0,
                1,
              );

              // Each image enters from the left and stops at its own final position.
              const x = lerp(-120, piece.x, local);
              const rotate = lerp(0, piece.rotate, local);

              return (
                <a
                  key={i}
                  href={SCENE4_LINKS[i]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`scene4-project-link ${
                    isMobile && tappedScene4 === i ? "tapped" : ""
                  }`}
                  aria-label={`Open Hackathon Project ${i + 1}`}
                  style={{
                    left: `${x}vw`,
                    top: `${piece.y}vh`,
                    width: `${piece.width}px`,
                    opacity: local,
                    transform: `rotate(${rotate}deg)`,
                  }}
                  onClick={(e) => handleScene4Click(e, i)}
                  onMouseEnter={() => handleScene4Enter(i)}
                >
                  <img
                    src={img7}
                    alt={`Hackathon Project ${i + 1}`}
                    className="scene4-project-image"
                  />

                  {scene4FireCounts[i] ? (
                    <React.Fragment key={scene4FireCounts[i]}>
                      <div className="scene4-flash" />
                      <div className="scene4-trail" />
                      <div className="scene4-bullet">
                        <img
                          src={img8}
                          alt=""
                          aria-hidden="true"
                          className="scene4-bullet-image"
                        />
                      </div>
                    </React.Fragment>
                  ) : null}

                  <div className="scene4-project-info">
                    <h3>{SCENE4_INFO[i].title}</h3>
                    <p>{SCENE4_INFO[i].body}</p>
                    {isMobile && (
                      <span className="scene4-tap-hint">Tap again to open</span>
                    )}
                  </div>
                </a>
              );
            })}
          </div>
        </section>
      </div>

      {/* ===================================================
         SCENE 5
      =================================================== */}

      <section
        className="scene goodbye"
        ref={(el) => (sectionRefs.current[4] = el)}
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(0, 0, 0, 0.40),
              rgba(0, 0, 0, 0.65)
            ),
            url(${BACKGROUNDS[4]})
          `,
        }}
      >
        <div className="scene-content">
          <span className="eyebrow">03 / Contact</span>

          <h1>Let's Connect</h1>

          <p>
            Available for select creative direction engagements, CS stuff, and design projects.
          </p>
        </div>

        <footer className={`site-footer ${footerVisible ? "visible" : ""}`}>
          <a href="mailto:rachnf99@gmail.com" className="footer-link">
            rachnf99@gmail.com
          </a>

          <a
            href="https://github.com/Veduisback"
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
            <span>Veduisback</span>
          </a>

          <a
            href="https://www.linkedin.com/in/vedang-jaiswal-83a906317/"
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
            <span>Vedang Jaiswal</span>
          </a>
        </footer>
      </section>
    </div>
  );
}