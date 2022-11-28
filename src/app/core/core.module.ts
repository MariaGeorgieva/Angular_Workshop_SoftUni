import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    //Import for NgFor, NgIf etc...
    CommonModule
  ],
  //we use exports for things that are in 'declarations' if needed them
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
