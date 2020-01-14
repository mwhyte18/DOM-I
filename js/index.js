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
    "h1": "DOM <br>Is <br>Awesome",
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
    "address" : "123 Way 456 Street <br>Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

//images
// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const codeSnippet = document.getElementById(`cta-img`);
codeSnippet.setAttribute('src', siteContent[`cta`]['img-src']);

const middlePic = document.getElementById(`middle-img`);
middlePic.setAttribute('src', siteContent['main-content']['middle-img-src']);

//navbar
const navBar = document.querySelectorAll(`nav a`);
const fillingNavBar = function(content){
  const actualItem = Array.from(navBar);
  const itemContent = Object.values(content);
  actualItem.forEach(function(currItem, index){
    currItem.textContent = itemContent[index]
  });
}
fillingNavBar(siteContent.nav);

//navBar New additions
const navigation = document.querySelector('nav');
navBar.forEach(link => link.style.color = "green");
const first = document.createElement('a');
const last = document.createElement('a');
first.textContent = "Prepend";
last.textContent = "Append";
first.style.color = "green";
last.style.color = "green";
navigation.appendChild(last);
navigation.prepend(first);



//Top Section
const ctaHeader = document.querySelector('.cta-text h1');
ctaHeader.innerHTML = siteContent['cta']['h1'];

const ctaButton = document.querySelector('.cta-text button');
ctaButton.innerHTML = siteContent['cta']['button'];



//Main Content
function fillingMainContent(elements, content){
  elements.forEach(function(element, index){
    element.innerHTML = content[index];
  })
}
 const h4 = document.querySelectorAll('.text-content h4');
 const p = document.querySelectorAll('.text-content p')
 const titleOrText = Object.keys(siteContent['main-content']);
 const allH4s = [];
 const allPs = [];
  titleOrText.forEach(function(element){
    if (element.includes('h4')) {
      allH4s.push(siteContent['main-content'][element]);
    }
    else if(element.includes('content')){
      allPs.push(siteContent['main-content'][element]);
    }
  });
  fillingMainContent(h4, allH4s);
  fillingMainContent(p, allPs);

  //Contact and footer Section
    //h4 header
  const contactH4 = document.querySelector('.contact h4');
  contactH4.innerHTML = siteContent['contact']['contact-h4'];
    //ps
  const contactP = document.querySelectorAll('.contact p');
  const contentForPs = Object.values(siteContent['contact']).splice(1, 3);
  contactP.forEach(function(element, index){
    element.innerHTML = contentForPs[index];
  })
    //footer
  const footer = document.querySelector('footer p');
  footer.innerHTML = siteContent['footer']['copyright'];
  
   
