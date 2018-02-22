import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/map';

@Injectable()
export class GroupService {

  authToken: any;

  constructor(private authService: AuthService, private http: Http) { }

  createGroup(group) {
    const headers = new Headers();

    this.authService.loadToken();

    headers.append('Authorization', this.authService.getToken());
    headers.append('Content-Type', 'application/json');

    return this.http.post('http://localhost:3000/groups/create', group, { headers: headers }).map(res => res.json());
  }

  findGroupsForUser(userID) {
    const headers = new Headers();

    this.authService.loadToken();

    headers.append('Authorization', this.authService.getToken());
    headers.append('Content-Type', 'application/json');

    return this.http.post('http://localhost:3000/groups/getGroupsForUser', { userID: userID}, { headers: headers }).map(res => res.json());
  }
}
