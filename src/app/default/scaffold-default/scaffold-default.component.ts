import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scaffold-default',
  templateUrl: './scaffold-default.component.html',
  styleUrls: ['./scaffold-default.component.scss']
})
export class ScaffoldDefaultComponent implements OnInit {

  title = 'resumeWebsite';
  constructor() { }

  ngOnInit(): void {
  }

}
