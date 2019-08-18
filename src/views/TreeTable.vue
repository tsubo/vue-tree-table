<template>
  <div class="tree-table mx-5">
    <h1>Tree Table</h1>

    <tree-table :datas="datas">

      <!-- 通常のヘッダ：tr とアイコン用の th は記述しない -->
      <!-- <template v-slot:header>
        <th>Col-1</th>
        <th>Col-2</th>
        <th>Col-3</th>
        <th>Col-4</th>
        <th class="action">Col-5</th>
      </template> -->
      <!-- TODO: 削除ボタンでデータを削除したら、画面に反映されるかチェックすること -->

      <!-- カスタムヘッダ：tr も記述する。アイコン用の th も記述する -->
      <template v-slot:custom_header>
        <tr>
          <th rowspan="2" class="header-icon"></th>
          <th rowspan="2">Col-1</th>
          <th rowspan="2">Col-2</th>
          <th colspan="2">Col-3</th>
          <th rowspan="2" class="action">Col-4</th>
        </tr>
        <tr>
          <th>Col-3-1</th>
          <th>Col-3-2</th>
        </tr>
      </template>

      <!-- ネスト階層レベル１：tr とアイコン用の td は記述しない -->
      <template v-slot:rowLevel_1="slotProps">
        <td colspan="4">{{ slotProps.col_1 }}</td>
        <td>
          <button class="btn btn-primary btn-sm" @click="onClick(slotProps.col_1)">Col-1</button>
        </td>
      </template>

      <!-- ネスト階層レベル２：tr とアイコン用の td は記述しない -->
      <template v-slot:rowLevel_2="slotProps">
        <td>{{ slotProps.col_1 }}</td>
        <td colspan="3">{{ slotProps.col_2 }}</td>
        <td>
          <button class="btn btn-info btn-sm" @click="onClick(slotProps.col_2)">Col-2</button>
        </td>
      </template>

      <!-- ネスト階層レベル３：tr とアイコン用の td は記述しない -->
      <template v-slot:rowLevel_3="slotProps">
        <td>{{ slotProps.col_1 }}</td>
        <td>{{ slotProps.col_2 }}</td>
        <td colspan="2">{{ slotProps.col_3 }}</td>
        <td>
          <button class="btn btn-warning btn-sm" @click="onClick(slotProps.col_3)">Col-3</button>
        </td>
      </template>

      <!-- ネスト階層レベル４：tr とアイコン用の td は記述しない -->
      <template v-slot:rowLevel_4="slotProps">
        <td>{{ slotProps.col_1 }}</td>
        <td>{{ slotProps.col_2 }}</td>
        <td>{{ slotProps.col_3 }}</td>
        <td>{{ slotProps.col_4 }}</td>
        <td>
          <button class="btn btn-danger btn-sm" @click="onClick(slotProps.col_4)">Col-4</button>
        </td>
      </template>

    </tree-table>
  </div>
</template>

<script>
import TreeTable from '../components/TreeTable.vue';

export default {
  components: {
    TreeTable,
  },
  data() {
    return {
      datas: [
        // ネスト階層レベル１
        {
          col_1: 'Lv1-R1-C1',
          children: [
            // ネスト階層レベル２
            {
              col_1: 'Lv2-R2-C1',
              col_2: 'Lv2-R2-C2',
              children: [
                // ネスト階層レベル３
                {
                  col_1: 'Lv3-R3-C1',
                  col_2: 'Lv3-R3-C2',
                  col_3: 'Lv3-R3-C3',
                  children: [
                    // ネスト階層レベル４
                    {
                      col_1: 'Lv4-R4-C1',
                      col_2: 'Lv4-R4-C2',
                      col_3: 'Lv4-R4-C3',
                      col_4: 'Lv4-R4-C4',
                    },
                    {
                      col_1: 'Lv4-R5-C1',
                      col_2: 'Lv4-R5-C2',
                      col_3: 'Lv4-R5-C3',
                      col_4: 'Lv4-R5-C4',
                    },
                    {
                      col_1: 'Lv4-R6-C1',
                      col_2: 'Lv4-R6-C2',
                      col_3: 'Lv4-R6-C3',
                      col_4: 'Lv4-R6-C4',
                    },
                  ],
                },
              ],
            },
          ],
        },
        // ネスト階層レベル１
        {
          col_1: 'Lv1-R7-C1',
          children: [
            // ネスト階層レベル２
            {
              col_1: 'Lv2-R8-C1',
              col_2: 'Lv2-R8-C2',
              children: [
                // ネスト階層レベル３
                {
                  col_1: 'Lv3-R9-C1',
                  col_2: 'Lv3-R9-C2',
                  col_3: 'Lv3-R9-C3',
                  children: [
                    // ネスト階層レベル４
                    {
                      col_1: 'Lv4-R10-C1',
                      col_2: 'Lv4-R10-C2',
                      col_3: 'Lv4-R10-C3',
                      col_4: 'Lv4-R10-C4',
                    },
                    {
                      col_1: 'Lv4-R11-C1',
                      col_2: 'Lv4-R11-C2',
                      col_3: 'Lv4-R11-C3',
                      col_4: 'Lv4-R11-C4',
                    },
                    {
                      col_1: 'Lv4-R12-C1',
                      col_2: 'Lv4-R12-C2',
                      col_3: 'Lv4-R12-C3',
                      col_4: 'Lv4-R12-C4',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    onClick(data) {
      // eslint-disable-next-line
      alert(data);
    },
  },
};
</script>

<style lang="scss" scoped>
.tree-table {
  text-align: left;
}
.header-icon {
  width: 60px;
}
.btn-sm {
  width: 60px;
  font-size: 0.7em;
}
.action {
  width: 10px;
}
</style>
