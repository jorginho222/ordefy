import {OrderDetailDto} from "../dtos/OrderDetailDto";

export interface OrderItem {
  id: string,
  number: number,
  issueDate: string,
  table: number,
  status: string,
  details: OrderDetailDto[],
  total: number
}
