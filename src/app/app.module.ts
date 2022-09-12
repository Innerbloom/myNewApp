import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { CalendarComponent } from './calendar/calendar.component';
import { StatisticComponent } from './statistic/statistic.component';
import { AboutComponent } from './about/about.component';
import { CalendComponent } from './calend/calend.component';
import { SelectorComponent } from './selector/selector.component';
import { OrganizerComponent } from './organizer/organizer.component';
import {MomentPipe} from "./shared/moment.pipe";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatExpansionModule} from "@angular/material/expansion";
import {CdkTableModule} from "@angular/cdk/table";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CalendarComponent,
    StatisticComponent,
    AboutComponent,
    CalendComponent,
    SelectorComponent,
    OrganizerComponent,
    MomentPipe
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatExpansionModule,
        CdkTableModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
