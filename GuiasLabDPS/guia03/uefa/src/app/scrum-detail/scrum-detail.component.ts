import { Component, OnInit, Input } from '@angular/core';
import { Scrum } from '../scrum';
@Component({
  selector: 'app-scrum-detail',
  templateUrl: './scrum-detail.component.html',
  styleUrls: ['./scrum-detail.component.css']
})
export class ScrumDetailComponent implements OnInit {

  @Input()
  scrum:Scrum;

  constructor() { }

  ngOnInit(): void {
  }

}
