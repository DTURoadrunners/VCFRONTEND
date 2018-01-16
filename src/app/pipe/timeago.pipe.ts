import { Pipe, PipeTransform, NgZone, ChangeDetectorRef, OnDestroy } from "@angular/core";

@Pipe({
  name: 'timeago',
  pure: false
})
export class TimeagoPipe implements PipeTransform, OnDestroy {

  private timer: number;

  constructor(private changeDetectorRef: ChangeDetectorRef, private ngZone: NgZone) {

  }

  transform(value: string) {
    this.removeTimer();
    let d = new Date(value);
    let now = new Date();
    let seconds = Math.round(Math.abs((now.getTime() - d.getTime()) / 1000));
    let timeToUpdate = this.getSecondsUntilUpdate(seconds) * 1000;
    this.timer = this.ngZone.runOutsideAngular(() => {
      if (typeof window !== 'undefined') {
        return window.setTimeout(() => {
          this.ngZone.run(() => this.changeDetectorRef.markForCheck());
        }, timeToUpdate);
      }
      return null;
    });
    if (seconds < 60) {
      return Math.floor(seconds) + " seconds ago";
    }
    seconds /= 60; //minutes
    if (seconds < 60){
      return Math.floor(seconds) + " minutes ago";
    }
    seconds /= 60; //hours
    if (seconds < 24) {
      return Math.floor(seconds) + " hours ago";
    }
    seconds /= 24; //days
    if (seconds < 7){
      return Math.floor(seconds) + " days ago";
    }
    seconds /= 7; //weeks
    if (seconds < 4){
      return Math.floor(seconds) + " weeks ago";
    }
    seconds /= 4; //months
    if (seconds < 12) {
      return Math.floor(seconds) + " months ago";
    }
    seconds /= 12; //years
      return Math.floor(seconds) + " years ago";
  }

  ngOnDestroy(): void {
    if (this.timer) {
      window.clearTimeout(this.timer);
      this.timer = null;
    }
  }

  private removeTimer() {
    if (this.timer) {
      window.clearTimeout(this.timer);
      this.timer = null;
    }
  }

  private getSecondsUntilUpdate(seconds: number) {
    let min = 60;
    let hr = min * 60;
    let day = hr * 24;
    if (seconds < min) { // less than 1 min, update ever 2 secs
      return 2;
    } else if (seconds < hr) { // less than an hour, update every 30 secs
      return 30;
    } else if (seconds < day) { // less then a day, update every 5 mins
      return 300;
    } else { // update every hour
      return 3600;
    }
  }

}

