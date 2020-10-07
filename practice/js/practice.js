let para = document.getElementById('example');

alert(typeof para.nodeName); //
alert(typeof para.style);

alert('this color is ' + para.style.color);
alert('the font family is ' + para.style.fontFamily);


para.style.color = 'black';