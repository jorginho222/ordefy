import {OrderDetailDto} from "./OrderDetailDto";
export interface OrderDto {
  id: string,
  details: OrderDetailDto[]
}
