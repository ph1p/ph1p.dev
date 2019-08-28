import anime from 'animejs';
import Splitting from 'splitting';
import scrollMonitor from 'scrollmonitor';
import shapes from './assets/js/shapes';

import './assets/scss/style.scss';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js');
  });
}

const headerElement = document.querySelector('.header');
const contentSections = document.querySelectorAll('.content');
const menuElement = document.querySelectorAll('.menu li');
const background = document.querySelector('.background');
const hamburger = document.querySelector('.hamburger');
const backgroundSVG = document.querySelector('.background svg');
const backgroundSVGPath = backgroundSVG.querySelector('.background path');
let step = 0;

const MOBILE_WIDTH = 770;

// flags
let isAutoScrolling = false;
let currentIndex = 0;

// svgs
let arrowSVG = 'M31 10V53M31 53L13 36.6017M31 53L49 36.6017';
let crossSVG = 'M46.5 46.5L15 15M46.4993 15L15 46.5';
let hamburgerSVG =
  'M49.0008 46.5L13.0009 46.5M48.9999 31L13 31M48.9999 15L13 15';

let screenWidth =
  window.innerWidth ||
  d.documentElement.clientWidth ||
  d.getElementsByTagName('body')[0].clientWidth;
let screenHeight =
  window.innerHeight ||
  d.documentElement.clientHeight ||
  d.getElementsByTagName('body')[0].clientHeight;

function init() {
  // set right corner icon
  setMenuIcon(screenWidth > MOBILE_WIDTH ? arrowSVG : hamburgerSVG);

  // set start section
  goToSection(location.hash, true);

  // to prevent transitions on load
  document.querySelector('body').classList.remove('preload');

  // add event listener
  hamburger.addEventListener('click', toggleMenu);

  document.documentElement.style.setProperty(
    '--vh',
    `${screenHeight * 0.01}px`
  );

  createScrollWatchers();

  window.addEventListener('resize', () => {
    screenWidth =
      window.innerWidth ||
      d.documentElement.clientWidth ||
      d.getElementsByTagName('body')[0].clientWidth;
    screenHeight =
      window.innerHeight ||
      d.documentElement.clientHeight ||
      d.getElementsByTagName('body')[0].clientHeight;

    document.documentElement.style.setProperty(
      '--vh',
      `${screenHeight * 0.01}px`
    );

    if (screenWidth > MOBILE_WIDTH) {
      document.querySelector('.menu').setAttribute('style', '');
      setMenuIcon(arrowSVG);
    } else {
      setMenuIcon(hamburgerSVG);
    }
  });

  document.querySelectorAll('.menu a').forEach(anker => {
    anker.addEventListener('click', e => {
      e.preventDefault();

      const [_, hash] = e.target.href.split('#');

      if (screenWidth <= MOBILE_WIDTH) {
        toggleMenu();
      }
      goToSection('#' + hash);
      // history.pushState(null, null, '#' + hash);
    });
  });
}

function goToSection(hash = '#home', noAnimation = false) {
  if (hash !== '') {
    const scrollTop = document.querySelector(hash).offsetTop;
    const targets =
      window.document.scrollingElement ||
      window.document.body ||
      window.document.documentElement;

    isAutoScrolling = true;

    history.pushState(null, null, hash);

    anime.remove(targets);
    anime({
      targets,
      scrollTop,
      duration: noAnimation ? 0 : 800,
      easing: 'easeInOutQuad',
      complete() {
        isAutoScrolling = false;
      }
    });
  }
}

function setMenuIcon(d) {
  const targets = document.querySelector('.hamburger path');

  if (targets.getAttribute('d') !== d) {
    anime({
      targets,
      d,
      duration: 400,
      easing: 'easeOutCirc'
    });
  }
}

function toggleMenu() {
  if (screenWidth <= MOBILE_WIDTH) {
    headerElement.classList.remove('down');
    const menu = document.querySelector('.menu');
    // cross
    let path = crossSVG;
    hamburger.classList.toggle('active');

    // active
    if (menu.classList.contains('active')) {
      // hamburger
      path = hamburgerSVG;
      anime({
        targets: menu,
        translateY: [0, 100],
        translateZ: 0,
        opacity: [1, 0],
        easing: 'easeOutExpo',
        duration: 600,
        complete() {
          menu.style.visibility = 'hidden';
          menu.classList.remove('active');
        }
      });
    } else {
      menu.classList.add('active');
      anime({
        targets: menu,
        translateY: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 600,
        visibility: 'visible',
        begin() {
          menu.style.visibility = 'visible';
        }
      });
    }
    setMenuIcon(path);
  } else {
    const targets =
      window.document.scrollingElement ||
      window.document.body ||
      window.document.documentElement;

    anime.remove(targets);
    anime({
      targets,
      scrollTop: document.body.scrollHeight,
      duration: 1000,
      easing: 'easeInOutQuad'
    });
  }
}

