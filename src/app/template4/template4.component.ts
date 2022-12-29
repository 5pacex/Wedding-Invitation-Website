import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template4',
  templateUrl: './template4.component.html',
  styleUrls: ['./template4.component.css']
})
export class Template4Component implements OnInit {
  public groom = localStorage.getItem('groomName');
 public bride= localStorage.getItem('brideName');
 public weddate= localStorage.getItem('weddate');
 public venue= localStorage.getItem('venue');
  constructor() { }

  ngOnInit(): void {
  }

}
