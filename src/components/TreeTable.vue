<script>
export default {
  name: 'TreeTable',

  props: {
    datas: {
      type: Array,
      required: true,
    },
  },

  // eslint-disable-next-line
  render(h) {
    return (
      <table class="table table-bordered">
        <thead>
          <tr>
            <th class="header-cursor"></th>
            { this.$slots.header }
          </tr>
        </thead>
        <tbody>
          { this.renderRows(this.datas, 1, []) }
        </tbody>
      </table>
    );
  },

  methods: {
    renderRows(datas, level, accumulator) {
      return datas.reduce((acc, data) => {
        const row = this.renderRow(data, level);
        acc.push(row);
        if ('children' in data) {
          // 入れ子になっている row をレンダリング
          return this.renderRows(data.children, level + 1, acc);
        }
        return acc;
      }, accumulator);
    },
    renderRow(data, level) {
      return (
        <tr class={ this.levelClass(data, level) }>
          <td>
            <i class={ this.iconClass(data, level) }></i>
          </td>
          {
            // 親コンポーネントの slot で icon カラム以外の td をレンダリング
            (`rowLevel_${level}` in this.$scopedSlots) && (
              this.$scopedSlots[`rowLevel_${level}`](data)
            )
          }
        </tr>
      );
    },
    levelClass(data, level) {
      return ('children' in data) ? `level-${level}` : '';
    },
    iconClass(data, level) {
      const icon = 'fas fa-angle-down';
      const levelClass = this.levelClass(data, level);
      return ('children' in data) ? `${levelClass} ${icon}` : '';
    },
  },
};
</script>

<style lang="scss" scoped>
.table th,
.table td {
  padding: 5px 8px;
}
.header-cursor {
  width: 10px;
}
i.level-1 {
  margin-left: 0px;
}
i.level-2 {
  margin-left: 10px;
}
i.level-3 {
  margin-left: 20px;
  margin-right: 1px;
}
</style>
