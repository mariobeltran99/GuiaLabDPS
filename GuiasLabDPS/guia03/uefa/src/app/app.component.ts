import { Component,OnInit } from '@angular/core';
import { Scrum } from './scrum';
import { ScrumService } from './scrum.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ScrumService]
})
export class AppComponent implements OnInit{
  title = 'Liga de Campeones de la UEFA';
  scrums : Scrum[];
  selectedScrum:Scrum;

  constructor(private scrumservice:ScrumService){}

  getScrums():void{
    this.scrumservice.getScrums().then(scrums => this.scrums = scrums);
  }

  ngOnInit():void{
    this.getScrums();
  }
  
  onSelect(scrum: Scrum): void {
    this.selectedScrum = scrum;
  }

}
