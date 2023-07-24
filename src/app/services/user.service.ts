import { Injectable } from '@angular/core';
import { User } from '../models/user-model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}
  private alert: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public alert$: Observable<boolean> = this.alert.asObservable();

  public emmit(value: boolean) {
    this.alert.next(value);
  }

  //---------------------------
  private readonly STORAGE_KEY_2 = 'UserList';

  getAllUser(): User[] {
    const storedData = localStorage.getItem(this.STORAGE_KEY_2);
    console.log('Stored Data:', storedData);

    const parsedData = storedData ? JSON.parse(storedData) : [];
    console.log('Parsed Data:', parsedData);

    return parsedData;
  }

  addUser(email: string, password: string): void {
    let allUser: User[] = this.getAllUser();
    const id = allUser.length > 0 ? allUser[allUser.length - 1].id + 1 : 1;
    let user: User = {
      id: id,
      name: email,
      password: password,
    };
    console.log(allUser);
    allUser.push(user);

    localStorage.setItem(this.STORAGE_KEY_2, JSON.stringify(allUser));
  }

  removeUser(id: number): void {
    let allUser = this.getAllUser();
    allUser = allUser.filter((user: User) => id !== user.id);
    localStorage.setItem(this.STORAGE_KEY_2, JSON.stringify(allUser));
  }

  clearUsers(): void {
    localStorage.removeItem(this.STORAGE_KEY_2);
  }
  //login validate-------------------
  validateUser(email: string, password_user: string) {
    const allUser: User[] = this.getAllUser();
    let emailValidate: boolean = false;
    let passwordValidate: boolean = false;
    allUser.forEach(({ name, password }) => {
      if (name == email) {
        emailValidate = true;
      }
      if (password == password_user) {
        passwordValidate = true;
      }
    });
    return [emailValidate, passwordValidate];
  }
}
