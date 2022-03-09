<template>
  <div>
    <div>
      <input
        type="text"
        placeholder="Filter by name and email"
        v-model="filter"
      />
    </div>
    <div>
      <table class="table table-striped table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Post ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="post in filteredRows"
            :key="post.id"
            @click="goToDashboard(post.id)"
          >
            <td>{{ post.id }}</td>
            <td>{{ post.postId }}</td>
            <td>{{ post.name }}</td>
            <td>{{ post.email }}</td>
            <td>{{ post.body }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostList",
  props: ["posts"],
  data: function () {
    return {
      name: "",
      filter: "",
    };
  },
  computed: {
    filteredRows() {
      return this.posts.filter((row) => {
        const filteredName = row.name.toString().toLowerCase();
        const filteredEmail = row.email.toString().toLowerCase();
        const filteredBody = row.body.toString().toLowerCase();
        const searchTerm = this.filter.toLowerCase();

        return (
          filteredName.includes(searchTerm) ||
          filteredEmail.includes(searchTerm) ||
          filteredBody.includes(searchTerm)
        );
      });
    },
  },
};
</script>

<style scoped>
.completed {
  color: gray;
  text-decoration: line-through;
}

ul {
  margin-top: 2em;
  margin-left: 1em;
}

li {
  list-style: square;
}
</style>