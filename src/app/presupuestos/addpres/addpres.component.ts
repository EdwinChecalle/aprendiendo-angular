import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-addpres',
  templateUrl: './addpres.component.html',
  styleUrls: ['./addpres.component.css']
})
export class AddpresComponent implements OnInit {

  presupuestoForm: FormGroup;
  presupuesto: any;

  constructor(private pf: FormBuilder) { }

  ngOnInit() {
    this.presupuestoForm = this.pf.group({
      proveedor: '',
      fecha: '',
      concepto: '',
      base: '',
      tipo: '',
      iva: '',
      total: ''
      });
  }

}
