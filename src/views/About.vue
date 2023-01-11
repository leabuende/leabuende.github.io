<template>
  <div class="about">
    <div class="presentation-section">
      <div class="presentation-left">
        <Presentation />
        <a href="https://drive.google.com/file/d/1aiNEgE9TGvUM_9B8Av49o8LV8VX4kz6D/view?usp=sharing" target="_blank">
          <button class="white-button">
            Download my resume
          </button>
        </a>
      </div>
      <div class="about-slider about-desktop">

        <div class="container" v-if="page == 1">
          <div class="column">
            <h2 class="category-title">Skills</h2>
            <div class="icons">
              <div class="icon" v-for="tech in techs" :key="tech.naùe">
                <a :href="tech.link" target="_blank">
                  <img :src="require(`@/assets/tech-icons/${tech.img}.png`)" alt="" /></a>
              </div>
            </div>
            <br>
            <ul>
              <li>Problem solving</li>
              <li>Agile team & project management</li>
              <li>Continuous learning</li>
            </ul>
          </div>
          <div class="column">
            <h2 class="category-title">Tools</h2>
            <div class="icons">
              <div class="icon" v-for="tool in tools" :key="tool.name">
                <a :href="tool.link" target="_blank">
                  <img :src="require(`@/assets/tech-icons/${tool.img}.png`)" alt="" /></a>
              </div>
            </div>
            <h2 class="category-title currently">Currently learning</h2>
            <div class="icons">
              <div class="icon" v-for="learning in newskills" :key="learning.name">
                <a :href="learning.link" target="_blank">
                  <img :src="require(`@/assets/tech-icons/${learning.img}.png`)" alt="" /></a>
              </div>
            </div>
          </div>
          <div class="column">
            <h2 class="category-title">Languages</h2>
            <p class="category-text">
              Fluent French, German and English Profficient Spanish
            </p>
          </div>
          <div class="column">
            <h2 class="category-title">Education</h2>
            <p class="category-text">
              Software Engineering major @ Efrei Paris
            </p>
            <p class="category-text">
              Self-taught designer
            </p>
            <p class="category-text">
              Strategy & Leadership Certification @ University of Ilinois
            </p>
          </div>
        </div>

        <div class="container" v-if="page == 2">
          <div class="alt-column">
            <h2 class="category-title">I'm passionate about...</h2>
            <div class="icons">
              <div class="icon-passions" v-for="passion in passions" :key="passion.name">
                <a :href="passion.link" target="_blank">
                  <img :src="require(`@/assets/passions-icons/${passion.img}.png`)" alt="" /></a>
              </div>
            </div>
          </div>
          <div class="alt-column">
            <h2 class="category-title">And inspired by...</h2>
            <div class="icons">
              <div class="icon-passions" v-for="inspiration in inspirations" :key="inspiration.name">
                <a :href="inspiration.link" target="_blank">
                  <img :src="require(`@/assets/passions-icons/${inspiration.img}.png`)" alt="" /></a>
              </div>
            </div>
          </div>
        </div>
        <div class="button">
          <button class="white-button" v-if="page == 1" @click="page = 2">Passions and Interests...</button>
          <button class="white-button" v-if="page == 2" @click="page = 1">Skills and education...</button>

        </div>
      </div>
      <div class="about-slider alt-about">
        <div class="container">
          <div class="column">
            <h2 class="category-title">Skills</h2>
            <div class="icons">
              <div class="icon tech" v-for="tech in techs" :key="tech.naùe">
                <a :href="tech.link" target="_blank">
                  <img :src="require(`@/assets/tech-icons/${tech.img}.png`)" alt="" /></a>
              </div>
            </div>
          </div>
          <div class="column">
            <h2 class="category-title">Tools</h2>
            <div class="icons">
              <div class="icon" v-for="tool in tools" :key="tool.name">
                <a :href="tool.link" target="_blank">
                  <img :src="require(`@/assets/tech-icons/${tool.img}.png`)" alt="" /></a>
              </div>
            </div>
            <h2 class="category-title currently">Currently learning</h2>
            <div class="icons">
              <div class="icon" v-for="learning in newskills" :key="learning.name">
                <a :href="learning.link" target="_blank">
                  <img :src="require(`@/assets/tech-icons/${learning.img}.png`)" alt="" /></a>
              </div>
            </div>
          </div>
          <div class="column">
            <h2 class="category-title">Languages</h2>
            <p class="category-text">
              Fluent French, German and English Profficient Spanish
            </p>
          </div>
          <div class="column">
            <h2 class="category-title">Eductaion</h2>
            <p class="category-text">
              Software Engineering major @ Efrei Paris
            </p>
            <p class="category-text">
              Self-taught designer
            </p>
            <p class="category-text">
              Strategy & Leadership Certification @ University of Ilinois
            </p>
          </div>
        </div>
      </div>
      <div class="about-slider alt-about">
        <div class="container">
          <div class="alt-column">
            <h2 class="category-title">I'm passionate about...</h2>
            <div class="icons">
              <div class="icon-passions" v-for="passion in passions" :key="passion.name">
                <img :src="require(`@/assets/passions-icons/${passion.img}.png`)" alt="" />
              </div>
            </div>
          </div>
          <div class="alt-column">
            <h2 class="category-title">And inspired by...</h2>
            <div class="icons">
              <div class="icon-passions inspired" v-for="inspiration in inspirations" :key="inspiration.name">
                <a :href="inspiration.link" target="_blank">
                  <img :src="require(`@/assets/passions-icons/${inspiration.img}.png`)" alt="" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



  </div>
