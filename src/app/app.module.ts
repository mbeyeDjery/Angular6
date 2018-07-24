import { AjouterpersonneComponent } from './personnes/ajouterpersonne/ajouterpersonne.component';
import { AppComponent } from './app.component';
import { AppRoutingModule, mesRoutes } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { EditerpersonneComponent } from './personnes/editerpersonne/editerpersonne.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatSidenavModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatCardModule,
  MatGridListModule
  } from '@angular/material';
  import { ChartsModule } from 'ng2-charts';
import { NgModule } from '@angular/core';
import { PersonneService } from './services/personne.service';

@NgModule({
  declarations: [
    AppComponent,
    mesRoutes,
    AjouterpersonneComponent,
    EditerpersonneComponent
  ],
  imports: [
    FormsModule, BrowserModule, AppRoutingModule, LayoutModule, MatDialogModule, MatPaginatorModule,
    MatSortModule, MatTableModule, HttpClientModule, MatToolbarModule, MatButtonModule, MatSidenavModule,
    MatIconModule, MatListModule, MatMenuModule, MatInputModule, MatTooltipModule, MatDialogModule,
    MatFormFieldModule, ReactiveFormsModule, BrowserAnimationsModule,MatSnackBarModule, MatCardModule,
    MatGridListModule, ChartsModule
  ],

  entryComponents: [
    AjouterpersonneComponent,
    EditerpersonneComponent
  ],

  providers: [PersonneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
