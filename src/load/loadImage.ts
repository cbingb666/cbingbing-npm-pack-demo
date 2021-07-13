export default function asyncLoadImage (src: string | string[]) {
  if (Array.isArray(src)) {
    return Promise.all(src.map((s) => asyncLoadImage(s)))
  } else {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.src = src
      img.onload = () => {
        resolve(img)
      }
      img.onerror = (err) => {
        reject(err)
      }
    })
  }
}
