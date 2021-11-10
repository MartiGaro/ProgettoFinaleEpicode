import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComuneClass } from '../classes/comune-class';
import { IProvince, Province } from '../interfaces/iprovince';
import { ComuniService } from '../services/comuni.service';
import { ProvinceService } from '../services/province.service';

@Component({
  selector: 'app-new-comune',
  templateUrl: './new-comune.component.html',
  styleUrls: ['./new-comune.component.css']
})
export class NewComuneComponent implements OnInit {

  newComune!:ComuneClass;
  province: Province[] = [];

  constructor(
    private route: ActivatedRoute,
    private provinceService: ProvinceService,
    private comuniService: ComuniService
    ) 
    
    { }

  ngOnInit(): void {
    this.route.params.subscribe(element =>{
      this.newComune = new ComuneClass();
    });
    this.getAllProvince();
  }

  getAllProvince() {
    this.provinceService.getAllProvince().subscribe(province => this.province = province.content);
  }

  salvaComune() {
    this.comuniService.createComune(this.newComune).subscribe(res => {
      alert('Comune creato con successo!');
      console.log(this.newComune)
    });
  }

}
