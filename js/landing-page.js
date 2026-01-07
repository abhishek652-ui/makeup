// 1stttttt SECTION 
// organic container main div in 1st section
document.addEventListener("DOMContentLoaded", () => {
    const observeorganicshop = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    const organicdiv = document.querySelector('.organic-container');
    observeorganicshop.observe(organicdiv);
});

// organic shop heading
document.addEventListener("DOMContentLoaded", () => {
    const observeorganicshopheading = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    const organicheading = document.querySelector('.organic-subtitle');
    observeorganicshopheading.observe(organicheading);
})

// welcome heading
document.addEventListener("DOMContentLoaded", () => {
    const observewelcomeheading = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    const welcomeheading = document.querySelector('.organic-title');
    observewelcomeheading.observe(welcomeheading);
});

// purchase button
document.addEventListener("DOMContentLoaded", () => {
    const observepurchasebutton = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    const purchasebtn = document.querySelector('button.pricing_plan.buttonn.send.information.purchase');
    observepurchasebutton.observe(purchasebtn);
});

// 1stttttt SECTION ENDS


//SCREENSHOTS SECTION 2ND SECTION BEGINS HERE
// 1st ROW OF SCREENSHOTS
document.addEventListener("DOMContentLoaded", () => {
    const observescreenshotsone = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    const screenshotss = document.querySelector('.screenshot_pages');
    observescreenshotsone.observe(screenshotss);
});

//2ND ROW OF SCREENSHOTS 
document.addEventListener("DOMContentLoaded", () => {
    const observescreenshotstwo = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    const screenshots = document.querySelector('.screenshot_pages.second');
    observescreenshotstwo.observe(screenshots);
});

// delightful section 3RD section begins here
document.addEventListener("DOMContentLoaded", () => {
    const observesdeligtf = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    const delighful = document.querySelector('.align-text-centre_delightful.element');
    observesdeligtf.observe(delighful);
});

// order tracking 
document.addEventListener("DOMContentLoaded", () => {
    const observetrackorder = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    const trackorder = document.querySelector('.order-tracking-one');
    observetrackorder.observe(trackorder);
});

// 2nd row order tracking
document.addEventListener("DOMContentLoaded", () => {
    const observeordertrack = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    const ordertracker = document.querySelector('.order-tracking-one.second');
    observeordertrack.observe(ordertracker);
});

// SCREENSHOTS SECTION 3RD SECTION ENDS HERE


// FRESH AND SMOOTH SECTION 4TH BEGINS HERE
document.addEventListener("DOMContentLoaded", () => {
    const observefreshsmooth = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    const freshsmooth = document.querySelector('.align-centre_fresh-smooth');
    observefreshsmooth.observe(freshsmooth);
});

// FRESH AND SMOOTH SECTION 4TH ENDS HERE


// FLEXIBLE HEADER STYLE SECTION 5TH BEGINS HERE
// heading 3 part
document.addEventListener("DOMContentLoaded", () => {
    const observeflexibleheader = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    const headerflexible = document.querySelector('.align-centre_header-flexible');
    observeflexibleheader.observe(headerflexible);
});

// header style screenshot
document.addEventListener("DOMContentLoaded", () => {
    const observeflexibleheaderss = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    const headerflexibless = document.querySelector('.one_row.header-style.ss');
    observeflexibleheaderss.observe(headerflexibless);
});

// header style ss 2nd row
document.addEventListener("DOMContentLoaded", () => {
    const observeflexibleheadersss = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    const headerflexiblessss = document.querySelector('.one_row.header-style.sss');
    observeflexibleheadersss.observe(headerflexiblessss);
});

// FLEXIBLE HEADER STYLE SECTION 5TH ENDS HERE


// ORGANIC SHOP THEME SECTION 6TH BEGINS HERE LASTT!!!!!11
document.addEventListener("DOMContentLoaded", () => {
    const observeorganicthemeshop = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    const themeshop = document.querySelector('.thrive_with.orgainc-shop.theme');
    observeorganicthemeshop.observe(themeshop);
});

// ORGANIC SHOP THEME SECTION 6TH ENDS HERE LASTT!!!!!!