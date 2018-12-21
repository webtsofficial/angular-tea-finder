import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  @Input() label: string;
  @Output() valueChange = new EventEmitter<boolean>();
  public checked = false;

  constructor() { }

  ngOnInit() {
  }

  toggleCheckbox() {
    this.checked = !this.checked;
    this.changeValue();
  }
  changeValue() {
    this.valueChange.emit(this.checked);
  }
}
