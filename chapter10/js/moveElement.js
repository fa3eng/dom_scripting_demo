/**
 *  move a Element.
 * @function
 * @param {string} elementID        元素的ID
 * @param {string} final_x          终点坐标x
 * @param {string} final_y          终点坐标y
 * @param {string} interval         时间间隔
 */

function moveElement(elementID, final_x, final_y, interval) {

    let elem = document.getElementById(elementID);

    // 检测elem的movement属性
    if (elem.movement) {
        clearTimeout(elem.movement);
    }

    let xpos = parseInt(elem.style.left);
    let ypos = parseInt(elem.style.top);

    if (xpos == final_x && ypos == final_y) {
        return true;
    }

    let dist;

    if (xpos < final_x) {
        dist = Math.ceil((final_x - xpos) / 10);
        xpos += dist;
    }
    if (xpos > final_x) {
        dist = Math.ceil((xpos - final_x) / 10);
        xpos -= dist;
    }
    if (ypos < final_y) {
        dist = Math.ceil((final_y - ypos) / 10);
        ypos += dist;
    };
    if (ypos > final_y) {
        dist = Math.ceil((ypos - final_y) / 10);
        ypos -= dist;
    }

    elem.style.left = xpos + 'px';
    elem.style.top = ypos + 'px';

    // 给elem元素添加一个属性
    elem.movement = setTimeout(function () {
        moveElement(elementID, final_x, final_y, interval)
    }, interval);
}