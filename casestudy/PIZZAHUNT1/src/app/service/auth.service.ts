import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public avail:boolean = false;
  public msg:string="";
  private baseUri: string = "http://localhost:3000";
  public loginuri: string = "https://localhost:44324/api/User";
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient, private router: Router) { }

  check() {
    return this.http.get(this.baseUri + "/check", { headers: this.headers });
  }

   //  registers a new user
   register(body: any) {
    // return this.http.post('http://localhost:3000/app/users/add', body, {
      return this.http.post(this.loginuri + "/signup", body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

    // Fetch all the users from DB
    readUser() {
      // return this.http.get(this.baseUri + "/app/users", { headers: this.headers });
      return this.http.get(this.loginuri + "/users", { headers: this.headers });
    }

    // reset password for user
  // reset(email : string,body: any) {
  //   return this.http.put(this.baseUri +  '/app/users/update/'+ email, body, {
  //     observe: 'body',
  //     headers: new HttpHeaders().append('Content-Type', 'application/json')
  //   });
  // }
  editprofile(body: any) {

    return this.http.put(this.loginuri + '/editprofile/', body, {

      observe: 'body',

      headers: new HttpHeaders().append('Content-Type', 'application/json')

    });

  }



  reset(body: any) {

    return this.http.put(this.loginuri + '/changepassword/', body, {

      observe: 'body',

      headers: new HttpHeaders().append('Content-Type', 'application/json')

    });

  }

  // login(email : string ) {
  //   console.log(email)
  //   return this.http.get(this.baseUri + '/app/users/' + email, { headers: this.headers });
  // }
  login(body: any) {
    console.log(body)
    // return this.http.get(this.baseUri + '/app/users/' + email, { headers: this.headers });
    return this.http.post(this.loginuri + '/login', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  Oneuser(body: any) {
    console.log(body)
    // return this.http.get(this.baseUri + '/app/users/' + email, { headers: this.headers });
    return this.http.post(this.loginuri + '/users', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }


}
