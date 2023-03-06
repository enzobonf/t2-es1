import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PHomeComponent } from './p-home/p-home.component';
import { PNavComponent } from './p-nav/p-nav.component';
import { PSoftwaresComponent } from './p-softwares/p-softwares.component';
import { MMaterialAngularModule } from './m-material-angular/m-material-angular/m-material-angular.module';
import { CSoftwareVersoesComponent } from './c-software-versoes/c-software-versoes.component';
import { CSoftwareTecnologiasComponent } from './c-software-tecnologias/c-software-tecnologias.component';
import { CSoftwareFormComponent } from './c-software-form/c-software-form.component';
import { CSelectItemComponent } from './c-select-item/c-select-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CAddItemComponent } from './c-add-item/c-add-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PHomeComponent,
    PNavComponent,
    PSoftwaresComponent,
    CSoftwareVersoesComponent,
    CSoftwareTecnologiasComponent,
    CSoftwareFormComponent,
    CSelectItemComponent,
    CAddItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MMaterialAngularModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
