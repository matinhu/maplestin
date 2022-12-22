import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapNavigatorPageRoutingModule } from './map-navigator-routing.module';

import { MapNavigatorPage } from './map-navigator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapNavigatorPageRoutingModule
  ],
  declarations: [MapNavigatorPage]
})
export class MapNavigatorPageModule {}
