# vary
### 封装使用transform

```js
/** 
  * demo
  * @params {Object} element
  * @call vary(element)
*/
var elm = document.querySelector('#elm')
elm.addEventListener('touchstart', () => {
  vary(elm)
  elm.rotate = 90
  elm.scale = 2
})
```
