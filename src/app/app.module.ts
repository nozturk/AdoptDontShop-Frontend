

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { HttpClientModule } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HomeComponent } from './components/home/home.component';
import { AnnouncedPetComponent } from './components/announced-pet/announced-pet.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { TypeComponent } from './components/type/type.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    HomeComponent,
    AnnouncedPetComponent,
    TypeComponent
  ],
  imports: [
    HttpClientModule,
    NgxPaginationModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



