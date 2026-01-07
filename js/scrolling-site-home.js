// =========while scrolling the site the content comes from bottom and any other direction js begins here==============
// home page
// featured items 
const observercartoon = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const imggg = document.querySelector('.carousel-track');
observercartoon.observe(imggg);

// natural and self body care
const observeselfandbodycare = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const bodycareimg = document.querySelector('.natural-care');
observeselfandbodycare.observe(bodycareimg);

// online store 5th section in home page begins
const observeonlinestore = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const onlinestorebodycare = document.querySelector('.online-storee');
observeonlinestore.observe(onlinestorebodycare);

// alignitem centre online store
const observeleafstore = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const leafonlinestore = document.querySelector('.align-item-cntre-online-store');
observeleafstore.observe(leafonlinestore);

// online store 5th section in home page ends

// gift and sets section 6th begins here
// heading
const observeheading = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const giftheading = document.querySelector('.heading-gift-and-sets');
observeheading.observe(giftheading);

// paragraph
const observeparagraph = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const giftparagraph = document.querySelector('.paragraph-gifts');
observeparagraph.observe(giftparagraph);

// button
const observebutton = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const buttongifts = document.querySelector('.read-btn');
observebutton.observe(buttongifts);

// gift and sets section 6th ends here

// premium skincare section 7th section ENDS  here

const observepremiumskincare = new IntersectionObserver((entries) => {// main section 
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const preiumskincare = document.querySelector('.premium-skincare');
observepremiumskincare.observe(preiumskincare);

// align centre
const observealigncentrepremium = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const centrepremium = document.querySelector('.align-centre');
observealigncentrepremium.observe(centrepremium);


// premium skincare section 7th section ENDS here

// newsletter for news section 8th begins here
// heading
const observenewsletter = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const newsletters = document.querySelectorAll('.newsltr.heading');
newsletters.forEach(news => observenewsletter.observe(news));

//paragraph
const observeparanews = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const paranewsletter = document.querySelectorAll('.signup.and.news ');
paranewsletter.forEach(letter => observeparanews.observe(letter));

// email address
const observeemail = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const emailadrs = document.querySelectorAll('.border-input.span');
emailadrs.forEach(emailll => observeemail.observe(emailll));


// newsletter for  news section 8th ends here


// footer in home js begins from here
const observefooter = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const futr = document.querySelectorAll('.footer-content');
futr.forEach(footercntnt => observeemail.observe(footercntnt));

// copyright 
const observecopyright = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const copyright = document.querySelectorAll('.copyright');
copyright.forEach(copyrytt => observecopyright.observe(copyrytt));

// footer in home js ends here

// ==============================================//
// ================TEAM MEMBERS PAGE==================//

// TEAM MEMBERS LIST WITH IMAGES JS 