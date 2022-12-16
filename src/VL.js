import React from 'react'


/************************************************
            [  Window  ]
************************************************/

window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
  });


/************************************************
            [  Navigation bar: variables  ]
************************************************/


/************************************************
            [  Navigation bar: switcher  ]
************************************************/


export default function VL() {
  return (
    <>
    <div id="vlwrapper">
        <div id = "navbarwrap">
            <div id = "logowrap">
                <p id = "visuallylinkedp" ><span id="vlpdarkblue">Visually</span><span id="vlporange"> Linked</span></p>
            </div>
            <div id = "servicecontact">
            <ul>
                <li id="service-tab" className='navitems' onClick={servicestab}>Services</li>
                <div class="triangleservices"></div>
                <li id="contact-tab" className='navitems'>Contact us</li>
            </ul>
            </div>
        </div>
        <div id="homepage">
            <div id = "heroimage">

            </div>
            <div id = "expertise">
                <div class="container">
                    <div class="item">
                        <h2>Web Development</h2>
                    </div>
                    <div class="item">
                        <h2>Discord</h2>
                    </div>
                    <div class="item">
                        <h2>Management</h2>
                    </div>
                    <div class="item">
                        <h2>Strategy & Insights</h2>
                    </div>
                    <div class="item">
                        <h2>Design</h2>
                    </div>
                    <div class="item">
                        <h2>SEO and google ads</h2>
                    </div>
                </div>
            </div>
            <div id = "packages">

            </div>
        </div>
    </div>
    </>
  )
}

/* Tab funcs */
let  currenttabvar = "Home"

function servicestab(){
    currenttabvar = "Services"
    currenttab()
}
function removetab(){
    document.getElementById("home-tab").classList.remove("focusednavitem")
    document.getElementById("service-tab").classList.remove("focusednavitem")
    document.getElementById("about-tab").classList.remove("focusednavitem")
    document.getElementById("contact-tab").classList.remove("focusednavitem")
}
function addtab(){
    document.getElementById("home-tab").classList.add("navitems")
    document.getElementById("service-tab").classList.add("navitems")
    document.getElementById("about-tab").classList.add("navitems")
    document.getElementById("contact-tab").classList.add("navitems")
}

function currenttab() {
    if (currenttabvar === "Home") {
        removetab()
        addtab()
        document.getElementById("home-tab").classList.remove("navitems")
        document.getElementById("home-tab").classList.add("focusednavitem")
    }
    else if (currenttabvar === "Services") {
        removetab()
        addtab()
        document.getElementById("service-tab").classList.remove("navitems")
        document.getElementById("service-tab").classList.add("focusednavitem")
    }

}
