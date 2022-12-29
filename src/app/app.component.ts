import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hideForm:boolean= true;
data:any={};
groom:string
bride:string
weddate:string
venue:string
  title = 'wedding';

  btnClick(groom,bride,weddate,venue) {

    this.groom=groom.value;
    this.bride=bride.value;
    this.weddate=weddate.value;
    this.venue=venue.value;
  


    localStorage.setItem('groomName',this.groom)
    localStorage.setItem('brideName',this.bride)
    localStorage.setItem('weddate',this.weddate)
    localStorage.setItem('venue',this.venue)
   

this.hideForm= !this.hideForm

  } 
}
