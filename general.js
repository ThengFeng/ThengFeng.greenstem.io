
// horizon wave //
document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('horizon');
  if (canvas) {
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
  }
});
//horizon wave end//

//vertical wave//
document.addEventListener('DOMContentLoaded', () => {
  const verticalCanvas = document.getElementById('vertical');
  if (verticalCanvas) {
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
  }
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

//Spare parts management system carousel//
document.addEventListener("DOMContentLoaded", function () {
  var carousel = $(".module-carousel"),
    currdeg = 0;

  if (carousel) {
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
  }
});

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

//workshop coursal//
var workshopCarousel = $(".module-carousel.workshop"),
  workshopCurrIndex = 0;

if (workshopCarousel) {

  $("#workshop-next").on("click", workshopNext);
  $("#workshop-prev").on("click", workshopPrev);

  function workshopNext() {
    workshopCurrIndex = (workshopCurrIndex + 1) % 3; // Change to 3 for 3 items
    updateCarousel();
  }

  function workshopPrev() {
    workshopCurrIndex = (workshopCurrIndex - 1 + 3) % 3; // Change to 3 for 3 items
    updateCarousel();
  }

  function updateCarousel() {
    var rotation = workshopCurrIndex * -120; // Change to -120 for 3 items

    workshopCarousel.css({
      "-webkit-transform": "rotateY(" + rotation + "deg)",
      "-moz-transform": "rotateY(" + rotation + "deg)",
      "-o-transform": "rotateY(" + rotation + "deg)",
      transform: "rotateY(" + rotation + "deg)",
    });

    // Remove the 'active' class from all items
    $(".module-carousel-item.workshop").removeClass("active");

    // Add the 'active' class to the currently active item
    $(".module-carousel-item.workshop").eq(workshopCurrIndex).addClass("active");

    var displayText = $(".module-carousel-item.workshop.active p").text();

    changeTextWithDelayW(displayText);
  }

  function changeTextWithDelayW(newText) {
    // Display a loading message immediately
    $("#workshop-displayText").text('Loading...');

    // Set a delay before updating the text
    setTimeout(function () {
      $("#workshop-displayText").text(newText);
    }, 400); // 1000 milliseconds = 1 second
  }
}

//time line line animation//
document.addEventListener('DOMContentLoaded', function () {
  var lines = document.querySelectorAll('.timeLine .timeline-container .line');

  if (lines) {
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
  }
});
//time line line animation end//

//home page scrollSource animation//
document.addEventListener("DOMContentLoaded", function () {
  var scrollSource = document.querySelector('.auto-scroll');
  var nextContainer = document.querySelector('.auto-scroll-target');
  var animated = false;

  if (scrollSource && nextContainer) {

    window.addEventListener('scroll', function () {
      // Get the scroll position
      var scrollPosition = window.scrollY;

      // Adjust this value based on when you want the animation to trigger
      var triggerPosition = 100;

      // Check if the scroll position is below the trigger position
      if (scrollPosition > triggerPosition && !animated) {
        animateScrollTo(nextContainer.offsetTop + nextContainer.offsetHeight * 0.001);
        scrollSource.classList.add('animate__animated', 'animate__backOutUp');
        animated = true; // Set a flag to prevent the animation from being applied multiple times

        // Scroll to the next container until it fills 80% of the screen height
      } else if (scrollPosition <= triggerPosition && animated) {
        scrollSource.classList.remove('animate__backOutUp');
        scrollSource.classList.add('animate__backInDown');
        animated = false; // Set a flag to allow the animation to be applied again
      }
    });

    function animateScrollTo(targetPosition) {
      var duration = 100; // Adjust the duration as needed
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
  }
});
//home page scrollSource animation end//


if (isPhone) {
  console.log('phone');

  document.addEventListener("DOMContentLoaded", function () {
    var benefitBG = document.querySelector('.benefit-background');

    // Check if the element is not null before setting its properties
    if (benefitBG) {
      benefitBG.src = '../greenstem/pic/customer_servies_phone-bg.jpg';
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    var sparePartBG = document.querySelector('.sparePart-background')

    if (sparePartBG) {
      sparePartBG.src = '../greenstem/pic/spareparts&acconting-system-phone.png';
    }
  });

  const footerTextList = document.querySelectorAll('.footer-text');

  footerTextList.forEach(footerText => {
    footerText.classList.remove('text-end');
    footerText.classList.add('text-center');
  });

  const multiDropDown = document.querySelectorAll('.submenu')
  multiDropDown.forEach(dropDown => {
    dropDown.classList.remove('submenu-left');

  })
}

const jsonData = [
  //logo
  {
    "@context": "https://schema.org",
    "type": "Organization",
    "url": "https://www.greenstem.com.my",
    "logo": "https://www.greenstem.com.my/pic/icon.webp"
  },
  //	Local Business
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.greenstem.com.my",
    "name": "Greenstem Business Software Sdn Bhd",
    "image": [
      "https://www.greenstem.com.my/img/photo/greenstem (1).webp"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Block A, A-3-3A, Ativo Plaza",
      "addressLocality": "Bandar Sri Damansara",
      "addressRegion": "KL",
      "postalCode": "52200",
      "addressCountry": "MY"
    },
    //	Option
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 3.1966091,
      "longitude": 101.6160515
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "telephone": "+603-6263 3933",
    "email": "mailto:admin@greenstem.com.my",
    "faxNumber": "+603-6263 7738",
    "url": "https://www.greenstem.com.my"
  },
  //	FAQ
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why choose us?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `
                      Specifically designed for spare parts to improve <strong>efficiency</strong> and <strong>productivity</strong>.
                  `
        }
      },
      {
        "@type": "Question",
        "name": "Achievement",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `
                      <ul>
                          <li>Engaged in spare parts accounting software business more than <strong>20 years</strong>.</li>
                          <li>Installed to more than <strong>800 spare parts companies</strong>.</li>
                      </ul>
                  `
        }
      }
    ]
  },
  //Product 
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "SoftwareApplication",
        "name": "Spare Parts Management & Accounting System",
        "description": "Our specialized system for spare parts companies optimizes efficiency through real-time inventory management, automated orders, and streamlined accounting",
        "brand": {
          "@type": "brand",
          "name": "Greenstem Business Software SDN BHD"
        },

        "image": [
          "https://www.greenstem.com.my/img/photo/greenstem (1).webp"
        ],
        "applicationCategory":"Business / Workshop",
        "availableOnDevice":"PC & Mobile",
        "featureList":"https://www.greenstem.com.my",
        "inLanguage":"English",
        "operatingSystem":"Windows"
      },
      {
        "@type": "SoftwareApplication",
        "name": "Workshop Management System",
        "description": "Designed for workshops, optimizes efficiency with features like job scheduling, inventory tracking, and automated billing.",
        "brand": {
          "@type": "brand",
          "name": "Greenstem Business Software SDN BHD"
        },

        "image": [
          "https://www.greenstem.com.my/img/photo/greenstem (1).webp"
        ],
        "applicationCategory":"Business / Workshop",
        "availableOnDevice":"PC & Mobile",
        "featureList":"https://www.greenstem.com.my",
        "inLanguage":"English",
        "operatingSystem":"Windows"
      }]
  }
]

