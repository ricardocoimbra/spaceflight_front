<template>
      <div class="article d-inline-flex col-10">
        <div class="col-6">
          <h1>{{ article.title }}</h1>
          <p>{{ moment(article.updatedAt).format('DD/MM/YYYY') }} <a :href="article.url">newsSite</a></p>
          <p class="mt-5">{{article.summary.substring(0,200)+(article.summary.length>200 ? "..." : "")}}</p>
          <button class="btn btn-info">Ver mais</button>
        </div>
        <div class="image col-6 mb-6">
          <img class="image-responsive" :src="article.imageUrl" :alt="article.title">
        </div>
      </div>
</template>

<script>
export default {
  name: 'Article',
  props: ['article']
}
</script>

<style scoped>
.article {
  margin: 40px;
}
h1 {
    font-size: 1.5em;
    margin: 0;
}
.image-responsive {
    max-width: 100%;
    height: auto;
    border: #42b983 solid 4px;
}
</style>
