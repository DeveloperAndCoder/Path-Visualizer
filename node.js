class node {
    constructor(x = 5, y = 5) {
        this.x = x;
        this.y = y;
    }
    getx() {
        return this.x;
    }
    gety() {
        return this.y;
    }
    setx(x) {
        this.x = x;
    }
    sety(y) {
        this.y = y;
    }
    iseq(diff_node) {
        return this.x == diff_node.x && this.y == diff_node.y;
    }
}