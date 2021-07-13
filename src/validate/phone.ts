import { regPhone } from '../regexp/index'

export default function validPhone (val: string) {
  return regPhone.test(val)
}
