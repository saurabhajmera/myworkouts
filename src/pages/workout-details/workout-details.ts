import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {WorkoutService} from "../../providers/workout.service";

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


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _workoutService: WorkoutService) {
    this.workout = navParams.get('workout');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkoutDetailsPage');
  }

}
