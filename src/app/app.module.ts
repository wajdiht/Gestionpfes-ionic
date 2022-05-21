import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBC7UYieJnQRigDQmH8AhaaFEH979zZtTQ",
  authDomain: "gestionpfe-7d6e2.firebaseapp.com",
  projectId: "gestionpfe-7d6e2",
  storageBucket: "gestionpfe-7d6e2.appspot.com",
  messagingSenderId: "427343155720",
  appId: "1:427343155720:web:17257179292d9fb8f977bd",
  measurementId: "G-XGP84MH0CJ"
};
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),AppRoutingModule,AngularFireModule.initializeApp(firebaseConfig), AngularFirestoreModule
    
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}


