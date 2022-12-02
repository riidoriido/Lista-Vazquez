import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/model/alumno.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  alumnos: Alumno[] = [
    new Alumno(1, 'Fernando', 'Martinez', 8, false, new Date('05/15/95')),
    new Alumno(2, 'Julieta', 'Velasquez', 1, false, new Date('11/05/01')),
    new Alumno(3, 'Javier', 'Angeles', 7, false, new Date('08/22/98')),
    new Alumno(4, 'Samuel', 'Gonzales', 5, false, new Date('02/06/02')),
    new Alumno(5, 'Jimena', 'Albedo', 9, false, new Date('07/16/96')),
    new Alumno(6, 'Iñaki', 'Cáceres', 4, false, new Date('12/20/00')),
    new Alumno(7, 'Tomas', 'Romaniuk', 4, false, new Date('6/10/01')),
    new Alumno(8, 'Gabriela', 'Stahl', 10, false, new Date('10/01/99')),
  ];

  constructor() {}

  ngOnInit(): void {}
}
