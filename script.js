// Отключение кэша при разработке
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    const links = document.querySelectorAll('link[rel="stylesheet"]');
    links.forEach(link => {
        link.href = link.href.split('?')[0] + '?v=' + Date.now();
    });
    
    const scripts = document.querySelectorAll('script[src]');
    scripts.forEach(script => {
        if (!script.src.includes('googleapis') && !script.src.includes('fontawesome')) {
            script.src = script.src.split('?')[0] + '?v=' + Date.now();
        }
    });
}

// ===== CONFIGURATION =====
const CONFIG = {
    particles: {
        count: 50,
        color: 'rgba(197, 164, 126, 0.6)',
        speed: 2
    }
};

// ===== TRANSLATIONS =====
const TRANSLATIONS = {
    en: {
        // Navigation
        nav_about: "About",
        nav_expertise: "Expertise", 
        nav_experience: "Experience",
        nav_contact: "Contact",
        
        // Hero Section
        hero_badge: "International Legal Expert",
        hero_name: "Valdem'ar",
        hero_surname: "Arno", 
        hero_subtitle: "Cross-Border Legal Solutions",
        hero_description: "Specializing in Irish, EU, and International Law with proven expertise in complex cross-border legal matters, corporate governance, and international negotiations.",
        hero_contact: "Schedule Consultation",
        hero_about: "Explore Profile",
        
        // Stats
        stat_clients: "Clients Served",
        stat_age: "Years Old", 
        stat_cases: "Cases Handled",
        
        // About Section
        about_title: "Professional Profile",
        about_subtitle: "25 Years | International Legal Expert",
        about_name: "Valdem'ar Arno",
        about_text1: "As a dynamic international lawyer at 25, I bring fresh perspective combined with deep expertise in Irish and European Union law. My practice focuses on delivering innovative legal solutions for clients navigating complex cross-border challenges.",
        about_text2: "Fluent in multiple languages and well-versed in various legal systems, I provide comprehensive counsel that bridges cultural and jurisdictional gaps, ensuring seamless legal representation across international boundaries.",
        
        // Qualifications
        qualification1_title: "Legal Education",
        qualification1_text: "Trinity College Dublin, International Law",
        qualification2_title: "Certifications", 
        qualification2_text: "EU Law Specialist | International Arbitration",
        
        // Skills
        skills_international: "International Law",
        skills_eu: "EU Legislation",
        skills_corporate: "Corporate Law",
        skills_negotiation: "International Negotiation",
        
        // Expertise Section
        expertise_title: "Legal Expertise",
        expertise_subtitle: "Specialized Practice Areas",
        expertise1_title: "International Business Law",
        expertise1_desc: "Cross-border transactions, international contracts, and global business expansion strategies.",
        expertise2_title: "Corporate Governance", 
        expertise2_desc: "Company formation, corporate structuring, and regulatory compliance in Ireland and EU.",
        expertise3_title: "Immigration Law",
        expertise3_desc: "Work permits, business immigration, and compliance for international professionals and companies.",
        
        // Features
        feature1: "Cross-Border M&A",
        feature2: "International Contracts",
        feature3: "Global Compliance",
        feature4: "Company Formation",
        feature5: "Corporate Compliance", 
        feature6: "Board Advisory",
        feature7: "Work Permits",
        feature8: "Business Immigration",
        feature9: "Compliance",
        
        // Contact Section
        contact_title: "Get In Touch",
        contact_subtitle: "Schedule Your Consultation", 
        contact_phone: "Phone",
        contact_telegram: "Telegram",
        contact_email: "Email",
        contact_location: "Location",
        
        // Form
        form_name: "Your Full Name",
        form_email: "Your Email Address",
        form_service: "Service Needed",
        form_message: "Your Message",
        form_button: "Send Message",
        
        // Services
        service1: "International Business Law",
        service2: "Corporate Governance",
        service3: "Immigration Law", 
        service4: "Other Legal Matter",
        
        // Footer
        footer_text: "International Lawyer specializing in Irish and EU Law",
        footer_copyright: "© 2025 Valdem'ar Arno. All rights reserved.",
        
        // Scroll
        scroll_text: "Scroll to Explore"
    },
    
    ru: {
        // Navigation
        nav_about: "Обо мне",
        nav_expertise: "Экспертиза",
        nav_experience: "Опыт", 
        nav_contact: "Контакты",
        
        // Hero Section
        hero_badge: "Международный Юридический Эксперт",
        hero_name: "Вальдемар",
        hero_surname: "Арно",
        hero_subtitle: "Трансграничные Юридические Решения", 
        hero_description: "Специализируюсь на ирландском, европейском и международном праве с подтвержденным опытом в сложных трансграничных юридических вопросах, корпоративном управлении и международных переговорах.",
        hero_contact: "Запланировать Консультацию",
        hero_about: "Изучить Профиль",
        
        // Stats
        stat_clients: "Обслужено Клиентов",
        stat_age: "Лет",
        stat_cases: "Рассмотрено Дел",
        
        // About Section
        about_title: "Профессиональный Профиль",
        about_subtitle: "25 Лет | Международный Юридический Эксперт",
        about_name: "Вальдемар Арно",
        about_text1: "Как динамичный международный юрист в 25 лет, я сочетаю свежий взгляд с глубокими знаниями ирландского и европейского права. Моя практика сосредоточена на предоставлении инновационных юридических решений для клиентов, сталкивающихся со сложными трансграничными вызовами.",
        about_text2: "Свободно владея несколькими языками и хорошо разбираясь в различных правовых системах, я предоставляю комплексные консультации, которые преодолевают культурные и юрисдикционные барьеры, обеспечивая бесшовное юридическое представительство на международной арене.",
        
        // Qualifications
        qualification1_title: "Юридическое Образование",
        qualification1_text: "Тринити Колледж Дублин, Международное Право",
        qualification2_title: "Сертификаты",
        qualification2_text: "Специалист по Праву ЕС | Международный Арбитраж",
        
        // Skills
        skills_international: "Международное Право",
        skills_eu: "Законодательство ЕС", 
        skills_corporate: "Корпоративное Право",
        skills_negotiation: "Международные Переговоры",
        
        // Expertise Section
        expertise_title: "Юридическая Экспертиза",
        expertise_subtitle: "Специализированные Области Практики",
        expertise1_title: "Международное Бизнес-Право",
        expertise1_desc: "Трансграничные сделки, международные контракты и стратегии глобальной экспансии бизнеса.",
        expertise2_title: "Корпоративное Управление",
        expertise2_desc: "Регистрация компаний, корпоративная структуризация и нормативное соответствие в Ирландии и ЕС.",
        expertise3_title: "Иммиграционное Право",
        expertise3_desc: "Рабочие визы, бизнес-иммиграция и соответствие требованиям для международных специалистов и компаний.",
        
        // Features
        feature1: "Трансграничные M&A",
        feature2: "Международные Контракты",
        feature3: "Глобальное Соответствие",
        feature4: "Регистрация Компаний",
        feature5: "Корпоративное Соответствие",
        feature6: "Консультации Правления", 
        feature7: "Рабочие Визы",
        feature8: "Бизнес-Иммиграция",
        feature9: "Соответствие",
        
        // Contact Section
        contact_title: "Свяжитесь Со Мной",
        contact_subtitle: "Запланируйте Вашу Консультацию",
        contact_phone: "Телефон",
        contact_telegram: "Телеграм",
        contact_email: "Email",
        contact_location: "Местоположение",
        
        // Form
        form_name: "Ваше Полное Имя",
        form_email: "Ваш Email Адрес",
        form_service: "Необходимая Услуга",
        form_message: "Ваше Сообщение",
        form_button: "Отправить Сообщение",
        
        // Services
        service1: "Международное Бизнес-Право",
        service2: "Корпоративное Управление",
        service3: "Иммиграционное Право",
        service4: "Другая Юридическая Проблема",
        
        // Footer
        footer_text: "Международный юрист, специализирующийся на ирландском и европейском праве",
        footer_copyright: "© 2025 Вальдемар Арно. Все права защищены.",
        
        // Scroll
        scroll_text: "Прокрутите для Исследования"
    },
    
    ua: {
        // Navigation
        nav_about: "Про мене",
        nav_expertise: "Експертиза", 
        nav_experience: "Досвід",
        nav_contact: "Контакти",
        
        // Hero Section
        hero_badge: "Міжнародний Юридичний Експерт",
        hero_name: "Вальдемар",
        hero_surname: "Арно",
        hero_subtitle: "Транскордонні Юридичні Рішення",
        hero_description: "Спеціалізуюсь на ірландському, європейському та міжнародному праві з підтвердженим досвідом у складних транскордонних юридичних питаннях, корпоративному управлінні та міжнародних переговорах.",
        hero_contact: "Запланувати Консультацію",
        hero_about: "Дослідити Профіль",
        
        // Stats
        stat_clients: "Обслужено Клієнтів",
        stat_age: "Років",
        stat_cases: "Розглянуто Справ",
        
        // About Section
        about_title: "Професійний Профіль",
        about_subtitle: "25 Років | Міжнародний Юридичний Експерт",
        about_name: "Вальдемар Арно",
        about_text1: "Як динамічний міжнародний юрист у 25 років, я поєдную свіжий погляд з глибокими знаннями ірландського та європейського права. Моя практика зосереджена на наданні інноваційних юридичних рішень для клієнтів, які стикаються зі складними транскордонними викликами.",
        about_text2: "Вільно володіючи кількома мовами та добре орієнтуючись у різних правових системах, я надаю комплексні консультації, які подолають культурні та юрисдикційні бар'єри, забезпечуючи безперервне юридичне представництво на міжнародній арені.",
        
        // Qualifications
        qualification1_title: "Юридична Освіта",
        qualification1_text: "Трініті Коледж Дублін, Міжнародне Право",
        qualification2_title: "Сертифікати",
        qualification2_text: "Спеціаліст з Права ЄС | Міжнародний Арбітраж",
        
        // Skills
        skills_international: "Міжнародне Право",
        skills_eu: "Законодавство ЄС",
        skills_corporate: "Корпоративне Право",
        skills_negotiation: "Міжнародні Переговори",
        
        // Expertise Section
        expertise_title: "Юридична Експертиза",
        expertise_subtitle: "Спеціалізовані Галузі Практики",
        expertise1_title: "Міжнародне Бізнес-Право",
        expertise1_desc: "Транскордонні угоди, міжнародні контракти та стратегії глобальної експансії бізнесу.",
        expertise2_title: "Корпоративне Управління",
        expertise2_desc: "Реєстрація компаній, корпоративна структуризація та нормативна відповідність в Ірландії та ЄС.",
        expertise3_title: "Імміграційне Право",
        expertise3_desc: "Робочі візи, бізнес-імміграція та відповідність вимогам для міжнародних фахівців та компаній.",
        
        // Features
        feature1: "Транскордонні M&A",
        feature2: "Міжнародні Контракти",
        feature3: "Глобальна Відповідність",
        feature4: "Реєстрація Компаній",
        feature5: "Корпоративна Відповідність",
        feature6: "Консультації Правління",
        feature7: "Робочі Візи",
        feature8: "Бізнес-Імміграція",
        feature9: "Відповідність",
        
        // Contact Section
        contact_title: "Зв'яжіться Зі Мною",
        contact_subtitle: "Заплануйте Вашу Консультацію",
        contact_phone: "Телефон",
        contact_telegram: "Телеграм",
        contact_email: "Email",
        contact_location: "Місцезнаходження",
        
        // Form
        form_name: "Ваше Повне Ім'я",
        form_email: "Ваша Email Адреса",
        form_service: "Потрібна Послуга",
        form_message: "Ваше Повідомлення",
        form_button: "Надіслати Повідомлення",
        
        // Services
        service1: "Міжнародне Бізнес-Право",
        service2: "Корпоративне Управління",
        service3: "Імміграційне Право",
        service4: "Інша Юридична Проблема",
        
        // Footer
        footer_text: "Міжнародний юрист, що спеціалізується на ірландському та європейському праві",
        footer_copyright: "© 2025 Вальдемар Арно. Всі права захищені.",
        
        // Scroll
        scroll_text: "Прокрутіть для Дослідження"
    },
    
    ga: {
        // Navigation
        nav_about: "Maidir Liom",
        nav_expertise: "Saineolas",
        nav_experience: "Taithí",
        nav_contact: "Teagmháil",
        
        // Hero Section
        hero_badge: "Saineolaí Dlí Idirnáisiúnta",
        hero_name: "Valdem'ar",
        hero_surname: "Arno",
        hero_subtitle: "Réitigh Dlí Thar Teorainn",
        hero_description: "Ag speisialú i ndlí na hÉireann, an AE agus dlí idirnáisiúnta le saineolas cruthaithe i gcúrsaí dlí casta thar teorainn, rialachas corparáideach, agus idirbhearta idirnáisiúnta.",
        hero_contact: "Comhairliúchán a Scéidealú",
        hero_about: "Proifíl a Fhéachaint",
        
        // Stats
        stat_clients: "Cliant Seirbheáilte",
        stat_age: "Bliain d'Aois",
        stat_cases: "Cás Láimhseáilte",
        
        // About Section
        about_title: "Profíle Gairmiúil",
        about_subtitle: "25 Bliain d'Aois | Saineolaí Dlí Idirnáisiúnta",
        about_name: "Valdem'ar Arno",
        about_text1: "Mar dhlíodóir idirnáisiúnta dinimiciúil ag 25 bliain d'aois, tugaim peirspictíocht úr le saineolas domhain i ndlí na hÉireann agus an Aontais Eorpaigh. Díríonn mo chleachtas ar réitigh dlí nuálacha a sholáthar do chliaint a bhfuil dúshláin thar teorainn casta acu.",
        about_text2: "Líofa i roinnt teangacha agus eolach ar chórais dlí éagsúla, soláthraím comhairle chuimsitheach a dhíbríonn bearnaí cultúrtha agus dlínse, ag cinntiú go bhfuil ionadaíocht dlí gan seam ar fud na dteorann idirnáisiúnta.",
        
        // Qualifications
        qualification1_title: "Oideachas Dlí",
        qualification1_text: "Coláiste na Tríonóide, Baile Átha Cliath, Dlí Idirnáisiúnta",
        qualification2_title: "Cáilíochtaí",
        qualification2_text: "Saineolaí Dlí an AE | Eadrána Idirnáisiúnta",
        
        // Skills
        skills_international: "Dlí Idirnáisiúnta",
        skills_eu: "Reachtaíocht an AE",
        skills_corporate: "Dlí Corparáideach",
        skills_negotiation: "Idirbhearta Idirnáisiúnta",
        
        // Expertise Section
        expertise_title: "Saineolas Dlí",
        expertise_subtitle: "Réimsí Speisialta Cleachtais",
        expertise1_title: "Dlí Gnó Idirnáisiúnta",
        expertise1_desc: "Idirbhearta thar teorainn, conarthaí idirnáisiúnta, agus straitéisí leathnú domhanda gnó.",
        expertise2_title: "Rialachas Corparáideach",
        expertise2_desc: "Bunú cuideachta, struchtúr corparáideach, agus comhlíonadh rialála in Éirinn agus san AE.",
        expertise3_title: "Dlí Inimirce",
        expertise3_desc: "Ceadanna oibre, inimirc ghnó, agus comhlíonadh do shaineolaithe idirnáisiúnta agus cuideachtaí.",
        
        // Features
        feature1: "M&A Thar Teorainn",
        feature2: "Conarthaí Idirnáisiúnta",
        feature3: "Comhlíonadh Domhanda",
        feature4: "Bunú Cuideachta",
        feature5: "Comhlíonadh Corparáideach",
        feature6: "Comhairleoireacht Bord",
        feature7: "Ceadanna Oibre",
        feature8: "Inimirc Ghnó",
        feature9: "Comhlíonadh",
        
        // Contact Section
        contact_title: "Déan Teagmháil Liom",
        contact_subtitle: "Do Chomhairliúchán a Scéidealú",
        contact_phone: "Fón",
        contact_telegram: "Teileagram",
        contact_email: "Ríomhphost",
        contact_location: "Suíomh",
        
        // Form
        form_name: "Do Iomlán Ainm",
        form_email: "Do Sheoladh Ríomhphoist",
        form_service: "Seirbhís ag Teastáil",
        form_message: "Do Theachtaireacht",
        form_button: "Teachtaireacht a Sheoladh",
        
        // Services
        service1: "Dlí Gnó Idirnáisiúnta",
        service2: "Rialachas Corparáideach",
        service3: "Dlí Inimirce",
        service4: "Cúrsa Dlí Eile",
        
        // Footer
        footer_text: "Dlíodóir Idirnáisiúnta ag speisialú i ndlí na hÉireann agus an AE",
        footer_copyright: "© 2025 Valdem'ar Arno. Gach ceart ar cosaint.",
        
        // Scroll
        scroll_text: "Scrollaigh chun Fiosrúcháin"
    }
};

