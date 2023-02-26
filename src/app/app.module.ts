import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { InfoComponent } from './steps/info/info.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectPlanComponent } from './steps/select-plan/select-plan.component';
import { AddOnsComponent } from './steps/add-ons/add-ons.component';
import { SummaryComponent } from './steps/summary/summary.component';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    InfoComponent,
    SelectPlanComponent,
    AddOnsComponent,
    SummaryComponent
   ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
