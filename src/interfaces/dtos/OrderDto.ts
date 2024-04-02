import {OrderDetailDto} from "./OrderDetailDto";
export interface OrderDto {
  id: string,
  table: number,
  details: OrderDetailDto[]
}