</template>

<script>
import Presentation from "../components/Presentation.vue";

export default {
  name: "About",
  components: {
    Presentation,
  },
  data() {
    return {
      page: 1,
      techs: [
        {
          name: "Vue.js",
          img: "vue",
          link: "https://vuejs.org/",
        },
        {
          name: "Javascript",
          img: "js",
          link: "https://developer.mozilla.org/fr/docs/Web/JavaScript",
        },
        {
          name: "Typescript",
          img: "ts",
          link: "https://www.typescriptlang.org/",
        },
        {
          name: "Node.js",
          img: "node",
          link: "https://nodejs.org/en/",
        },
        {
          name: "Express",
          img: "express",
          link: "https://expressjs.com/fr/",
        },
        {
          name: "React",
          img: "react",
          link: "https://fr.reactjs.org/",
        },
        {
          name: "Angular",
          img: "angular",
          link: "https://angular.io/",
        },
        {
          name: "Sass",
          img: "sass",
          link: "https://sass-lang.com/",
        },
        {
          name: "Cypress",
          img: "cypress",
          link: "https://www.cypress.io/",
        },
        {
          name: "Wordpress",
          img: "wordpress",
          link: "https://fr.wordpress.org/",
        },
        {
          name: "Webflow",
          img: "webflow",
          link: "https://webflow.com/",
        },
      ],
      tools: [
        {
          name: "Slack",
          img: "slack",
          link: "https://slack.com/intl/fr-fr/",
        },
        {
          name: "Notion",
          img: "notion",
          link: "https://www.notion.so/",
        },
        {
          name: "Gitlab",
          img: "gitlab",
          link: "https://about.gitlab.com/",
        },
        {
          name: "Github",
          img: "github",
          link: "https://github.com/",
        },
        {
          name: "Figma",
          img: "figma",
          link: "https://www.figma.com/community",
        },
        {
          name: "Canva",
          img: "canva",
          link: "https://www.canva.com/",
        },
        {
          name: "Storybook",
          img: "storybook",
          link: "https://storybook.js.org/"
        },
      ],
      newskills: [
        {
          name: "React Native",
          img: "reactnative",
          link: "https://reactnative.dev/",
        },
        {
          name: "Three.js",
          img: "threejs",
          link: "https://threejs.org/",
        },
        {
          name: "Nuxt",
          img: "nuxt",
          link: "https://nuxtjs.org/",
        },
        {
          name: "Firebase",
          img: "firebase",
          link: "https://firebase.google.com/",
        },
        {
          name: "Solidity",
          img: "solidity",
          link: "https://www.figma.com/community",
        },
        {
          name: "Flutter",
          img: "flutter",
          link: "https://flutter.dev/",
        }
      ],
      inspirations: [
        {
          name: "Heidi Lamarr",
          img: "heidi",
          link: "https://fr.wikipedia.org/wiki/Hedy_Lamarr",
        },
        {
          name: "Michelle Obama",
          img: "michelle",
          link: "https://fr.wikipedia.org/wiki/Michelle_Obama",
        },
        {
          name: "Salman Rushdie",
          img: "salman",
          link: "https://fr.wikipedia.org/wiki/Salman_Rushdie",
        },
        {
          name: "Sarah dayan",
          img: "sarah",
          link: "https://www.sarahdayan.dev/",
        },
      ],
      passions: [
        {
          name: "Animal Crossing",
          img: "ac",
          link: "https://www.animal-crossing.com/new-horizons/fr/",
        },
        {
          name: "Ladies of Code",
          img: "ladies",
          link: "https://ladiesofcodeparis.netlify.app/",
        },
        {
          name: "Ballet",
          img: "ballet",
          link: "https://fr.wikipedia.org/wiki/Ballet",
        },
        {
          name: "Reading",
          img: "books",
          link: "",
        },
        {
          name: "Gym",
          img: "gym",
          link: "https://www.fitnesspark.fr/",
        },
        {
          name: "Dogs",
          img: "dog",
          link: "https://fr.wikipedia.org/wiki/Dogs_(groupe)",
        }

      ],
      album: [
        {
          img: "1.JPG",
          description: "Lorem ipsum blabla"
        },
        {
          img: "2.JPG",
          description: "Lorem ipsum blabla"
        },
        {
          img: "3.JPG",
          description: "Lorem ipsum blabla"
        },
        {
          img: "4.JPG",
          description: "Lorem ipsum blabla"
        }
      ]
    };
  },
};
</script>
<style scoped>
.presentation-section {
  display: flex;
  width: 100%;
  flex-wrap: wrap;

}

