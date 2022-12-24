import React from 'react'


/************************************************
            [  On window load scripts  ]
************************************************/

window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
    setTimeout(() => {
      expandexpertisephone()
    }, 1000);
  });




/************************************************
            [  Main  ]
************************************************/


export default function VL() {
  return (
    <>
    <div id="vlwrapper">
        <div id="Homepage">
            <div id="nav-icon-wrap">
                <span></span>
                <span class="navgreen"></span>
                <span></span>
            </div>
            <div id="heroimage-container">
                <h1 id="hero-text">Maximize your <span class="hgreen">reach</span> and <span class="hgreen">impact</span> with our custom solutions</h1>
                <img id = "hero-image" src={require("./bgimg.png")} alt="bgimg"></img>
                <button class = "herobuttons" id = "herobutton-getstarted">Get Started</button>
                <button class = "herobuttons" id = "herobutton-learnmore">Learn More</button>
            </div>
            <div id = "expertise-section">
              <div id = "expertise-hide-content">
                <h1>Our expertise</h1>
                <div id="expertise-icon-wrap">
                  <div id="expertise-discord">
                    <img id="expertise-discord-image" src={require("./discord.png")}alt="discord icon"></img>
                    <h2 id="expertise-discord-text">Discord Marketing</h2>
                  </div>
                  <div id="expertise-management">
                    <img id="expertise-management-image" src={require("./management.png")}alt="discord icon"></img>
                    <h2 id="expertise-management-text">Social Media Management</h2>
                  </div>
                  <div id="expertise-insights">
                    <img id="expertise-insights-image" src={require("./insights.png")}alt="discord icon"></img>
                    <h2 id="expertise-insights-text">Strategy & Insights</h2>
                  </div>
                  <div id="expertise-webdev">
                    <img id="expertise-webdev-image" src={require("./webdev.png")}alt="discord icon"></img>
                    <h2 id="expertise-webdev-text">Web Development</h2>
                  </div>
                  <div id="expertise-design">
                    <img id="expertise-design-image" src={require("./design.png")}alt="discord icon"></img>
                    <h2 id="expertise-design-text">Design</h2>
                  </div> 
                </div>
              </div>     
            </div>
            <div id="below-image-waves">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#02020e" fill-opacity="1" d="M0,0L26.7,48C53.3,96,107,192,160,197.3C213.3,203,267,117,320,117.3C373.3,117,427,203,480,234.7C533.3,267,587,245,640,229.3C693.3,213,747,203,800,213.3C853.3,224,907,256,960,245.3C1013.3,235,1067,181,1120,186.7C1173.3,192,1227,256,1280,288C1333.3,320,1387,320,1413,320L1440,320L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path>
                </svg>
            </div>
        </div>
    </div>
    </>
  )
}



/************************************************
            [  Expertise section  ]
************************************************/

function expandexpertisephone() {
  document.getElementById("expertise-section").style.height = "440px"
  setTimeout(() => {
    document.getElementById("expertise-hide-content").style.visibility = "visible"

    /* Transition Durations */
    document.getElementById("expertise-discord").style.transitionDuration = "0.5s"
    document.getElementById("expertise-management").style.transitionDuration = "0.5s"
    document.getElementById("expertise-insights").style.transitionDuration = "0.5s"
    document.getElementById("expertise-webdev").style.transitionDuration = "0.5s"
    document.getElementById("expertise-design").style.transitionDuration = "0.5s"
    document.getElementById("expertise-discord-text").innerHTML = ""
    document.getElementById("expertise-management-text").innerHTML = ""
    document.getElementById("expertise-insights-text").innerHTML = ""
    document.getElementById("expertise-webdev-text").innerHTML = ""
    document.getElementById("expertise-design-text").innerHTML = ""
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