
// horizon wave //
document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('horizon');
  const c = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const waves = [
    {
      y: 383,
      length: 0.002,
      amplitude: -81,
      frequency: 0.01,
      radius: 100,
      color: {
        r: 7,
        g: 118,
        b: 50
      }
    },
    {
      y: 344,
      length: 0.003,
      amplitude: 100,
      frequency: 0.02,
      radius: 133,
      color: {
        r: 61,
        g: 143,
        b: 97
      }
    },
    {
      y: 439,
      length: -0.001,
      amplitude: 100,
      frequency: 0.02,
      radius: 100,
      color: {
        r: 239,
        g: 145,
        b: 67
      }
    }
  ];

  const background = {
    r: 255,
    g: 250,
    b: 242,
    a: 0.01
  };

  function updateColor() {
    // Handle color changes
  }

  let increment = waves[0].frequency;

  function animate() {
    requestAnimationFrame(animate);
    c.fillStyle = `rgba(${background.r}, ${background.g}, ${background.b}, ${background.a})`;
    c.fillRect(0, 0, canvas.width, canvas.height);

    waves.forEach((wave, index) => {
      c.beginPath();
      c.moveTo(0, wave.y);

      for (let i = 0; i < canvas.width; i++) {
        const x = i;
        const y =
          wave.y +
          Math.sin(i * wave.length + increment) *
          wave.amplitude *
          Math.sin(increment) +
          Math.sin(i * wave.length) * wave.radius;

        c.lineTo(x, y);
      }

      c.strokeStyle = `rgb(${wave.color.r}, ${wave.color.g}, ${wave.color.b})`;
      c.stroke();
    });

    increment += waves[0].frequency;
  }

  animate();
});
//horizon wave end//

//vertical wave//
document.addEventListener('DOMContentLoaded', () => {
  const verticalCanvas = document.getElementById('vertical');
  const verticalContext = verticalCanvas.getContext('2d');

  verticalCanvas.width = window.innerWidth;
  verticalCanvas.height = window.innerHeight;

  const verticalWaves = [
    {
      x: 206,
      length: -0.007,
      amplitude: -142,
      frequency: -0.01,
      radius: 73,
      color: {
        r: 7,
        g: 118,
        b: 50
      }
    },
    {
      x: 242,
      length: -0.003,
      amplitude: 109,
      frequency: 0.02,
      radius: 56,
      color: {
        r: 61,
        g: 143,
        b: 97
      }
    },
    {
      x: 170,
      length: 0.003,
      amplitude: 102,
      frequency: 0.03,
      radius: 120,
      color: {
        r: 239,
        g: 145,
        b: 67
      }
    }
  ];

  const verticalBackground = {
    r: 255,
    g: 250,
    b: 242,
    a: 0.01
  };

  let verticalIncrement = verticalWaves[0].frequency;

  function animateVertical() {
    requestAnimationFrame(animateVertical);
    verticalContext.fillStyle = `rgba(${verticalBackground.r}, ${verticalBackground.g}, ${verticalBackground.b}, ${verticalBackground.a})`;
    verticalContext.fillRect(0, 0, verticalCanvas.width, verticalCanvas.height);

    verticalWaves.forEach((wave, index) => {
      verticalContext.beginPath();
      verticalContext.moveTo(wave.x, 0);

      for (let i = 0; i < verticalCanvas.height; i++) {
        const x =
          wave.x +
          Math.sin(i * wave.length + verticalIncrement) *
          wave.amplitude *
          Math.sin(verticalIncrement) +
          Math.sin(i * wave.length) * wave.radius;

        const y = i;
        verticalContext.lineTo(x, y);
      }

      verticalContext.strokeStyle = `rgb(${wave.color.r}, ${wave.color.g}, ${wave.color.b})`;
      verticalContext.stroke();
    });

    verticalIncrement += verticalWaves[0].frequency;
  }

  animateVertical();
});
//vertival wave end//

