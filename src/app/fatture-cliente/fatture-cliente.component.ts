import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IFatture } from '../interfaces/ifatture';
import { FattureService } from '../services/fatture.service';

@Component({
  selector: 'app-fatture-cliente',
  templateUrl: './fatture-cliente.component.html',
  styleUrls: ['./fatture-cliente.component.css']
})
export class FattureClienteComponent implements OnInit {

  fatture!: IFatture;

  constructor(private fattureService: FattureService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(element =>{
      if (element.id) {
        this.fattureService.getFatture(element.id).subscribe(res => this.fatture = res);
      }
    });
  }

}
