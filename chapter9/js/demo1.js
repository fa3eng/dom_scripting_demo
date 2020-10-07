window.onload = function () {


    let head_tag = document.getElementsByTagName('h1');


    for (let i = 0; i < head_tag.length; i++) {

        let elem = getNextElement(head_tag[i].nextSibling);

        elem.style.fontWeight = 'bold';
        elem.style.fontSize = '1.2em';

    }
}


function getNextElement(node) {

    if (node.nodeType == 1) {
        return node;
    }

    // 递归
    if (node.nextSibling) {
        return getNextElement(node.nextSibling);
    }

    return;
}