/////// Prevent closing from click inside dropdown
document.querySelectorAll('.nav-dropdown').forEach(function (element) {
  element.addEventListener('click', function (e) {
    e.stopPropagation();
  });
})

//faq section//
const faqToggler = document.querySelector('.faq-toggler');
const closeBtn = document.querySelector('.close-btn');
const faqSection = document.querySelector('.faq-content')

function showFAQ() {
  faqSection.classList.add('animate__animated', 'animate__slideInRight', 'active');

  setTimeout(function () {
    faqSection.classList.remove('animate__slideInRight');
  }, 1000);
}

function hideFAQ() {
  faqSection.classList.add('animate__slideOutRight');

  setTimeout(function () {
    faqSection.classList.remove('animate__animated', 'animate__slideOutRight', 'active');
  }, 1000);
}


faqToggler.addEventListener('click', () => {
  if (faqSection.classList.contains('active')) {
    hideFAQ();
  } else {
    showFAQ();
  }
});

closeBtn.addEventListener('click', () => {
  hideFAQ();
});

faqToggler.addEventListener('mouseenter', () => {
  faqToggler.classList.add('animate__animated', 'animate__headShake');

  setTimeout(function () {
    faqToggler.classList.remove('animate__animated', 'animate__headShake');
  }, 1000);
})

function handleClickOutside(event) {
  if (!faqSection.contains(event.target) && !faqToggler.contains(event.target)) {
    hideFAQ();
  }
}

document.body.addEventListener('click', handleClickOutside);
//faq section end//

//number animation//
document.addEventListener("DOMContentLoaded", function () {
  let number = document.getElementById('number');

  if (number) {
    let start = 20;
    let end = 1000;
    let ticks = 20;
    let speed = 70;

    let randomNumbers = [end];

    for (let i = 0; i < ticks - 1; i++) {
      randomNumbers.unshift(
        Math.floor(Math.random() * (end - start + 1) + start)
      );
    }

    randomNumbers.sort((a, b) => { return a - b });

    let x = 0;
    let interval = setInterval(function () {

      if (number) {
        number.innerHTML = randomNumbers.shift();
      }

      if (++x === ticks) {
        window.clearInterval(interval);
      }

    }, speed);
  }
});
//number animation end//

const isPhone = window.innerWidth <= 800;

//animation when observe//
const the_animation = document.querySelectorAll('.animation');

the_animation.forEach((element) => {
  const threshold = element.dataset.threshold || 0.5; // Default threshold is 0.5
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let animationType;

        // Check if it's a phone and set animation type accordingly
        if (isPhone) {
          animationType = entry.target.dataset.phoneAnimation || 'fadeInLeft';
        } else {
          // If not a phone, use the default animation
          animationType = entry.target.dataset.animation || 'fadeInRight';
        }

        entry.target.classList.add('active', 'animate__animated', `animate__${animationType}`);

        // Set a delay (e.g., 2000 milliseconds) before removing the added classes
        setTimeout(() => {
          entry.target.classList.remove('animate__animated', `animate__${animationType}`);
        }, 3000);
        observer.unobserve(entry.target); // Stop observing the element
      }
    });
  }, { threshold: parseFloat(threshold) }); // Convert threshold to a float

  observer.observe(element);
});

//animation when observe end//



