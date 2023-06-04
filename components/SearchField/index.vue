<script>
  export default {
    methods: {
      focusSearch() {
        const input = this.$refs.search.$el.querySelector(
          'input:not([type=hidden]),textarea:not([type=hidden])'
        );
        if (input) {
          setTimeout(() => {
            input.focus();
          }, 0);
        }
      },
      showInput() {
        this.isSearchClosed = false;
        this.$nextTick(() => {
          this.focusSearch();
        });
      },
    },
    data: () => ({
      isSearchClosed: true,
    }),
  };
</script>

<template>
  <v-text-field
    ref="search"
    class="mt-5"
    placeholder="Search"
    variant="solo"
    filled
    density="compact"
    clearable
    @blur="isSearchClosed = true"
    @update:focused="!isSearchClosed"
    v-show="!isSearchClosed"
  ></v-text-field>
  <v-btn icon @click="showInput">
    <v-icon>mdi-magnify</v-icon>
  </v-btn>
</template>
