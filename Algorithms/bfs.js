initbfs = function () {
    t = document.getElementById("tableid");
    var totrows = t.rows.length;
    var totcols = t.rows[0].cells.length;
    vis = new Array(totrows);
    for (var i = 0; i < totrows; i++) {
        vis[i] = new Array(totcols);
    }
    for (var i = 0; i < totrows; i++) {
        for (var j = 0; j < totcols; j++) {
            vis[i][j] = {
                visited: false,
                parent: null
            };
        }
    }
    return vis;
}

bfs = function (endcell, queue, vis, includeanimation = true, speed = 10) {
    startcell = queue.dequeue();
    //console.log(queue.getLength());
    if (startcell && isinside(startcell)) {
        if (startcell.iseq(endcell)) {
            //console.log('vis = ', vis);
            reversepath = {
                array: new Array()
            }
            if (givePath(vis, end, start, reversepath)) {
                console.log(reversepath);
                visualisePath(reversepath, false, speed);
            }
            return;
        }
        else {
            leftnode = new node(startcell.getx() - 1, startcell.gety());
            rightnode = new node(startcell.getx() + 1, startcell.gety());
            topnode = new node(startcell.getx(), startcell.gety() - 1);
            bottomnode = new node(startcell.getx(), startcell.gety() + 1);

            // console.log(vis[leftnode.getx()][leftnode.gety()], vis[rightnode.getx()][rightnode.gety()], vis[topnode.getx()][topnode.gety()], vis[bottomnode.getx()][bottomnode.gety()]);

            if (leftnode && isinside(leftnode) && isvalid(leftnode) && vis[leftnode.getx()][leftnode.gety()].visited == false) {
                queue.enqueue(leftnode);
                vis[leftnode.getx()][leftnode.gety()].visited = true;
                vis[leftnode.getx()][leftnode.gety()].parent = startcell;
            }
            if (rightnode && isinside(rightnode) && isvalid(rightnode) && vis[rightnode.getx()][rightnode.gety()].visited == false) {
                queue.enqueue(rightnode);
                vis[rightnode.getx()][rightnode.gety()].visited = true;
                vis[rightnode.getx()][rightnode.gety()].parent = startcell;
            }
            if (topnode && isinside(topnode) && isvalid(topnode) && vis[topnode.getx()][topnode.gety()].visited == false) {
                queue.enqueue(topnode);
                vis[topnode.getx()][topnode.gety()].visited = true;
                vis[topnode.getx()][topnode.gety()].parent = startcell;
            }
            if (bottomnode && isinside(bottomnode) && isvalid(bottomnode) && vis[bottomnode.getx()][bottomnode.gety()].visited == false) {
                queue.enqueue(bottomnode);
                vis[bottomnode.getx()][bottomnode.gety()].visited = true;
                vis[bottomnode.getx()][bottomnode.gety()].parent = startcell;
            }
        }
        if (includeanimation) {
            setAnimation(getCell(startcell));
        }
        setTimeout(() => {
            return bfs(endcell, queue, vis);
        }, speed);
        return false;
    }
}


/// slow = 100, fast = 10, moderate - 50