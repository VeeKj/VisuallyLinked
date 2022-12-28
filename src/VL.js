import React from 'react'


/************************************************
            [  On window load scripts  ]
************************************************/

window.addEventListener("load", (event) => {
  console.log("loaded");
  setInterval(() => {
    screensizechecker()
  }, 5000);
  setTimeout(() => {
    expertisemediaqueries()
  }, 1000);
});




/************************************************
            [  Main  ]
************************************************/


export default function VL() {
  return (
    <>
      <div id="vlwrapper">
        <div id="pc-view-navbar">
          <img id="pc-view-logo" src={require("./vl_logo.png")} onClick={switchToHome} alt="vl-logo"></img>
          <ul>
            <li id="pc-view-navbar-home" onClick = {switchToHome}>HOME</li>
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
              <li onClick={switchToServices}>Services</li>
              <li>About us</li>
            </ul>
            <h5>Social Media</h5>
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
                <p>Our Discord marketing packages help you tap into the rapidly growing community on this popular communication platform. With over 100 million active users, Discord is a prime destination for building and engaging with a targeted audience. We'll work with you to create a custom strategy and manage your Discord presence, including server setup and moderation, content creation, and community building. Our team has the expertise to help you effectively promote your brand and build a thriving community on Discord.</p>
                <button className="package-section-card-button">Learn more</button>
              </div>
              <div className="package-section-cards" id="packages-webdev">
                <h3>Web Development</h3>
                <p>Our web development packages help you bring your online vision to life. We'll work with you to design and build a custom website that meets your specific needs and goals. Our team has expertise in a variety of web development technologies and platforms, including HTML, CSS, JavaScript, and popular content management systems like WordPress. Whether you need a simple brochure website or a complex e-commerce platform, we have the skills and experience to make it happen. Let us help you create a website that showcases your brand and drives business success.</p>
                <button className="package-section-card-button">Learn more</button>
              </div>
              <div className="package-section-cards" id="packages-insights">
                <h3>AI Powered Strategy</h3>
                <p>Our AI-powered strategy and insights packages help you gain a deeper understanding of your business and make informed decisions. We'll use advanced artificial intelligence and machine learning techniques to analyze data from a variety of sources, including your website, social media platforms, and customer feedback. This analysis will provide valuable insights into your target audience, market trends, and key performance indicators. We'll work with you to develop a customized strategy based on these insights, helping you optimize your marketing efforts and drive business success.</p>
                <button className="package-section-card-button">Learn more</button>
              </div>
              <div className="package-section-cards" id="packages-socialmedia">
                <h3>Social Media</h3>
                <p>Our social media marketing packages help you effectively reach and engage with your target audience on popular platforms such as Facebook, Instagram, and TikTok. We'll work with you to develop a custom strategy that aligns with your business goals and target audience. Our team has expertise in creating and managing social media campaigns, including content creation, community management, and paid advertising. With our help, you'll be able to build a strong presence on social media and drive meaningful results for your business.</p>
                <button className="package-section-card-button">Learn more</button>
              </div>
            </div>
          </div>
        </div>
        <div id = "servicespage">
          <div id = "service-gui">
            <div id = "service-gui-content-wrapper">
              <div id = "service-gui-dropdown">

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

/************************************************
        [  Switch between pages  ]
************************************************/

function switchToHome(){
  closenavmenu()
  document.getElementById("Homepage").style.display = "block"
  document.getElementById("servicespage").style.display = "none"
  document.getElementById("pc-view-navbar-home").style.display = "none"
  document.getElementById("pc-view-navbar-services").style.display = "block"
}

function switchToServices() {
  closenavmenu()
  document.getElementById("pc-view-navbar-home").style.display = "block"
  document.getElementById("pc-view-navbar-services").style.display = "none"
  document.getElementById("Homepage").style.display = "none"
  document.getElementById("servicespage").style.display = "flex"

}

/************************************************
            [  Nav Menu  ]
************************************************/

function opennavmenu() {
  document.getElementById("navmenu").style.visibility = "visible"
  document.getElementById("navmenu").style.animation = "navmenuopen 0.3s linear"
}
function closenavmenu() {
  document.getElementById("navmenu").style.animation = "navmenuclose 0.3s linear"
  setTimeout(() => {
    document.getElementById("navmenu").style.visibility = "hidden"
  }, 300);
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

function pcviewchange() {
  document.getElementById("expertise-section").style.height = "400px"
  document.getElementById("expertise-discord").style.width = "250px"
  document.getElementById("expertise-insights").style.width = "260px"
  document.getElementById("expertise-webdev").style.width = "440px"
  document.getElementById("expertise-management").style.width = "600px"
  document.getElementById("expertise-design").style.width = "240px"
  document.getElementById("expertise-discord-text").innerHTML = "Discord"
  document.getElementById("expertise-insights-text").innerHTML = "Strategy"
}
function phoneviewchange() {
  document.getElementById("expertise-section").style.height = "440px"
  document.getElementById("expertise-discord").style.width = "240px"
  document.getElementById("expertise-management").style.width = "290px"
  document.getElementById("expertise-insights").style.width = "240px"
  document.getElementById("expertise-webdev").style.width = "240px"
  document.getElementById("expertise-design").style.width = "130px"
  document.getElementById("expertise-discord-text").innerHTML = "Discord Marketing"
  document.getElementById("expertise-insights-text").innerHTML = "Strategy & Insights"
}

/************************************************
            [  Expertise section  ]
************************************************/

function expandexpertisephone() {
  document.getElementById("expertise-section").style.height = "440px"
  setTimeout(() => {
    document.getElementById("expertise-hide-content").style.visibility = "visible"

    /* Transition Durations */
    expertisesectiontransitiondurations()
    emptyexpertisehtml()

    /*Expanding */
    setTimeout(() => {
      /* Discord */
      document.getElementById("expertise-discord").style.width = "240px"
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
      document.getElementById("expertise-management").style.width = "290px"
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
      document.getElementById("expertise-insights").style.width = "240px"
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
          document.getElementById("expertise-insights-text").innerHTML = "Strategy & Insight"
        }, 400);
      }, 300);
      /*webdev*/
      document.getElementById("expertise-webdev").style.width = "240px"
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
      document.getElementById("expertise-design").style.width = "130px"
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
      document.getElementById("expertise-design").style.width = "240px"
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
      document.getElementById("expertise-discord").style.width = "250px"
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
      document.getElementById("expertise-insights").style.width = "260px"
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
      document.getElementById("expertise-webdev").style.width = "440px"
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
      document.getElementById("expertise-management").style.width = "600px"
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
    console.log("pc")
    expandexpertisepc()
  }
  else {
    expandexpertisephone()
  }

}
console.log("endofpage")