import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template2',
  templateUrl: './template2.component.html',
  styleUrls: ['./template2.component.css']
})
export class Template2Component implements OnInit {
  public groom = localStorage.getItem('groomName');
 public bride= localStorage.getItem('brideName');
 public weddate= localStorage.getItem('weddate');
 public venue= localStorage.getItem('venue');
  constructor() { }

  ngOnInit(): void {
  }

}
