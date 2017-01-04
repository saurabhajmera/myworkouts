/**
 * Created by sajmera on 1/4/17.
 */
import {Component, OnInit} from '@angular/core';

import { NavController } from 'ionic-angular';
import {WorkoutService} from "../../providers/workout.service";

@Component({
    selector: 'workouts',
    templateUrl: 'workouts.html'
})
export class WorkoutsPage extends OnInit{


    constructor(public navCtrl: NavController,
    private _workoutService: WorkoutService) {
        super();

    }

    ngOnInit(): void {
        this._workoutService.getWorkouts().subscribe(res => {
            console.log(res);
        })


    }



}