.presentation-left {
  width: 100%;
  flex: 50%;

}

.presentation-left button {
  margin-top: 16px;
}

.about-slider {
  width: 100%;
  flex: 50%;
  background-color: white;
  border-radius: 5px;
  box-shadow: 1px 2px 30px rgba(0, 0, 0, 0.05);
  padding: 15px;
  position: relative;
  min-height: 310px;
}

.about-desktop {
  display: block;
}

.container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 50px;
}

.alt-column {
  width: 100%;
  flex: 100%;
  padding: 10px;
}

.column {
  width: 100%;
  flex: 50%;
  max-width: 50%;
  padding: 10px;
}

.category-title {
  margin-bottom: 15px;
}

.icons {
  display: flex;
  flex-wrap: wrap;
}

.icon {
  margin-right: 10px;
  margin-bottom: 10px;
  height: 30px;
}

.icon-passions img {
  margin-right: 10px;
  margin-bottom: 10px;
  height: 60px;
}

.icon img {
  height: 30px;
}

.currently {
  margin-top: 20px;
}

.category-text {
  margin-bottom: 10px;
}

.button {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 0px 20px 20px 0px;
}

.alt-about {
  display: none;
}

@media (max-width: 768px) {

  .about-slider,
  .presentation-left {
    flex: 100%;
  }

  .button {
    display: none;
  }

  .container {
    padding-bottom: 0px;

  }

  .column {
    flex: 100%;
    max-width: 100%;
  }

  .category-filter {
    font-size: 16px;
  }

  .alt-about {
    margin-top: 32px;
    display: block;
  }

  .about-desktop {
    display: none;
  }
}
</style>
