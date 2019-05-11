import { Component } from "@angular/core";
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationError
} from "@angular/router";
import { UserIdleService } from "angular-user-idle";
import { Globals } from "./globals/globals";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Mediapark LogIn";

  constructor(
    private router: Router,
    private userIdle: UserIdleService,
    private globals: Globals
  ) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        console.log(event.url);
        if (event.url != "/main") {
          console.log("login");
          this.stop();
          this.stopWatching();
        } else {
          this.userIdle.startWatching();
          this.userIdle
            .onTimerStart()
            .subscribe(count => (globals.timer = count));
          this.userIdle.onTimeout().subscribe(() => {
            localStorage.clear();
            sessionStorage.clear();
            this.router.navigate([""]);
          });
        }
      }
    });
  }

  stop() {
    this.userIdle.stopTimer();
  }

  stopWatching() {
    this.userIdle.stopWatching();
  }

  startWatching() {
    this.userIdle.startWatching();
  }

  restart(e) {
    console.log("something" + e);
    this.userIdle.resetTimer();
  }
}
