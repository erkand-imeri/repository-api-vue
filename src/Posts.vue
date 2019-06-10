<template>
<div>
    <span v-if="isLoading">Posts Loading</span>
 <ul v-else>
    <li v-for="post of posts" :key="post.id">
      <p><strong>{{post.title}}</strong></p>
      <p>{{post.body}}</p>
    </li>
  </ul>
 </div>    
</template>
<script>
import {RepositoryFactory} from './repository/repositoryFactory';
import Posts from './Posts';

const PostsRepository = RepositoryFactory.get('posts');

export default {
    components: {
        Posts
    },
     data() {
    return {
      posts: [],
      isLoading: null
    }
  },
   // Fetches posts when the component is created.
  created() {
    this.fetch();

  },
  methods: {
      async fetch() {
          this.isLoading = true;
          const {data} = await PostsRepository.get();
          this.isLoading = false;
          this.posts = data;
      }
  }
}
</script>
<style scoped>
    ul {
        list-style-type: none;
    }
</style>
