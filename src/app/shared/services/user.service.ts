import { Component,Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { first,map } from 'rxjs/operators';
import {firestore }  from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  userId: string = "";
  userAuth: boolean = false;
  private userProfile: AngularFirestoreDocument<any>;

  constructor(
    private firestore: AngularFirestore,
    private fireAuth:AngularFireAuth
  ) { 
    this.fireAuth.authState.subscribe( user => {
      if(user) {
        console.log("USERSERVICE.....  auth = true");
        this.userId =  user.uid;
        this.userAuth =  true;
        console.log("userId="+this.userId);
      } else {
        console.log("USERSERVICE.....  auth = false");
        // Empty the value when user signs out
        this.userId =  "";
        this.userAuth =  false;
        console.log("userId="+this.userId);
      }
    });


   }


//**************************************//
//******   user authentication    ******//
//**************************************//

///https://angularfirebase.com/snippets/check-if-current-user-exists-with-angularfire/
  isLoggedIn():Promise<any> {
    return this.fireAuth.authState.pipe(first()).toPromise();
  }
 getAuthState(){
    console.log("userService call getAuthState="+this.userAuth);
    return  this.userAuth;
  }
  getUserId(){
        return this.userId;
   
  }
  getConnectedUserId(){
    this.fireAuth.authState.subscribe( user => {
      if(user) {
        console.log("USERSERVICE RUNNNNN...  auth 1");
        this.userId =  user.uid;
        this.userAuth =  true;
        console.log("userService call getUserId="+this.userId);
        return this.userId;
      } else {
        console.log("USERSERVICE RUNNNNN...  auth 0");
        // Empty the value when user signs out
        this.userId =  null;
        this.userAuth =  false;
        console.log("userService call getUserId="+this.userId);
        return this.userId;
      }
    });
  
  }
  // async doSomething(): Promise<string>  {
  //   const user = await this.isLoggedIn()
  //   if (user) {
  //     // do something
  //     this.userId = await user.uid;
  //     return   this.firestore.doc<any>('userProfile/'+this.userId).valueChanges();
  //   } else {
  //     // do something else
  //   }
  // }
 
  // login
  signinUser(newEmail: string, newPassword: string): Promise<any> {
    return this.fireAuth.signInWithEmailAndPassword(newEmail,newPassword)
  }


  resetPassword(email: string):Promise<any> {
    return this.fireAuth.sendPasswordResetEmail(email);
  }

  signoutUser(): Promise<any> {
    return this.fireAuth.signOut();
  }

  // register 
  // tslint:disable-next-line: max-line-length
  signupUserAsociado(idccnit: string,firstname: string, lastname: string, nomtienda: string, phone: string, username: string, password: string): Promise<any> {
    
    console.log("llega a singup",idccnit,firstname, lastname, nomtienda, phone, username, password);
    return this.fireAuth.createUserWithEmailAndPassword(username, password).then((newUser) => {
      console.log("llega luego autorizar",idccnit,firstname, lastname, nomtienda, phone, username, password);
      console.log("userid========="+newUser.user.uid);   // firebase.database().ref('/userProfile').child(newUser.uid).set({
        let fechafb = firestore.Timestamp.now().toDate();
      this.firestore.collection('userProfile').doc(newUser.user.uid).set({
          id: newUser.user.uid,
          asociadoid: idccnit,
          asociado: true,
          admincercanos: false,
          firstname: firstname,
          lastname: lastname,
          nomtienda: nomtienda,
          email: username,
          image:"",
          phone:phone
        }).then(res => {
          var docData = {
            Categoryid: '010general',
            tipo_id: 'cc',
            id: idccnit,
            nombre: nomtienda,
            email: username,
            descripcion: 'Aqui la descripción',
            horario: 'Aqui el horario',
            website:'',
            direccion: 'Aqui dirección',
            plan: 0,
            nomplan: 'Basico',
            lat:4.6528086,
            lng:-74.123069,
            inactivo: false,
            fecha_inactivo: fechafb,
            fecha_creada: fechafb,
            image_header:"https://firebasestorage.googleapis.com/v0/b/cercanosapp.appspot.com/o/imagenes_predeterminadas%2Ftienda%2F18.png?alt=media&token=c740f4c5-3297-4186-99a1-51f9bd63267b",
            image_header_426:"https://firebasestorage.googleapis.com/v0/b/cercanosapp.appspot.com/o/imagenes_predeterminadas%2Ftienda%2F18_426x240.png?alt=media&token=c740f4c5-3297-4186-99a1-51f9bd63267b",
            image_header_640:"https://firebasestorage.googleapis.com/v0/b/cercanosapp.appspot.com/o/imagenes_predeterminadas%2Ftienda%2F18_640x360.png?alt=media&token=c740f4c5-3297-4186-99a1-51f9bd63267b",
            image_header_1280:"https://firebasestorage.googleapis.com/v0/b/cercanosapp.appspot.com/o/imagenes_predeterminadas%2Ftienda%2F18_1280x720.png?alt=media&token=c740f4c5-3297-4186-99a1-51f9bd63267b",
            telefono:phone,
            domicilio: false,
            costo_domicilio:0
            }
            this.addAsociadoIni(docData);
          // this.firestore.collection('asociados').doc(idccnit).set({
          //   console.log('Se adiciono datos inciales asociado');
          // })
        })

    });
  }

  FormularioContacto(docData: any){
    console.log('llego al servicio y docData es', docData);
    console.log('docdata email', docData.email);

    this.firestore.collection('mail').add({
      to: 'cercanosapp@netsolin.com',
message: {
  subject: 'Formulario de contacto cercanosappWeb',
  text: 'This is the plaintext section of the email body.',
  html: `nombre: ${docData.nombre}, 
  email: ${docData.email},
  tema: ${docData.tema},
  mensaje: ${docData.mensaje} `,
},
    })
    console.log('documento creado')
  }
  formularioSubscribe(docData: any){
    console.log('llego al servicio y docData es', docData);
    console.log('docdata email', docData.email);

    this.firestore.collection('mail').add({
      to: 'cercanosapp@netsolin.com',
      message: {
        subject: 'Formulario precios empresarial de cercanosappWeb',
        text: 'This is the plaintext section of the email body.',
        html: `email: ${docData.email},
        mensaje: ${docData.mensaje} `,
      },
    })
    console.log('documento creado')
  }

  addAsociadoIni(docData: any){
    this.firestore.collection('asociados').doc(docData.id).set(docData).then(function() {
      console.log("Adiciono asociado!");
    });
    //Adicionar banner asociado
    var docBanner = {
      // tslint:disable-next-line: max-line-length
      description: "https://firebasestorage.googleapis.com/v0/b/cercanosapp.appspot.com/o/imagenes_predeterminadas%2Fbanner%2F2_426x240.png?alt=media&token=a624b30b-39b8-43ea-b830-c6cb399fe051",
      image: "https://firebasestorage.googleapis.com/v0/b/cercanosapp.appspot.com/o/imagenes_predeterminadas%2Fbanner%2F2_426x240.png?alt=media&token=a624b30b-39b8-43ea-b830-c6cb399fe051",
      image_426:"https://firebasestorage.googleapis.com/v0/b/cercanosapp.appspot.com/o/imagenes_predeterminadas%2Fbanner%2F2_426x240.png?alt=media&token=a624b30b-39b8-43ea-b830-c6cb399fe051",
      image_640:"https://firebasestorage.googleapis.com/v0/b/cercanosapp.appspot.com/o/imagenes_predeterminadas%2Fbanner%2F2_640x360.png?alt=media&token=a624b30b-39b8-43ea-b830-c6cb399fe051",
      image_1280:"https://firebasestorage.googleapis.com/v0/b/cercanosapp.appspot.com/o/imagenes_predeterminadas%2Fbanner%2F2_1280x720.png?alt=media&token=a624b30b-39b8-43ea-b830-c6cb399fe051",
      name: "Banner Inicial",
      creacliente: false,
      text:docData.nombre,
      shopping_groupId: docData.id
    };

    var docBanner2 = {
      // tslint:disable-next-line: max-line-length
      description: "https://firebasestorage.googleapis.com/v0/b/cercanosapp.appspot.com/o/imagenes_predeterminadas%2Fbanner%2F2_426x240.png?alt=media&token=a624b30b-39b8-43ea-b830-c6cb399fe051",
      image: "https://firebasestorage.googleapis.com/v0/b/cercanosapp.appspot.com/o/imagenes_predeterminadas%2Fbanner%2F2_426x240.png?alt=media&token=a624b30b-39b8-43ea-b830-c6cb399fe051",
      image_426:"https://firebasestorage.googleapis.com/v0/b/cercanosapp.appspot.com/o/imagenes_predeterminadas%2Fbanner%2F2_426x240.png?alt=media&token=a624b30b-39b8-43ea-b830-c6cb399fe051",
      image_640:"https://firebasestorage.googleapis.com/v0/b/cercanosapp.appspot.com/o/imagenes_predeterminadas%2Fbanner%2F2_640x360.png?alt=media&token=a624b30b-39b8-43ea-b830-c6cb399fe051",
      image_1280:"https://firebasestorage.googleapis.com/v0/b/cercanosapp.appspot.com/o/imagenes_predeterminadas%2Fbanner%2F2_1280x720.png?alt=media&token=a624b30b-39b8-43ea-b830-c6cb399fe051",
      name: "Banner Secundario",
      text:docData.descripcion,
      creacliente: false,
      shopping_groupId: docData.id
    };

    this.firestore.collection('asociados/'+docData.id+'/shopping_banner').doc('BannerInicial').set(docBanner).then(function() {
      console.log("Adiciono banner asociado!");
    });

    this.firestore.collection('asociados/'+docData.id+'/shopping_banner').doc('BannerSecundario').set(docBanner2).then(function() {
      console.log("Adiciono banner asociado!");
    });

    //Adicionar catagoria asociado
    var docCategory = {
      color: "dark",
      icon: "bed",
      image: "https://firebasestorage.googleapis.com/v0/b/cercanosapp.appspot.com/o/imagenes_predeterminadas%2Fcategoria%2F60_426x240.png?alt=media&token=de6941f7-d562-4fa5-83b1-d6f66a02c686",
      image_426: "https://firebasestorage.googleapis.com/v0/b/cercanosapp.appspot.com/o/imagenes_predeterminadas%2Fcategoria%2F60_426x240.png?alt=media&token=de6941f7-d562-4fa5-83b1-d6f66a02c686",
      image_640: "https://firebasestorage.googleapis.com/v0/b/cercanosapp.appspot.com/o/imagenes_predeterminadas%2Fcategoria%2F60_640x360.png?alt=media&token=de6941f7-d562-4fa5-83b1-d6f66a02c686",
      image_1280: "https://firebasestorage.googleapis.com/v0/b/cercanosapp.appspot.com/o/imagenes_predeterminadas%2Fcategoria%2F60_1280x720.png?alt=media&token=de6941f7-d562-4fa5-83b1-d6f66a02c686",
      name: "Tu tienda"
    };
    this.firestore.collection('asociados/'+docData.id+'/shopping_category').doc('00PRINCIPAL').set(docCategory).then(function() {
      console.log("Adiciono categoria asociado!");
    });
    //Adicionar item inicial asociado
    var docItem = {
      descripcion: "Coloca la descripción de tu producto de manera detallada, con información que sea clara para tus futuros clientes",
      discount: true,
      discount_price: 9000,
      price: 10000,
      promotion: true,
      recommended: false,
      shopping_categoryId: '00PRINCIPAL',
      shopping_category_name: 'Tu tienda',
      shopping_groupId: '1f4eNCpvqDlJiQ5wZVUh',
      stock: 100,
      image: "https://firebasestorage.googleapis.com/v0/b/cercanosapp.appspot.com/o/imagenes_predeterminadas%2Fitems%2F35_426x240.jpg?alt=media&token=772ddcd7-e46a-4e4b-a724-dcbf8c79c6ba",
      image_slide:[ 
        "https://firebasestorage.googleapis.com/v0/b/cercanosapp.appspot.com/o/imagenes_predeterminadas%2Fitems%2F35_426x240.jpg?alt=media&token=772ddcd7-e46a-4e4b-a724-dcbf8c79c6ba", 
        "https://firebasestorage.googleapis.com/v0/b/cercanosapp.appspot.com/o/imagenes_predeterminadas%2Fitems%2F35_426x240.jpg?alt=media&token=772ddcd7-e46a-4e4b-a724-dcbf8c79c6ba"
        ],
        image_426: "https://firebasestorage.googleapis.com/v0/b/cercanosapp.appspot.com/o/imagenes_predeterminadas%2Fitems%2F35_426x240.jpg?alt=media&token=772ddcd7-e46a-4e4b-a724-dcbf8c79c6ba",
        image_slide_426:[ 
          "https://firebasestorage.googleapis.com/v0/b/cercanosapp.appspot.com/o/imagenes_predeterminadas%2Fitems%2F35_426x240.jpg?alt=media&token=772ddcd7-e46a-4e4b-a724-dcbf8c79c6ba", 
          "https://firebasestorage.googleapis.com/v0/b/cercanosapp.appspot.com/o/imagenes_predeterminadas%2Fitems%2F35_426x240.jpg?alt=media&token=772ddcd7-e46a-4e4b-a724-dcbf8c79c6ba"
          ],
          image_640: "https://firebasestorage.googleapis.com/v0/b/cercanosapp.appspot.com/o/imagenes_predeterminadas%2Fitems%2F35_640x360.jpg?alt=media&token=772ddcd7-e46a-4e4b-a724-dcbf8c79c6ba",
          image_slide_640:[ 
            "https://firebasestorage.googleapis.com/v0/b/cercanosapp.appspot.com/o/imagenes_predeterminadas%2Fitems%2F35_640x360.jpg?alt=media&token=772ddcd7-e46a-4e4b-a724-dcbf8c79c6ba", 
            "https://firebasestorage.googleapis.com/v0/b/cercanosapp.appspot.com/o/imagenes_predeterminadas%2Fitems%2F35_640x360.jpg?alt=media&token=772ddcd7-e46a-4e4b-a724-dcbf8c79c6ba"
            ],
            image_1280: "https://firebasestorage.googleapis.com/v0/b/cercanosapp.appspot.com/o/imagenes_predeterminadas%2Fitems%2F35_1280x720.jpg?alt=media&token=772ddcd7-e46a-4e4b-a724-dcbf8c79c6ba",
            image_slide_1280:[ 
              "https://firebasestorage.googleapis.com/v0/b/cercanosapp.appspot.com/o/imagenes_predeterminadas%2Fitems%2F35_1280x720.jpg?alt=media&token=772ddcd7-e46a-4e4b-a724-dcbf8c79c6ba", 
              "https://firebasestorage.googleapis.com/v0/b/cercanosapp.appspot.com/o/imagenes_predeterminadas%2Fitems%2F35_1280x720.jpg?alt=media&token=772ddcd7-e46a-4e4b-a724-dcbf8c79c6ba"
              ],
                  name: "Tu Producto"
    };
    this.firestore.collection('asociados/'+docData.id+'/shopping_item').doc('00PROD01').set(docItem).then(function() {
      console.log("Adiciono Item asociado!");
    });
  }

  signupUser(firstname: string, lastname: string, phone: string, username: string, password: string): Promise<any> {
    return this.fireAuth.createUserWithEmailAndPassword(username, password).then((newUser) => {
      console.log("userid========="+newUser.user.uid);   // firebase.database().ref('/userProfile').child(newUser.uid).set({
        this.firestore.collection('userProfile').doc(newUser.user.uid).set({
          id: newUser.user.uid,
          idccnit: '',
          asociado: false,
          admincercanos: false,
          firstname: firstname,
          lastname: lastname,
          email: username,
          image:"",
          phone:phone
        })

    });
  }

  //*******************************//
//******   user profile    ******//
//*******************************//

  getUserProfile(){
  //  this.fireAuth.authState.subscribe(user => {
  //   if (user) {
  //     //this.userId = user.uid;
  //     //console.log("CALL check user auth________________userService user auth id = "+ this.userId);
  //     // set angularfireDoc userfile
  //    // this.userProfile = this.firestore.doc<any>('userProfile/'+this.userId);
  //       //######
  //   }
  // });
    console.log("userId="+this.userId);
    console.log("getUserProfile");
    return   this.firestore.doc<any>('userProfile/'+this.userId).valueChanges();
  }

  
  async getUserProfileId(){
   const user = await this.isLoggedIn()
    if (user) {
      // do something
      this.userId = await user.uid;
      //return   this.firestore.doc<any>('userProfile/'+this.userId).valueChanges();
    } else {
      // do something else
      console.log("++++++++No userId"+this.userId)
    }
    console.log("++++++++++getUserProfileId = "+this.userId)
    return this.userId;
  }

  updateDatosAsociado(asociadoId: string, datosAsociado: any
  ){
    
    return  this.firestore.doc<any>('asociados/'+asociadoId).update(datosAsociado);
  }

  updateUserProfile(
    firstname: string, 
    lastname: string, 
    phone: string, 
    email: string, 
  ){
    
    return  this.firestore.doc<any>('userProfile/'+this.userId).update({
      firstname: firstname,
      lastname: lastname,
      phone:phone,
      email: email
    });
  }


//*******************************//
//******   user address    ******//
//*******************************//

getAddressByUserId(){
  console.log("_____getAddressByUserId=", this.userId);
  return this.firestore.collection<any>('/userAddress', ref => ref
  .where('userProfileId', '==', this.userId))
  .snapshotChanges().pipe(
    map(actions => {  
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id; 
        console.log("####get a direccion=",id,data);
        return { id:id, ...data };
      });
    })
  );
}

