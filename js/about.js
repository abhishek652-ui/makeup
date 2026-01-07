// testimonials section 2nd begins here 
const observetestimonials = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const testimonialsection = document.querySelectorAll('.all.content-flex.here');
testimonialsection.forEach(testimonials => observetestimonials.observe(testimonials));
// testimonial section 2nd ends here

// newsletter section for 3rd section begins here
const observenewsltrrr = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const newsslettterr = document.querySelectorAll('.align-centre.headings.in.newsletter.and.signupp');
newsslettterr.forEach(letternewsss => observetestimonials.observe(letternewsss));
// newsletter section 3rd ends here


// gift and bag section 4th begins here
const observegiftssbag = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const gifttsbagss = document.querySelectorAll('.gift.ones.love');
gifttsbagss.forEach(baggift => observegiftssbag.observe(baggift));

// heading
const observeheadinggiftbags = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const headinggiftbags = document.querySelectorAll('h2.quientin.font.family.used');
headinggiftbags.forEach(headingbagss => observeheadinggiftbags.observe(headingbagss));

// gift and bag section 4th ends here


//premium skincare section 5th begins here
const observepremiumskincare = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const premiumskincarecentre = document.querySelectorAll('.align-centre');
premiumskincarecentre.forEach(item => observepremiumskincare.observe(item));

// blogcard one
const observeblogone = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const blogone = document.querySelectorAll('.blog-card.card-one');
blogone.forEach(blogggonne => observeblogone.observe(blogggonne));

// blog 2nd
const observeblogtwo = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const blogtwo = document.querySelectorAll('.blog-card.card-two');
blogtwo.forEach(bloggsecond => observeblogtwo.observe(bloggsecond));

// blog 3rd
const observeblogthird = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const blogthird = document.querySelectorAll('.blog-card.card-third');
blogthird.forEach(bloggthirrdd => observeblogthird.observe(bloggthirrdd));

// premium skincare section 5th ends here