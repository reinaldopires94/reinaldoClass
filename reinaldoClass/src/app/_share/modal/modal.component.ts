import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() message: string = '';
  @Output() botaoClose: EventEmitter<boolean> = new EventEmitter();
  constructor() {
    this.botaoClose.emit(true);
  }

  ngOnInit(): void {
  }

}
