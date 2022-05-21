import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pfe:any=[]
  constructor(private fire:AngularFirestore, private route:Router) {
    this.getPfes();

  }
  getPfes(){
    this.fire.collection("pfe").snapshotChanges()
        .subscribe(
          (data) => {
            this.pfe=data.map(
              e => {
                return {
                  id:e.payload.doc.id,
                  titre:e.payload.doc.data()["titre"],
                  etudiant:e.payload.doc.data()["etudiant"],
                  enseignant:e.payload.doc.data()["enseignant"],
                  type:e.payload.doc.data()["type"]
                }
              }
            )
            console.log(this.pfe);
          }
        )
  }
  supp(et){
    this.fire.doc("pfe/"+et.id).delete();
    this.getPfes();
  }
  lien1(){
    this.route.navigateByUrl("/add");
  }


}