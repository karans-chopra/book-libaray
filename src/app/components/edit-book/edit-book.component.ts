import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  route: any;
  id;title;author;dateadded;dateread;price;rate;description;imageUrl;
  constructor(private firebaseService:FirebaseService , private router:Router) { }

  ngOnInit() {
    this.id=this.route.snapshot.param['id'];
    this.firebaseService.getBookDetails(this.id).subscribe(book => {
      this.author= book.author;
      this.title= book.title;
      this.dateadded=new Date(book.dateadded);
      this.dateread=new Date(book.dateread);
      this.description= book.description;
      this.imageUrl= book.imageUrl;
      this.price= book.price;
      this.rate= book.rate;
    });
  }
  updateDateAdded(dateAdded){
    this.dateadded=this.firebaseService.formatDate(dateAdded);;
    }
    updateDateRead(dateRead){
      this.dateread=this.firebaseService.formatDate(dateRead);
     
      }
      submitEdit(){
        let book = {
          author: this.author,
          title: this.title,
          dateadded: this.dateadded,
          dateread: this.dateread,
          description: this.description,
          imageUrl: this.imageUrl,
          price: this.price,
          rate: this.rate
        }
        this.firebaseService.updateBook(this.id, book);
        this.router.navigate(['/books'])
    }
}
