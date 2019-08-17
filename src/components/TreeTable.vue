<script>
export default {
  name: 'TreeTable',

  props: {
    datas: {
      type: Array,
      required: true,
    },
  },

  render() {
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
        if (this.hasChildren(data)) {
          // 入れ子になっている row をレンダリング
          return this.renderRows(data.children, level + 1, acc);
        }
        return acc;
      }, accumulator);
    },
    renderRow(data, level) {
      return (
        <tr class={ this.rowClass(data, level) }>
          <td>
            {
              (this.hasChildren(data)) && (
                <a href="" onClick={ e => this.onIconClick(e, data) }>
                  <i class={ this.iconClass() }></i>
                </a>
              )
            }
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
    hasChildren(data) {
      return ('children' in data);
    },
    onIconClick(e, data) {
      e.preventDefault();
      e.stopPropagation();
      console.log(data.hide);
      if (this.hasChildren(data)) {
        if (!('hide' in data)) {
          // eslint-disable-next-line
          data.hide = true;
        }
        // eslint-disable-next-line
        data.hide = !data.hide;
      }
      console.log(data.hide);
    },
    rowClass(data, level) {
      const levelClass = this.hasChildren(data) ? `level-${level}` : '';
      const hideClass = data.hide ? 'hide' : '';
      return `${levelClass} ${hideClass}`;
    },
    iconClass() {
      const icon = 'fas fa-angle-right';
      return icon;
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
td {
  a {
    color: inherit;
  }
}
i {
  padding: 2px 7px;
}
tr {
  &.level-1 a {
    margin-left: 0px;
  }
  &.level-2 a{
    margin-left: 10px;
  }
  &.level-3 a{
    margin-left: 20px;
  }
}
.row-level-slot-error {
  color: red;
}
.hide {
  display: none;
}
</style>
