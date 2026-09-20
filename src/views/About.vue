<template>
    <div class="about-page">
        <nav class="navbar">
            <div class="navbar-inner">
                <a href="#home" class="logo">{{ profile.shortName }}</a>
                <div class="nav-links">
                    <a v-for="item in navigation" :key="item.id" :href="item.href">
                        {{ item.label }}
                    </a>
                </div>
                <a :href="profile.emailLink" class="nav-contact">Let's Talk</a>
            </div>
        </nav>

        <section id="home" class="section hero-section">
            <div class="hero-content">
                <div class="hero-left">
                    <div class="availability">
                        <span class="availability-dot"></span>
                        {{ profile.availability }}
                    </div>
                    <p class="eyebrow">{{ hero.eyebrow }}</p>
                    <h1>
                        {{ profile.firstName }}
                        <span>{{ profile.lastName }}</span>
                    </h1>
                    <p class="hero-description">{{ hero.description }}</p>
                    <div class="hero-actions">
                        <a href="#about" class="pink-button">{{ hero.primaryButton }}</a>
                        <a :href="profile.emailLink" class="text-button">
                            {{ hero.secondaryButton }} <span>↗</span>
                        </a>
                    </div>
                </div>

                <div class="hero-right">
                    <div class="profile-image-wrapper">
                        <img src="@/assets/images/image-cinnamon.jpg" :alt="profile.name" class="profile-image">
                        <div class="image-sticker">{{ hero.sticker }}</div>
                    </div>
                </div>
            </div>
        </section>

        <section id="about" class="section about-section">
            <div class="section-container">
                <div class="section-label">{{ sections.about.number }}</div>
                <div class="section-main">
                    <p class="eyebrow">{{ sections.about.eyebrow }}</p>
                    <h2>
                        {{ sections.about.title }}
                        <span>{{ sections.about.highlight }}</span>
                    </h2>
                    <div class="about-grid">
                        <div class="about-description">
                            <p v-for="paragraph in about.paragraphs" :key="paragraph">
                                {{ paragraph }}
                            </p>
                        </div>
                        <div class="about-facts">
                            <div v-for="fact in facts" :key="fact.label" class="fact">
                                <span>{{ fact.label }}</span>
                                <strong>{{ fact.value }}</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="skills" class="section skills-section">
            <div class="section-container">
                <div class="section-label">{{ sections.skills.number }}</div>
                <div class="section-main">
                    <p class="eyebrow">{{ sections.skills.eyebrow }}</p>
                    <h2>
                        {{ sections.skills.title }}
                        <span>{{ sections.skills.highlight }}</span>
                    </h2>
                    <div class="skills-grid">
                        <div
                            v-for="(skill, index) in skills"
                            :key="skill.name"
                            class="skill-card"
                            @click="openSkill(skill)"
                        >
                            <div class="skill-top">
                                <span class="skill-number">{{ String(index + 1).padStart(2, '0') }}</span>
                                <span class="skill-arrow">↗</span>
                            </div>
                            <div>
                                <div class="skill-icon">{{ skill.icon }}</div>
                                <h3>{{ skill.name }}</h3>
                                <p>{{ skill.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="experience" class="section experience-section">
            <div class="section-container">
                <div class="section-label">{{ sections.experience.number }}</div>
                <div class="section-main">
                    <p class="eyebrow">{{ sections.experience.eyebrow }}</p>
                    <h2>
                        {{ sections.experience.title }}
                        <span>{{ sections.experience.highlight }}</span>
                    </h2>
                    <div class="experience-list">
                        <div v-for="experience in experiences" :key="experience.id" class="experience-item">
                            <div class="experience-year">{{ experience.year }}</div>
                            <div class="experience-content">
                                <div>
                                    <h3>{{ experience.position }}</h3>
                                    <p class="company">{{ experience.company }}</p>
                                </div>
                                <p class="experience-description">{{ experience.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="contact" class="section contact-section">
            <div class="contact-inner">
                <p class="eyebrow">{{ sections.contact.eyebrow }}</p>
                <h2>
                    {{ sections.contact.title }}
                    <span>{{ sections.contact.highlight }}</span>
                </h2>
                <p class="contact-description">{{ sections.contact.description }}</p>
                <a :href="profile.emailLink" class="contact-email">
                    {{ profile.email }} <span>↗</span>
                </a>
            </div>

            <footer>
                <span>© {{ currentYear }} {{ profile.name }}</span>
                <div class="social-links">
                    <a v-for="social in socials" :key="social.name" :href="social.url" target="_blank">
                        {{ social.name }}
                    </a>
                </div>
            </footer>
        </section>

        <Base-Popup
            v-if="showPopup"
            :visible="showPopup"
            :title="popup.title"
            :message="popup.message"
            @close-popup="closePopup"
        />
    </div>
</template>

<script>
import BasePopup from "@/components/Base-Popup.vue";
export default {
    name: "About",
    components: {
        BasePopup
    },
    data() {
        return {
            profile: {
                name: "Syafini Ameesha",
                shortName: "SA.",
                firstName: "Syafini",
                lastName: "Ameesha.",
                email: "hello@example.com",
                emailLink: "mailto:hello@example.com",
                availability: "Available for opportunities"
            },
            navigation: [
                { id: 1, label: "About", href: "#about" },
                { id: 2, label: "Skills", href: "#skills" },
                { id: 3, label: "Experience", href: "#experience" },
                { id: 4, label: "Contact", href: "#contact" }
            ],
            hero: {
                eyebrow: "SOFTWARE DEVELOPER",
                description: "I build digital experiences, applications and systems that turn ideas into something people can actually use.",
                primaryButton: "Get to know me",
                secondaryButton: "Let's talk",
                sticker: "HELLO! ♡"
            },
            sections: {
                about: {
                    number: "01",
                    eyebrow: "A LITTLE ABOUT ME",
                    title: "I like making",
                    highlight: "things happen."
                },
                skills: {
                    number: "02",
                    eyebrow: "WHAT I WORK WITH",
                    title: "My toolbox",
                    highlight: "for building."
                },
                experience: {
                    number: "03",
                    eyebrow: "WHAT I'VE DONE",
                    title: "A bit of my",
                    highlight: "journey."
                },
                contact: {
                    eyebrow: "HAVE A PROJECT?",
                    title: "Let's make",
                    highlight: "something cool.",
                    description: "Whether you have a project in mind, an opportunity, or simply want to say hello — my inbox is always open."
                }
            },
            about: {
                paragraphs: [
                    "I'm a software developer who enjoys turning ideas into useful, well-designed digital products.",
                    "I enjoy working across the frontend and backend, understanding how different pieces of a system connect together and making the final experience feel simple."
                ]
            },
            facts: [
                { label: "BASED IN", value: "Malaysia" },
                { label: "SPECIALITY", value: "Software Development" },
                { label: "CURRENTLY", value: "Building things" }
            ],
            skills: [
                { name: "Vue.js", icon: "V", description: "Building interactive and responsive interfaces." },
                { name: "JavaScript", icon: "JS", description: "Creating dynamic application experiences." },
                { name: "Go", icon: "GO", description: "Developing backend services and APIs." },
                { name: "MySQL", icon: "DB", description: "Designing and working with application data." },
                { name: "SCSS", icon: "S", description: "Creating clean and maintainable interfaces." },
                { name: "Git", icon: "G", description: "Version control and collaborative development." },
                { name: "AWS", icon: "AWS", description: "Deploying and managing cloud infrastructure." },
                { name: "REST API", icon: "API", description: "Connecting frontend applications with services." }
            ],
            experiences: [
                {
                    id: 1,
                    year: "2026",
                    position: "Software Developer",
                    company: "Current",
                    description: "Developing web applications, backend services and complete business workflows."
                },
                {
                    id: 2,
                    year: "2025",
                    position: "Web Development",
                    company: "Previous Experience",
                    description: "Worked on frontend interfaces, APIs, databases and application functionality."
                },
                {
                    id: 3,
                    year: "2024",
                    position: "Getting Started",
                    company: "Development Journey",
                    description: "Learning, experimenting and building applications across different technologies."
                }
            ],
            socials: [
                { name: "GitHub", url: "#" },
                { name: "LinkedIn", url: "#" },
                { name: "Instagram", url: "#" }
            ],
            showPopup: false,
            popup: {
                title: "",
                message: ""
            }
        };
    },
    computed: {
        currentYear() {
            return new Date().getFullYear();
        }
    },
    methods: {
        openSkill(skill) {
            this.popup.title = skill.name;
            this.popup.message = skill.description;
            this.showPopup = true;
        },
        closePopup() {
            this.showPopup = false;
        }
    }
};
</script>

<style lang="scss" scoped>
.about-page {
    --pink: #ff1493;
    --pink-light: #fff0f8;
    --pink-soft: #ffe1f1;
    --black: #181318;
    --text: #4c454b;
    --muted: #8d858b;
    --surface: #ffffff;
    --surface-soft: #faf8f9;
    --border: #eee8ec;
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    scroll-behavior: smooth;
    scroll-snap-type: y mandatory;
    background: var(--surface);
    color: var(--text);
    font-family: "Poppins", "Inter", Arial, sans-serif;
}

.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    background: rgba(255, 255, 255, 0.92);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border);
}

.navbar-inner {
    max-width: 1200px;
    margin: auto;
    padding: 20px 35px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    color: var(--pink);
    font-size: 22px;
    font-weight: 800;
    text-decoration: none;
}

.nav-links {
    display: flex;
    gap: 35px;
}

.nav-links a {
    color: var(--text);
    font-size: 12px;
    text-decoration: none;
    transition: 0.2s;
}

.nav-links a:hover {
    color: var(--pink);
}

.nav-contact {
    padding: 10px 18px;
    color: white;
    background: var(--pink);
    border-radius: 30px;
    font-size: 11px;
    text-decoration: none;
}

.section {
    position: relative;
    min-height: 100vh;
    padding: 120px 35px 80px;
    box-sizing: border-box;
    scroll-snap-align: start;
    display: flex;
    align-items: center;
}

.hero-section {
    background: var(--surface);
}

.hero-content {
    width: 100%;
    max-width: 1200px;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 430px;
    gap: 100px;
    align-items: center;
}

.availability {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 30px;
    padding: 8px 14px;
    color: var(--pink);
    background: var(--pink-light);
    border-radius: 30px;
    font-size: 10px;
    font-weight: 600;
}

.availability-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--pink);
}

