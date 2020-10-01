function showPic(whicPic) {

    let source = whicPic.getAttribute('href');
    let placeholder = document.getElementById('placeholder');
    placeholder.setAttribute('src', source);

    // 获取图片的title值

    let text = whicPic.getAttribute('title');
    var description = document.getElementById('description');

    description.firstChild.nodeValue = text;

}


function countBodyChilren() {

    let body_element = document.getElementsByTagName('body')[0];

    alert(body_element.nodeType);
}

// window.onload = countBodyChilren;