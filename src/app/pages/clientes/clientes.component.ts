import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
})
export class ClientesComponent implements OnInit {
  clientes = [];

  constructor(private af_firestore: AngularFirestore) {}

  ngOnInit(): void {
    this.af_firestore
      .collection('clientes')
      .get()
      .subscribe((data) => {
        data.forEach((data) => {
          this.clientes.push({ ...data.data(), id: data.id });
        });
      });
  }
}
