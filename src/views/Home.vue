<template>
  <div class="home">
    <TheHeader>
      <SearchBar
        @searchCategory="searchCategory"
        :lang="currentLang"
        :isDisabled="isDisabled"
      />
      <SwitcherLang
        @changeLang="switchLang"
        :languages="languages"
        :isDisabled="isDisabled"
      ></SwitcherLang>
    </TheHeader>
    <Loader v-if="isLoading" />
    <CategoryList v-if="filteredCategories.length > 0 && statusCode == 'ok'">
      <CategoryListItem
        v-for="category in filteredCategories"
        :key="category.uuid4"
        :category="category"
        :lang="currentLang"
      ></CategoryListItem>
    </CategoryList>
    <p v-else-if="inputSearch != '' && filteredCategories.length <= 0">
      {{ notFound }}
    </p>
    <p v-else-if="isTimeout">{{ timeOut }}</p>
    <p v-else-if="statusCode != 'ok'">
      {{ serverError }}
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
import { getCategories } from '@/utils/api'
import CategoryList from '@/components/CategoryList.vue'
import CategoryListItem from '@/components/CategoryListItem.vue'
import SearchBar from '@/components/SearchBar.vue'
import Loader from '@/components/Loader.vue'
import SwitcherLang from '@/components/SwitcherLang.vue'
import TheHeader from '@/components/TheHeader.vue'
import { languages, dictionary } from '@/utils/languages'

export default {
  components: {
    CategoryList,
    CategoryListItem,
    SearchBar,
    Loader,
    SwitcherLang,
    TheHeader,
  },
  props: ['lang'],
  data() {
    return {
      categories: [],
      inputSearch: '',
      isLoading: false,
      currentLang: 'eng',
      languages: languages,
      statusCode: 'ok',
      isTimeout: false,
    }
  },
  computed: {
    filteredCategories() {
      return this.categories.filter((cat) =>
        cat.name[this.currentLang]
          .toLowerCase()
          .includes(this.inputSearch.toLowerCase())
      )
    },

    notFound() {
      return dictionary[this.currentLang].NotFound
    },
    timeOut() {
      return dictionary[this.currentLang].Timeout
    },

    serverError() {
      return dictionary[this.currentLang].ServerError
    },

    isDisabled() {
      return this.statusCode != 'ok' || this.isTimeout
    },
  },
  created() {
    this.getCategoriesList()
  },
  methods: {
    searchCategory(category) {
      this.inputSearch = category
    },

    getCategoriesList() {
      this.isLoading = true
      getCategories()
        .then((res) => res.json())
        .then((data) => {
          this.categories = data.data
          this.statusCode = data.status
          this.isLoading = false
        })
        .catch(() => {
          this.isLoading = false
          this.isTimeout = true
        })
    },

    switchLang(lang) {
      this.currentLang = lang
    },
  },
}
</script>
