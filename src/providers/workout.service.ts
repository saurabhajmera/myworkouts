import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


/*
  Generated class for the WorkoutService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class WorkoutService {
  apiKey:string;
  workoutsUrl:string;

  constructor(public http: Http) {
    this.apiKey='_HBR9HqSJMuINJmmKIu-McTXuSBQcjxT';
    this.workoutsUrl='https://api.mlab.com/api/1/databases/myworkouts_sajmera/collections/workouts';

  }

  getWorkouts(){
    return this.http.get(this.workoutsUrl+"?apiKey="+this.apiKey).map(res=>
    {
      return res.json();
    });
  }

  addWorkout(workout: {title: string; note: string; type: string}) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.workoutsUrl+"?apiKey="+this.apiKey,JSON.stringify(workout),options).
    map(res=>  {
      return res.json();
    }).catch(this.handleError);
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }
}
