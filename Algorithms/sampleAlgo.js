algo = function (startcell, endcell) {
    if (startcell.getx() == endcell.getx() && startcell.gety() == endcell.gety()) {
        return []
    }
    presentNode = startcell;
    // console.log(endcell);
    presentNode.y += 1;
    //console.log(presentNode.getx(), presentNode.gety());
    cell = getCell(presentNode);
    // console.log("curr cell " , cell);
    // setColor(cell, "green");
    setAnimation(cell);
    // console.log(startcell.getx(), startcell.gety());
    setTimeout(() => {
        return algo(presentNode, endcell);
    }, 50);
}