const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Nav bar

let navItems = document.getElementsByTagName('a');
navItems[0].textContent = siteContent['nav']['nav-item-1'];
navItems[1].textContent = siteContent['nav']['nav-item-2'];
navItems[2].textContent = siteContent['nav']['nav-item-3'];
navItems[3].textContent = siteContent['nav']['nav-item-4'];
navItems[4].textContent = siteContent['nav']['nav-item-5'];
navItems[5].textContent = siteContent['nav']['nav-item-6'];

//cta

let titleText = document.querySelector('h1');
titleText.textContent = (siteContent['cta']['h1']);

let ctaButton = document.querySelector('button');
ctaButton.textContent = (siteContent['cta']['button']);

let ctaLogo = document.getElementById('cta-img');
ctaLogo.setAttribute('src', siteContent['cta']['img-src']);

// main content
let topTextTitle = document.querySelectorAll('.top-content h4')
topTextTitle[0].textContent = siteContent['main-content']['features-h4'];
topTextTitle[1].textContent = siteContent ['main-content']['about-h4'];

let topTextContent = document.querySelectorAll('.text-content p');
topTextContent[0].textContent = siteContent['main-content']['features-content'];
topTextContent[1].textContent = siteContent['main-content']['about-content'];

let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent ['main-content']['middle-img-src']);

let bottomTextTitle = document.querySelectorAll('.bottom-content .text-content h4');
bottomTextTitle[0].textContent = siteContent['main-content']['services-h4'];
bottomTextTitle[1].textContent = siteContent['main-content']['product-h4'];
bottomTextTitle[2].textContent = siteContent['main-content']['vision-h4'];

let bottomTextContent = document.querySelectorAll('.bottom-content .text-content p');
bottomTextContent[0].textContent = siteContent['main-content']['services-content'];
bottomTextContent[1].textContent = siteContent['main-content']['product-content'];
bottomTextContent[2].textContent = siteContent['main-content']['vision-content'];

let contactTitle = document.querySelector('.contact h4');
contactTitle.textContent = siteContent['contact']['contact-h4'];

let contactInfo = document.querySelectorAll('.contact p');
contactInfo[0].textContent = siteContent['contact']['address'];
contactInfo[1].textContent = siteContent['contact']['phone'];
contactInfo[2].textContent = siteContent['contact']['email'];

