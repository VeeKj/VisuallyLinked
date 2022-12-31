import React from 'react'


/************************************************
            [  On window load scripts  ]
************************************************/

window.addEventListener("load", (event) => {
  setTimeout(() => {
    expertisemediaqueries()
  }, 1000);
});



let currenttab = "Home"


/************************************************
            [  Main  ]
************************************************/


export default function VL() {
  return (
    <>
      <div id="vlwrapper">
        <div id="footer">test</div>
        <div id="pc-view-navbar">
          <img id="pc-view-logo" src={require("./vl_logo.png")} onClick={switchToHome} alt="vl-logo"></img>
          <ul>
            <li id="pc-view-navbar-home" onClick={switchToHome}>HOME</li>
            <li id="pc-view-navbar-services" onClick={switchToServices}>SERVICES</li>
            <li id="pc-view-navbar-aboutus">ABOUT US</li>
          </ul>
        </div>
        <div id="navmenu">
          <div id="close-navmenu" onClick={closenavmenu}>
            <div id="close-navmenu-1"></div>
            <div id="close-navmenu-2"></div>
          </div>
          <div id="logo-in-menu">
            <p id="logo-text-in-menu"><span className="general-orange">Visually</span><span className="general-darkblue">Linked</span></p>
          </div>
          <div id="logo-menu-content">
            <ul>
              <li id="phone-view-navbutton-home" onClick={switchToHome}>Home</li>
              <li id="phone-view-navbutton-services" onClick={switchToServices}>Services</li>
              <li>About us</li>
            </ul>
            <button id="phone-view-navmenu-button">Contact Us</button>
          </div>
        </div>
        <div id="nav-icon-wrap" onClick={opennavmenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div id="Homepage">
          <div id="heroimage-container">
            <h1 id="hero-text">Maximize your <span id="hero-image-text-reach" className="general-lightblue">reach</span> and <span id="hero-image-text-impact" className="general-lightblue">impact</span> with our custom solutions</h1>
            <img id="hero-image" src={require("./bgimg.png")} alt="bgimg"></img>
            <button className="herobuttons" id="herobutton-getstarted">Get Started</button>
            <button className="herobuttons" id="herobutton-learnmore">Learn More</button>
          </div>
          <div id="expertise-section">
            <div id="expertise-hide-content">
              <h1>Our expertise</h1>
              <div id="expertise-icon-wrap">
                <div id="expertise-discord">
                  <img id="expertise-discord-image" src={require("./discord.png")} alt="discord icon"></img>
                  <h2 id="expertise-discord-text">Discord Marketing</h2>
                </div>
                <div id="expertise-management">
                  <img id="expertise-management-image" src={require("./management.png")} alt="discord icon"></img>
                  <h2 id="expertise-management-text">Social Media Management</h2>
                </div>
                <div id="expertise-insights">
                  <img id="expertise-insights-image" src={require("./insights.png")} alt="discord icon"></img>
                  <h2 id="expertise-insights-text">Strategy & Insights</h2>
                </div>
                <div id="expertise-webdev">
                  <img id="expertise-webdev-image" src={require("./webdev.png")} alt="discord icon"></img>
                  <h2 id="expertise-webdev-text">Web Development</h2>
                </div>
                <div id="expertise-design">
                  <img id="expertise-design-image" src={require("./design.png")} alt="discord icon"></img>
                  <h2 id="expertise-design-text">Design</h2>
                </div>
              </div>
            </div>
          </div>
          <div id="below-image-waves">
          </div>
          <div id="package-section">
            <h3 id="package-section-text">Our Packages</h3>
            <div id="packages-wrap">
              <div className="package-section-cards" id="packages-discord">
                <h3>Discord Marketing</h3>
                <p>Looking to promote your brand and build a thriving community on Discord? Our Discord marketing packages are here to help! Our team of experts will create a custom strategy and manage your Discord presence, including server setup, content creation, and community building. With our help, you can effectively reach and engage with your target audience on this popular platform. Don't miss out on the opportunity to grow your brand on Discord!</p>
                <button className="package-section-card-button">Learn more</button>
              </div>
              <div className="package-section-cards" id="packages-webdev">
                <h3>Web Development</h3>
                <p>Get a custom website that showcases your brand and drives business success with our web development packages. Our team has expertise in HTML, CSS, JavaScript, and popular CMS like WordPress. We'll work with you to design and build a website that meets your specific needs and goals, whether it's a simple brochure site or a complex e-commerce platform. Let us bring your online vision to life and help you succeed online.</p>
                <button className="package-section-card-button">Learn more</button>
              </div>
              <div className="package-section-cards" id="packages-insights">
                <h3>AI Powered Strategy</h3>
                <p>Enhance your marketing efforts and drive business success with our AI-powered strategy and insights package. Advanced AI and machine learning help us analyze data from your website, social media, and customer feedback to provide valuable insights into your target audience, market trends, and key performance indicators. Based on these insights, we'll develop a customized strategy to help you make informed decisions and optimize your marketing efforts.</p>
                <button className="package-section-card-button">Learn more</button>
              </div>
              <div className="package-section-cards" id="packages-socialmedia">
                <h3>Social Media</h3>
                <p>Build a strong presence on social media and drive meaningful results for your business with our social media marketing packages. Our team has expertise in creating and managing campaigns on platforms like Facebook, Instagram, and TikTok. We'll work with you to develop a custom strategy that aligns with your business goals and target audience, including content creation, community management, and paid advertising.</p>
                <button className="package-section-card-button">Learn more</button>
              </div>
            </div>
          </div>
        </div>
        <div id="servicespage">
          <div id="service-gui">
            <div id="service-gui-content-wrapper">
              <div id="services-dropdown-wrapper">
                <button id="servicesdropButton" onClick={servicesDropdown}>Select Services</button>
                <div id="services-dropdown" className="services-dropdown-content">
                  <ul id="services-dropdown-ul">
                    <li onClick={serviceDropdownDiscord}>Discord Packages</li>
                    <li onClick={serviceDropdownWebDev}>Web Packages</li>
                    <li onClick={serviceDropdownStrategy}>Strategy Packages</li>
                    <li onClick={serviceDropdownSocialMedia} >Social Media Packages</li>
                  </ul>
                </div>
              </div>
              <div id="services-packagetierwrapper">
                <h1 id="selected-package-text" alt="h1e">Select a package</h1>
                <div className="services-package-tier-cards" id="services-packagetierone">
                  <h5 className="services-package-tier-card-text" id="services-packagetierone-text">Tier 1</h5>
                </div>
                <div className="services-package-tier-cards" id="services-packagetiertwo">
                  <h5 className="services-package-tier-card-text" id="services-packagetiertwo-text">Tier 2</h5>
                </div>
                <div className="services-package-tier-cards" id="services-packagetierthree">
                  <h5 className="services-package-tier-card-text" id="services-packagetierthree-text">Tier 3</h5>
                </div>

              </div>
              <button id="servicepage-customize-button">Customize</button>
            </div>
          </div>
        </div>
      </div>
     
    </>
  )
}
/************************************************
        [  Services page: Dropdown menu  ]
************************************************/
let servicesDropdownOpen = false
function servicesDropdown() {
  if (servicesDropdownOpen === false) {
        document.getElementById("services-dropdown").style.border = "1px solid black"
        document.getElementById("services-dropdown").style.height = "0px"
        document.getElementById("services-dropdown").style.display = "block"
        document.getElementById("services-dropdown").style.transitionDuration = "0.4s"
        document.getElementById("services-dropdown").style.height = "220px"
        document.getElementById("servicesdropButton").style.borderRadius = "15px 15px 0px 0px"
        
        setTimeout(() => {
          /*document.getElementById("services-dropdown-ul").style.display = "block"*/
        }, 400);
    servicesDropdownOpen = true
  } else {
    document.getElementById("services-dropdown").style.height = "0px"
    /*document.getElementById("services-dropdown-ul").style.display = "none"*/
    document.getElementById("services-dropdown").style.transitionDuration = "0.4s"
    setTimeout(() => {
      document.getElementById("services-dropdown").style.transitionDuration = "0.0s"
      document.getElementById("servicesdropButton").style.borderRadius = "15px 15px 15px 15px"
      document.getElementById("services-dropdown").style.display = "none"
    }, 250);
    servicesDropdownOpen = false
  }
}

/* Services: dropdownn selected service */

/*vars*/
var SelectedDropdownService = "none"
console.log("SelectedDropdownService: " + SelectedDropdownService);

/* service dropdown selection functions */
function serviceDropdownDiscord() {
  SelectedDropdownService = "Discord Packages"
  serviceDropdownINIT()
  document.getElementById("services-packagetierone-text").innerHTML = "Discord Simple"
  document.getElementById("services-packagetiertwo-text").innerHTML = "Discord Medium"
  document.getElementById("services-packagetierthree-text").innerHTML = "Discord Advanced"
}
function serviceDropdownWebDev() {
  SelectedDropdownService = "Web Packages"
  serviceDropdownINIT()
  document.getElementById("services-packagetierone-text").innerHTML = "Web Simple"
  document.getElementById("services-packagetiertwo-text").innerHTML = "Web Medium"
  document.getElementById("services-packagetierthree-text").innerHTML = "Web Advanced"
}
function serviceDropdownStrategy() {
  SelectedDropdownService = "Strategy Packages"
  serviceDropdownINIT()
  document.getElementById("services-packagetierone-text").innerHTML = "Strategy Simple"
  document.getElementById("services-packagetiertwo-text").innerHTML = "Strategy Medium"
  document.getElementById("services-packagetierthree-text").innerHTML = "Strategy Advanced"
}
function serviceDropdownSocialMedia() {
  SelectedDropdownService = "Social Media Packages"
  serviceDropdownINIT()
  document.getElementById("services-packagetierone-text").innerHTML = "Social Media Simple"
  document.getElementById("services-packagetiertwo-text").innerHTML = "Social Media Medium"
  document.getElementById("services-packagetierthree-text").innerHTML = "Social Media Advanced"
}

/*general functionality dropdown */

function serviceDropdownINIT() {
  servicesDropdown()
  document.getElementById("selected-package-text").innerHTML = SelectedDropdownService
  console.log("SelectedDropdownService: " + SelectedDropdownService);
  document.getElementById("servicesdropButton").innerHTML = SelectedDropdownService

}

/************************************************
        [  Switch between pages  ]
************************************************/

function switchToHome(){
  closenavmenu()
  currenttab = "Home"
  document.getElementById("footer").style.top = "2800px"
  document.getElementById("Homepage").style.display = "block"
  document.getElementById("servicespage").style.display = "none"
  document.getElementById("pc-view-navbar-home").style.display = "none"
  document.getElementById("phone-view-navbutton-home").style.display = "none"
  document.getElementById("pc-view-navbar-services").style.display = "block"
  document.getElementById("phone-view-navbutton-services").style.display = "block"
}

function switchToServices() {
  closenavmenu()
  currenttab = "Services"
  document.getElementById("footer").style.top = "1450px"
  document.getElementById("pc-view-navbar-home").style.display = "block"
  document.getElementById("phone-view-navbutton-home").style.display = "block"
  document.getElementById("pc-view-navbar-services").style.display = "none"
  document.getElementById("phone-view-navbutton-services").style.display = "none"
  document.getElementById("Homepage").style.display = "none"
  document.getElementById("servicespage").style.display = "flex"

}

/************************************************
            [  Nav Menu  ]
************************************************/

function opennavmenu() {
  document.getElementById("navmenu").style.visibility = "visible"
  document.getElementById("navmenu").style.animation = "navmenuopen 0.4s linear"
  document.getElementById("navmenu").style.right = "0px"
}
function closenavmenu() {
  document.getElementById("navmenu").style.animation = "navmenuclose 0.4s linear"
  document.getElementById("navmenu").style.right = "-200vh"
  setTimeout(() => {
    document.getElementById("navmenu").style.visibility = "hidden"
  }, 400);
}

/************************************************
            [  Minimal code funcs  ]
************************************************/

function expertisesectiontransitiondurations() {
  document.getElementById("expertise-discord").style.transitionDuration = "0.5s"
  document.getElementById("expertise-management").style.transitionDuration = "0.5s"
  document.getElementById("expertise-insights").style.transitionDuration = "0.5s"
  document.getElementById("expertise-webdev").style.transitionDuration = "0.5s"
  document.getElementById("expertise-design").style.transitionDuration = "0.5s"
}
function emptyexpertisehtml() {
  document.getElementById("expertise-discord-text").innerHTML = ""
  document.getElementById("expertise-management-text").innerHTML = ""
  document.getElementById("expertise-insights-text").innerHTML = ""
  document.getElementById("expertise-webdev-text").innerHTML = ""
  document.getElementById("expertise-design-text").innerHTML = ""
}
/************************************************
            [  Checkscreensize  ]
************************************************/

function screensizechecker() {
  if (windowsize.matches) {
    pcviewchange()
  }
  else {
    phoneviewchange()
  }
}
function pcviewchangeexpertise() {
  document.getElementById("expertise-section").style.height = "400px"
  document.getElementById("expertise-discord").style.width = "300px"
  document.getElementById("expertise-insights").style.width = "300px"
  document.getElementById("expertise-webdev").style.width = "500px"
  document.getElementById("expertise-management").style.width = "610px"
  document.getElementById("expertise-design").style.width = "300px"
}

function phoneviewchangeexpertise() {
  document.getElementById("expertise-section").style.height = "500px"
  document.getElementById("expertise-discord").style.width = "300px"
  document.getElementById("expertise-management").style.width = "300px"
  document.getElementById("expertise-insights").style.width = "300px"
  document.getElementById("expertise-webdev").style.width = "300px"
  document.getElementById("expertise-design").style.width = "300px"
}

function pcviewchange() {
  if (currenttab === "Home") {
    document.getElementById("footer").style.top = "1900px"
  }
  else if (currenttab === "Services") {
    document.getElementById("footer").style.top = "1450px"

  }
  document.getElementById("expertise-discord-text").innerHTML = "Discord"
  document.getElementById("expertise-insights-text").innerHTML = "Strategy"
  setTimeout(() => {
    pcviewchangeexpertise()
  }, 2000);
}
function phoneviewchange() {
  if (currenttab === "Home") {
    document.getElementById("footer").style.top = "2800px"
  }
  else if(currenttab === "Services") {
    document.getElementById("footer").style.top = "1500px"
  }
  document.getElementById("expertise-discord-text").innerHTML = "Discord Marketing"
  document.getElementById("expertise-insights-text").innerHTML = "Strategy & Insights"
  setTimeout(() => {
    phoneviewchangeexpertise()
  }, 2000);
}

/************************************************
            [  Expertise section  ]
************************************************/

function expandexpertisephone() {
  document.getElementById("expertise-section").style.height = "500px"
  setTimeout(() => {
    document.getElementById("expertise-hide-content").style.visibility = "visible"

    /* Transition Durations */
    expertisesectiontransitiondurations()
    emptyexpertisehtml()

    /*Expanding */
    setTimeout(() => {
      /* Discord */
      document.getElementById("expertise-discord").style.width = "300px"
      setTimeout(() => {
        setTimeout(() => {
          document.getElementById("expertise-discord-text").innerHTML = "D"
        }, 25);
        setTimeout(() => {
          document.getElementById("expertise-discord-text").innerHTML = "Di"
        }, 50);
        setTimeout(() => {
          document.getElementById("expertise-discord-text").innerHTML = "Dis"
        }, 75);
        setTimeout(() => {
          document.getElementById("expertise-discord-text").innerHTML = "Disc"
        }, 100);
        setTimeout(() => {
          document.getElementById("expertise-discord-text").innerHTML = "Disco"
        }, 125);
        setTimeout(() => {
          document.getElementById("expertise-discord-text").innerHTML = "Discor"
        }, 150);
        setTimeout(() => {
          document.getElementById("expertise-discord-text").innerHTML = "Discord"
        }, 175);
        setTimeout(() => {
          document.getElementById("expertise-discord-text").innerHTML = "Discord M"
        }, 200);
        setTimeout(() => {
          document.getElementById("expertise-discord-text").innerHTML = "Discord Ma"
        }, 225);
        setTimeout(() => {
          document.getElementById("expertise-discord-text").innerHTML = "Discord Mar"
        }, 250);
        setTimeout(() => {
          document.getElementById("expertise-discord-text").innerHTML = "Discord Mark"
        }, 275);
        setTimeout(() => {
          document.getElementById("expertise-discord-text").innerHTML = "Discord Marke"
        }, 300);
        setTimeout(() => {
          document.getElementById("expertise-discord-text").innerHTML = "Discord Market"
        }, 325);
        setTimeout(() => {
          document.getElementById("expertise-discord-text").innerHTML = "Discord Marketi"
        }, 350);
        setTimeout(() => {
          document.getElementById("expertise-discord-text").innerHTML = "Discord Marketin"
        }, 375);
        setTimeout(() => {
          document.getElementById("expertise-discord-text").innerHTML = "Discord Marketing"
        }, 400);
      }, 300);
      /* Management */
      document.getElementById("expertise-management").style.width = "300px"
      setTimeout(() => {
        setTimeout(() => {
          document.getElementById("expertise-management-text").innerHTML = "S"
        }, 25);
        setTimeout(() => {
          document.getElementById("expertise-management-text").innerHTML = "So"
        }, 50);
        setTimeout(() => {
          document.getElementById("expertise-management-text").innerHTML = "Soc"
        }, 75);
        setTimeout(() => {
          document.getElementById("expertise-management-text").innerHTML = "Soci"
        }, 100);
        setTimeout(() => {
          document.getElementById("expertise-management-text").innerHTML = "Socia"
        }, 125);
        setTimeout(() => {
          document.getElementById("expertise-management-text").innerHTML = "Social"
        }, 150);
        setTimeout(() => {
          document.getElementById("expertise-management-text").innerHTML = "Social M"
        }, 175);
        setTimeout(() => {
          document.getElementById("expertise-management-text").innerHTML = "Social Me"
        }, 200);
        setTimeout(() => {
          document.getElementById("expertise-management-text").innerHTML = "Social Med"
        }, 225);
        setTimeout(() => {
          document.getElementById("expertise-management-text").innerHTML = "Social Medi"
        }, 250);
        setTimeout(() => {
          document.getElementById("expertise-management-text").innerHTML = "Social Media"
        }, 275);
        setTimeout(() => {
          document.getElementById("expertise-management-text").innerHTML = "Social Media M"
        }, 300);
        setTimeout(() => {
          document.getElementById("expertise-management-text").innerHTML = "Social Media Ma"
        }, 325);
        setTimeout(() => {
          document.getElementById("expertise-management-text").innerHTML = "Social Media Man"
        }, 350);
        setTimeout(() => {
          document.getElementById("expertise-management-text").innerHTML = "Social Media Mana"
        }, 375);
        setTimeout(() => {
          document.getElementById("expertise-management-text").innerHTML = "Social Media Manag"
        }, 400);
        setTimeout(() => {
          document.getElementById("expertise-management-text").innerHTML = "Social Media Manage"
        }, 425);
        setTimeout(() => {
          document.getElementById("expertise-management-text").innerHTML = "Social Media Managem"
        }, 450);
        setTimeout(() => {
          document.getElementById("expertise-management-text").innerHTML = "Social Media Manageme"
        }, 475);
        setTimeout(() => {
          document.getElementById("expertise-management-text").innerHTML = "Social Media Managemen"
        }, 500);
        setTimeout(() => {
          document.getElementById("expertise-management-text").innerHTML = "Social Media Management"
        }, 525);
      }, 300);
      /*insights*/
      document.getElementById("expertise-insights").style.width = "300px"
      setTimeout(() => {
        setTimeout(() => {
          document.getElementById("expertise-insights-text").innerHTML = "S"
        }, 25);
        setTimeout(() => {
          document.getElementById("expertise-insights-text").innerHTML = "St"
        }, 50);
        setTimeout(() => {
          document.getElementById("expertise-insights-text").innerHTML = "Str"
        }, 75);
        setTimeout(() => {
          document.getElementById("expertise-insights-text").innerHTML = "Stra"
        }, 100);
        setTimeout(() => {
          document.getElementById("expertise-insights-text").innerHTML = "Strat"
        }, 125);
        setTimeout(() => {
          document.getElementById("expertise-insights-text").innerHTML = "Strate"
        }, 150);
        setTimeout(() => {
          document.getElementById("expertise-insights-text").innerHTML = "Strateg"
        }, 175);
        setTimeout(() => {
          document.getElementById("expertise-insights-text").innerHTML = "Strategy"
        }, 200);
        setTimeout(() => {
          document.getElementById("expertise-insights-text").innerHTML = "Strategy &"
        }, 225);
        setTimeout(() => {
          document.getElementById("expertise-insights-text").innerHTML = "Strategy & I"
        }, 250);
        setTimeout(() => {
          document.getElementById("expertise-insights-text").innerHTML = "Strategy & In"
        }, 275);
        setTimeout(() => {
          document.getElementById("expertise-insights-text").innerHTML = "Strategy & Ins"
        }, 300);
        setTimeout(() => {
          document.getElementById("expertise-insights-text").innerHTML = "Strategy & Insi"
        }, 325);
        setTimeout(() => {
          document.getElementById("expertise-insights-text").innerHTML = "Strategy & Insig"
        }, 350);
        setTimeout(() => {
          document.getElementById("expertise-insights-text").innerHTML = "Strategy & Insigh"
        }, 375);
        setTimeout(() => {
          document.getElementById("expertise-insights-text").innerHTML = "Strategy & Insights"
        }, 400);
      }, 300);
      /*webdev*/
      document.getElementById("expertise-webdev").style.width = "300px"
      setTimeout(() => {
        setTimeout(() => {
          document.getElementById("expertise-webdev-text").innerHTML = "W"
        }, 25);
        setTimeout(() => {
          document.getElementById("expertise-webdev-text").innerHTML = "We"
        }, 50);
        setTimeout(() => {
          document.getElementById("expertise-webdev-text").innerHTML = "Web"
        }, 75);
        setTimeout(() => {
          document.getElementById("expertise-webdev-text").innerHTML = "Web D"
        }, 100);
        setTimeout(() => {
          document.getElementById("expertise-webdev-text").innerHTML = "Web De"
        }, 125);
        setTimeout(() => {
          document.getElementById("expertise-webdev-text").innerHTML = "Web Dev"
        }, 150);
        setTimeout(() => {
          document.getElementById("expertise-webdev-text").innerHTML = "Web Deve"
        }, 175);
        setTimeout(() => {
          document.getElementById("expertise-webdev-text").innerHTML = "Web Devel"
        }, 200);
        setTimeout(() => {
          document.getElementById("expertise-webdev-text").innerHTML = "Web Develo"
        }, 225);
        setTimeout(() => {
          document.getElementById("expertise-webdev-text").innerHTML = "Web Develop"
        }, 250);
        setTimeout(() => {
          document.getElementById("expertise-webdev-text").innerHTML = "Web Developm"
        }, 275);
        setTimeout(() => {
          document.getElementById("expertise-webdev-text").innerHTML = "Web Developme"
        }, 300);
        setTimeout(() => {
          document.getElementById("expertise-webdev-text").innerHTML = "Web Developmen"
        }, 325);
        setTimeout(() => {
          document.getElementById("expertise-webdev-text").innerHTML = "Web Development"
        }, 350);
      }, 300);
      /*design*/
      document.getElementById("expertise-design").style.width = "300px"
      setTimeout(() => {
        setTimeout(() => {
          document.getElementById("expertise-design-text").innerHTML = "D"
        }, 25);
        setTimeout(() => {
          document.getElementById("expertise-design-text").innerHTML = "De"
        }, 50);
        setTimeout(() => {
          document.getElementById("expertise-design-text").innerHTML = "Des"
        }, 75);
        setTimeout(() => {
          document.getElementById("expertise-design-text").innerHTML = "Desi"
        }, 100);
        setTimeout(() => {
          document.getElementById("expertise-design-text").innerHTML = "Desig"
        }, 125);
        setTimeout(() => {
          document.getElementById("expertise-design-text").innerHTML = "Design"
        }, 150);
      }, 300);
    }, 25);
  }, 500);
}

function expandexpertisepc() {
  document.getElementById("expertise-section").style.height = "400px"
  setTimeout(() => {
    document.getElementById("expertise-hide-content").style.visibility = "visible"

    /* Transition Durations */
    expertisesectiontransitiondurations()
    emptyexpertisehtml()
    setTimeout(() => {
      /*design*/
      document.getElementById("expertise-design").style.width = "300px"
      setTimeout(() => {
        setTimeout(() => {
          document.getElementById("expertise-design-text").innerHTML = "D"
        }, 25);
        setTimeout(() => {
          document.getElementById("expertise-design-text").innerHTML = "De"
        }, 50);
        setTimeout(() => {
          document.getElementById("expertise-design-text").innerHTML = "Des"
        }, 75);
        setTimeout(() => {
          document.getElementById("expertise-design-text").innerHTML = "Desi"
        }, 100);
        setTimeout(() => {
          document.getElementById("expertise-design-text").innerHTML = "Desig"
        }, 125);
        setTimeout(() => {
          document.getElementById("expertise-design-text").innerHTML = "Design"
        }, 150);
      }, 300);
      document.getElementById("expertise-discord").style.width = "300px"
      setTimeout(() => {
        setTimeout(() => {
          document.getElementById("expertise-discord-text").innerHTML = "D"
        }, 25);
        setTimeout(() => {
          document.getElementById("expertise-discord-text").innerHTML = "Di"
        }, 50);
        setTimeout(() => {
          document.getElementById("expertise-discord-text").innerHTML = "Dis"
        }, 75);
        setTimeout(() => {
          document.getElementById("expertise-discord-text").innerHTML = "Disc"
        }, 100);
        setTimeout(() => {
          document.getElementById("expertise-discord-text").innerHTML = "Disco"
        }, 125);
        setTimeout(() => {
          document.getElementById("expertise-discord-text").innerHTML = "Discor"
        }, 150);
        setTimeout(() => {
          document.getElementById("expertise-discord-text").innerHTML = "Discord"
        }, 175);
      }, 300);
      document.getElementById("expertise-insights").style.width = "300px"
      setTimeout(() => {
        setTimeout(() => {
          document.getElementById("expertise-insights-text").innerHTML = "S"
        }, 25);
        setTimeout(() => {
          document.getElementById("expertise-insights-text").innerHTML = "St"
        }, 50);
        setTimeout(() => {
          document.getElementById("expertise-insights-text").innerHTML = "Str"
        }, 75);
        setTimeout(() => {
          document.getElementById("expertise-insights-text").innerHTML = "Stra"
        }, 100);
        setTimeout(() => {
          document.getElementById("expertise-insights-text").innerHTML = "Strat"
        }, 125);
        setTimeout(() => {
          document.getElementById("expertise-insights-text").innerHTML = "Strate"
        }, 150);
        setTimeout(() => {
          document.getElementById("expertise-insights-text").innerHTML = "Strateg"
        }, 175);
        setTimeout(() => {
          document.getElementById("expertise-insights-text").innerHTML = "Strategy"
        }, 200);
      }, 300);
      document.getElementById("expertise-webdev").style.width = "500px"
      setTimeout(() => {
        setTimeout(() => {
          document.getElementById("expertise-webdev-text").innerHTML = "W"
        }, 25);
        setTimeout(() => {
          document.getElementById("expertise-webdev-text").innerHTML = "We"
        }, 50);
        setTimeout(() => {
          document.getElementById("expertise-webdev-text").innerHTML = "Web"
        }, 75);
        setTimeout(() => {
          document.getElementById("expertise-webdev-text").innerHTML = "Web D"
        }, 100);
        setTimeout(() => {
          document.getElementById("expertise-webdev-text").innerHTML = "Web De"
        }, 125);
        setTimeout(() => {
          document.getElementById("expertise-webdev-text").innerHTML = "Web Dev"
        }, 150);
        setTimeout(() => {
          document.getElementById("expertise-webdev-text").innerHTML = "Web Deve"
        }, 175);
        setTimeout(() => {
          document.getElementById("expertise-webdev-text").innerHTML = "Web Devel"
        }, 200);
        setTimeout(() => {
          document.getElementById("expertise-webdev-text").innerHTML = "Web Develo"
        }, 225);
        setTimeout(() => {
          document.getElementById("expertise-webdev-text").innerHTML = "Web Develop"
        }, 250);
        setTimeout(() => {
          document.getElementById("expertise-webdev-text").innerHTML = "Web Developm"
        }, 275);
        setTimeout(() => {
          document.getElementById("expertise-webdev-text").innerHTML = "Web Developme"
        }, 300);
        setTimeout(() => {
          document.getElementById("expertise-webdev-text").innerHTML = "Web Developmen"
        }, 325);
        setTimeout(() => {
          document.getElementById("expertise-webdev-text").innerHTML = "Web Development"
        }, 350);
      }, 300);
      document.getElementById("expertise-management").style.width = "610px"
      setTimeout(() => {
        setTimeout(() => {
          document.getElementById("expertise-management-text").innerHTML = "S"
        }, 25);
        setTimeout(() => {
          document.getElementById("expertise-management-text").innerHTML = "So"
        }, 50);
        setTimeout(() => {
          document.getElementById("expertise-management-text").innerHTML = "Soc"
        }, 75);
        setTimeout(() => {
          document.getElementById("expertise-management-text").innerHTML = "Soci"
        }, 100);
        setTimeout(() => {
          document.getElementById("expertise-management-text").innerHTML = "Socia"
        }, 125);
        setTimeout(() => {
          document.getElementById("expertise-management-text").innerHTML = "Social"
        }, 150);
        setTimeout(() => {
          document.getElementById("expertise-management-text").innerHTML = "Social M"
        }, 175);
        setTimeout(() => {
          document.getElementById("expertise-management-text").innerHTML = "Social Me"
        }, 200);
        setTimeout(() => {
          document.getElementById("expertise-management-text").innerHTML = "Social Med"
        }, 225);
        setTimeout(() => {
          document.getElementById("expertise-management-text").innerHTML = "Social Medi"
        }, 250);
        setTimeout(() => {
          document.getElementById("expertise-management-text").innerHTML = "Social Media"
        }, 275);
        setTimeout(() => {
          document.getElementById("expertise-management-text").innerHTML = "Social Media M"
        }, 300);
        setTimeout(() => {
          document.getElementById("expertise-management-text").innerHTML = "Social Media Ma"
        }, 325);
        setTimeout(() => {
          document.getElementById("expertise-management-text").innerHTML = "Social Media Man"
        }, 350);
        setTimeout(() => {
          document.getElementById("expertise-management-text").innerHTML = "Social Media Mana"
        }, 375);
        setTimeout(() => {
          document.getElementById("expertise-management-text").innerHTML = "Social Media Manag"
        }, 400);
        setTimeout(() => {
          document.getElementById("expertise-management-text").innerHTML = "Social Media Manage"
        }, 425);
        setTimeout(() => {
          document.getElementById("expertise-management-text").innerHTML = "Social Media Managem"
        }, 450);
        setTimeout(() => {
          document.getElementById("expertise-management-text").innerHTML = "Social Media Manageme"
        }, 475);
        setTimeout(() => {
          document.getElementById("expertise-management-text").innerHTML = "Social Media Managemen"
        }, 500);
        setTimeout(() => {
          document.getElementById("expertise-management-text").innerHTML = "Social Media Management"
        }, 525);
      }, 300);
    }, 25);

  }, 500);

}


/************************************************
    [  Expertise section: media queries  ]
************************************************/

var windowsize = window.matchMedia("(min-width:700px)")
function expertisemediaqueries() {
  if (windowsize.matches) {
    expandexpertisepc()
  }
  else {
    expandexpertisephone()
  }
  setInterval(() => {
    screensizechecker()
  }, 5000);

}
console.log("bughunter joe has approved this script")