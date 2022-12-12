import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { BehaviorSubject } from 'rxjs';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  authenticationstate = new BehaviorSubject(false);

  constructor(private auth: Auth, private storage: Storage, private plt: Platform) 
  { 
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }

  checkToken()
  {
    this.storage.get(TOKEN_KEY).then(res => {
      if(res)
      {
        this.authenticationstate.next(true);
      }
    })
  }

  Login()
  {
    return this.storage.set(TOKEN_KEY, 'GateKeeper 1234567').then(() => {
      this.authenticationstate.next(true);
    });
  }

  Logout()
  {
    return this.storage.remove(TOKEN_KEY).then(() => {
      this.authenticationstate.next(false);
    });
  }

  isAuthenticaed()
  {
    return this.authenticationstate.value;
  }
  async register({email, password})
  {
    try
    {
      const user = await createUserWithEmailAndPassword(this.auth, email, password);
      return user;
    } catch(e) {
      return null;
    }
  }

  async login({ email, password }) {
		try {
			const user = await signInWithEmailAndPassword(this.auth, email, password);
			return user;
		} catch (e) {
			return null;
		}
	}

  logout() {
    return signOut(this.auth);
  }
}
