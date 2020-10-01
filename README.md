# JavaScript DOM编程艺术 笔记

---

## DOM

### D
document文档

### O

object 对象

JavaScript的对象分为三种
* 用户定义对象（user-defined-object），就是我们自己创建的对象
* 内建对象（native object），JavaScript自带的对象，Array，Math
* 宿主对象（host object），由浏览器提供的对象

### M
Model 模型

DOM把一份文档表示为一棵树，网页中有的元素有父元素，子元素，兄弟元素。

比如说下图：

![文档模型](README.assets/文档模型.png)

我们可以将文档的各种元素想象成一颗数，将文档称之为“节点树”

### 节点

节点（node），在DOM中有许多的节点。如上图所示

#### 元素节点

元素节点（element节点）

在上图中`head`是一个节点，`ul`无序列表也是一个节点，`html`也是一个节点，他是节点树的根元素

#### 属性节点

属性节点（attribute node）

属性节点用来对元素做出更具体的描述

**注意：属性是包含在html标签中的`<p id = "xx"></p>`**

#### 文本节点

文本节点（text node）

`<p>就这？</p>`里面的文本“就这”就是一个文本节点

**注意：文本节点是包含在html标签里面的**

### 获取元素

有三种方法可以获取元素节点（element node），分别是通过ID，标签名，类名获取

* document对象特有的函数

#### getElementById

* 语法`document.getElementById('ID')`
* 返回值：返回一个对象，在document对象中仅有的元素（ID是唯一的）

#### getElementByTagName

* 语法`document.getElementByTagName('tag')`
* 返回值：返回一个对象数组，其中的对象是文档中被选中的标签（具有相同标签名）

小练习：如果只想知道` id `属性值是` purchase `的元素包含着多少个列表项，该如何写

```js
let arr = document.getElementById('purchase').getElementByTagName('*');

alert(arr.length);

```
tips：`*`是通配符，一点要加上引号，和乘法符号做区别 

#### getElementByClassName

* 语法`document.getElementByClassName('class')`
* 返回值：具有相同类名元素的数组

### 获取和设置属性

获取和设置属性的方法不属于document，只能用过元素节点对象调用。

#### getAttribute

* 语法`object.getAttribute('属性')`
* 返回值：这个object（元素节点/对象）的属性值

#### setAttribute

* 语法`object.setAttribute('属性', 需要设置的属性值)`
* 如果没有该属性值，那么我们创建一个，如果有该属性值，我们覆盖掉之前的

### 检索和修改文本节点

首先我们要注意到一点，文本节点是**不包含**在元素节点里面的，所以当我们需要修改文本节点的时候，我们要通过元素节点，然后选择元素节点的子节点修改。

#### 获取元素的所有子元素 ——childNodes属性

* 语法：`element.childNodes`
* 返回值：数组

我们要注意的是这个属性所返回的是所有的节点，在文档树中不仅仅包含元素节点，事实上在文档中几乎每一样东西都是一个节点，空格和换行符都会被解释为节点，而他们全都包含在childNodes属性所返回的数组中。

我们可以使用`nodeType`来获取节点的nodetype属性

nodeType 属性总共有 12 种可取值，但其中仅有 3 种具有实用价值。
 元素节点的 nodeType 属性值是 1。
 属性节点的 nodeType 属性值是 2。 
 文本节点的 nodeType 属性值是 3。

#### firstChild和lastChild属性

两个等价写法
`element.childNodes[0] = element.firstChild`
`element.childNodes[element.childNodes.legth - 1] = element.lastChild`

#### 结合childNodes修改文本节点

* `nodeValue`
* 作用：得到或者设置一个节点的值
* 性质：属性

例子：`<p id="description"> Choose on image.</p>`

```js

let description = document.getElelmentById('description');

// 这里取到的值是空值，因为在<p>标签中没有文本元素，文本元素是其子元素
// description.nodeValue;

// 正确写法

// 获取
alert(description.childNodes[0].nodeValue);//choose on image.

// 设置
description.firstChild.nodeValue = 'xxx';


```



