<style>
  @import './style.scss';
</style>

<template>
  <v-app-bar theme="dark">
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>
    <v-app-bar-title>
      <svg
        width="135"
        height="100"
        viewBox="0 0 135 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text y="20" fill="white" fill-opacity="0.9">torre</text>
        <text x="47" y="20" fill="#CDDC39">.co</text>
      </svg>
    </v-app-bar-title>
    <v-spacer></v-spacer>

    <SearchField />

    <v-btn class="text-torre-yellow navbar-text" rounded="xl">SIGN IN</v-btn>
  </v-app-bar>
</template>
