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
import { AddItemFormComponent } from './statistic/add-item-form/add-item-form.component';
import { BudgetItemListComponent } from './statistic/budget-item-list/budget-item-list.component';
import { BudgetItemCardComponent } from './statistic/budget-item-list/budget-item-card/budget-item-card.component';
import { EditItemModalComponent } from './statistic/edit-item-modal/edit-item-modal.component';
import { MatDialogModule} from "@angular/material/dialog";


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
    MomentPipe,
    AddItemFormComponent,
    BudgetItemListComponent,
    BudgetItemCardComponent,
    EditItemModalComponent
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
        CdkTableModule,
        MatDialogModule
    ],
  providers: [],
  entryComponents: [EditItemModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
