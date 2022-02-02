<template>
  <div class="searchBar">
    <input
      type="text"
      :placeholder="placeholder"
      @input="searchCategory"
      :disabled="isDisabled"
    />
  </div>
</template>

<script>
import { dictionary } from '../utils/languages'
export default {
  name: 'CategoryListItem',
  props: {
    category: {
      type: Object,
    },
    lang: {
      type: String,
    },
    isDisabled: {
      type: Boolean,
    },
  },
  computed: {
    placeholder() {
      return dictionary[this.lang].Category
    },
  },
  methods: {
    searchCategory(event) {
      this.$emit('searchCategory', event.target.value)
    },
  },
}
</script>

<style scoped>
.searchBar input {
  border-radius: 10px;
  outline: none;
  border: 2px solid #b097ff;
  padding: 8px 12px;
}
</style>
