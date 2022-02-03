import { Component, OnInit } from '@angular/core';
import { PetType } from 'src/app/models/petType';
import { AnnouncedPetService } from 'src/app/services/announced-pet.service';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {
  currentType:PetType;
  petTypes:PetType[] = []

  constructor( private announcedPetService:AnnouncedPetService) {}

  ngOnInit(): void {
    this.getPetTypes()
  }

  getPetTypes(){
    this.announcedPetService.getPetTypes().subscribe(response =>{
      response.forEach(type => {
        let petType = new PetType();
        petType.type = type;
        petType.buttonText = this.toTitleCase(type) + " Announcements " ;
        this.petTypes.push(petType)
      })
      console.log(this.petTypes)
    } )

  }

  toTitleCase(str:string) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }

  setCurrentType(type:PetType){
    this.currentType = type;
  }

  getCurrentTypeClass(type:PetType){
    if(type ==this.currentType){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
  getAllTypesClass(){
    if(!this.currentType){
     return "list-group-item active"
    }
    else{
     return "list-group-item"
    }
}

}
