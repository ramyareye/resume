<template>
  <div class="resume" :style="theme">
    <y-header />

    <y-section class="experiences" :title="$t('labels.experiences')">
      <ol>
        <li :key="i" v-for="(experience, i) in $t('experiences')">
          <y-experience v-bind="experience"
            :toggle="active === i"
            @click="active = active !== i ? i : -1" />
        </li>
      </ol>
    </y-section>

    <y-section class="about" :title="$t('labels.about')">
      <span v-html="about" />
    </y-section>

    <y-section class="skillsets" :title="$t('labels.skillsets')">
      <y-skillset :key="i" v-for="([k, v], i) in Object.entries($t('skillsets'))"
        :title="$t(`labels.${k}`)" :skills="v" />
    </y-section>
  </div>
</template>

<script>
import marked from 'marked'

import YHeader from '@/components/Header'
import YSection from '@/components/Section'
import YExperience from '@/components/Experience'
import YSkillset from '@/components/Skillset'

export default {
  components: {
    YHeader, YSection, YExperience, YSkillset,
  },

  computed: {
    darkmode() {
      // return window.matchMedia('(prefers-color-scheme: dark)').matches
      return true;
    },
  
    primary() {
      const colors = ['#000000', '#1f1234']
      return colors[(Math.random() * colors.length) | 0]
    },

    strong() {
      const colors = ['#f8004f', '#5000e9', '#00e9c6', '#00b205', '#f82d00']
      return colors[(Math.random() * colors.length) | 0]
    },
    
    theme() {
      return !this.darkmode
        ? `--primary: ${this.primary}; --strong: ${this.strong}`
        : ''
    },

    about() { return marked(this.$t('about')) }
  },

  data: () => ({
    active: -1
  }),
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Arapey:400i|Raleway:400,800&display=swap');

.resume {
  counter-reset: experiences;

  width: 100%;
  margin: 0 auto;
  padding: 1.5em;

  font-family: sans-serif;
  font-size: 3.75vw;

  --primary: #1f1234;
  --secondary: #444;
  --strong: #5000e9;
  --emphasis: #aaa;
  --light: #f4f4f4;

  -webkit-print-color-adjust: exact;
}

.resume a {
  position: relative;
  display: inline-block;
  color: inherit;
  text-decoration: none;
}

.resume a:hover {
  color: var(--strong);
}

.resume a:after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 0;
  border-bottom: 1px dotted currentColor;
}

.resume header {
  grid-area: header;
}

.resume .experiences {
  grid-area: experiences;
  padding: 0;
}

.resume .experiences ol,
.resume .experiences li {
  margin: 0;
  padding: 0;
  list-style: none;
}

.resume .about {
  grid-area: about;
  padding: 2.5em 1.5em;
  color: var(--secondary);
  font-family: 'Arapey', serif;
  line-height: 1.6;
  letter-spacing: .25;
}

.resume .about h2 {
  display: inline;
  margin: 0;
  font-family: 'Raleway', sans-serif;
  font-size: 1em;
  color: var(--primary);
}

.resume .about h2:after {
  content: ' – ';
}

.resume .about p > * {
  transition: color .3s;
}

.resume .about:hover p > * {
  color: var(--strong);
}

.resume .about span {
  font-size: .9em;
}

.resume .about span p {
  margin-top: calc(1em / .9);
}

.resume .about span p:first-child {
  display: inline;
  margin-top: 0;
}

.resume .skillsets {
  grid-area: skillsets;
  padding: 2.5em 1.5em;
  border-top: 1px solid #eaeaea;
}

.resume .skillset + .skillset {
  margin-top: 1.5em;
}

@media (prefers-color-scheme: dark) {
  .resume {
    --primary: #aaa;
    --secondary: #aaa;
    --strong: #00e9c6;
    --emphasis: #444;
    --light: #222;
  }
}

@media screen {
  .resume {
    max-width: 60em;
  }
}

@media print {
  .resume {
    width: 100%;
    font-size: 11px;
    padding: 1.75em 1.5em 1.5em;
  }
}

@media screen and (min-width: 426px) {
  .resume {
    font-size: 16px;
  }
}

@media screen and (min-width: 768px), print {
  .resume {
    display: grid;
    grid-template-areas: "header header" "experiences about" "experiences skillsets" "experiences null";
    grid-template-columns: auto minmax(min-content, 28%);
    grid-template-rows: min-content min-content min-content auto;
    grid-gap: 0 1.5em;
    align-content: start;
  }

  .resume .about {
    margin-bottom: 2.5em;
  }

  .resume .experiences li:first-child .experience {
    padding-top: 0;
    border-top: none;
  }

  .resume .experiences li:last-child .experience {
    border-bottom: none;
  }

  .resume .experience section {
    display: block !important;
    opacity: 1 !important;
  }

  .resume .about {
    padding: 1.5em;
    background: var(--light);
  }

  .resume .skillsets {
    padding: 0 1.5em;
    border: none;
  }
}

@media screen and (min-width: 520px) and (max-width: 767px) {
  .resume .skillsets {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 6.5em;
    grid-gap: 1.5em 2.5em;
  }

  .resume .skillset + .skillset {
    margin: 0;
  }
}
</style>