const jsonLdScript = document.getElementById('json-ld');

// Set the content of the script element to the JSON-LD data
jsonLdScript.textContent = JSON.stringify(jsonData, null, 2);

//footer
// Create footer element
const footer = document.createElement('footer');
footer.className = 'container-fluid';

// Create logo div
const logoDiv = document.createElement('div');
logoDiv.className = 'logo';

// Create logo image
const logoImg = document.createElement('img');
logoImg.src = '../greenstem/pic/icon.webp';
logoImg.alt = 'company logo';

// Append logo image to logo div
logoDiv.appendChild(logoImg);

// Create text area div
const textAreaDiv = document.createElement('div');
textAreaDiv.className = 'text-area';

// Create first paragraph with contact information
const contactParagraph = document.createElement('p');
contactParagraph.className = 'text-end footer-text';
contactParagraph.innerHTML = '<b>P</b> : (6)03 6263 3933 &nbsp;&nbsp;&nbsp; <b>E</b> : admin@greenstem.com.my';

// Create second paragraph with copyright information
const copyrightParagraph = document.createElement('p');
copyrightParagraph.className = 'text-end footer-text';
const currentYear = new Date().getFullYear();
copyrightParagraph.textContent = `©${currentYear} Greenstem Business Software Sdn Bhd (387389-H) - All rights reserved`;

// Append paragraphs to text area div
textAreaDiv.appendChild(contactParagraph);
textAreaDiv.appendChild(copyrightParagraph);

// Append logo div and text area div to the footer
footer.appendChild(logoDiv);
footer.appendChild(textAreaDiv);

// Append the footer to the document body or any other container
document.body.appendChild(footer);
