import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {
  users = [];
  constructor(private af_firestore: AngularFirestore) {}

  ngOnInit(): void {
    this.af_firestore
      .collection('users')
      .get()
      .subscribe((data) => {
        data.forEach((data) => {
          this.users.push({ ...data.data(), id: data.id });
        });
      });
  }
}
