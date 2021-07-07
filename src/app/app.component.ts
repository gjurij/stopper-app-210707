import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'stopper-app';
  counter: number = 0;
  interval;
  timeStepList: Array<number> = []; 
  isStarted: boolean = false;

  startPauseStopper() {
    if (!this.isStarted){
      this.interval = setInterval(() => {
        if (this.counter === 0) {
          this.counter++;
        } else {
          this.counter++;
        }
      }, 0.1);
      this.isStarted= true;
    } else {
      clearInterval(this.interval);
      this.isStarted= false;
    }
  }

  resetStopper(){
    this.counter=0;
  }
  addStep(){
    this.timeStepList.push(this.counter);
  }
}
