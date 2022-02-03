import { Province } from "./province";
import { User } from "./user";

export interface AnnouncedPet{
    id:number;
    petType:string;
    image:string | ArrayBuffer;
    province:Province;
    user:User;
    address:string;
    additionalInfo:string;

}