import {OrderDetailDto} from "../dtos/OrderDetailDto";

export interface OrderItem {
  id: string,
  number: number,
  issueDate: string
  status: string,
  details: OrderDetailDto[],
  total: number
}
