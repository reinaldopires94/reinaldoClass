import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() message: string = '';
  /**Podemo emitir um evento void, para somente fechar um botão, com isto não precisa ter propriedade quando for passado
   * pois será passado somente um SINAL de evento no DOM. Muito boa esta abordagem, fv olhe no component authComponent.html
   */
  @Output() botaoClose: EventEmitter<void> = new EventEmitter<void>();
  constructor() {
  }

  ngOnInit(): void {
  }
  onClose() {
    this.botaoClose.emit();

  }

}
