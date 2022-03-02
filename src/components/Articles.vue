<template>
  <div class="row d-flex">
    <div class="col-12">
      <input type="search" name="search" id="search">
      <select name="ordem" id="ordem">
        <option value="">Sort</option>
        <option value="1">Mais antigas</option>
        <option value="2">Mais novas</option>
      </select>
    </div>
    <div class="col-12">
      <Article v-for="article in articles" :article="article" :key="article.id"></Article>
    </div>
    <div class="col-12">
      <button type="button" class="btn btn-primary" @click="loadMore">Load more</button>
    </div>
  </div>

</template>

<script>
import Article from '@/components/Article'
export default {
  name: 'Articles',
  components: { Article },
  data () {
    return {
      articles: [],
      search: '',
      ordem: '',
      total: 0
    }
  },
  created () {
    this.getArticles()
  },
  methods: {
    async getArticles () {
      this.$http.get(`https://api.spaceflightnewsapi.net/v3/articles?_start=${this.total}`)
        .then(response => {
          console.log(response.data)
          this.articles = response.data
          this.total = this.articles.length
        })
        .catch(error => {
          console.log(error)
        })
    },
    async loadMore () {
      this.total += 10
      this.$http.get(`https://api.spaceflightnewsapi.net/v3/articles?_start=${this.total}`)
        .then(response => {
          this.articles = this.articles.concat(response.data)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }

}
</script>

<style>

</style>
