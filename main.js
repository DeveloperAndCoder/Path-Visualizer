var t = document.createElement("table");
t.id = "tableid";
var grid = document.getElementById("board");
var algorithm = null

var visualised = false;

function addgrid(rowCount = 20, colCount = 60) {
  for (var rows = 0; rows < 20; rows++) {
    var newRow = document.createElement("tr");
    // console.log(newRow);
    t.appendChild(newRow);
    for (var cols = 0; cols < 60; cols++) {
      var newCell = document.createElement("td");
      newCell.id = rows.toString() + "," + cols.toString();
      newRow.appendChild(newCell);
    }
  }
  grid.appendChild(t);
}

addgrid();

start = new node(5, 5);
end = new node(5, 55);

var startcell = getCell(start);
var endcell = getCell(end);

setclass(startcell, "startcell");
setclass(endcell, "endcell");