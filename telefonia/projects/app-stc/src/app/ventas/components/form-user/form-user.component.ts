import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'gsv-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css'],
})
export class FormUserComponent {
  @Input() dataCliente!: any;
  @Input() dataVendedor!: any;

  formulario!: FormGroup;
  @Output() formularioEnviado: EventEmitter<any> = new EventEmitter();
  @Output() formularioCerrado: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit(): void {
    this.cargarFormulario();
  }

  cargarFormulario() {
    this.formulario = new FormGroup({
      // _id: new FormGroup(this.data?._id),
      cliente: new FormControl(
        this.dataCliente?.nombresCompletos,
        Validators.required
      ),
      vendedor: new FormControl(
        this.dataVendedor?.nombresCompletos,
        Validators.required
      ),
    });
  }
  grabar() {
    if (this.formulario.valid) {
      const formData = this.formulario.value;
      console.log(formData);
      this.formularioEnviado.emit(formData);
      this.formulario.reset();
    }
  }
  cerrarFormulario() {
    this.formularioCerrado.emit();
  }
}