function debounce(func, wait, immediate) {
  let timeout;
  return function() {
    const later = () => {
      timeout = null;
      if (!immediate) {
        func.apply(this, arguments);
      }
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) {
      func.apply(this, arguments);
    }
  };
}

function animate(index) {
  if (index < 0 || index > contentSections.length - 1) {
    index = 0;
  }

  anime.remove(backgroundSVGPath);
  anime({
    targets: backgroundSVGPath,
    d: shapes[index].d,
    easing: 'easeOutCirc',
    delay: 0,
    elasticity: 600,
    duration: shapes[index].duration
  });

  anime.remove('#bg-gradient');
  anime({
    targets: '#bg-gradient',
    ...shapes[index].gradient,
    easing: 'easeInOutCubic'
  });

  anime.remove('#bg-gradient-color-start');
  anime({
    targets: '#bg-gradient-color-start',
    'stop-color': shapes[index].gradient.start,
    easing: 'easeInOutCubic'
  });

  anime.remove('#bg-gradient-color-stop');
  anime({
    targets: '#bg-gradient-color-stop',
    'stop-color': shapes[index].gradient.stop,
    easing: 'easeInOutCubic'
  });

  anime.remove(backgroundSVG);
  anime({
    targets: backgroundSVG,
    duration: 4000,
    easing: 'easeOutElastic',
    scaleX: shapes[index].scaleX,
    scaleY: shapes[index].scaleY,
    translateX: shapes[index].translateX + 'px',
    translateY: shapes[index].translateY + 'px',
    rotate: shapes[index].rotate + 'deg'
  });

  if (screenWidth > MOBILE_WIDTH) {
    anime.remove(hamburger);
    anime({
      targets: hamburger,
      opacity: index + 1 === contentSections.length ? 0 : 1
    });
  }
}

const createScrollWatchers = () => {
  const headerHeight = headerElement.clientHeight;

  let currentScrollTop = 0;
  let lastScrollPosition = 0;

  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  let firstPosition = window.pageYOffset || document.documentElement.scrollTop;

  let autoScrollAnimation = null;

  window.addEventListener('scroll', () => {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop - firstPosition >= headerHeight / 2) {
      headerElement.classList.add('down');
    } else if (Math.abs(scrollTop - firstPosition) >= headerHeight / 2) {
      headerElement.classList.remove('down');
    }

    lastScrollPosition = scrollTop;
  });

  window.addEventListener(
    'scroll',
    debounce(() => {
      firstPosition = window.pageYOffset || document.documentElement.scrollTop;
    }, 50)
  );

  window.addEventListener(
    'scroll',
    debounce(() => {
      if (screenWidth > MOBILE_WIDTH) {
        const targets =
          window.document.scrollingElement ||
          window.document.body ||
          window.document.documentElement;

        anime.remove(targets);
        autoScrollAnimation = anime({
          targets,
          scrollTop: document.querySelector('.content.active').offsetTop || 0,
          duration: 400,
          easing: 'easeInOutQuad'
        });
      }
    }, 800)
  );

  contentSections.forEach((element, pos) => {
    // split all texts
    const textToSplit = element.querySelector('.text');

    if (textToSplit) {
      textToSplit.innerHTML = Splitting.html({
        target: textToSplit,
        content: textToSplit.innerHTML,
        by: 'words'
      });
    }

    const elementWatcher = scrollMonitor.create(
      contentSections[pos],
      element.clientHeight * -0.5
    );

    pos = pos ? pos : 0;

    elementWatcher.enterViewport(() => {
      const text = contentSections[pos].querySelector('.text');
      const words = text.querySelectorAll('.word');

      // set menu active
      contentSections[pos].classList.add('active');
      menuElement[pos].classList.add('active');

      step = pos;
      currentIndex = pos;

      animate(pos);

      if (screenWidth > MOBILE_WIDTH) {
        if (!text.classList.contains('text-started')) {
          anime.remove(words);
          anime({
            targets: words,
            translateY: [100, 0],
            delay: 4000,
            translateZ: 0,
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 1400,
            delay(el, i) {
              return 300 + 30 * i;
            },
            begin() {
              text.classList.add('text-started');
            }
          });
        }
      }

      history.replaceState(
        null,
        null,
        '#' + contentSections[pos].getAttribute('id')
      );
    });

    elementWatcher.exitViewport(() => {
      // set menu inactive
      contentSections[pos].classList.remove('active');
      menuElement[pos].classList.remove('active');

      const index = !elementWatcher.isAboveViewport ? pos - 1 : pos + 1;
      currentIndex = index;

      if (index <= contentSections.length - 1 && step !== index) {
        step = index;

        animate(index);
      }
    });
  });
};

setTimeout(init, 100);
