<script>
export default {
  name: 'TreeTable',

  props: {
    rows: {
      type: Array,
      required: true,
    },
  },

  // eslint-disable-next-line
  render(h) {
    // const rows = this.rows || [];
    return (
      <table class="table table-border">
        <thead>
          <tr>
            <th class="expand-cursor"></th>
            {this.$slots.header}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <i class="lv-1 fas fa-angle-down"></i>
            </td>
            {this.$slots.lv1}
          </tr>
        </tbody>
      </table>
    );
  },
};
</script>

<style lang="scss" scoped>
.table th,
.table td {
  padding: 5px 8px;
}
.expand-cursor {
  width: 10px;
}
.lv-1 {
  margin-left: 0px;
}
.lv-2 {
  margin-left: 12px;
}
.lv-3 {
  margin-left: 24px;
}
</style>
