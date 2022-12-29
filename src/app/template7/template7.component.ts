import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template7',
  templateUrl: './template7.component.html',
  styleUrls: ['./template7.component.css']
})
export class Template7Component implements OnInit {
  public groom = localStorage.getItem('groomName');
 public bride= localStorage.getItem('brideName');
 public weddate= localStorage.getItem('weddate');
 public venue= localStorage.getItem('venue');
  constructor() { }

  ngOnInit(): void {
  }

}
