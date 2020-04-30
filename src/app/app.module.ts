import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ClinicHistoryService } from './services/clinic-history/clinic-history.service'
import { AddHistoryComponent } from './dialogs/add-history/add-history.component';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    AddHistoryComponent
  ],
  entryComponents: [
    AddHistoryComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [
    ClinicHistoryService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
