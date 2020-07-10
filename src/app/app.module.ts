import { BrowserModule, HammerGestureConfig, HammerModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import * as Hammer from 'hammerjs';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoRightClickDirective } from './no-right-click.directive';
import { RouterModule } from '@angular/router';

// custom configuration Hammerjs
export class HammerConfig extends HammerGestureConfig {
  overrides = <any>{
    'swipe': { direction: Hammer.DIRECTION_ALL }
  };
}


@NgModule({
  declarations: [
    AppComponent,
    NoRightClickDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HammerModule,
    RouterModule.forRoot([]),
    FormsModule
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
