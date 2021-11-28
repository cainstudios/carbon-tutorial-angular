import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

// carbon-components-angular default imports
import { UIShellModule, IconModule, IconService } from 'carbon-components-angular';

//import Notification16 from '@carbon/icons/es/notification/16';
import { Notification16, UserAvatar16, AppSwitcher16 } from "@carbon/icons";




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UIShellModule,
    IconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(protected iconService: IconService) {
    iconService.registerAll([
      Notification16,
      UserAvatar16,
      AppSwitcher16
    ]);
  }
}
