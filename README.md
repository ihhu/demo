# demo
GitHub Page：[https://ihhu.github.io/demo/](https://ihhu.github.io/demo/)

## canvas 常用语法
> HTML5 `<canvas>` 标签用于绘制图像（通过脚本，通常是 JavaScript）。
> 
> 不过，`<canvas>` 元素本身并没有绘制能力（它仅仅是图形的容器） - 您必须使用脚本来完成实际的绘图任务。
> `getContext()` 方法可返回一个对象，该对象提供了用于在画布上绘图的方法和属性。
> 
> 下面将介绍 `getContext()`方法返回对象 的一些常用的属性和方法 


### 1、`context.fillStyle`属性
设置或返回用于填充绘画的颜色、渐变或模式

#### 语法
`context.strokeStyle=color|gradient|pattern;    //默认值 #000000`

#### 属性值
值 | 描述 
-|-
color | 指示绘图笔触颜色的 CSS 颜色值。默认值是 #000000。
gradient | 用于填充绘图的渐变对象（线性或放射性）
pattern | 用于创建 pattern 笔触的 pattern 对象


### 2、`context.strokeStyle`属性
设置或返回用于笔触的颜色、渐变或模式

#### 语法
`context.strokeStyle=color|gradient|pattern;    //默认值 #000000`

#### 属性值
值 | 描述 
-|-
color | 指示绘图笔触颜色的 CSS 颜色值。默认值是 #000000。
gradient | 用于填充绘图的渐变对象（线性或放射性）
pattern | 用于创建 pattern 笔触的 pattern 对象



### 3、`context.lineWidth`属性
设置或返回当前的线条宽度

#### 语法
`context.lineWidth=number;    //默认值 1`

#### 属性值
值 | 描述 
-|-
number | 当前线条的宽度，以像素计。

### 4、`context.rect(x, y, width, height)` 方法
创建矩形

#### 参数值
参数 | 描述 
-|-
x | 矩形左上角的 x 坐标
y | 矩形左上角的 y 坐标
width | 矩形的宽度，以像素计
height | 矩形的高度，以像素计


### 5、`context.fillRect(x, y, width, height)`方法
绘制“被填充”的矩形

#### 参数值
参数 | 描述 
-|-
x | 矩形左上角的 x 坐标
y | 矩形左上角的 y 坐标
width | 矩形的宽度，以像素计
height | 矩形的高度，以像素计

### 6、`context.strokeRect(x, y, width, height)`方法
绘制矩形（无填充）

#### 参数值
参数 | 描述 
-|-
x | 矩形左上角的 x 坐标
y | 矩形左上角的 y 坐标
width | 矩形的宽度，以像素计
height | 矩形的高度，以像素计

### 7、`context.clearRect(x, y, width, height)`方法
在给定的矩形内清除指定的像素

#### 参数值
参数 | 描述 
-|-
x | 矩形左上角的 x 坐标
y | 矩形左上角的 y 坐标
width | 矩形的宽度，以像素计
height | 矩形的高度，以像素计


### 8、`context.beginPath()`方法
起始一条路径，或重置当前路径

### 9、`context.closePath()`方法
创建从当前点回到起始点的路径


### 10、`context.fill()`方法
填充当前绘图（路径）

### 11、`context.stroke()`方法
绘制已定义的路径

### 12、`context.arc(x, y, r, sAngle, eAngle, counterclockwise)`方法
创建弧/曲线（用于创建圆形或部分圆）

#### 参数值
参数 | 描述 
-|-
x | 圆的中心的 x 坐标。
y | 圆的中心的 y 坐标。
r | 圆的半径。
sAngle | 起始角，以弧度计。（弧的圆形的三点钟位置是 0 度）。
eAngle | 结束角，以弧度计。
counterclockwise | 可选。规定应该逆时针还是顺时针绘图。False = 顺时针，true = 逆时针。


### 13、`context.font`属性
设置或返回文本内容的当前字体属性。

#### 语法
`context.font="italic small-caps bold 12px arial";    //默认值 10px sans-serif`


### 14、`context.textAlign`属性
设置或返回文本内容的当前对齐方式。

#### 语法
`context.textAlign="center|end|left|right|start";    //默认值 start`
#### 属性值
值 | 描述 
-|-
start | 默认。文本在指定的位置开始。
end | 文本在指定的位置结束。
center | 文本的中心被放置在指定的位置。
left | 文本在指定的位置开始。
right | 文本在指定的位置结束。


### 15、`context.textBaseline`属性
设置或返回在绘制文本时使用的当前文本基线。

#### 语法
`	context.textBaseline="alphabetic|top|hanging|middle|ideographic|bottom";    //默认值 alphabetic`
#### 属性值
值 | 描述 
-|-
alphabetic | 默认。文本基线是普通的字母基线。
top | 文本基线是 em 方框的顶端。
hanging | 文本基线是悬挂基线。
middle | 文本基线是 em 方框的正中。
ideographic | 文本基线是表意基线。
bottom | 文本基线是 em 方框的底端。



### 16、`context.fillText(text, x, y, maxWidth)`方法
在画布上绘制"被填充的"文本。
#### 参数值
参数 | 描述 
-|-
text | 规定在画布上输出的文本。
x | 开始绘制文本的 x 坐标位置（相对于画布）。
y | 开始绘制文本的 y 坐标位置（相对于画布）。
maxWidth | 	可选。允许的最大文本宽度，以像素计。


### 17、`context.strokeText(text, x, y, maxWidth)`方法
在画布上绘制文本（无填充）。
#### 参数值
参数 | 描述 
-|-
text | 规定在画布上输出的文本。
x | 开始绘制文本的 x 坐标位置（相对于画布）。
y | 开始绘制文本的 y 坐标位置（相对于画布）。
maxWidth | 	可选。允许的最大文本宽度，以像素计。

### 18、`context.save()`方法
保存当前环境的状态。

### 19、`context.restore()`方法
返回之前保存过的路径状态和属性。


更多属性及方法请查看>>[canvas参考手册](https://www.runoob.com/tags/ref-canvas.html)

## canvas 动画实例

* loading
[https://ihhu.github.io/demo/canvas/loading/](https://ihhu.github.io/demo/canvas/loading/)

* 矩阵
[https://ihhu.github.io/demo/canvas/martrix/](https://ihhu.github.io/demo/canvas/martrix/)

