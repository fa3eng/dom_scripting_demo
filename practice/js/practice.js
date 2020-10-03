// 获取元素节点练习

//返回元素
// let test = document.getElementsByTagName('h1');
// alert(test[0].firstChild.nodeValue);

// let test = document.getElementById('test');
// alert(test.firstChild.nodeValue);



// 修改h1标签内容
// let head_text = document.getElementsByTagName('h1')[0];
// head_text.firstChild.nodeValue = '就这？';


// 点击a标签跳出弹窗
function openWin(whiURL) {

    let winURL = whiURL.getAttribute('href');

    window.open(winURL, 'ppp', 'width = 320, height = 480');
}

// plan 2
function openWin2(winURL) {

    console.log(winURL);
    window.open(winURL, 'ppp', 'width = 320, height = 480');
}


// plan 3

let winOpen = document.getElementById('winOpen');

winOpen.onclick = function () {
    openWin2(this.getAttribute('href'));
    return false;
}