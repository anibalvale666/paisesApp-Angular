import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent implements OnInit {


  regiones: string[] = [ 'EU','EFTA','CARICOM','PA','AU','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC' ];
  paises: Country[] = [];
  regionActiva: string = '';

  constructor(private paisService: PaisService) { }

  getClaseCSS( region: string): string {
    return (region === this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary' 
  }

  ngOnInit(): void {
  }

  activarRegion( region: string ){ 

    if(region === this.regionActiva){ return;}
    this.regionActiva = region;
    this.paises = [];

    this.paisService.buscarPorRegion(region)
      .subscribe({
        next: paises => {
          this.paises  = paises;
        }
      });
  }

}
