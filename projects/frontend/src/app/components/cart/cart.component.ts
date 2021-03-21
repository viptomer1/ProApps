import { Component ,OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { DocumentSnapshot } from '@firebase/firestore-types';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  //subs: Subscription;
  slug: string = 'cart';
  items: any=[];
  //items1: any=[];
  isLoggedIn =false;

  constructor(//private oktaAuth: OktaAuthService,
    private db: AngularFirestore,
    private route: Router) {
  }

   ngOnInit() {
    const doc = this.db.collection('carts').doc('cartItems').get(); 
    doc.subscribe((snapshot) => { //console.log('>>>>>>>>snapshot>>>>> ', snapshot);
      const page = snapshot.data();   console.log('>>>>>>>>page>>>>> ', page);
      if (!page) {
        this.content = '### No product found';
        this.doCartContent = '';
      } else {
          this.items.push(page);
          this.content = ' => Check out cart after checking items ';
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
  //remoivng cart items
  addToCart(){
    console.log('>>>>>>>remove item from cart>>>>> ', this);
  }
  //method for checkout cart
  doCart(){
    console.log('>>>>>>> Check out cart adding item to table>>>>> ', this);
    this.doCartContent = '*** Cart successfully checkedout ****';
    this.route.navigate(['/home']);
  }
  content = 'Content';
  doCartContent = '';
  title = 'frontend';
  // users: { name: string, title: string }[] = [
  //   { name: 'Carla Espinosa', title: 'Nurse' },
  //   { name: 'Bob Kelso', title: 'Doctor of Medicine' },
  //   { name: 'Janitor', title: 'Janitor' },
  //   { name: 'Perry Cox', title: 'Doctor of Medicine' },
  //   { name: 'Ben Sullivan', title: 'Carpenter and photographer' },
  // ];
}
