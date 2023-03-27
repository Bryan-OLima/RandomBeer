import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  declarations: [
    CardComponent,
    HomePageComponent,
    NotFoundPageComponent,
    ButtonComponent
  ],
  imports: [
    MainRoutingModule,
    CommonModule
  ],
  exports: [
    CardComponent,
    HomePageComponent,
    NotFoundPageComponent,
    ButtonComponent
  ]
})
export class MainModule { }
