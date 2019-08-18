<script>
export default {
  name: 'TreeTable',

  render() {
    return (
      <table class="table table-bordered">
        { // header スロットがある時、ヘッダをレンダリングする
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
          ('custom_header' in this.$scopedSlots) && (
            <thead>
              { this.$slots.custom_header}
            </thead>
          )
        }
        <tbody>
          { this.renderRows(this.rows, 1, []) }
        </tbody>
      </table>
    );
  },

  props: {
    datas: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      rows: this.datas,
    };
  },

  created() {
    this.initChildren(this.rows, 1, false);
  },

  methods: {
    renderRows(rows, level, accumulator) {
      return rows.reduce((acc, row) => {
        const rowNode = this.renderRow(row, level);
        acc.push(rowNode);
        if (this.hasChildren(row)) {
          // 入れ子になっている row をレンダリング
          return this.renderRows(row.children, level + 1, acc);
        }
        return acc;
      }, accumulator);
    },
    renderRow(row, level) {
      return (
        <tr class={ this.rowClass(row, level) }>
          <td>
            {
              (this.hasChildren(row)) && (
                <a href="" onClick={ e => this.onIconClick(e, row) }>
                  <i class={ this.iconClass(row) }></i>
                </a>
              )
            }
          </td>
          {
            // rowLevel_X の名前付きスコープをレンダリング
            (`rowLevel_${level}` in this.$scopedSlots)
              ? this.$scopedSlots[`rowLevel_${level}`](row)
              : (<td class="row-level-slot-error">{`rowLevel_${level} のスロットを記述してください。`}</td>)
          }
        </tr>
      );
    },
    initChildren(rows, level, isOpen) {
      const isHide = !isOpen;
      rows.forEach((row) => {
        // オブジェクトへのプロパティ追加を Vue に検知させる為、this.$set() を使用する
        this.$set(row, 'isOpen', isOpen);
        if (level === 1) {
          this.$set(row, 'isHide', false);
        } else {
          this.$set(row, 'isHide', isHide);
        }
        if (this.hasChildren(row)) {
          this.initChildren(row.children, level + 1, isOpen);
        }
      });
    },
    onIconClick(e, row) {
      e.preventDefault();
      e.stopPropagation();
      this.toggleIsOpen(row);
    },
    toggleIsOpen(row) {
      // eslint-disable-next-line
      row.isOpen = !row.isOpen;
      this.setIsHideToChildren(row, !row.isOpen);
    },
    setIsHideToChildren(row, isHide) {
      if (this.hasChildren(row)) {
        row.children.forEach((childRow) => {
          // eslint-disable-next-line
          childRow.isHide = isHide;

          if (childRow.isOpen && this.hasChildren(childRow)) {
            this.setIsHideToChildren(childRow, isHide);
          }
        });
      }
    },
    hasChildren(row) {
      return ('children' in row);
    },
    // TODO: computed にできないか？
    rowClass(row, level) {
      const levelClass = this.hasChildren(row) ? `level-${level}` : '';
      const hideClass = row.isHide ? 'hide' : '';
      return `${levelClass} ${hideClass}`;
    },
    // TODO: computed にできないか？
    iconClass(row) {
      return row.isOpen ? 'fas fa-angle-down' : 'fas fa-angle-right';
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
