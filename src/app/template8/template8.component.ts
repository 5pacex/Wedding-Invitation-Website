import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template8',
  templateUrl: './template8.component.html',
  styleUrls: ['./template8.component.css']
})
export class Template8Component implements OnInit {
  public groom = localStorage.getItem('groomName');
 public bride= localStorage.getItem('brideName');
 public weddate= localStorage.getItem('weddate');
 public venue= localStorage.getItem('venue');
  constructor() { }

  ngOnInit(): void {
  }

}
