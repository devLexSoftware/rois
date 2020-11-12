import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from '../../models/user.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario: UserModel;

  constructor(private firestore: AngularFirestore, private router: Router) {}

  ngOnInit(): void {
    this.usuario = new UserModel();
  }

  onSubmit(form: NgForm) {
    console.log(form);
    this.firestore
      .collection('users', (ref) =>
        ref.where('correo', '==', this.usuario.correo)
      )
      .get()
      .subscribe((data) => {
        if (!data.empty) {
          data.forEach((data) => {
            let userData = data.data();
            if (userData.password == this.usuario.password) {
              this.showAlert('success', `Bienvendio ${this.usuario.correo}`);
              this.router.navigateByUrl(`/home`);
            } else {
              this.showAlert('error', 'Contraseña erronea');
            }
          });
        } else {
          this.showAlert('error', 'Usuario no encontrado');
        }
      });
  }

  showAlert(icon, message) {
    Swal.fire({
      title: icon == 'success' ? 'Muy bien' : 'Error',
      text: message,
      icon: icon,
      confirmButtonText: 'Ok',
    });
  }
}
