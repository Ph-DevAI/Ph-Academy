document.querySelectorAll('.parallax-section').forEach(section=>{
    const url = section.querySelector('.parallax-bg').getAttribute('data-bg');
    section.querySelector('.parallax-bg').style.backgroundImage = `url('${url}')`;
});

function parallaxScroll(){
    document.querySelectorAll('.parallax-section').forEach(section=>{
    const rect = section.getBoundingClientRect();
    const bg = section.querySelector('.parallax-bg');
    if(!bg) return;
    const offset = (rect.top * -0.15);
    bg.style.transform = `translateY(${offset}px) scale(1.05)`;
    });
}
window.addEventListener('scroll', parallaxScroll); parallaxScroll();
// Initialize Swipers
        const heroSwiper = new Swiper('.hero-swiper', {
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            }
        });

        const formationsSwiper = new Swiper('.formations-swiper', {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                1200: {
                    slidesPerView: 3,
                }
            }
        });

        const servicesSwiper = new Swiper('.services-swiper', {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            autoplay: {
                delay: 4500,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                1200: {
                    slidesPerView: 4,
                }
            }
        });

        // Scroll Animation for Sections
        function animateOnScroll() {
            const sections = document.querySelectorAll('.section');
            const windowHeight = window.innerHeight;

            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                if (sectionTop < windowHeight - 100) {
                    section.classList.add('visible');
                }
            });
        }
