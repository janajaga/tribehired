<template>
  <div class="todos">
    <h1>Comments</h1>
    <post-list :posts="posts"></post-list>
  </div>
</template>

<script>
import PostList from "../components/PostList";

export default {
  name: "Home",
  components: {
    "post-list": PostList,
  },
  data() {
    return {
      id: this.$route.params.id,
      limit: 20,
      posts: [],
    };
  },
  computed: {},
  created: function () {
    this.getPosts();
  },
  methods: {
    getPosts: function () {
      var self = this;
      fetch("https://jsonplaceholder.typicode.com/comments?postId=" + this.id)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          self.posts = data;
        });
    },
  },
};
</script>