// ===== CORE FUNCTIONALITY =====
class IrishLawWebsite {
    constructor() {
        this.currentLang = 'en';
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupParticles();
        this.setupAnimations();
        this.setupLanguage();
        this.setupScrollEffects();
    }

    // ===== PARTICLE SYSTEM =====
    setupParticles() {
        const canvas = document.getElementById('particlesCanvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let particles = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 3 + 1;
                this.speedX = Math.random() * 2 - 1;
                this.speedY = Math.random() * 2 - 1;
                this.opacity = Math.random() * 0.6 + 0.2;
                this.wobble = Math.random() * 2;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Wobble effect
                this.x += Math.sin(Date.now() * 0.001 + this.wobble) * 0.5;
                this.y += Math.cos(Date.now() * 0.001 + this.wobble) * 0.5;

                // Bounce off edges
                if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
                if (this.y > canvas.height || this.y < 0) this.speedY *= -1;

                // Fade in/out
                this.opacity += (Math.random() - 0.5) * 0.02;
                this.opacity = Math.max(0.1, Math.min(0.8, this.opacity));
            }

            draw() {
                ctx.fillStyle = `rgba(197, 164, 126, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const initParticles = () => {
            particles = [];
            for (let i = 0; i < CONFIG.particles.count; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            requestAnimationFrame(animate);
        };

        resizeCanvas();
        initParticles();
        animate();

        window.addEventListener('resize', () => {
            resizeCanvas();
            initParticles();
        });
    }

    // ===== LANGUAGE SYSTEM =====
    setupLanguage() {
        const savedLang = localStorage.getItem('selectedLanguage') || 'en';
        this.changeLanguage(savedLang);
    }

    changeLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('selectedLanguage', lang);
        
        this.applyTranslations(lang);
        this.updateLanguageSelector(lang);
    }

    applyTranslations(lang) {
        const elements = document.querySelectorAll('[data-key]');
        
        elements.forEach(element => {
            const key = element.getAttribute('data-key');
            if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
                const translation = TRANSLATIONS[lang][key];
                
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else if (element.tagName === 'SELECT') {
                    // Handle select options
                    const options = element.querySelectorAll('option[data-key]');
                    options.forEach(option => {
                        const optionKey = option.getAttribute('data-key');
                        if (TRANSLATIONS[lang][optionKey]) {
                            option.textContent = TRANSLATIONS[lang][optionKey];
                        }
                    });
                } else {
                    element.textContent = translation;
                }
            }
        });
    }

    updateLanguageSelector(lang) {
        const langSwitch = document.getElementById('languageSwitch');
        if (langSwitch) {
            langSwitch.value = lang;
        }
    }

    // ===== ANIMATIONS =====
    setupAnimations() {
        // Animate numbers
        this.animateNumbers();
        
        // Animate skill bars
        this.animateSkills();
        
        // Setup intersection observer for scroll animations
        this.setupIntersectionObserver();
    }

    animateNumbers() {
        const counters = document.querySelectorAll('.stat-number');
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            
            const updateCounter = () => {
                current += step;
                if (current < target) {
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target + '+';
                }
            };
            
            // Start animation when element is in viewport
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        updateCounter();
                        observer.unobserve(entry.target);
                    }
                });
            });
            
            observer.observe(counter);
        });
    }

    animateSkills() {
        const skillBars = document.querySelectorAll('.skill-progress');
        
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        bar.style.width = width + '%';
                        observer.unobserve(entry.target);
                    }
                });
            });
            
            observer.observe(bar);
        });
    }

    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, {
            threshold: 0.1
        });

        // Observe all sections and cards
        document.querySelectorAll('section, .expertise-card, .service-card').forEach(el => {
            observer.observe(el);
        });
    }

    // ===== SCROLL EFFECTS =====
    setupScrollEffects() {
        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // ===== CURSOR TRAIL =====
    setupCursorTrail() {
        const trail = document.getElementById('cursorTrail');
        if (!trail) return;

        let mouseX = 0, mouseY = 0;
        let trailX = 0, trailY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        const animateTrail = () => {
            trailX += (mouseX - trailX) * 0.1;
            trailY += (mouseY - trailY) * 0.1;
            
            trail.style.left = trailX + 'px';
            trail.style.top = trailY + 'px';
            trail.style.opacity = '1';
            
            requestAnimationFrame(animateTrail);
        };

        animateTrail();
    }

    // ===== EVENT LISTENERS =====
    setupEventListeners() {
        // Language selection on index page
        document.querySelectorAll('.lang-card').forEach(card => {
            card.addEventListener('click', () => {
                const lang = card.getAttribute('data-lang');
                this.startPageTransition(() => {
                    localStorage.setItem('selectedLanguage', lang);
                    window.location.href = 'main.html';
                });
            });
        });

        // Language switcher on main page
        const langSwitch = document.getElementById('languageSwitch');
        if (langSwitch) {
            langSwitch.addEventListener('change', (e) => {
                this.changeLanguage(e.target.value);
            });
        }

        // Mobile menu
        const hamburger = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobileMenu');
        
        if (hamburger && mobileMenu) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                mobileMenu.classList.toggle('active');
            });
        }

        // Contact form
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmit(contactForm);
            });
        }

        // Setup cursor trail
        this.setupCursorTrail();
    }

    // ===== PAGE TRANSITIONS =====
    startPageTransition(callback) {
        const transition = document.getElementById('pageTransition');
        if (transition) {
            transition.style.opacity = '1';
            transition.style.pointerEvents = 'all';
            
            setTimeout(() => {
                if (callback) callback();
            }, 800);
        } else if (callback) {
            callback();
        }
    }

    // ===== FORM HANDLING =====
    handleFormSubmit(form) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', data);
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        form.reset();
    }
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    new IrishLawWebsite();
});

// ===== UTILITY FUNCTIONS =====
// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}