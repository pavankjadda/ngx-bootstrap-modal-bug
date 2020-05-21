import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {MatRadioModule} from "@angular/material/radio";
import {MatButtonModule} from "@angular/material/button";
import { MatTableModule } from '@angular/material/table';
import {MatSortModule} from "@angular/material/sort";
import {MatSelectModule} from "@angular/material/select";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatInputModule} from "@angular/material/input";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatDividerModule} from "@angular/material/divider";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatRadioModule,
    FormsModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatSelectModule,
    MatGridListModule,
    MatInputModule,
    MatPaginatorModule,
    MatDividerModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
