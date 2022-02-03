import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnnouncedPet } from 'src/app/models/announcedPet';
import { AnnouncedPetService } from 'src/app/services/announced-pet.service';

@Component({
  selector: 'app-announced-pet',
  templateUrl: './announced-pet.component.html',
  styleUrls: ['./announced-pet.component.css']
})
export class AnnouncedPetComponent implements OnInit {
  private petType:string = "";
  page = 1;
  count = 0;
  pageSize = 7;
  announcedPets:AnnouncedPet[]= [];

  constructor(private announcedPetService:AnnouncedPetService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      if(params["petType"]){
        this.getAnnouncedPetsByType(params["petType"])
      }else{
        this.getAllAnnouncedPets();
      }
    })
  }

  getAllAnnouncedPets(){
    this.announcedPetService.getAll().subscribe(response =>{
      this.announcedPets = response;
    }) 
  }

  getAnnouncedPets(){
    this.announcedPetService.getByType(this.petType, this.page).subscribe(response =>{
      console.log("response",response)
        this.announcedPets = response.data;
        this.count = response.count;
    })
  }

  getAnnouncedPetsByType(type:string){
    this.petType = type;
    this.getAnnouncedPets();
  }

  onTableDataChange(event:any){
    console.log("event in on data change",event)
    this.page = event;
    this.getAnnouncedPets();
  }  
 

}
