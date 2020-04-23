getCell = function (cell) {
    // console.log(t.rows[cell.getx()].cells[cell.gety()]);
    return t.rows[cell.getx()].cells[cell.gety()];
    // return document.getElementById(cell.getx().toString() + "," + cell.gety().toString());
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

setclass = function (element, classname) {
    element.classList.toggle(classname);
}

setAnimation = function (element, classname = "visited") {
    // console.log("Vis", element);
    element.classList.add(classname);
    element.addEventListener('animationend', (e) => {
        //element = e.target.id;
        //
        //console.log(element);
        //element.classList.remove("visited");
    });
}

removeAnimation = function (element, classname = "visited") {
    element.classList.remove(classname);
}

setColor = function (element, color) {
    if (element && element.style) {
        element.style.backgroundColor = color;
    }
}

isinside = function (cell) {
    return cell.getx() < t.rows.length && cell.gety() < t.rows[0].cells.length && cell.getx() >= 0 && cell.gety() >= 0;
}

isvalid = function (cell) {
    element = getCell(cell);
    if (element.classList.contains("blocked")) {
        return false;
    }
    return true;
}

givePath = function (vis, currentcell, startcell, reversepath) {
    if (currentcell == null) {
        return false;
    }
    if (currentcell.getx() == startcell.getx() && currentcell.gety() == startcell.gety()) {
        reversepath.array.push(startcell);
        return true;
    }
    else {
        reversepath.array.push(currentcell);
        nextcell = vis[currentcell.getx()][currentcell.gety()].parent;
        return givePath(vis, nextcell, startcell, reversepath);
    }
}

visualisePath = function (reversepath, animate = false, speed = 10) {
    if (reversepath.array.length > 1) {
        cell = reversepath.array.pop();
        element = getCell(cell);
        // console.log(cell.getx(), cell.gety());
        removeAnimation(element);
        if (animate) {
            setAnimation(element, "path");
        }
        setTimeout(() => {
            return visualisePath(reversepath, true, speed);
        }, speed);
    }
}

callbfs = function (speed = 10) {
    $("clearpath").trigger("click");
    relstart = new node(start.getx(), start.gety());
    relend = end;
    console.log("Visualise " + algorithm);
    vis = initbfs();
    vis[relstart.getx()][relstart.gety()].visited = true;
    queue = new Queue();
    queue.enqueue(relstart);
    bfs(relend, queue, vis, false, speed);
}