.eyebrow {
    margin-bottom: 18px;
    color: var(--pink);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 2px;
}

.hero-left h1 {
    margin: 0 0 30px;
    color: var(--black);
    font-size: clamp(65px, 9vw, 115px);
    line-height: 0.87;
    letter-spacing: -7px;
    font-weight: 700;
}

.hero-left h1 span {
    display: block;
    color: var(--pink);
}

.hero-description {
    max-width: 580px;
    color: var(--muted);
    font-size: 16px;
    line-height: 1.8;
}

.hero-actions {
    display: flex;
    align-items: center;
    gap: 25px;
    margin-top: 35px;
}

.pink-button {
    padding: 15px 25px;
    color: white;
    background: var(--pink);
    border-radius: 30px;
    font-size: 12px;
    text-decoration: none;
    transition: 0.2s;
}

.pink-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 25px rgba(255, 20, 147, 0.22);
}

.text-button {
    color: var(--black);
    font-size: 12px;
    text-decoration: none;
}

.text-button span {
    color: var(--pink);
}

.hero-right {
    position: relative;
    display: flex;
    justify-content: center;
}

.profile-image-wrapper {
    position: relative;
    width: 360px;
    height: 430px;
    padding: 12px;
    background: var(--pink-soft);
    transform: rotate(3deg);
}

