import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  courseTitle="Angular Firebase App";
  clicked(){
    console.log("Enter My Log");
  }
 
  constructor(private firebaseService :FirebaseService) { }
  favoriteBooks:any;
  unreadBooks:any;
  ngOnInit() {
    this.firebaseService.getFavoriteBooks().subscribe(favBooks=>{
      this.favoriteBooks=favBooks;
      console.log(this.favoriteBooks)
      })
      this.firebaseService.getUnreadBooks().subscribe(ubBooks=>{
        this.unreadBooks=ubBooks;
        console.log('Unread Books',this.unreadBooks);
        })
  }

}
