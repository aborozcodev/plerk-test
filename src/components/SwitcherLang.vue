<template>
  <div class="switcherMenu">
    <select @change="changeLang" :disabled="isDisabled">
      <option
        v-for="(language, index) in languages"
        :value="language"
        :key="index"
      >
        {{ language }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  name: 'SwitcherMenu',
  props: {
    languages: {
      type: Array,
    },
    isDisabled: {
      type: Boolean,
    },
  },
  methods: {
    changeLang(event) {
      this.$emit('changeLang', event.target.value)
    },
  },
}
</script>

<style scoped>
.switcherMenu select {
  border: 0;
  border-radius: 6px;
}
</style>