const tSwiper = new Swiper('.testimonialsSwiper',{slidesPerView:1,spaceBetween:20,loop:true,autoplay:{delay:4500},pagination:{el:'.swiper-pagination',clickable:true}});
        // Debounced scroll function for better performance
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    animateOnScroll();
                    ticking = false;
                });
                ticking = true;
            }
        });

        // Trigger once on load
        window.addEventListener('load', () => {
            animateOnScroll();
            
            // Small delay to ensure everything is loaded
            setTimeout(() => {
                document.querySelectorAll('.section').forEach(section => {
                    if (section.getBoundingClientRect().top < window.innerHeight) {
                        section.classList.add('visible');
                    }
                });
            }, 100);
        });

        // Language Switch Translation System
        const translations = {
            fr: {
                home: 'Accueil',
                formations: 'Formations',
                services: 'Services',
                domains: 'Autres Domaines PH',
                contact: 'Contact',
                discover: 'Découvrir nos formations',
                educationExcellence: 'Éducation Excellence',
                educationExcellenceDesc: 'Découvrez nos formations de qualité supérieure conçues pour vous accompagner vers la réussite académique et professionnelle.',
                modernLearning: 'Apprentissage Moderne',
                modernLearningDesc: 'Méthodes d\'enseignement innovantes combinant technologie et pédagogie traditionnelle pour un apprentissage optimal.',
                successMission: 'Votre Succès, Notre Mission',
                successMissionDesc: 'Des enseignants expérimentés et passionnés vous guident à chaque étape de votre parcours académique.',
                innovationPedagogique: 'Innovation Pédagogique',
                innovationPedagogiqueDesc: 'Des programmes personnalisés qui s\'adaptent à votre rythme et vos objectifs d\'apprentissage.',
                communauteApprentissage: 'Communauté d\'Apprentissage',
                communauteApprentissageDesc: 'Rejoignez une communauté dynamique d\'apprenants motivés et soutenus par des experts.',
                ourFormations: 'Nos Formations',
                ourServices: 'Services Répétitions',
                otherDomains: 'Autres Domaines PH',
                contactUs: 'Contactez-nous',
                fullName: 'Nom complet',
                email: 'Adresse email',
                message: 'Votre message',
                send: 'Envoyer',
                supportUs: 'Nous soutenir',
                prepBrevet: 'Préparation Brevet',
                prepBrevetDesc: 'Programme intensif pour la préparation au brevet des collèges avec suivi personnalisé, exercices pratiques et examens blancs réguliers.',
                terminalExams: 'Terminal & Examens Officiels',
                terminalExamsDesc: 'Cours complets pour les classes de première et terminale, incluant préparation aux examens officiels avec méthodes de travail efficaces.',
                prepConcours: 'Prépa Concours',
                prepConcoursDesc: 'Formation intensive pour les concours d\'entrée aux grandes écoles et établissements prestigieux, avec coaching personnalisé.',
                levels6to2: '6ème à 2nde',
                levels6to2Desc: 'Renforcement scolaire pour les niveaux fondamentaux avec suivi régulier et méthodes d\'apprentissage adaptées.',
                level3Brevet: '3ème + Préparation Brevet',
                level3BrevetDesc: 'Accompagnement spécifique pour la troisième avec préparation intensive au brevet des collèges.',
                level1Terminal: '1ère, Terminale + Examens',
                level1TerminalDesc: 'Soutien scolaire avancé pour les classes terminales avec préparation aux examens officiels.',
                prepVogt: 'Prépa Vogt / Concours',
                prepVogtDesc: 'Formation intensive pour les concours spécifiques avec programme personnalisé selon les besoins.',
                phdevai: 'Ph-DevAI',
                phreseaunet: 'Ph-RéseauNet',
                phecholang: 'Ph-EchoLang',
                phcomman: 'Ph-ComMan',
                phtech: 'Ph-Tech',
                phhealth: 'Ph-Health',
                available: 'Disponible',
                unavailable: 'Indisponible',
                comingSoon: 'Pas encore de site web'
            },
            en: {
                home: 'Home',
                formations: 'Courses',
                services: 'Services',
                domains: 'Other PH Domains',
                contact: 'Contact',
                discover: 'Discover our courses',
                educationExcellence: 'Education Excellence',
                educationExcellenceDesc: 'Discover our premium quality courses designed to guide you towards academic and professional success.',
                modernLearning: 'Modern Learning',
                modernLearningDesc: 'Innovative teaching methods combining technology and traditional pedagogy for optimal learning.',
                successMission: 'Your Success, Our Mission',
                successMissionDesc: 'Experienced and passionate teachers guide you every step of your academic journey.',
                innovationPedagogique: 'Pedagogical Innovation',
                innovationPedagogiqueDesc: 'Personalized programs that adapt to your pace and learning objectives.',
                communauteApprentissage: 'Learning Community',
                communauteApprentissageDesc: 'Join a dynamic community of motivated learners supported by experts.',
                ourFormations: 'Our Courses',
                ourServices: 'Repetition Services',
                otherDomains: 'Other PH Domains',
                contactUs: 'Contact Us',
                fullName: 'Full Name',
                email: 'Email Address',
                message: 'Your Message',
                send: 'Send',
                supportUs: 'Support Us',
                prepBrevet: 'Brevet Preparation',
                prepBrevetDesc: 'Intensive program for brevet des collèges preparation with personalized follow-up, practical exercises, and regular mock exams.',
                terminalExams: 'Terminal & Official Exams',
                terminalExamsDesc: 'Complete courses for first and final years, including official exam preparation with effective study methods.',
                prepConcours: 'Prep Courses',
                prepConcoursDesc: 'Intensive training for entrance exams to prestigious schools and institutions, with personalized coaching.',
                levels6to2: '6th to 2nd Grade',
                levels6to2Desc: 'Academic reinforcement for fundamental levels with regular follow-up and adapted learning methods.',
                level3Brevet: '3rd + Brevet Preparation',
                level3BrevetDesc: 'Specific support for third grade with intensive brevet preparation.',
                level1Terminal: '1st, Final Year + Exams',
                level1TerminalDesc: 'Advanced academic support for final years with official exam preparation.',
                prepVogt: 'Vogt Prep / Competitions',
                prepVogtDesc: 'Intensive training for specific competitions with personalized programs according to needs.',
                phdevai: 'Ph-DevAI',
                phreseaunet: 'Ph-RéseauNet',
                phecholang: 'Ph-EchoLang',
                phcomman: 'Ph-ComMan',
                phtech: 'Ph-Tech',
                phhealth: 'Ph-Health',
                available: 'Available',
                unavailable: 'Unavailable',
                comingSoon: 'No website yet'
            }
        };

        let currentLang = 'fr';

        function updateText() {
            const t = translations[currentLang];
            
            // Update navbar
            document.querySelectorAll('.nav-link')[0].textContent = t.home;
            document.querySelectorAll('.nav-link')[1].textContent = t.formations;
            document.querySelectorAll('.nav-link')[2].textContent = t.services;
            document.querySelectorAll('.nav-link')[3].textContent = t.domains;
            document.querySelectorAll('.nav-link')[4].textContent = t.contact;
            
            // Update hero slides
            const heroSlides = document.querySelectorAll('.hero-content');
            if (heroSlides.length >= 5) {
                heroSlides[0].querySelector('.hero-title').textContent = t.educationExcellence;
                heroSlides[0].querySelector('.hero-subtitle').textContent = t.educationExcellenceDesc;
                
                heroSlides[1].querySelector('.hero-title').textContent = t.modernLearning;
                heroSlides[1].querySelector('.hero-subtitle').textContent = t.modernLearningDesc;
                
                heroSlides[2].querySelector('.hero-title').textContent = t.successMission;
                heroSlides[2].querySelector('.hero-subtitle').textContent = t.successMissionDesc;
                
                heroSlides[3].querySelector('.hero-title').textContent = t.innovationPedagogique;
                heroSlides[3].querySelector('.hero-subtitle').textContent = t.innovationPedagogiqueDesc;
                
                heroSlides[4].querySelector('.hero-title').textContent = t.communauteApprentissage;
                heroSlides[4].querySelector('.hero-subtitle').textContent = t.communauteApprentissageDesc;
            }
            
            // Update hero button text
            document.querySelectorAll('.hero-btn').forEach(btn => {
                btn.textContent = t.discover;
            });
            
            // Update section titles
            document.querySelectorAll('.section-title')[0].textContent = t.ourFormations;
            document.querySelectorAll('.section-title')[1].textContent = t.ourServices;
            document.querySelectorAll('.section-title')[2].textContent = t.otherDomains;
            document.querySelectorAll('.section-title')[3].textContent = t.contactUs;
            
            // Update contact form placeholders
            document.getElementById('name').placeholder = t.fullName;
            document.getElementById('email').placeholder = t.email;
            document.getElementById('message').placeholder = t.message;
            document.querySelector('.form-btn').textContent = t.send;
            
            // Update footer
            document.querySelector('.footer-link').textContent = t.supportUs;
            
            // Update lang button
            langSwitch.textContent = currentLang === 'fr' ? 'EN' : 'FR';
            
            // Update card content
            const cards = document.querySelectorAll('.card');
            if (cards.length >= 3) {
                // Formations cards
                cards[0].querySelector('.card-title').textContent = t.prepBrevet;
                cards[0].querySelector('.card-text').textContent = t.prepBrevetDesc;
                cards[1].querySelector('.card-title').textContent = t.terminalExams;
                cards[1].querySelector('.card-text').textContent = t.terminalExamsDesc;
                cards[2].querySelector('.card-title').textContent = t.prepConcours;
                cards[2].querySelector('.card-text').textContent = t.prepConcoursDesc;
            }
            
            if (cards.length >= 7) {
                // Services cards
                cards[3].querySelector('.card-title').textContent = t.levels6to2;
                cards[3].querySelector('.card-text').textContent = t.levels6to2Desc;
                cards[4].querySelector('.card-title').textContent = t.level3Brevet;
                cards[4].querySelector('.card-text').textContent = t.level3BrevetDesc;
                cards[5].querySelector('.card-title').textContent = t.level1Terminal;
                cards[5].querySelector('.card-text').textContent = t.level1TerminalDesc;
                cards[6].querySelector('.card-title').textContent = t.prepVogt;
                cards[6].querySelector('.card-text').textContent = t.prepVogtDesc;
            }
            
            // Update domain cards
            const domainCards = document.querySelectorAll('.domain-card');
            if (domainCards.length >= 6) {
                domainCards[0].querySelector('.domain-title').textContent = t.phdevai;
                domainCards[0].querySelector('.domain-status').textContent = t.available;
                domainCards[0].querySelector('.domain-status').className = 'domain-status status-available';
                
                domainCards[1].querySelector('.domain-title').textContent = t.phreseaunet;
                domainCards[1].querySelector('.domain-status').textContent = t.unavailable;
                domainCards[1].querySelector('.domain-status').className = 'domain-status status-unavailable';
                
                domainCards[2].querySelector('.domain-title').textContent = t.phecholang;
                domainCards[2].querySelector('.domain-status').textContent = t.available;
                domainCards[2].querySelector('.domain-status').className = 'domain-status status-available';
                
                domainCards[3].querySelector('.domain-title').textContent = t.phcomman;
                domainCards[3].querySelector('.domain-status').textContent = t.comingSoon;
                domainCards[3].querySelector('.domain-status').className = 'domain-status status-coming-soon';
                
                domainCards[4].querySelector('.domain-title').textContent = t.phtech;
                domainCards[4].querySelector('.domain-status').textContent = t.unavailable;
                domainCards[4].querySelector('.domain-status').className = 'domain-status status-unavailable';
                
                domainCards[5].querySelector('.domain-title').textContent = t.phhealth;
                domainCards[5].querySelector('.domain-status').textContent = t.unavailable;
                domainCards[5].querySelector('.domain-status').className = 'domain-status status-unavailable';
            }
        }

        const langSwitch = document.getElementById('langSwitch');
        langSwitch.addEventListener('click', () => {
            currentLang = currentLang === 'fr' ? 'en' : 'fr';
            updateText();
        });

        // Contact form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const successMessage = currentLang === 'fr' 
                ? 'Merci pour votre message! Nous vous répondrons bientôt.' 
                : 'Thank you for your message! We will get back to you soon.';
            alert(successMessage);
            this.reset();
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const target = document.querySelector(targetId);
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
