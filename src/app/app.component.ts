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
  styleUrls: ["./app.component.scss"],
  host: {
    "(document:click)": "onDocumentClicked($event)"
  }
})
export class AppComponent {
  title = "MP LogIn";

  constructor(
    private router: Router,
    private userIdle: UserIdleService,
    private globals: Globals
  ) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        if (event.url != "/main") {
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

  onDocumentClicked(ev) {
    this.restart();
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
  restart() {
    this.userIdle.resetTimer();
  }
}
