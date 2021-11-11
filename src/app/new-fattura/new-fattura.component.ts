import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FatturaClass } from '../classes/fattura-class';
import { Comuni } from '../interfaces/icomuni';
import { IFatture } from '../interfaces/ifatture';
import { IStatofattura } from '../interfaces/istatofattura';
import { ComuniService } from '../services/comuni.service';
import { FattureService } from '../services/fatture.service';
import { StatofatturaService } from '../services/statofattura.service';
import { TipoclienteService } from '../services/tipocliente.service';

@Component({
  selector: 'app-new-fattura',
  templateUrl: './new-fattura.component.html',
  styleUrls: ['./new-fattura.component.css']
})
export class NewFatturaComponent implements OnInit {

  fatturaMod!: IFatture;
  title: string = '';
  stato!: IStatofattura[];
  tipo: string[] = [];
  comuni: Comuni[] = [];
  
  constructor(
    private fattureService: FattureService,
    private router: Router,
    private route: ActivatedRoute,
    private statoService: StatofatturaService,
    private tipoClienteService: TipoclienteService,
    private comuniService: ComuniService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(element => {
      if (!element.id) {
        this.title = 'Nuova Fattura';
        this.fatturaMod = new FatturaClass();
      }
      else {
        this.title = 'Modifica Fattura';
        this.fattureService.getFatture(element.id).subscribe(fattura => this.fatturaMod = fattura);
      }
    })
    this.getStato();
    this.getTipo();
  }

  getStato() {
    this.statoService.getAllStatoFatt().subscribe(stato => this.stato = stato.content);
  }

  getTipo() {
    this.tipoClienteService.getAllTipoCliente().subscribe(tipo => this.tipo = tipo);
  }

  getComuni() {
    this.comuniService.getAllComuni().subscribe(comuni => this.comuni = comuni.content);
  }

  salvaFattura(){
    this.route.params.subscribe(element => {
      if (!element.id) {
        this.fattureService.createFattura(this.fatturaMod).subscribe(res => {
          this.router.navigate(['fatture']);
        });
      }
      else {
        this.fattureService.updtateFattura(this.fatturaMod).subscribe(res => {
          this.router.navigate(['fatture']);
        });
      }
    });
  }
}
