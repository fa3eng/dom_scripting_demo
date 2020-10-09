/**
 * 当鼠标移动到相关链接上的时候，就移动图片
 * @function
 * 
 */

function prepareSlidshow() {


    let preview = document.getElementById('preview');

    preview.style.position = 'absolute';
    preview.style.top = '0px';
    preview.style.left = '0px';

    let linklist = document.getElementById('linklist');
    let link_a = linklist.getElementsByTagName('a');

    link_a[0].onmouseover = function () {
        moveElement('preview', -100, 0, 10);
    }

    link_a[1].onmouseover = function () {
        moveElement('preview', -200, 0, 10);
    }

    link_a[2].onmouseover = function () {
        moveElement('preview', -300, 0, 10);
    }

    return true;

}

prepareSlidshow();

// addLoadEvent(prepareSlidshow);