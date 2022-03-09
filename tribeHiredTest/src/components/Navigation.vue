<template>
  <div>
    <div class="container">
      <table class="table table-striped table-bordered">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="post in posts"
            :key="post.id"
            @click="goToDashboard(post.userId)"
          >
            <td>{{ post.userId }}</td>
            <td>{{ post.title }}</td>
            <td>{{ post.body }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Navigation",
  props: {
    posts: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    goToDashboard(id) {
      this.$router.push({ name: "Posts", params: { id: id } });
    },
  },
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
}
li {
  display: inline-block;
  padding: 1em 0.5em;
}
</style>