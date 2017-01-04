import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

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

}
