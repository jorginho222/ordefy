import {v4 as uuidv4} from 'uuid'
import {OrderDto} from "../interfaces/dtos/OrderDto";

export function OrderDefault(): OrderDto {
  return {
    id: uuidv4(),
    details: []
  }
}
