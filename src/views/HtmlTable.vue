<template>
  <div class="html-table mx-5">
    <h1>Html Table</h1>

    <table class="table table-bordered">
      <thead>
        <th class="expand-cursor"></th>
        <th>Col-1</th>
        <th>Col-2</th>
        <th>Col-3</th>
        <th>Col-4</th>
        <th>Col-5</th>
      </thead>
      <tbody>
        <tr>
          <td>
            <i class="lv-1 fas fa-angle-down"></i>
          </td>
          <td>Lv1-R1-C1</td>
          <td colspan="4">Lv1-R1-C2</td>
        </tr>
        <tr>
          <td>
            <i class="lv-2 fas fa-angle-down"></i>
          </td>
          <td>Lv2-R2-C1</td>
          <td>Lv2-R2-C2</td>
          <td colspan="3">Lv2-R2-C3</td>
        </tr>
        <tr>
          <td>
            <i class="lv-3 fas fa-angle-down"></i>
          </td>
          <td>Lv3-R3-C1</td>
          <td>Lv3-R3-C2</td>
          <td>Lv3-R3-C3</td>
          <td colspan="2">Lv3-R3-C4</td>
        </tr>
        <tr>
          <td></td>
          <td>Lv4-R4-C1</td>
          <td>Lv4-R4-C2</td>
          <td>Lv4-R4-C3</td>
          <td>Lv4-R4-C4</td>
          <td>Lv4-R4-C5</td>
        </tr>
        <tr>
          <td></td>
          <td>Lv4-R5-C1</td>
          <td>Lv4-R5-C2</td>
          <td>Lv4-R5-C3</td>
          <td>Lv4-R5-C4</td>
          <td>Lv4-R5-C5</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.html-table {
  text-align: left;
}
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
