import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template6',
  templateUrl: './template6.component.html',
  styleUrls: ['./template6.component.css']
})
export class Template6Component implements OnInit {
  public groom = localStorage.getItem('groomName');
 public bride= localStorage.getItem('brideName');
 public weddate= localStorage.getItem('weddate');
 public venue= localStorage.getItem('venue');
  constructor() { }

  ngOnInit(): void {
  }

}
