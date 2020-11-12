import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente.component.css'],
})
export class NuevoClienteComponent implements OnInit {
  cliente = {
    nombre_usuario: '',
    apellido_paterno: '',
    apellido_materno: '',
    email: '',
    telefono: '',
  };

  constructor(private af_firestore: AngularFirestore) {}

  ngOnInit(): void {}

  enviar() {
    if (
      this.cliente.apellido_materno !== '' &&
      this.cliente.apellido_paterno !== '' &&
      this.cliente.email !== '' &&
      this.cliente.nombre_usuario !== '' &&
      this.cliente.telefono !== ''
    ) {
      this.af_firestore
        .collection('clientes')
        .add(this.cliente)
        .then(() => {
          Swal.fire('Muy bien', 'cliente agregado con exito', 'success');
          this.reset();
        })
        .catch(() => {
          Swal.fire(
            'Algo va mal',
            'Error al guardar el cliente, intentelo más tarde',
            'error'
          );
        });
    } else {
      Swal.fire('Algo va mal', 'Llena todo los campos', 'error');
    }
  }

  reset() {
    this.cliente = {
      nombre_usuario: '',
      apellido_paterno: '',
      apellido_materno: '',
      email: '',
      telefono: '',
    };
  }
}
