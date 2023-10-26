import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from 'src/app/model/rickymorti-list-interface';

@Component({
  selector: 'app-rickymorti-detail',
  templateUrl: './rickymorti-detail.component.html',
  styleUrls: ['./rickymorti-detail.component.css']
})
export class RickymortiDetailComponent {

  @Input() personaje!: Personaje;
  @Output() personajeClicked = new EventEmitter<number>();

  viewPersonajeDetail() {
    this.personajeClicked.emit(this.personaje.id);
  }
}
