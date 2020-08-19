import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { getFile, getImage, getJSON, getString, request, HttpResponse } from "tns-core-modules/http";

import { Challenge } from './home.model';

@Injectable({ providedIn: 'root' })
export class ChallengeService {
  private _currentChallenge = new BehaviorSubject<Challenge>(null);

  constructor(private http: HttpClient) {}

  get currentChallenge() {
    return this._currentChallenge.asObservable();
  }

  fetchCurrentChallenge() {
    return getJSON('http://192.168.0.12:8000/timeSVM/23/50/2/60/1/0/0/0/1/0').then((r: any) => {
    this._currentChallenge = r; // assign it from the response when successful
    }, (e) => {
    }); 
  }

  
//
//  private saveToServer(challenge: Challenge) {
//    this.http
//      .put('https://ns-ng-course.firebaseio.com/challenge.json', challenge)
//      .subscribe(res => {
//        console.log(res);
//
//      });
//  }
//

}
