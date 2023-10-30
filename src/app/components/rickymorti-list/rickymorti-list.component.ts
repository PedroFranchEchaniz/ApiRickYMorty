import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Personaje } from 'src/app/model/rickymorti-list-interface';
import { RickymortiServiceService } from 'src/app/service/rickymorti-service.service';

@Component({
  selector: 'app-rickymorti-list',
  templateUrl: './rickymorti-list.component.html',
  styleUrls: ['./rickymorti-list.component.css']
})
export class RickymortiListComponent implements OnInit {

  personajeList: Personaje[] = [];

  name = "";
  species = "";
  image = "";

  page = 1;


  constructor(private personajeService: RickymortiServiceService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.personajeService.getPersonajeList().subscribe(resp => {
      this.personajeList = resp.results;
    })
  }

  open(id: number, modal: any) {
    this.personajeService.findById(id).subscribe(resp => {
      this.image = resp.image;
      this.name = resp.name;
      this.species = resp.species;
    });
    this.modalService.open(modal, {
      scrollable: true
    });
  }

  paginar() {
    this.personajeService.getPag(this.page).subscribe(resp => {
      this.personajeList = resp.results;
    })
  }

}
