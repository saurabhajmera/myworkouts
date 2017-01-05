import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {WorkoutService} from "../../providers/workout.service";
import {WorkoutsPage} from "../workouts/workouts";

/*
  Generated class for the WorkoutDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-workout-details',
  templateUrl: 'workout-details.html'
})
export class WorkoutDetailsPage {

  public workout:any;
  public result:any;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _workoutService: WorkoutService) {
    this.workout = navParams.get('workout');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkoutDetailsPage');
  }

  deleteWorkout(workoutId){
    this._workoutService.deleteWorkout(workoutId).subscribe(data => {
      this.result = data;
      }
    );
    this.navCtrl.push(WorkoutsPage);
  }

}
