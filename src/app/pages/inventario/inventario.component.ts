import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css'],
})
export class InventarioComponent implements OnInit {
  @ViewChild('img_principal')
  img_principal: ElementRef;
  @ViewChild('img_izquierda')
  img_izquierda: ElementRef;
  @ViewChild('img_derecha')
  img_derecha: ElementRef;
  @ViewChild('img_general')
  img_general: ElementRef;

  ProfileForm = new FormGroup({
    nombre_producto: new FormControl('', [Validators.required]),
    descripcion_producto: new FormControl('', [Validators.required]),
    descripcion_detallada: new FormControl('', [Validators.required]),
    categoria: new FormControl('', [Validators.required]),
    stock: new FormControl('', [Validators.required]),
    cantidad_limite: new FormControl('', [Validators.required]),
    img_principal: new FormControl('', [Validators.required]),
    img_izquierda: new FormControl('', [Validators.required]),
    img_derecha: new FormControl('', [Validators.required]),
    img_general: new FormControl('', [Validators.required]),
  });
  producto = {
    nombre_producto: '',
    descripcion_producto: '',
    descripcion_detallada: '',
    categoria: '',
    stock: '',
    cantidad_limite: '',
    img_principal: '',
    img_izquierda: '',
    img_derecha: '',
    img_general: '',
  };

  constructor(
    private af_firestore: AngularFirestore,
    private af_storage: AngularFireStorage
  ) {}

  ngOnInit(): void {}

  enviar() {
    debugger;
    if (this.ProfileForm.valid) {
      this.af_firestore
        .collection('productos')
        .add(this.producto)
        .then(() => {
          Swal.fire('Muy bien', 'producto agregado con exito', 'success');
          this.reset();
        })
        .catch((error) => {
          debugger;
          console.log(error);

          Swal.fire(
            'Algo va mal',
            'Error al guardar el producto, intentelo más tarde',
            'error'
          );
        });
    } else {
      Swal.fire('Algo va mal', 'Llena todo los campos', 'error');
    }
  }

  reset() {
    this.ProfileForm.reset();
    this.img_principal.nativeElement.src = '';
    this.img_izquierda.nativeElement.src = '';
    this.img_derecha.nativeElement.src = '';
    this.img_general.nativeElement.src = '';
  }

  onChangeFileInput(event, img_index) {
    let element_files = [];
    let file: Blob;
    let reader = new FileReader();

    element_files = event.target.files;

    if (element_files.length !== 0) {
      file = element_files[0];
      reader.onload = (event: any) => {
        switch (img_index) {
          case 1:
            this.img_principal.nativeElement.src = event.target.result;
            this.producto.img_principal = event.target.result;

            break;
          case 2:
            this.img_izquierda.nativeElement.src = event.target.result;
            this.producto.img_izquierda = event.target.result;

            break;
          case 3:
            this.img_derecha.nativeElement.src = event.target.result;
            this.producto.img_derecha = event.target.result;

            break;
          case 4:
            this.img_general.nativeElement.src = event.target.result;
            this.producto.img_general = event.target.result;

            break;
        }
      };

      reader.onerror = (event: any) => {
        console.log('File could not be read: ' + event.target.error.code);
      };

      reader.readAsDataURL(file);
    }
  }
}
