import {v4 as uuidv4} from 'uuid'

export function OrderDetailDefault() {
  return {
    id: uuidv4(),
    description: '',
    quantity: 1,
    price: 0
  }
}
