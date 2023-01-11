import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import router from "./router";
import VueCarousel from "vue-carousel";
import axios from "axios";

Vue.use(VueCarousel);
Vue.use(VueRouter);
Vue.prototype.$http = axios;
Vue.prototype.$loaded = false;

Vue.prototype.$projects = [
  {
    url: "monordo",
    title: "MonOrdo",
    description:
      "Conceptualize, design and implement a health-tech application",
    thumbnail: "project-card.png",
    skills: ["Development", "UX/UI", " Management"],
    tags: ["design", "code"],
    infobox: {
      skills: "Project management, UX/UI Design, UML Design, Vue.js",
      context: "A group project with five friends and tech enthousiasts",
      mission:
        "Designing and building a medical prescription generating and managing application",
      time: "4 weeks",
      links: [
        {
          name: "Project Report",
          link:
            "https://drive.google.com/file/d/1-oesoIgiSCRGo5UQLNWtPMfpxP5qcb1g/view?usp=sharing",
        },
      ],
    },
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget feugiat mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget feugiat mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget feugiat mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget feugiat mauris.",
    pictures: ["album/1.png", "album/2.png", "album/3.png"],
    lesson:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget feugiat mauris.",
  },
  {
    url: "javascriptmas",
    title: "24 Days of Javascriptmas",
    description:
      "Solving problems in Javascript every day unyil Christmas, and filming my solutions explained",
    thumbnail: "project-card.jpeg",
    skills: ["Development"],
    tags: [ "code"],
    infobox: {
      skills:
        "Vanilla JS, synthesize explanations and editing fast-paced videos",
      context:
        "December 2020, Scrumba released a 24 Days of Javascriptmas challenge.",
      mission:
        "Solving the exercices, and editing clear and understandable explanation videos",
      time: "24 Days (and not one more)",
      links: [
        {
          name: "Instagram",
          link: "https://www.instagram.com/lea.buende/channel/",
        },
        {
          name: "Linkedin",
          link:
            "https://www.linkedin.com/posts/l%C3%A9a-buend%C3%A9-65b440174_il-y-a-14-jours-je-me-suis-lanc%C3%A9-un-nouveau-activity-6744175097650663424-W6Au",
        },
      ],
    },
    paragraph:
      "<p class='paragraph'>14 days ago I set myself up to a new challenge: creating an advent calendar of videos solving small problems in JavaScript, explaining my solutions and posting them on Instagram. 👩‍💻</p><br><p> My goal: encouraging anyone to get into programming. The challenge: finding the right words to explain each function, showing my mistakes and most importantly getting across that spending time correcting them is by far the fun part of coding.</p><br><p> The outcome: I receive messages from baby developers ready to start their coding journey every single day 🦾</p>",
    pictures: ["album/1.png", "album/2.png"],
    lesson:
      "Lorem ipsum dolor sit amet, <strong> consectetur adipiscing elit. </strong> Praesent eget feugiat mauris.",
  },
  {
    url: "ladies",
    title: "Ladies of Code",
    description: "Community management for an organization of women in STEM",
    thumbnail: "project-card.png",
    skills: ["UI Design", "Community Management"],
    tags: ["design", "extra"],
    infobox: {
      skills:
        "Managing a Paris-based community of women in STEM",
      context:
        "Ladies of Code got me into coding, and I wanted to give back to the community !",
      mission:
        "Designing planning and posting visuals on Instagram, interact with the members",
      time: "6 months",
      links: [
        {
          name: "Instagram",
          link: "https://www.instagram.com/ladiesofcode.paris",
        },
      ],
    },
    paragraph:
      "<p class='paragraph'>14 days ago I set myself up to a new challenge: creating an advent calendar of videos solving small problems in JavaScript, explaining my solutions and posting them on Instagram. 👩‍💻</p><br><p> My goal: encouraging anyone to get into programming. The challenge: finding the right words to explain each function, showing my mistakes and most importantly getting across that spending time correcting them is by far the fun part of coding.</p><br><p> The outcome: I receive messages from baby developers ready to start their coding journey every single day 🦾</p>",
    pictures: ["album/1.png", "album/2.png", "album/3.png", "album/4.png"],
    lesson:
      "Lorem ipsum dolor sit amet, <strong> consectetur adipiscing elit. </strong> Praesent eget feugiat mauris.",
  },
  {
    url: "euris",
    title: "Euris Group Website",
    description:
      "Designing and developing Euris Group's website and visual identity",
    thumbnail: "project-card.png",
    skills: ["Development","Web Design"],
    tags: [ "code", "design"],
    infobox: {
      skills:
        "Web design, Wordpress integration, SEO analysis, project management",
      context:
        "Euris Group, a finance group speicalized in Islamic banking, is rebranding and launching a series of projects start of 2023. We are working together to develop their online presence, and attract investors and stakeholders.",
      mission:
        "Designing and developing the website, and analyze and better SEO performance",
      time: "1 month",
      links: [
        {
          name: "Website",
          link: "https://www.euris-group.com/",
        }
      ],
    },
    paragraph:
      "<p class='paragraph'>14 days ago I set myself up to a new challenge: creating an advent calendar of videos solving small problems in JavaScript, explaining my solutions and posting them on Instagram. 👩‍💻</p><br><p> My goal: encouraging anyone to get into programming. The challenge: finding the right words to explain each function, showing my mistakes and most importantly getting across that spending time correcting them is by far the fun part of coding.</p><br><p> The outcome: I receive messages from baby developers ready to start their coding journey every single day 🦾</p>",
    pictures: ["album/1.png", "album/2.png", "album/3.png"],
    lesson:
      "Lorem ipsum dolor sit amet, <strong> consectetur adipiscing elit. </strong> Praesent eget feugiat mauris.",
  },
  {
    url: "efrei",
    title: "Efrei 4 good App",
    description:
      "Designing two versions of the Efrei for good App",
    thumbnail: "project-card.png",
    skills: ["Web Design"],
    tags: ["design"],
    infobox: {
      skills:
        "Mobile app design",
      context:
        "Efrei 4 Good is a yearly event highlighting disability innovation, for all students at Efrei Paris. We developed an app for students to organize and track their activities during the day.",
      mission:
        "Designing all views of a mobile application and conceptualize the user journey",
      time: "2 months",
      links: [
        {
          name: "Article",
          link: "https://www.efrei.fr/journee-de-la-technologie-au-service-de-lhumain/#:~:text=Rendez%2Dvous%20le%209%20d%C3%A9cembre,ext%C3%A9rieurs%2C%20lyc%C3%A9ens%20et%20leur%20famille.",
        }
      ],
    },
    paragraph:
      "<p class='paragraph'>14 days ago I set myself up to a new challenge: creating an advent calendar of videos solving small problems in JavaScript, explaining my solutions and posting them on Instagram. 👩‍💻</p><br><p> My goal: encouraging anyone to get into programming. The challenge: finding the right words to explain each function, showing my mistakes and most importantly getting across that spending time correcting them is by far the fun part of coding.</p><br><p> The outcome: I receive messages from baby developers ready to start their coding journey every single day 🦾</p>",
    pictures: ["album/1.png", "album/2.png", "album/3.png"],
    lesson:
      "Lorem ipsum dolor sit amet, <strong> consectetur adipiscing elit. </strong> Praesent eget feugiat mauris.",
  },
  {
    url: "vivatech",
    title: "SmartMove - Code4Good Hackathon",
    description:
      "The future of Urban mobility with Freenow",
    thumbnail: "project-card.png",
    skills: ["Design", "Project management"],
    tags: ["extra"],
    infobox: {
      skills:
        "Solve a real life problem, live pitching, design",
      context:
        "During Vivatech June 2022, FreeNow participated in the Code4Good Hackathon presenting the problem 'Designing the future of urban mobility'",
      mission:
        "Coming up with an innovative solutions to prevent the purchase of a personal car",
      time: "2 weeks",
      links: [
        {
          name: "Article",
          link: "https://www.mobilitesmagazine.com/post/smart-move-gagne-le-defi-freenow",
        }
      ],
    },
    paragraph:
      "<p class='paragraph'>14 days ago I set myself up to a new challenge: creating an advent calendar of videos solving small problems in JavaScript, explaining my solutions and posting them on Instagram. 👩‍💻</p><br><p> My goal: encouraging anyone to get into programming. The challenge: finding the right words to explain each function, showing my mistakes and most importantly getting across that spending time correcting them is by far the fun part of coding.</p><br><p> The outcome: I receive messages from baby developers ready to start their coding journey every single day 🦾</p>",
    pictures: ["album/1.png", "album/2.png", "album/3.png"],
    lesson:
      "Lorem ipsum dolor sit amet, <strong> consectetur adipiscing elit. </strong> Praesent eget feugiat mauris.",
  },
  {
    url: "sepefrei",
    title: "Managing Efrei's Junior-Enterprise",
    description:
      "The future of Urban mobility with Freenow",
    thumbnail: "project-card.png",
    skills: ["Leadership", "Tech project management", "Dev"],
    tags: ["extra", "code"],
    infobox: {
      skills:
        "Managing a team, solving problems, development",
      context:
        "A Junior Enterprise is a student-run organization that provides services to companies. Sepefrei is specialized in tech, developing web and mobile applications, but also providing services in cybersecurity and Cloud infrastructures.",
      mission:
        "Managing a team of 16 collaborators, concieve and follow a business strategy",
      time: "2 years",
      links: [
        {
          name: "Linkedin post",
          link: "https://www.linkedin.com/posts/leabuende_%3F%3F-%3F%3F%3F%3F%3F%3F-%3F%3F-%3F%3F%3F-il-y-activity-6933052669162864640-jydw?utm_source=share&utm_medium=member_desktop",
        },
        {
          name: "Code vs. No code Podcast",
          link: "https://youtu.be/y-ocMWOtzqk?list=PLDIh2gS6Ac4GrMzvE02OVn8YS2y034qvm"
        }
      ],
    },
    paragraph:
      "<p class='paragraph'>14 days ago I set myself up to a new challenge: creating an advent calendar of videos solving small problems in JavaScript, explaining my solutions and posting them on Instagram. 👩‍💻</p><br><p> My goal: encouraging anyone to get into programming. The challenge: finding the right words to explain each function, showing my mistakes and most importantly getting across that spending time correcting them is by far the fun part of coding.</p><br><p> The outcome: I receive messages from baby developers ready to start their coding journey every single day 🦾</p>",
    pictures: [],
    lesson:
      "Lorem ipsum dolor sit amet, <strong> consectetur adipiscing elit. </strong> Praesent eget feugiat mauris.",
  },
  {
    url: "women",
    title: "24 Women in STEM Project",
    description:
      "Interviews with 24 women in STEM on IGTV",
    thumbnail: "project-card.png",
    skills: ["Video editing", "network"],
    tags: ["extra"],
    infobox: {
      skills:
        "Video editing, interviewing skills, networking",
      context:
        "In 2021, I decided to find a new project to do before Christmas. This time, I wanted to highlight women in the industries related to STEM, where they are often underrepresented.",
      mission:
        "Interviewing 24 women with a STEM background before Christmas",
      time: "2 monthes",
      links: [
        {
          name: "Interview with Adélaïde",
          link: "https://www.youtube.com/watch?v=DApZdomeBzw",
        },
        {
          name: "Interview with Zoé",
          link: "https://www.youtube.com/watch?v=nuEKtWDAOmE&t=3s"
        }
      ],
    },
    paragraph:
      "<p class='paragraph'>14 days ago I set myself up to a new challenge: creating an advent calendar of videos solving small problems in JavaScript, explaining my solutions and posting them on Instagram. 👩‍💻</p><br><p> My goal: encouraging anyone to get into programming. The challenge: finding the right words to explain each function, showing my mistakes and most importantly getting across that spending time correcting them is by far the fun part of coding.</p><br><p> The outcome: I receive messages from baby developers ready to start their coding journey every single day 🦾</p>",
    pictures: [],
    lesson:
      "Lorem ipsum dolor sit amet, <strong> consectetur adipiscing elit. </strong> Praesent eget feugiat mauris.",
  },
  {
    url: "ownest",
    title: "Front-End developer Internship",
    description:
      "6 month Front-End developer internship in a web3 start-up",
    thumbnail: "project-card.png",
    skills: ["Vue.js", "Web3"],
    tags: ["code"],
    infobox: {
      skills:
        "Front-end development, discovering Ethereum Smart contracts",
      context:
        "Starting November 2021, I spent 6 months in the Ownest development team. Ownest is a web3 start-up specialized in applying Blockchain to logistics management.",
      mission:
        "Developing and integrating new features to Ownest products, refactoring existing code",
      time: "6 months",
      links: [
        {
          name: "Ownest website",
          link: "https://ownest.io/",
        }
      ],
    },
    paragraph:
      "<p class='paragraph'>14 days ago I set myself up to a new challenge: creating an advent calendar of videos solving small problems in JavaScript, explaining my solutions and posting them on Instagram. 👩‍💻</p><br><p> My goal: encouraging anyone to get into programming. The challenge: finding the right words to explain each function, showing my mistakes and most importantly getting across that spending time correcting them is by far the fun part of coding.</p><br><p> The outcome: I receive messages from baby developers ready to start their coding journey every single day 🦾</p>",
    pictures: [],
    lesson:
      "Lorem ipsum dolor sit amet, <strong> consectetur adipiscing elit. </strong> Praesent eget feugiat mauris.",
  },
  /*
  {
    url: "handimanagement",
    title: "Handimanagement",
    description:
      "Learning and sharing best practices for keeping an inclusive office",
    thumbnail: "project-card.png",
    skills: ["Inclusivity", "Management"],
    tags: ["extra"],
    infobox: {
      skills:
        "Organize and animate conferences",
      context:
        "In 2021, during my year of presidency at the Junior-Enterprise, I wanted to learn more about managing a diverse team",
      mission:
        "",
      time: "2 monthes",
      links: [
        {
          name: "Github",
          link: "https://www.youtube.com/watch?v=DApZdomeBzw",
        }
      ],
    },
    paragraph:
      "<p class='paragraph'>14 days ago I set myself up to a new challenge: creating an advent calendar of videos solving small problems in JavaScript, explaining my solutions and posting them on Instagram. 👩‍💻</p><br><p> My goal: encouraging anyone to get into programming. The challenge: finding the right words to explain each function, showing my mistakes and most importantly getting across that spending time correcting them is by far the fun part of coding.</p><br><p> The outcome: I receive messages from baby developers ready to start their coding journey every single day 🦾</p>",
    pictures: [],
    lesson:
      "Lorem ipsum dolor sit amet, <strong> consectetur adipiscing elit. </strong> Praesent eget feugiat mauris.",
  },*/
  {
    url: "google",
    title: "Google - Cloud for Climate Hackathon",
    description:
      "3 Days to develop a solution using cloud to fight against global warming",
    thumbnail: "project-card.png",
    skills: ["Pitching", "Conception"],
    tags: ["extra"],
    infobox: {
      skills:
        "Concieving an innovative Cloud solution, pritching a project",
      context:
        "June 2022, Google Cloud Paris and Startupinside hosted a 3 day hackthon on the subject of preserving the environment",
      mission:
        "Cincieving a innovative solution using Google Cloud and pitching in front of Google Cloud employees and investors",
      time: "3 days",
      links: [
        {
          name: "Linkedin post",
          link: "https://www.linkedin.com/posts/leabuende_hackathon-google-activity-6947607591392845825-ClX-?utm_source=share&utm_medium=member_desktop",
        },
        {
          name: "Hackathon website",
          link: "https://www.hackathon-cloud-climat.fr/"
        }
      ],
    },
    paragraph:
      "<p class='paragraph'>14 days ago I set myself up to a new challenge: creating an advent calendar of videos solving small problems in JavaScript, explaining my solutions and posting them on Instagram. 👩‍💻</p><br><p> My goal: encouraging anyone to get into programming. The challenge: finding the right words to explain each function, showing my mistakes and most importantly getting across that spending time correcting them is by far the fun part of coding.</p><br><p> The outcome: I receive messages from baby developers ready to start their coding journey every single day 🦾</p>",
    pictures: [],
    lesson:
      "Lorem ipsum dolor sit amet, <strong> consectetur adipiscing elit. </strong> Praesent eget feugiat mauris.",
  },
  {
    url: "cicdportfolio",
    title: "Portfolio CI/CD pipeline",
    description:
      "Setting up a CI/CD pipeline for my portfolio website",
    thumbnail: "project-card.png",
    skills: ["CirlceCI", "Github actions"],
    tags: ["code"],
    infobox: {
      skills:
        "Test writing, deploying, creating automations",
      context:
        "Efrei 4th year DevOps project",
      mission:
        "Concieve a CI/CD pipeline",
      time: "1 week",
      links: [
        {
          name: "Github",
          link: "https://www.youtube.com/watch?v=DApZdomeBzw",
        },
        {
          name: "Project report",
          link: "https://drive.google.com/file/d/1U0KWmlyk7ngDKN223S8-fppXYBKk6LP2/view?usp=sharing",
        },
      ],
    },
    paragraph:
      "<p class='paragraph'>14 days ago I set myself up to a new challenge: creating an advent calendar of videos solving small problems in JavaScript, explaining my solutions and posting them on Instagram. 👩‍💻</p><br><p> My goal: encouraging anyone to get into programming. The challenge: finding the right words to explain each function, showing my mistakes and most importantly getting across that spending time correcting them is by far the fun part of coding.</p><br><p> The outcome: I receive messages from baby developers ready to start their coding journey every single day 🦾</p>",
    pictures: [],
    lesson:
      "Lorem ipsum dolor sit amet, <strong> consectetur adipiscing elit. </strong> Praesent eget feugiat mauris.",
  },
]

  Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
  created : function () {
    setTimeout(()=>{this.$loaded=true, console.log(this.$loaded)},3000)
  }
}).$mount("#app");
