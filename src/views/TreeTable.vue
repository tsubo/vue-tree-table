<template>
  <div class="tree-table mx-5">
    <h1>Tree Table</h1>

    <tree-table :datas="datas">

      <template v-slot:header>
        <th>Col-1</th>
        <th>Col-2</th>
        <th>Col-3</th>
        <th>Col-4</th>
        <th>Col-5</th>
      </template>

      <template v-slot:rowLevel_1="slotProps">
        <td>{{ slotProps.col_1 }}</td>
        <td colspan="4">{{ slotProps.col_2 }}</td>
      </template>

      <template v-slot:rowLevel_2="slotProps">
        <td>{{ slotProps.col_1 }}</td>
        <td>{{ slotProps.col_2 }}</td>
        <td colspan="3">{{ slotProps.col_3 }}</td>
      </template>

      <template v-slot:rowLevel_3="slotProps">
        <td>{{ slotProps.col_1 }}</td>
        <td>{{ slotProps.col_2 }}</td>
        <td>{{ slotProps.col_3 }}</td>
        <td colspan="4">{{ slotProps.col_4 }}</td>
      </template>

      <template v-slot:rowLevel_4="slotProps">
        <td>{{ slotProps.col_1 }}</td>
        <td>{{ slotProps.col_2 }}</td>
        <td>{{ slotProps.col_3 }}</td>
        <td>{{ slotProps.col_4 }}</td>
        <td>{{ slotProps.col_5 }}</td>
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
        {
          col_1: 'Lv1-R1-C1',
          col_2: 'Lv1-R1-C2',
          children: [
            {
              col_1: 'Lv2-R2-C1',
              col_2: 'Lv2-R2-C2',
              col_3: 'Lv2-R2-C3',
              children: [
                {
                  col_1: 'Lv3-R3-C1',
                  col_2: 'Lv3-R3-C2',
                  col_3: 'Lv3-R3-C3',
                  col_4: 'Lv3-R3-C4',
                  children: [
                    {
                      col_1: 'Lv4-R4-C1',
                      col_2: 'Lv4-R4-C2',
                      col_3: 'Lv4-R4-C3',
                      col_4: 'Lv4-R4-C4',
                      col_5: 'Lv4-R4-C5',
                    },
                    {
                      col_1: 'Lv4-R5-C1',
                      col_2: 'Lv4-R5-C2',
                      col_3: 'Lv4-R5-C3',
                      col_4: 'Lv4-R5-C4',
                      col_5: 'Lv4-R5-C5',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          col_1: 'Lv1-R6-C1',
          col_2: 'Lv1-R6-C2',
          children: [
            {
              col_1: 'Lv2-R7-C1',
              col_2: 'Lv2-R7-C2',
              col_3: 'Lv2-R7-C3',
              children: [
                {
                  col_1: 'Lv3-R8-C1',
                  col_2: 'Lv3-R8-C2',
                  col_3: 'Lv3-R8-C3',
                  col_4: 'Lv3-R8-C4',
                  children: [
                    {
                      col_1: 'Lv4-R9-C1',
                      col_2: 'Lv4-R9-C2',
                      col_3: 'Lv4-R9-C3',
                      col_4: 'Lv4-R9-C4',
                      col_5: 'Lv4-R9-C5',
                    },
                    {
                      col_1: 'Lv4-R10-C1',
                      col_2: 'Lv4-R10-C2',
                      col_3: 'Lv4-R10-C3',
                      col_4: 'Lv4-R10-C4',
                      col_5: 'Lv4-R10-C5',
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
};
</script>

<style lang="scss" scoped>
.tree-table {
  text-align: left;
}
</style>
