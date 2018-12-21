import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tea-finder',
  templateUrl: './tea-finder.component.html',
  styleUrls: ['./tea-finder.component.scss']
})
export class TeaFinderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  checkboxValueChange(event) {
    console.log(event);
  }
}
