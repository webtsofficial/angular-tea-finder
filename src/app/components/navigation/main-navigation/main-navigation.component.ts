import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.scss']
})
export class MainNavigationComponent implements OnInit {
  navActive = false;

  constructor() { }

  ngOnInit() {
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
