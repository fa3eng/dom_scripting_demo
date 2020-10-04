// window.onload = function () {

//     // 1.创建一个新的元素节点

//     // 1.1创建一个p标签的元素节点
//     let para = document.createElement('p');

//     // 2将新创建的元素节点插入到文档中

//     // 2.1获取文档节点
//     let testdiv = document.getElementById('testdiv');
//     // 2.2将未连接的元素节添加进文档
//     testdiv.appendChild(para);

//     // 3. 创建一个新的文本节点
//     let text = document.createTextNode('hello world');

//     // 4. 将新的文本节点添加到文档流中
//     para.appendChild(text);
// }

// 升级版 更加复杂一点

window.onload = function () {

    let testdiv = document.getElementById('testdiv');

    let para = document.createElement('p');
    testdiv.appendChild(para);

    let first_text = document.createTextNode('This is');
    para.appendChild(first_text);

    let em = document.createElement('em');
    para.appendChild(em);


    let em_text = document.createTextNode(' my ');
    em.appendChild(em_text);


    let last_text = document.createTextNode('content.');
    para.appendChild(last_text);
}