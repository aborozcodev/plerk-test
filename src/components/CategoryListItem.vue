<template>
  <div class="categoryItem">
    <img :src="image" :alt="category.name[lang]" />
    <div class="categoryItem_content">
      <h3>{{ category.name[lang] }}</h3>
      <h5>
        <small>{{ price }}</small>
      </h5>
      <p>{{ categoryType }}</p>
    </div>
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
  },
  computed: {
    price() {
      const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(this.category.suggested_budget)
      return formattedPrice + ' USD'
    },

    categoryType() {
      let category = ''
      if (this.category.category_type == 1) {
        category = 'Normal'
      } else if (this.category.category_type == 2) {
        category = 'Libre'
      } else {
        category = 'Personalizada'
      }

      return dictionary[this.lang][category]
    },

    image() {
      if (
        this.category.image.length > 36 &&
        this.category.image.includes('default')
      ) {
        return this.category.image.substr(-47)
      } else {
        return this.category.image
      }
    },
  },
}
</script>

<style scoped>
.categoryItem img {
  width: 168px;
  height: 168px;
  object-fit: cover;
}
.categoryItem_price {
  display: flex;
  justify-content: flex-end;
}

.categoryItem_content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.categoryItem_content h5 {
  display: inline-block;
  margin: 0;
  margin-bottom: 16px;
  border-radius: 10px;
  background: lightgreen;
  padding: 4px 8px;
}
.categoryItem_content p {
  display: inline-block;
  margin: 0;
  border-radius: 10px;
  background: #ffa688;
  padding: 4px 8px;
}
</style>