.profile-image {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    transform: rotate(-3deg);
}

.image-sticker {
    position: absolute;
    bottom: -20px;
    left: -35px;
    width: 85px;
    height: 85px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: white;
    background: var(--pink);
    font-size: 11px;
    font-weight: 700;
    transform: rotate(-10deg);
}

.section-container {
    width: 100%;
    max-width: 1200px;
    margin: auto;
    display: grid;
    grid-template-columns: 70px 1fr;
    gap: 60px;
}

.section-label {
    color: var(--pink);
    font-size: 12px;
    font-weight: 700;
}

.section-main {
    max-width: 950px;
}

.section-main h2 {
    margin: 0 0 50px;
    color: var(--black);
    font-size: clamp(45px, 6vw, 75px);
    line-height: 0.95;
    letter-spacing: -4px;
    font-weight: 600;
}

.section-main h2 span {
    color: var(--pink);
}

.about-section {
    background: var(--surface-soft);
}

.about-grid {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 80px;
}

.about-description p {
    max-width: 650px;
    margin: 0 0 20px;
    color: var(--text);
    font-size: 16px;
    line-height: 1.9;
}

.about-facts {
    border-top: 1px solid var(--border);
}

.fact {
    padding: 18px 0;
    display: flex;
    flex-direction: column;
    gap: 5px;
    border-bottom: 1px solid var(--border);
}

.fact span {
    color: var(--muted);
    font-size: 9px;
    letter-spacing: 1.5px;
}

