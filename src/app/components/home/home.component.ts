import { Component, OnInit } from '@angular/core';
import { AnnouncedPetService } from 'src/app/services/announced-pet.service';
import { PetType } from 'src/app/models/petType';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  petTypes:PetType[]=[];

  constructor(private announcedPetService:AnnouncedPetService) { }

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

}
