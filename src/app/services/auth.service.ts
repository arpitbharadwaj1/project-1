import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { User } from "../model/user";

@Injectable({
    providedIn: 'root'
})
export class AuthService{

 
    private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    
    get isLoggedIn() {
        return this.loggedIn.asObservable();
      }
    constructor( private router: Router){}
   
    authUser(user: any){
        let userArray= [];
        if(localStorage.getItem('Users')){
            userArray = JSON.parse(localStorage.getItem('Users') || '{}');
        }
        return userArray.find(  (p: { email: any; password: any; }) => 
                p.email === user.email && 
                p.password === user.password
        )
    }login(user: User) {
        if (user.email !== '' && user.password !== '' ) {
          this.loggedIn.next(true);
          this.router.navigate(['/']);
        }
      }
    
      logout() {
        this.loggedIn.next(false);
        this.router.navigate(['/login']);
      }
}