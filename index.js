/**
 * 
 * @param {version} v2.0 
 */

function vary(elm) {
  var units = {},
    transform,
    transforms = {},
    attrs = ['scale', 'scaleX', 'scaleY', 'scaleZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'skew', 'skewX', 'skewY', 'translate', 'translateX', 'translateY', 'translateZ']
  // 
  attrs.forEach(function (attr) {
    if (attr.indexOf('scale') !== -1) {
      units[attr] = ''
      transforms[attr] = 1
    } else {
      units[attr] = attr.indexOf('translate') !== -1 ? 'px' : 'deg'
      transforms[attr] = 0
    }
    // 
    Object.defineProperty(elm, attr, {
      configurable: true,
      get: function () {
        return transforms[attr]
      },
      set: function (value) {
        transform = ''
        transforms[attr] = value
        attrs.forEach(function (attr) {
          transform += attr + '(' + transforms[attr] + units[attr] + ')'
        })
        elm.style.WebkitTransform = elm.style.transform = transform
      }
    })
  })
}