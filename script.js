// ==================== //
// FAQ Accordion
// ==================== //
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
});

// ==================== //
// Smooth Scroll
// ==================== //
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== //
// UTM & Facebook Pixel Tracking
// ==================== //
(function() {
    function getParam(name) {
        return new URLSearchParams(window.location.search).get(name);
    }

    function setCookie(name, value, days) {
        const d = new Date();
        d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = name + "=" + encodeURIComponent(value) +
            "; expires=" + d.toUTCString() + "; path=/; SameSite=Lax";
    }

    function getCookie(name) {
        const m = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        return m ? decodeURIComponent(m[2]) : null;
    }

    // Capture fbclid and UTMs
    const fbclid = getParam('fbclid');
    if (fbclid) {
        setCookie('fbclid', fbclid, 90);
        const ts = Math.floor(Date.now() / 1000);
        setCookie('_fbc', 'fb.1.' + ts + '.' + fbclid, 90);
    }

    const utms = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
    utms.forEach(function(u) {
        const val = getParam(u);
        if (val) setCookie(u, val, 30);
    });

    // Decorate checkout links
    function decorateLink(el) {
        if (!el || !el.href) return;

        try {
            const url = new URL(el.href, window.location.origin);

            // UTMs
            utms.forEach(function(u) {
                const v = getCookie(u);
                if (v) url.searchParams.set(u, v);
            });

            // Meta params
            const fbp = getCookie('_fbp');
            const fbc = getCookie('_fbc');
            const fbclidStored = getCookie('fbclid');

            if (fbp) url.searchParams.set('_fbp', fbp);
            if (fbc) url.searchParams.set('_fbc', fbc);
            if (fbclidStored) url.searchParams.set('fbclid', fbclidStored);

            el.href = url.toString();
        } catch (e) {
            console.error('Error decorating link:', e);
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('a[data-checkout="hotmart"], #btn-checkout')
            .forEach(decorateLink);
    });
})();

// ==================== //
// Scroll Animations
// ==================== //
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.learn-card, .problem-card, .why-block');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add CSS for animation
const style = document.createElement('style');
style.textContent = `
    .fade-in-visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);
