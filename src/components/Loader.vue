<template>
  <div class="loader"></div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Loader',
}
</script>

<style scoped>
.loader {
  border: 4px solid #6b34ff;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border-left-color: transparent;
  margin: 0 auto;
  margin-bottom: 32px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
