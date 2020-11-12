import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css'],
})
export class NuevoUsuarioComponent implements OnInit {
  UsuarioForm = new FormGroup({
    nombre_usuario: new FormControl('', [Validators.required]),
    apellido_paterno: new FormControl('', [Validators.required]),
    apellido_materno: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    re_password: new FormControl('', [Validators.required]),
    rol: new FormControl('', [Validators.required]),
  });
  usuario = {
    nombre_usuario: '',
    apellido_paterno: '',
    apellido_materno: '',
    email: '',
    password: '',
    rol: '',
  };

  constructor(
    private af_firestore: AngularFirestore,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  enviar() {
    if (this.UsuarioForm.valid) {
      if (
        this.UsuarioForm.value['password'] ===
        this.UsuarioForm.value['re_password']
      ) {
        this.af_firestore
          .collection('users')
          .add(this.usuario)
          .then(() => {
            Swal.fire('Muy bien', 'usuario agregado con exito', 'success');
            this.reset();
          })
          .catch(() => {
            Swal.fire(
              'Algo va mal',
              'Error al guardar el usuario, intentelo más tarde',
              'error'
            );
          });
      } else {
        this._snackBar.open('Las contraseñas no coinciden', undefined, {
          duration: 2000,
        });
      }
    } else {
      Swal.fire('Algo va mal', 'Llena todo los campos', 'error');
    }
  }

  reset() {
    this.UsuarioForm.reset();
  }
}
