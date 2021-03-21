import { AfterViewChecked, AfterViewInit, Component, DoCheck } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked{
  title = 'frontend';
  loginButtonContent = 'Login';
  constructor(private router: Router,
    private route: ActivatedRoute) { 


  }
  ngOnInit() {
    //checking if localstorge there then clean it
    //console.log('>>>>>>>>do check--ONIT----- ', localStorage.getItem('isLoggedIn'));
    if(localStorage.getItem('isLoggedIn')){
      localStorage.removeItem('isLoggedIn');
    }
  }

  
  //method for updating view
  ngAfterViewChecked() {
    setTimeout(() => {
      //console.log('---VIEW CHECKED-> ',this);
      if(localStorage.getItem('isLoggedIn')=== 'y'){
        this.isLoggedIn = true;
      }
    });

  }

  isLoggedIn =false;
  isLoggedInValueChanged =false;
  logoutHome() {
    if(localStorage.getItem('isLoggedIn')=== 'y'){
      //localStorage.removeItem('isLoggedIn');
      localStorage.setItem('isLoggedIn','n');
      this.isLoggedIn = false;
    } 
  }

  //Login button click on home
  loginHome() { 
      this.router.navigate(['/login']);
  }
}