if (isPhone) {
  console.log('phone');

  document.addEventListener("DOMContentLoaded", function () {
    var benefitBG = document.querySelector('.benefit-background')
    benefitBG.src = '../greenstem/pic/customer_servies_phone-bg.jpg'

  });

  const footerTextList = document.querySelectorAll('.footer-text');

  footerTextList.forEach(footerText => {
    footerText.classList.remove('text-end');
    footerText.classList.add('text-center');
  });

  const multiDropDown = document.querySelectorAll('.submenu')
  multiDropDown.forEach(dropDown =>{
    dropDown.classList.remove('submenu-left');
    
  })



} else {

  //Spare parts management system carousel//
  var carousel = $(".module-carousel"),
    currdeg = 0;

  $("#next").on("click", { d: "n" }, rotate);
  $("#prev").on("click", { d: "p" }, rotate);

  function rotate(e) {
    if (e.data.d == "n") {
      currdeg = currdeg + 45;
    }
    if (e.data.d == "p") {
      currdeg = currdeg - 45;
    }
    carousel.css({
      "-webkit-transform": "rotateY(" + -currdeg + "deg)",
      "-moz-transform": "rotateY(" + -currdeg + "deg)",
      "-o-transform": "rotateY(" + -currdeg + "deg)",
      "transform": "rotateY(" + -currdeg + "deg)"
    });

    // Remove the 'active' class from all items
    $(".module-carousel-item").removeClass("active");

    // Calculate the index of the currently active item
    var activeIndex = Math.floor(currdeg / 45) % 8;

    // Add the 'active' class to the currently active item
    $(".module-carousel-item").eq(activeIndex).addClass("active");

    displayText = $(".module-carousel-item.active p").text();

    changeTextWithDelay(displayText);

  }

  function changeTextWithDelay(newText) {
    // Display a loading message immediately
    $("#displayText").text('Loading...');

    // Set a delay before updating the text
    setTimeout(function () {
      $("#displayText").text(newText);
    }, 400); // 1000 milliseconds = 1 second
  }

  //Spare parts management system carousel end//


  //product review//
  document.querySelectorAll(".product-review").forEach(item => {
    item.addEventListener('click', function () {
      showContent(this.dataset.target);
    })
  })

  function showContent(contentID) {
    var allContent = document.querySelectorAll('.description');
    allContent.forEach(function (content) {
      content.classList.remove('active')
    });

    var selectedContent = document.getElementById(contentID);
    if (selectedContent) {
      selectedContent.classList.add('active', 'animate__fadeInUp')
    }
  }
  //product review end//


  //home page scrollSource animation//
  document.addEventListener("DOMContentLoaded", function () {
    var scrollSource = document.querySelector('.auto-scroll');
    var nextContainer = document.querySelector('.auto-scroll-target');
    var animated = false;

    window.addEventListener('scroll', function () {
      // Get the scroll position
      var scrollPosition = window.scrollY;

      // Adjust this value based on when you want the animation to trigger
      var triggerPosition = 100;

      // Check if the scroll position is below the trigger position
      if (scrollPosition > triggerPosition && !animated) {
        scrollSource.classList.add('animate__animated', 'animate__backOutUp');
        animated = true; // Set a flag to prevent the animation from being applied multiple times

        // Scroll to the next container until it fills 80% of the screen height
        animateScrollTo(nextContainer.offsetTop + nextContainer.offsetHeight * 0.001);
      } else if (scrollPosition <= triggerPosition && animated) {
        scrollSource.classList.remove('animate__backOutUp');
        scrollSource.classList.add('animate__backInDown');

        animated = false; // Set a flag to allow the animation to be applied again
      }
    });

    function animateScrollTo(targetPosition) {
      var duration = 800; // Adjust the duration as needed
      var start = window.scrollY;
      var startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

      function scroll() {
        var now = 'now' in window.performance ? performance.now() : new Date().getTime();
        var time = Math.min(1, (now - startTime) / duration);

        window.scroll(0, Math.ceil((time * (targetPosition - start)) + start));

        if (time < 1) {
          requestAnimationFrame(scroll);
        }
      }

      scroll();
    }
  });
  //home page scrollSource animation end//



  //time line line animation//
  document.addEventListener('DOMContentLoaded', function () {
    var lines = document.querySelectorAll('.timeLine .timeline-container .line');

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          setTimeout(function () {
            entry.target.classList.remove('active');
          }, 1500);
        }
      });
    }, { threshold: 0.5 });

    lines.forEach(function (line) {
      observer.observe(line);
    });
  });
  //time line line animation end//


}