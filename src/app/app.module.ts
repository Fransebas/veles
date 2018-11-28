import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataScreenComponent } from './data-screen/data-screen.component';
import { FluxComponent } from './flux/flux.component';

//import { FormsModule } from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import { SimpleCalculatorComponent } from './simple-calculator/simple-calculator.component';
import { OperationFPComponent } from './operation-fp/operation-fp.component';
import { OperationPFComponent } from './operation-pf/operation-pf.component';
import { OperationFAComponent } from './operation-fa/operation-fa.component';
import { OperationAFComponent } from './operation-af/operation-af.component';
import { OperationPAComponent } from './operation-pa/operation-pa.component';
import { OperationAPComponent } from './operation-ap/operation-ap.component';
import { ManagerComponent } from './manager/manager.component';
import { NPerComponent } from './n-per/n-per.component';
import { PerFPComponent } from './per-fp/per-fp.component';
import { PerFAComponent } from './per-fa/per-fa.component';
import { PerPAComponent } from './per-pa/per-pa.component';
import { OperationIEFComponent } from './operation-ief/operation-ief.component';

@NgModule({
  declarations: [
    AppComponent,
    DataScreenComponent,
    FluxComponent,
    SimpleCalculatorComponent,
    OperationFPComponent,
    OperationPFComponent,
    OperationFAComponent,
    OperationAFComponent,
    OperationPAComponent,
    OperationAPComponent,
    ManagerComponent,
    NPerComponent,
    PerFPComponent,
    PerFAComponent,
    PerPAComponent,
    OperationIEFComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
