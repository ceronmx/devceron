import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent{

  @ViewChild('home') home!: ElementRef;
  @ViewChild('skills') skills!: ElementRef;
  @ViewChild('projects') projects!: ElementRef;
  @ViewChild('about') about!: ElementRef;

  constructor() { }

  scroll(elem: 'home' | 'skills' | 'projects' | 'about'){
    switch(elem){
      case 'home':
        this.home.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      break;

      case 'skills':
        this.skills.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      break;

      case 'projects':
        this.projects.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      break;

      case 'about':
        this.about.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      break;
    }
  }

  

}
