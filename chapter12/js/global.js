function hightlightPage() {

    let header = document.getElementsByTagName('header');
    if (header.length == 0) return false;

    let navs = header[0].getElementsByTagName('nav');
    if (navs.length == 0) return false;

    // travrese
    let links = navs[0].getElementsByTagName('a');
    let link_url;

    for (let i = 0; i < links.length; i++) {

        let current_url = window.location.href
        link_url = links[i].getAttribute('href');

        if (current_url.indexOf(link_url) != -1) {

            links[i].className = 'here';
            let linktext = links[i].lastChild.nodeValue.toLowerCase();
            document.body.setAttribute('id', linktext);
        }

    }
}


function prepareSlideshow() {

    let intro = document.getElementById('intro');

    let slideshow = document.createElement('div');
    slideshow.setAttribute('id', 'slideshow');

    let preview = document.createElement('img');
    preview.setAttribute('id', 'preview');
    preview.setAttribute('src', "images/slideshow.gif");

    slideshow.appendChild(preview);
    intro.parentNode.appendChild(slideshow);


    let intro_link = document.getElementsByTagName('a');

    for (let i = 0; i < intro_link.length; i++) {

        let destination;

        intro_link[i].onmouseover = function () {

            destination = this.getAttribute('href');

            if (destination.indexOf('index.html') != -1) {
                moveElement('preview', 0, 0, 5);
            }

            if (destination.indexOf('about.html') != -1) {
                moveElement('preview', -150, 0, 5);
            }

            if (destination.indexOf('photos.html') != -1) {
                moveElement('preview', -300, 0, 5);
            }

            if (destination.indexOf('live.html') != -1) {
                moveElement('preview', -450, 0, 5);
            }

            if (destination.indexOf('contact.html') != -1) {
                moveElement('preview', -600, 0, 5);
            }

        }
    }

    let frame = document.createElement('img');
    frame.setAttribute('src', 'images/frame.gif');
    frame.setAttribute('id', 'frame');
    slideshow.appendChild(frame);

}


/**
 *  move a Element.
 * @function
 * @param {string} elementID        元素的ID
 * @param {number} final_x          终点坐标x
 * @param {number} final_y          终点坐标y
 * @param {number} interval         时间间隔
 */

function moveElement(elementID, final_x, final_y, interval) {

    let elem = document.getElementById(elementID);

    // 检测elem的movement属性
    if (elem.movement) {
        clearTimeout(elem.movement);
    }

    // 因为缺少这个搞得我要死要活 我真的服了
    if (!elem.style.left) {
        elem.style.left = "0px";
    }
    if (!elem.style.top) {
        elem.style.top = "0px";
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



hightlightPage();
prepareSlideshow();