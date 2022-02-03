import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AnnouncedPet } from '../models/announcedPet';
import { ListResponseModel } from '../models/listResponseModel';
@Injectable({
  providedIn: 'root'
})
export class AnnouncedPetService {
  private baseUrl = environment.baseUrl
  apiUrl = '/api/v1/';

  constructor(private httpClient:HttpClient) { }

  getPetTypes():Observable<string[]>{
    let urlSuffix = this.baseUrl + this.apiUrl + "announcedPet/type";
    return this.httpClient.get<string[]>( urlSuffix);
  }

  getByType(type:string,page:number):Observable<ListResponseModel<AnnouncedPet>>{
    console.log("getbytype")
    let urlSuffix = this.baseUrl + this.apiUrl +"announcedPet/type/" + type + "?page=" + page; 
    return this.httpClient.get<ListResponseModel<AnnouncedPet>>(urlSuffix);

  }

  getAll():Observable<AnnouncedPet[]>{
    console.log("getall")
    let urlSuffix = this.baseUrl + this.apiUrl +"announcedPet"; 
    return this.httpClient.get<AnnouncedPet[]>(urlSuffix);

  }
}
