function showPic(whicPic) {

    // 获取属性的方法，获取whicPic这个对象的 'href' 属性
    let source = whicPic.getAttribute('href');
    // 获取文档中ID为placeholder的元素
    let placeholder = document.getElementById('placeholder');
    // 将placeholder元素的src属性值设置成whicPic这个对象的href属性
    placeholder.setAttribute('src', source);

    // 获取图片的title值

    // 获取whicPic这个对象的tilte属性
    let text = whicPic.getAttribute('title');
    // 获取文档中ID为description的元素
    var description = document.getElementById('description');

    // firstChild = childNodes[0]
    // 选择id为description的元素的第一个子节点，并将这个节点值改为text
    description.firstChild.nodeValue = text;
}


function countBodyChilren() {

    let body_element = document.getElementsByTagName('body')[0];

    alert(body_element.nodeType);
}

// window.onload = countBodyChilren;


/*
小总结：

----操作元素节点
获取文档中的某个元素
document.getElement(s)ById/Name/ClassName/TagName('id/Name/ClassName/TagName');

---操作对象节点
获取对象（元素）的属性值
let 属性值  = Object.getAttribute('属性');

设置对象（元素）的属性值
Object.setAttribute('属性', 属性值);

---操作文本节点
1.获取文本节点，childNodes属性

<p>test</p>

使用childNodes属性获取这个文本节点

2. 获取文本节点的值
nodeValue 可以检索节点的值，也可以设置节点的值

*/