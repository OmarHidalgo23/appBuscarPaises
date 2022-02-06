import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from "rxjs/operators";
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
    `.nounderline {
      text-decoration: none !important
    }`
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Pais;
  hayError: boolean = false;

  constructor(private activateRoute: ActivatedRoute, private paisService: PaisService) { }

  ngOnInit(): void {
    //FORMA NORMAL ANGULA A TRAVES DE SUSCRIBE
    // this.activateRoute.params.subscribe(params => {
    //   console.log(params.id);
    //   this.paisService.verPais(params.id).subscribe(pais => {
    //     this.pais = pais;
    //   })
    // });
    //A TRAVES DE RXJS
    this.activateRoute.params
      .pipe(
        switchMap((param) => this.paisService.verPais(param.id)),
        tap(console.log) //recibe el producto del observable e imprime en consola
      )
      .subscribe(pais => {
        this.pais = pais[0];
        this.hayError = false;
      }, (err) => {
        this.hayError = true;
        this.pais != null;
      });

  }

}
