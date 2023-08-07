import { Component, Output, EventEmitter, ViewChild, ElementRef, OnInit } from '@angular/core';
import { RoversService } from 'src/app/rover/rovers.service';

@Component({
  selector: 'app-mars',
  templateUrl: './mars.component.html',
  styleUrls: ['./mars.component.css']
})
export class MarsComponent implements OnInit{
  rover = '';
  date = '';
  photos: any = [];
  pages:any = [];
  load = false;

  @Output() submitted = new EventEmitter<string>();
  constructor(private rovers: RoversService) {}

  
  ngOnInit() {
    this.load = true;
    this.rovers.search().subscribe((response: any) => {
      this.pages = response.rovers;
      this.load = false;      
  })
  }
  getData(event: any) {
    this.rover = event.target.value;
  }
  onInput(event: Event) {
    this.date = (event.target as HTMLInputElement).value;
  }
  onClick(event:any) {
    this.submitted.emit(this.date)   
    this.submitted.emit(this.rover)    
  }
  onPhoto() {
    this.rovers.getPhotos(this.rover, this.date).subscribe((response: any) => {
      this.photos = response.photos
    })
  }
}