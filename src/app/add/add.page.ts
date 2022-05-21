import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  titre:string;
  etudiant:string;
  enseignant:string;
  type:string;
    constructor(private fire:AngularFirestore, private route:Router, private alert:AlertController) { }
  
    ngOnInit() {
    }
    ajouter(){
      this.fire.collection("pfe").add({ titre:this.titre,etudiant:this.etudiant,enseignant:this.enseignant,type:this.type})
              .then ( data => { this.MonAlert("PFE ajouté avec succée");
                                this.route.navigateByUrl("home") })
              .catch ( err => { })
    }
  
    async MonAlert(message:string){
      const alert =await this.alert.create({
        header: 'Alert Ajout',
        subHeader : 'ESSAT',
        message : message,
        buttons : ['OK']
  
      });
      await alert.present();
  
    }

}