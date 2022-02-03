import { ResponseModel } from "./responseModel";

export interface ListResponseModel<T> extends ResponseModel{
   count:number
   data: T[]
}