<script>
  export default {
    props: {
      skill: Object,
    },
  };
</script>

<template>
  <v-app-bar theme="dark">
    <template v-slot:prepend>
      <NuxtLink to="/">
        <v-btn color="white" icon="mdi-close"></v-btn>
      </NuxtLink>
    </template>
    <v-app-bar-title>
      <svg
        width="400"
        height="100"
        viewBox="0 0 400 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text y="20" fill="white" fill-opacity="0.9">{{ skill.name }}</text>
      </svg>
    </v-app-bar-title>
  </v-app-bar>
</template>