.fact strong {
    color: var(--black);
    font-size: 13px;
    font-weight: 500;
}

.skills-section {
    background: white;
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
}

.skill-card {
    min-height: 180px;
    padding: 22px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid var(--border);
    border-radius: 5px;
    cursor: pointer;
    transition: 0.25s;
}

.skill-card:hover {
    transform: translateY(-7px);
    border-color: var(--pink);
    background: var(--pink-light);
}

.skill-top {
    display: flex;
    justify-content: space-between;
}

.skill-number {
    color: var(--pink);
    font-size: 10px;
}

.skill-arrow {
    color: var(--muted);
}

.skill-icon {
    width: 35px;
    height: 35px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background: var(--pink);
    border-radius: 50%;
    font-size: 9px;
    font-weight: 700;
}

.skill-card h3 {
    margin: 0 0 7px;
    color: var(--black);
    font-size: 16px;
    font-weight: 600;
}

.skill-card p {
    margin: 0;
    color: var(--muted);
    font-size: 10px;
    line-height: 1.6;
}

.experience-section {
    background: var(--surface-soft);
}

.experience-list {
    border-top: 1px solid var(--border);
}

.experience-item {
    display: grid;
    grid-template-columns: 100px 1fr;
    gap: 30px;
    padding: 30px 0;
    border-bottom: 1px solid var(--border);
}

.experience-year {
    color: var(--pink);
    font-size: 12px;
    font-weight: 600;
}

.experience-content {
    display: grid;
    grid-template-columns: 250px 1fr;
    gap: 40px;
}

.experience-content h3 {
    margin: 0 0 5px;
    color: var(--black);
    font-size: 19px;
    font-weight: 600;
}

.company {
    margin: 0;
    color: var(--pink);
    font-size: 11px;
}

.experience-description {
    max-width: 500px;
    margin: 0;
    color: var(--muted);
    font-size: 13px;
    line-height: 1.7;
}

.contact-section {
    min-height: 100vh;
    color: white;
    background: var(--pink);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}

.contact-inner {
    width: 100%;
    max-width: 1200px;
    margin: auto;
}

.contact-section .eyebrow {
    color: rgba(255, 255, 255, 0.7);
}

.contact-section h2 {
    max-width: 900px;
    margin: 0 0 30px;
    font-size: clamp(55px, 8vw, 105px);
    line-height: 0.9;
    letter-spacing: -6px;
    font-weight: 600;
}

.contact-section h2 span {
    display: block;
    color: var(--black);
}

.contact-description {
    max-width: 550px;
    margin-bottom: 35px;
    color: rgba(255, 255, 255, 0.75);
    font-size: 14px;
    line-height: 1.8;
}

.contact-email {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 15px 22px;
    color: var(--pink);
    background: white;
    border-radius: 30px;
    font-size: 13px;
    font-weight: 600;
    text-decoration: none;
}

.contact-section footer {
    position: absolute;
    left: 35px;
    right: 35px;
    bottom: 25px;
    display: flex;
    justify-content: space-between;
    color: rgba(255, 255, 255, 0.6);
    font-size: 10px;
}

.social-links {
    display: flex;
    gap: 20px;
}

.social-links a {
    color: white;
    text-decoration: none;
}

@media (max-width: 900px) {
    .nav-links {
        display: none;
    }

    .hero-content {
        grid-template-columns: 1fr;
        gap: 60px;
    }

    .hero-right {
        justify-content: flex-start;
    }

    .profile-image-wrapper {
        width: 280px;
        height: 340px;
    }

    .section-container {
        grid-template-columns: 1fr;
        gap: 15px;
    }

    .skills-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .about-grid {
        grid-template-columns: 1fr;
        gap: 40px;
    }

    .experience-content {
        grid-template-columns: 1fr;
        gap: 10px;
    }
}

@media (max-width: 600px) {
    .section {
        min-height: auto;
        padding: 110px 20px 70px;
    }

    .hero-section {
        min-height: 100vh;
    }

    .navbar-inner {
        padding: 18px 20px;
    }

    .nav-contact {
        display: none;
    }

    .hero-left h1 {
        font-size: 65px;
        letter-spacing: -4px;
    }

    .skills-grid {
        grid-template-columns: 1fr;
    }

    .contact-section h2 {
        font-size: 58px;
        letter-spacing: -4px;
    }

    .contact-section footer {
        left: 20px;
        right: 20px;
    }
}
</style>