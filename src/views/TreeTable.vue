<template>
  <div class="tree-table mx-5">
    <h1>Tree Table</h1>

    <div id="table-nav" class="row">
      <div class="col">
        <ul class="list-group list-group-horizontal">
          <li class="list-group-item" v-for="(rowCount, index) in rowCounts" :key="index">
            Lv-{{ index + 1 }}: {{ rowCount }} 件
          </li>
        </ul>
      </div>
      <div class="col text-right">
        <button class="btn btn-outline-primary btn-sm" @click="$refs.tree_table.closeTable()">
          全て閉じる
        </button>
        <button class="btn btn-outline-primary btn-sm" @click="$refs.tree_table.openTable()">
          全て開く
        </button>
      </div>
    </div>

    <tree-table :datas="datas" ref="tree_table">

      <!-- 通常のヘッダ：tr とアイコン用の th は記述しない -->
      <!-- <template v-slot:header>
        <th>ID</th>
        <th>Col-1</th>
        <th>Col-2</th>
        <th>Col-3</th>
        <th>Col-4</th>
        <th class="action">Col-5</th>
      </template> -->

      <!-- カスタムヘッダ：tr も記述する。アイコン用の th も記述する -->
      <template v-slot:custom_header>
        <tr>
          <th rowspan="2" class="header-icon"></th>
          <th rowspan="2">ID</th>
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
        <td>{{ slotProps.id }}</td>
        <td colspan="4">{{ slotProps.col_1 }}</td>
        <td>
          <button class="btn btn-primary btn-sm" @click="onClick(slotProps)">Col-1</button>
        </td>
      </template>

      <!-- ネスト階層レベル２：tr とアイコン用の td は記述しない -->
      <template v-slot:rowLevel_2="slotProps">
        <td>{{ slotProps.id }}</td>
        <td>{{ slotProps.col_1 }}</td>
        <td colspan="3">{{ slotProps.col_2 }}</td>
        <td>
          <button class="btn btn-danger btn-sm" @click="onDelete(slotProps)">Delete</button>
        </td>
      </template>

      <!-- ネスト階層レベル３：tr とアイコン用の td は記述しない -->
      <template v-slot:rowLevel_3="slotProps">
        <td>{{ slotProps.id }}</td>
        <td>{{ slotProps.col_1 }}</td>
        <td>{{ slotProps.col_2 }}</td>
        <td colspan="2">{{ slotProps.col_3 }}</td>
        <td>
          <button class="btn btn-warning btn-sm" @click="onClick(slotProps)">Col-3</button>
        </td>
      </template>

      <!-- ネスト階層レベル４：tr とアイコン用の td は記述しない -->
      <template v-slot:rowLevel_4="slotProps">
        <td>{{ slotProps.id }}</td>
        <td>{{ slotProps.col_1 }}</td>
        <td>{{ slotProps.col_2 }}</td>
        <td>{{ slotProps.col_3 }}</td>
        <td>{{ slotProps.col_4 }}</td>
        <td>
          <button class="btn btn-danger btn-sm" @click="onDelete(slotProps)">Delete</button>
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
      rowCounts: [],
      datas: [
        // ネスト階層レベル１
        {
          id: 1,
          col_1: 'Lv1-R1-C1',
          children: [
            // ネスト階層レベル２
            {
              id: 2,
              col_1: 'Lv2-R2-C1',
              col_2: 'Lv2-R2-C2',
              children: [
                // ネスト階層レベル３
                {
                  id: 3,
                  col_1: 'Lv3-R3-C1',
                  col_2: 'Lv3-R3-C2',
                  col_3: 'Lv3-R3-C3',
                  children: [
                    // ネスト階層レベル４
                    {
                      id: 4,
                      col_1: 'Lv4-R4-C1',
                      col_2: 'Lv4-R4-C2',
                      col_3: 'Lv4-R4-C3',
                      col_4: 'Lv4-R4-C4',
                    },
                    {
                      id: 5,
                      col_1: 'Lv4-R5-C1',
                      col_2: 'Lv4-R5-C2',
                      col_3: 'Lv4-R5-C3',
                      col_4: 'Lv4-R5-C4',
                    },
                    {
                      id: 6,
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
          id: 7,
          col_1: 'Lv1-R7-C1',
          children: [
            // ネスト階層レベル２
            {
              id: 8,
              col_1: 'Lv2-R8-C1',
              col_2: 'Lv2-R8-C2',
              children: [
                // ネスト階層レベル３
                {
                  id: 9,
                  col_1: 'Lv3-R9-C1',
                  col_2: 'Lv3-R9-C2',
                  col_3: 'Lv3-R9-C3',
                  children: [
                    // ネスト階層レベル４
                    {
                      id: 10,
                      col_1: 'Lv4-R10-C1',
                      col_2: 'Lv4-R10-C2',
                      col_3: 'Lv4-R10-C3',
                      col_4: 'Lv4-R10-C4',
                    },
                    {
                      id: 11,
                      col_1: 'Lv4-R11-C1',
                      col_2: 'Lv4-R11-C2',
                      col_3: 'Lv4-R11-C3',
                      col_4: 'Lv4-R11-C4',
                    },
                    {
                      id: 12,
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
  created() {
    this.rowCounts = this.countTreeDatasByLevel(this.datas);
  },
  watch: {
    datas: {
      // eslint-disable-next-line
      handler(val) {
        this.rowCounts = this.countTreeDatasByLevel(this.datas);
      },
      deep: true,
    },
  },
  methods: {
    onClick(target) {
      // eslint-disable-next-line
      alert(target.id);
    },
    onDelete(target) {
      // this.deleteDataFromTreeTableDatas(this.datas, target, data => data.id === target.id);
      this.deleteFromTreeDatas(this.datas, target);
    },
    // TODO: TreeTable コンポーネント側に移せないか？
    deleteFromTreeDatas(datas, target, conditionFunc = data => data.id === target.id) {
      datas.forEach((data, index) => {
        if (conditionFunc(data)) {
          datas.splice(index, 1);
          return;
        }
        if ('children' in data) {
          this.deleteFromTreeDatas(data.children, target, conditionFunc);
          if (data.children.length === 0) {
            // eslint-disable-next-line
            delete data.children;
          }
        }
      });
    },
    // TODO: TreeTable コンポーネント側に移せないか？
    countTreeDatasByLevel(datas, level = 0, accumuratior = []) {
      return datas.reduce((acc, data) => {
        // eslint-disable-next-line
        acc[level] = (acc[level] | 0) + 1;
        if ('children' in data) {
          this.countTreeDatasByLevel(data.children, level + 1, acc);
        }
        return acc;
      }, accumuratior);
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
  font-size: 0.7em;
}
td {
  .btn-sm {
    width: 60px;
  }
}
.action {
  width: 10px;
}
#table-nav {
  .btn {
    margin: 4px;
  }
}
.list-group {
  font-size: 0.7em;
  margin-bottom: 5px;

  .list-group-item {
    padding: 5px 10px;
  }
}
</style>
