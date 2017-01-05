import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {WorkoutService} from "../../providers/workout.service";
import {WorkoutsPage} from "../workouts/workouts";

/*
  Generated class for the AddWorkout page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-workout',
  templateUrl: 'add-workout.html'
})
export class AddWorkoutPage {
  title:string;
  note:string;
  type:string;
  private result: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private workoutService: WorkoutService

  ) {
    console.log("Adding new workout");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddWorkoutPage');
  }

  onSubmit(){
    console.log(this.title);
    var workout = {
      title: this.title,
      note:this.note,
      type:this.type,
    }

    this.workoutService.addWorkout(workout).subscribe(data=>{
      this.result = data;
    });

    this.navCtrl.push(WorkoutsPage);
  }

}
