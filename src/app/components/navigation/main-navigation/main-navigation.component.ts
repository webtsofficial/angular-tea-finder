import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.scss']
})
export class MainNavigationComponent implements OnInit, OnDestroy {
  navActive = false;
  routerSub: Subscription;

  constructor(private router: Router) {
    this.routerSub = router.events.subscribe(() => this.closeNav());
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.routerSub.unsubscribe();
  }

  toogleNav(): void {
    this.navActive = !this.navActive;
  }
  closeNav(): void {
    if(this.navActive === true) {
      this.navActive = false;
    }
  }
}
