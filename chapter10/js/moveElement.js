let moment;
let elem = document.getElementById('message');

function positionMessage() {

    elem.style.position = 'absolute';
    elem.style.top = '100px';
    elem.style.left = '50px';

    moveElement('message', 200, 100, 10);

    return true;

}


/**
 *  move a Element.
 * @constructor
 * @param {string} elementID
 * @param {string} final_x
 * @param {string} final_y 
 * @param {string} interval
 */

function moveElement(elementID, final_x, final_y, interval) {

    let elem = document.getElementById(elementID);

    let xpos = parseInt(elem.style.left);
    let ypos = parseInt(elem.style.top);

    if (xpos == final_x && ypos == final_y) {
        return true;
    }

    if (xpos < final_x) xpos++;
    if (xpos > final_x) xpos--;
    if (ypos < final_y) ypos++;
    if (ypos > final_y) ypos--;

    elem.style.left = xpos + 'px';
    elem.style.top = ypos + 'px';

    setTimeout(function () {
        moveElement(elementID, final_x, final_y, interval)
    }, interval);
}

positionMessage();