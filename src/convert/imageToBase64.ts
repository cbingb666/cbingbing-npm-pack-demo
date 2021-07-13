import asyncLoadImage from '../load/loadImage'

/**
 * @desc 图片转base64
 */
export default async function imageToBase64 (image: CanvasImageSource | string) {
  if (typeof image === 'string') {
    image = (await asyncLoadImage(image)) as CanvasImageSource
  }
  if (Array.isArray(image)) {
    return await Promise.all(image.map((i) => imageToBase64(i)))
  }
  const canvas = window.document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  canvas.width = image.width as number
  canvas.height = image.height as number
  ctx && ctx.drawImage(image, 0, 0)
  return canvas.toDataURL('image/png')
}
