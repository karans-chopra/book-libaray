import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
//Forms
import {FormsModule} from '@angular/forms';
import { BooksComponent } from './components/books/books.component';
import { BookComponent } from './components/book/book.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { DeleteBookComponent } from './components/delete-book/delete-book.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
// Routes
import {Routes, RouterModule} from '@angular/router';
// service
import {FirebaseService} from './services/firebase.service';
//firebase 
import {AngularFireModule}from 'angularfire2';
import {environment}from '../environments/environment';
import {AngularFireDatabaseModule} from 'angularfire2/database-deprecated';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
//Material Design
import {MatDatepickerModule, DateAdapter} from '@angular/material';
import {MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatGridListModule,
  MatInputModule,
 
  MatNativeDateModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatTabsModule,
  MatListModule,
  MatIconModule, 
 } from '@angular/material';
  import {MatFormFieldModule} from '@angular/material/form-field';
const appRoutes:Routes=[
{path:'',component:HomeComponent},
{path:'books',component:BooksComponent},
{path:'book/:id',component:BookComponent},
{path:'add-book',component:AddBookComponent},
{path:'edit-book/:id',component:EditBookComponent},
{path:'delete-book/:id',component:DeleteBookComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksComponent,
    BookComponent,
    AddBookComponent,
    EditBookComponent,
    DeleteBookComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,MatButtonModule,
    RouterModule.forRoot(appRoutes),
   
    AngularFireModule.initializeApp(environment.firebae,'book-notes-app'),
    AngularFireDatabaseModule,
    MatButtonModule,
    MatCheckboxModule,
  MatCardModule,
  MatGridListModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatTabsModule,
  MatListModule,
  MatIconModule,
  MatFormFieldModule,
  BrowserAnimationsModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
