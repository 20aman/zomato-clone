import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedInput = 'recipe';
   
  onPassing(input:string){
    this.loadedInput = input;
  }
}
