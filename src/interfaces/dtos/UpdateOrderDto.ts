import {OrderDetailDto} from "./OrderDetailDto";

export interface UpdateOrderDto {
  id: string,
  status: ?string,
  details: ?OrderDetailDto[]
}
