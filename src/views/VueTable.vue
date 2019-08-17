<template>
  <div class="html-table mx-5">
    <h1>Vue Table</h1>

    <table class="table table-bordered">
      <thead>
        <th>Col-1</th>
        <th>Col-2</th>
        <th class="action">操作</th>
      </thead>
      <tbody>
        <tr v-for="(data, index) in datas" :key="index">
          <td>{{ data.col1 }}</td>
          <td>{{ data.col2 }}</td>
          <td><button class="btn btn-primary btn-sm" @click="onClick(data)">ボタン</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datas: [
        {
          col1: 'R1-C1',
          col2: 'R1-C2',
        },
        {
          col1: 'R2-C1',
          col2: 'R2-C2',
        },
        {
          col1: 'R3-C1',
          col2: 'R3-C2',
        },
      ],
    };
  },
  methods: {
    onClick(data) {
      alert(data.col1);
    },
  },
};
</script>

<style lang="scss" scoped>
.html-table {
  text-align: left;
}
.table th,
.table td {
  padding: 5px 8px;
}
.action {
  width: 10px;
}
.btn-sm {
  width: 60px;
  font-size: 0.7em;
}
</style>
