<template>
  <div class="tree-table mx-5">
    <h1>Tree Table</h1>

    <tree-table :rows="rows">
      <template v-slot:header>
        <th>Col-1</th>
        <th>Col-2</th>
        <th>Col-3</th>
        <th>Col-4</th>
        <th>Col-5</th>
      </template>
      <template v-slot:lv1>
        <td>Lv1-R1-C1</td>
        <td colspan="4">Lv1-R1-C2</td>
      </template>
      <template v-slot:lv2="slotProps"></template>
      <template v-slot:lv3="slotProps"></template>
      <template v-slot:lv4="slotProps"></template>
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
      rows: [
        {
          col_1: 'Lv1-R1-C1',
          col_2: 'Lv1-R1-C2',
          _items: [
            {
              col_1: 'Lv2-R2-C1',
              col_2: 'Lv2-R2-C2',
              col_3: 'Lv2-R2-C3',
              _items: [
                {
                  col_1: 'Lv3-R3-C1',
                  col_2: 'Lv3-R3-C2',
                  col_3: 'Lv3-R3-C3',
                  col_4: 'Lv3-R3-C4',
                  _items: [
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
          _items: [
            {
              col_1: 'Lv2-R7-C1',
              col_2: 'Lv2-R7-C2',
              col_3: 'Lv2-R7-C3',
              _items: [
                {
                  col_1: 'Lv3-R8-C1',
                  col_2: 'Lv3-R8-C2',
                  col_3: 'Lv3-R8-C3',
                  col_4: 'Lv3-R8-C4',
                  _items: [
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
