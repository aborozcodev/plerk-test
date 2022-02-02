<template>
  <header class="theHeader">
    <slot />
  </header>
</template>
<script>
export default {
  name: 'TheHeader',
}
</script>

<style scoped>
.theHeader {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 32px;
  background: #d0beff;
  padding: 10px;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
}
</style>
