import {Pipe, PipeTransform, NgZone, ChangeDetectorRef, OnDestroy} from "@angular/core";

@Pipe({
  name: 'timeago',
  pure: false
})
export class TimeagoPipe implements PipeTransform, OnDestroy {

  private timer: number; // variable to hold the timer

  constructor(
    private changeDetectorRef: ChangeDetectorRef, // Detaches the change detector from the change detector tree. The detached change detector will not be checked until it is reattached.
    private ngZone: NgZone // timezone
  ){ }

  /**
   * transforms the input field to time ago by days, seconds and years
   * @param value input value, call the pipe with  HTML -> {{ input data | timeago }}
   */
  transform(value:string) {
		this.removeTimer(); // remove the timer, to reset it
		let d = new Date(value); // save the date from the input
		let now = new Date(); // used to compare the date from now
		let seconds = Math.round(Math.abs((now.getTime() - d.getTime())/1000)); // round the seconds
    let timeToUpdate = this.getSecondsUntilUpdate(seconds) *1000; // call the function to tell when the function should be updated
   
    /**
     * angular service that optimizes of one or more asynchronous tasks that don't require UI updates or error handling
     * detects changes and updates the timer
     */
		this.timer = this.ngZone.runOutsideAngular(() => {
			if (typeof window !== 'undefined') {
				return window.setTimeout(() => {
					this.ngZone.run(() => this.changeDetectorRef.markForCheck());
				}, timeToUpdate);
			}
			return null;
    });
    
    /**
     * tell the system what the different time standards
     */
		let minutes = Math.round(Math.abs(seconds / 60));
		let hours = Math.round(Math.abs(minutes / 60));
		let days = Math.round(Math.abs(hours / 24));
		let months = Math.round(Math.abs(days/30.416));
    let years = Math.round(Math.abs(days/365));
    
    /**
     * calculate the return values, according to the different time standards
     */

		if (seconds < 60) {
			return 'a few seconds ago';
		} else if (seconds == 60) {
			return 'a minute ago';
		} else if (minutes < 60) {
			return minutes + ' minutes ago';
		} else if (minutes == 60) {
			return 'an hour ago';
		} else if (hours < 24) {
			return hours + ' hours ago';
		} else if (hours == 24) {
			return 'a day ago';
		} else if (days < 24) {
			return days + ' days ago';
		} else if (days == 30) {
			return 'a month ago';
		} else if (days < 365) {
			return months + ' months ago';
		} else if (days == 365) {
			return 'a year ago';
		} else { // (days > 545)
			return years + ' years ago';
		}
	}

  /**
   * reset the timer, performance and update
   */
  ngOnDestroy(): void {
    if (this.timer) {
			window.clearTimeout(this.timer);
			this.timer = null;
		}
  }
  
  /**
   * reset the timer, called manually
   */
  private removeTimer() {
		if (this.timer) {
			window.clearTimeout(this.timer);
			this.timer = null;
		}
  }

  /**
   * get the seconds before next update, used for when to calculate the buffer
   * @param seconds seconds to tell when to calculate
   */
  private getSecondsUntilUpdate(seconds:number) {
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
