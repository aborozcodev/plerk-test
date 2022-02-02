<template>
  <div class="categoriesList">
    <slot />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'CategoryList',
}
</script>

<style scoped>
.categoriesList {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 18px;
  justify-content: center;
  grid-auto-columns: 1fr;
  padding-bottom: 24px;
}
</style>