getDireccionesByUserId(userId){
  console.log("_____getAddressByUserId=", userId);
  return this.firestore.collection<any>('/userAddress', ref => ref
  .where('userProfileId', '==', userId))
  .snapshotChanges().pipe(
    map(actions => {  
      console.log('actions', actions);
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id; 
        console.log("####get a direccion="+data);
        return { id:id, ...data };
      });
    })
  );
}

getAddressById( addressId: string){
  console.log("_______getAddressById")
  return   this.firestore.doc<any>('userAddress/'+addressId).valueChanges();
}

addAddress(
  label: string,
  fullname: string,
  phone: number, 
  address: string
) {
  console.log("___addAddress=");
  return  this.firestore.collection<any>('userAddress').add({
      userProfileId: this.userId,
      label: label,
      fullname: fullname,
      phone: phone,
      address: address
      //createdTime: new Date()
  });
}

editAddress(
  addressId: string,    
  title: string,
  fullname: string,
  phone: number, 
  address: string){
    console.log("addressId="+addressId)
    return  this.firestore.doc<any>('userAddress/'+addressId).update({
      label: title,
      fullname: fullname,
      phone: phone,
      address: address
    });
}

deleteAddress(addressId: string){
  return this.firestore.doc('userAddress/'+addressId).delete();
}




}