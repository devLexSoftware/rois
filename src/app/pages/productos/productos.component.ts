import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  productos = [];
  constructor(private af_firestore: AngularFirestore) {}

  ngOnInit(): void {
    this.af_firestore
      .collection('productos')
      .get()
      .subscribe((data) => {
        data.forEach((data) => {
          this.productos.push({ ...data.data(), id: data.id });
        });
        console.log(this.productos);
      });
  }
}
