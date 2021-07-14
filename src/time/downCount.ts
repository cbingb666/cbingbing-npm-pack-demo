
type Count = number
type Cb = (count: Count) => any
/**
 * 倒数
 */
export const downCount = async (cb: Cb, count: Count) => {
  return new Promise<void>(resolve => {
    cb && cb(count)
    const timer = setInterval(() => {
      cb && cb(count)
      count--
      if (count <= 0) {
        clearInterval(timer)
        resolve()
      }
    }, 1000)
  })
}
