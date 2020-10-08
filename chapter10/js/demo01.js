let moment;
let elem = document.getElementById('message');

function positionMessage() {

    elem.style.position = 'absolute';
    elem.style.top = '100px';
    elem.style.left = '50px';

    moment = setTimeout('moveMessage(200, 100)', 5000);

    return true;

}

// parameter ：Target coordinates
function moveMessage(targeXPos, targeYPos) {

    // Get the current position of the element
    let xpos = elem.style.left;
    let ypos = elem.style.top;

    // Convert the string to number
    xpos = parseInt(xpos);
    ypos = parseInt(ypos);

    // check current position 
    if (xpos == targeXPos && ypos == targeYPos) {
        return true;
    }

    if (xpos < targeXPos) xpos++;

    if (xpos > targeXPos) xpos--;

    if (ypos < targeYPos) ypos++;

    if (ypos > targeYPos) ypos--;

    // Assignment
    elem.style.left = xpos + 'px';
    elem.style.top = ypos + 'px';

    moment = setTimeout(function () {
        moveMessage(targeXPos, targeYPos)
    }, 10);

    setTimeout()
}


positionMessage();