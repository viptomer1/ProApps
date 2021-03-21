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
  items: any=[];
  //items1: any=[];
  isLoggedIn =false;

  constructor(//private oktaAuth: OktaAuthService,
    private db: AngularFirestore,
    private route: ActivatedRoute) {
  }

   ngOnInit() {
    const doc = this.db.collection('carts').doc('cartItems').get(); // console.log('>>>>>>>>>>>>> ', doc);
    //this.subs = 
    doc.subscribe((snapshot) => { //console.log('>>>>>>>>snapshot>>>>> ', snapshot);
      const page = snapshot.data();   console.log('>>>>>>>>page>>>>> ', page);
      if (!page) {
        this.content = '### No product found';
        this.slug = 'slug not found';
      } else {
          this.items.push(page);
          this.content = ' => add product from list ';
      }   
    });


    // //Getting cart details
    // const doc1 = this.db.collection('carts').doc('cart').get(); // console.log('>>>>>>>>>>>>> ', doc);
    // doc1.subscribe((snapshot) => { //console.log('>>>>>>>>snapshot>>>>> ', snapshot);
    //   const page1 = snapshot.data();   console.log('>>>>>>>>CARTS>>>>> ', page1);
    //   if (!page1) {
    //     this.content = '### No cart found';
    //   } else {
    //       this.items1.push(page1);
    //       this.content = ' => Check all carts below:';
    //   }   
    // });

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
    localStorage.setItem('itemAdded','y');
  }
  content = 'Content';
  title = 'frontend';
  // users: { name: string, title: string }[] = [
  //   { name: 'Carla Espinosa', title: 'Nurse' },
  //   { name: 'Bob Kelso', title: 'Doctor of Medicine' },
  //   { name: 'Janitor', title: 'Janitor' },
  //   { name: 'Perry Cox', title: 'Doctor of Medicine' },
  //   { name: 'Ben Sullivan', title: 'Carpenter and photographer' },
  // ];
}
