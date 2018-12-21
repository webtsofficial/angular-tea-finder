import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-icon-input',
  templateUrl: './icon-input.component.html',
  styleUrls: ['./icon-input.component.scss']
})
export class IconInputComponent implements OnInit {
  @Input() iconClass: string;
  @Input() label: string;

  constructor() { }

  ngOnInit() {
  }

}
