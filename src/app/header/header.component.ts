import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{
@Output() inputSelected= new EventEmitter<string>();

onSelect(input:string){
 this.inputSelected.emit(input);
 
}
}

// import { Component, EventEmitter, Output } from '@angular/core';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html'
// })
// export class HeaderComponent {
//   @Output() featureSelected = new EventEmitter<string>();

//   onSelect(feature: string) {
//     this.featureSelected.emit(feature);
//   }
// }
