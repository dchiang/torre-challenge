<script>
  export default {
    props: {
      skill: Object,
    },
    mounted: function () {
      console.log("skill",this.skill);
    },
  };
</script>

<template>
  <v-app-bar theme="dark">
    <template v-slot:prepend>
      <v-btn icon="mdi-close"></v-btn>
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
