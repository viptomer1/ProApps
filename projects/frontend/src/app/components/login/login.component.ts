import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { NbLoginComponent } from '@nebular/auth';
//import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
})
export class NgxLoginComponent{

  names: string[] = [];
  submitted: boolean =false;
  checked: boolean =false;
  user: any={email:'' , password:''};

  constructor( private router: Router,
    private route: ActivatedRoute
    //private dialogService: NbDialogService
    ) {
  }

  submit1(email:string,  password:string) {
    this.user = {email , password};
    console.log('----> ',this);

    if(this.user.email && this.user.password ){
      this.submitted= true;
      //if success--
      localStorage.setItem('isLoggedIn', 'y');
      localStorage.setItem('logUser', email);
      this.router.navigate([ '/home' ], { queryParams: { log: 'keyN' } });
      //this.router.navigate(['/home', this.isLoggedIn]);
    }else{
      this.checked= true;
    }

  }
}