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
        { // header スコープがある時だけ、ヘッダをレンダリングする
          ('header' in this.$scopedSlots) && (
            <thead>
              <tr>
                <th class="header-icon"></th>
                { this.$slots.header }
              </tr>
            </thead>
          )
        }
        { // ヘッダで rowspan を使いたい時はこのスロットを使う
          ('header_for_rowspan' in this.$scopedSlots) && (
            <thead>
              { this.$slots.header_for_rowspan }
            </thead>
          )
        }
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
          <td onClick={ e => this.onIconClick(e) }>
            <i class={ this.iconClass(data, level) }></i>
          </td>
          {
            // rowLevel_X の名前付きスコープをレンダリング
            (`rowLevel_${level}` in this.$scopedSlots)
              ? this.$scopedSlots[`rowLevel_${level}`](data)
              : (<td class="row-level-slot-error">{`rowLevel_${level} のスロットを記述してください。`}</td>)
          }
        </tr>
      );
    },
    onIconClick(e) {
      console.log(e);
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
.header-icon {
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
.row-level-slot-error {
  color: red;
}
.hide {
  display: none;
}
</style>
