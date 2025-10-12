
// Contact information links
function info1(url) {
    const elements = document.querySelectorAll(".info1");
    elements.forEach(e => {
        e.addEventListener("click", () => {
            window.open(url, "_blank", "noopener");
        });
    });
}
info1("https://wa.me/573247787527?text=Hola,%20quiero%20trabajar%20contigo");

function info3(url) {
    const elements = document.querySelectorAll(".info3");
    elements.forEach(e => {
        e.addEventListener("click", () => {
            window.open(url, "_blank", "noopener");
        });
    });
}
info3("mailto:maicolzuluagaarias591@gmail.com");

function GitHubLink(url) {
    const elements = document.querySelectorAll(".info2");
    elements.forEach(e => {
        e.addEventListener("click", () => {
            window.open(url, "_blank", "noopener");
        });
    });
}
GitHubLink("https://github.com/MaicolZ1551");

function LinkedInLink(url) {
    const elements = document.querySelectorAll(".info4");
    elements.forEach(e => {
        e.addEventListener("click", () => {
            window.open(url, "_blank", "noopener");
        });
    });
}
LinkedInLink("https://www.linkedin.com/in/maicol-zuluaga-arias-b1661836a/");

// Project links
function IMCCalculatorLink(url) {
    const elements = document.querySelectorAll(".IMCCalculatorLink");
    elements.forEach(e => {
        e.addEventListener("click", (event) => {
            event.stopPropagation();
            window.open(url, "_blank", "noopener");
        });
    });
}
IMCCalculatorLink("https://github.com/MaicolZ1551/MaicolZ1551-IMC-Calculator-swift");

function project1(url) {
    const elements = document.querySelectorAll(".project1");
    elements.forEach(e => {
        e.addEventListener("click", () => {
            window.open(url, "_blank", "noopener");
        });
    });
}
project1("https://digital-clock741.netlify.app");

function digitalClockGitLink(url) {
    const elements = document.querySelectorAll(".digitalClockGitLink");
    elements.forEach(e => {
        e.addEventListener("click", (event) => {
            event.stopPropagation();
            window.open(url, "_blank", "noopener");
        });
    });
}
digitalClockGitLink("https://github.com/MaicolZ1551/Digital-Clock");

function project2(url) {
    const elements = document.querySelectorAll(".project2");
    elements.forEach(e => {
        e.addEventListener("click", () => {
            window.open(url, "_blank", "noopener");
        });
    });
}
project2("https://redcalculator741.netlify.app");

function digitalCalculatorGitLink(url) {
    const elements = document.querySelectorAll(".digitalCalculatorGitLink");
    elements.forEach(e => {
        e.addEventListener("click", (event) => {
            event.stopPropagation();
            window.open(url, "_blank", "noopener");
        });
    });
}
digitalCalculatorGitLink("https://github.com/MaicolZ1551/Red-Calculator-HTML-CSS-JAVASCRIPT");

function project3(url) {
    const elements = document.querySelectorAll(".project3");
    elements.forEach(e => {
        e.addEventListener("click", () => {
            window.open(url, "_blank", "noopener");
        });
    });
}
project3("https://qrmaker741.netlify.app");

function digitalQRMakerGitLink(url) {
    const elements = document.querySelectorAll(".digitalQRMakerGitLink");
    elements.forEach(e => {
        e.addEventListener("click", (event) => {
            event.stopPropagation();
            window.open(url, "_blank", "noopener");
        });
    });
}
digitalQRMakerGitLink("https://github.com/MaicolZ1551/QR-Maker");

// Enhanced animations and interactions
document.addEventListener('DOMContentLoaded', function() {
    // Add loading animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.project-card, .skill-item, .info-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });


    // Add hover effects to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add typing effect to title
    const title = document.querySelector('h1');
    if (title) {
        const text = title.textContent;
        title.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                title.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        setTimeout(typeWriter, 1000);
    }
});

// Performance optimization
document.addEventListener('DOMContentLoaded', function() {
    // Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
});