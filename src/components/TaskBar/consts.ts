import { Size } from '@/typings';

function transFloat(value: number) {
  return parseFloat(value.toFixed(5));
}
/**
 * 计算DOM元素的缩放比例。
 * 
 * @returns 返回计算出的最小缩放比例，确保目标DOM元素在宽度或高度上与源DOM元素保持一致。
 */
export function calcDomScale(targetDomSize: Size, sourceDomSize: Size) {
  const { height, width } = targetDomSize;
  const heightRatio = transFloat(sourceDomSize.width / width);
  const widthRatio = transFloat(sourceDomSize.width / height);

  return heightRatio < widthRatio ? heightRatio : widthRatio;
}
