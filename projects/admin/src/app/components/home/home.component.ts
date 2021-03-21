import { Component ,OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { DocumentSnapshot } from '@firebase/firestore-types';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //subs: Subscription;
  slug: string = 'cart';
  items1: any=[];
  isLoggedIn =false;

  constructor(
    private db: AngularFirestore,
    private route: ActivatedRoute) {
  }

   ngOnInit() {
    //Getting cart details
    const doc1 = this.db.collection('carts').doc('cart').get(); // console.log('>>>>>>>>>>>>> ', doc);
    doc1.subscribe((snapshot) => { 
      const page1 = snapshot.data();   console.log('>>>>>>>>CARTS>>>>> ', page1);
      if (!page1) {
        this.content = '### No cart found';
      } else {
          this.items1.push(page1);
          this.content = ' => Check all carts below:';
      }   
    });

  }
  ngAfterViewChecked() { 
      if(localStorage.getItem('isLoggedIn')){
        if(localStorage.getItem('isLoggedIn')=== 'y'){
          this.isLoggedIn = true;
        } else this.isLoggedIn = false;
      }
  }

  addToCart(){
    console.log('>>>>>>>>adding cart>>>>> ', this);
  }
  content = 'Content';
  title = 'admin';
}
