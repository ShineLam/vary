/**
 * 
 * @param {version} v1.0 
 */

function vary(elm, attr, val) {
  if (!elm.transform) {
    elm.transform = {}
  }
  if (typeof val === 'undefined') {   // 取值
    // 无值设置默认值
    if (typeof elm.transform[attr] === 'undefined') {
      switch (attr) {
        case 'scale':
          case 'scaleX':
            case 'scaleY':
              case 'scaleZ':
                elm.transform[attr] = 1
                break
                default:
          elm.transform[attr] = 0
          
        }
        return elm.transform[attr]
      } 
    } else {      // 赋值
    elm.transform[attr] = val
    var transformVal = ''
    for (const name in elm.transform) {
      switch (name) {
        case 'scale':
        case 'scaleX':
        case 'scaleY':
        case 'scaleZ':
          transformVal += name + '(' + (elm.transform[name]) + ')'
          break
        case 'rotate':
        case 'rotateX':
        case 'rotateY':
        case 'rotateZ':
        case 'skew':
        case 'skewX':
        case 'skewY':
          transformVal += name + '(' + (elm.transform[name]) + 'deg)'
          break
          default:
          transformVal += name + '(' + (elm.transform[name]) + 'px)'
      }
    }
    elm.style.WebkitTransform = elm.style.transform = transformVal
  }
}