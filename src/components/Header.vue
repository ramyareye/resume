<template>
  <header>
    <hgroup>
      <h1>{{ $t("name") }}</h1>
      <h2>{{ baseline }}</h2>
    </hgroup>

    <ul>
      <i18n tag="li" path="situation">
        {{
          new Date().getFullYear() -
            new Date(parseInt($t("birth"))).getFullYear()
        }}
        <a href="location.href">{{ $t("location.city") }}</a>
      </i18n>

      <li :key="i" v-for="(item, i) in $t('contact')">
        <a :href="item.href" target="_blank">{{ item.text }}</a>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  computed: {
    baseline() {
      return this.$route.query.job || this.$t("job");
    },
  },
};
</script>

<style scoped>
header {
  display: block;
  padding: 1.5em;
  margin-bottom: 1.5em;
}

header hgroup {
  margin-bottom: 2em;
  margin-right: 3em;
  color: var(--primary);
}

header .logo {
  color: var(--primary);
}

header:hover .logo {
  color: var(--strong);
}

header ul {
  margin: 0 calc(1em / 0.8) 0 0;
  padding: 0;
  list-style: none;
  color: var(--emphasis);
  font-size: 0.8em;
  font-family: sans-serif;
  line-height: 1.6;
}

header a {
  color: var(--primary);
  text-decoration: none;
}

header h1 {
  font-family: "Raleway", sans-serif;
}

header h2 {
  font-family: "Arapey", serif;
  font-weight: normal;
}

@media (min-width: 768px), print {
  header {
    display: flex;
    margin-bottom: 0;
    padding: 1.5em;
  }

  header hgroup {
    flex: 1 0 auto;
  }

  header ul {
    flex: 0 0 auto;
  }
}
</style>
