<script>
  export default {
    data: () => ({
      skill: { name: 'Software development' },
    }),
  };
</script>

<template>
  <SkillHeader v-bind="{skill}" />
</template>
