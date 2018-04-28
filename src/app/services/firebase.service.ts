import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
import { Observable } from 'rxjs/Observable';
import  'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Injectable()
export class FirebaseService {
  books:FirebaseListObservable<any[]>;
  favoriteBooks:Observable<any>;
  unreadBooks:Observable<any>;
  bookDetails:Observable<any>;
  constructor(private db:AngularFireDatabase) {
    
   }
   getBooks(){
    this.books=this.db.list('/books')as FirebaseListObservable<any[]>;
    return this.books;
    }
    getFavoriteBooks(){
      this.favoriteBooks=this.db.list('/books').map(books=>{
       const topRatedBooks=books.filter(item=>item.rate>4);
       return topRatedBooks
      })
      return this.favoriteBooks;
      }
      getUnreadBooks(){
        this.unreadBooks=this.db.list('/books').map(books=>{
         const ub=books.filter(item=>item.dateread==null);
        return ub;
        })
        return this.unreadBooks;
        }
        getBookDetails(id){
          this.bookDetails=this.db.object('/books/'+id)as Observable<any>;
           return this.bookDetails;
          } 
          addBook(bookDetails){
            var filteredBook=JSON.parse(JSON.stringify(bookDetails));
            return this.books.push(filteredBook);
            
            }
           
deleteBook(id){
  
  return this.books.remove(id);
  }
updateBook(id, bookDetails){
  var filteredBook = JSON.parse(JSON.stringify(bookDetails)); //removes the undefined fields
  return this.books.update(id,filteredBook);
}
formatDate(date:Date):string{
  const day=date.getDate();
  const month=date.getMonth()+1;
  const year=date.getFullYear();
  return '$(year)-$(month)-$(day)';
  }
}
