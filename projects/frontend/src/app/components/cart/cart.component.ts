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
        //   0: {"ID": "10001"+now, "name":"Product1", "price": "10", "desc":"product1 net plain", "SKU":"sku001"+now},
        //   1: {"ID": "10002"+now, "name":"Product2", "price": "20", "desc":"product2 net sil", "SKU":"sku002"+now},
        //   2: {"ID": "10003"+now, "name":"Product3", "price": "25", "desc":"product3 net ", "SKU":"sku003"+now},
        //   3: {"ID": "10004"+now, "name":"Product4", "price": "15", "desc":"product4 net gold", "SKU":"sku004"+now},
        //   4: {"ID": "10005"+now, "name":"Product5", "price": "40", "desc":"product5 net beans", "SKU":"sku005"+now}
        // }
       
        // //adding cart in cart of db
        // this.db.collection('carts').doc('cartItems').set(document2, {merge: true}).then(() => {
        //   this.doCartContent = '*** Cart successfully checkedout ****';
        //   console.log('>>>>>>** Cart successfully checkedout > ');
        //   this.route.navigate(['/home']);
        // });

        
        //adding cart in cart of db
        this.db.collection('carts').doc('cart').set(this.itemToAdd, {merge: true}).then(() => {
          this.doCartContent = '*** Cart successfully checkedout ****';

          const doc = this.db.collection('carts').doc('cart').get(); 
        doc.subscribe((snapshot) => { //console.log('>>>>>>>>snapshot cart adming>>>> ', snapshot);
        const page = snapshot.data();   console.log('>>>>>>>>page admin cart>>>> ', page);


          console.log('>>>>>>** Cart successfully checkedout > ');
          this.route.navigate(['/home']);
        });
    });


    
  }
  content = 'Content';
  now = Date.now();
  itemToAdd = {
    'ID': '110001'+this.now, 'items':'1', 'total': '10',  'userID':''+localStorage.getItem('logUser')
  };
  doCartContent = '';
  title = 'frontend';
}
