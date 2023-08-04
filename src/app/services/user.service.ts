import { Injectable } from '@angular/core';
import { User } from '../models/user-model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() { }
  private alert: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public alert$: Observable<boolean> = this.alert.asObservable();
  private login: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public login$: Observable<boolean> = this.login.asObservable();

  currentUser: User = { "id": 0, "name": "", "password": "" }

  public emmit(value: boolean) {
    this.alert.next(value);
  }
  public emmitLogin(value: boolean, userCurrent: string) {
    this.currentUser = this.getUserData(userCurrent)
    this.login.next(value);
  }
  getCurrentUser() {
    return this.currentUser
  }

  //---------------------------
  private readonly STORAGE_KEY_2 = 'UserList';

  getAllUser(): User[] {
    const storedData = localStorage.getItem(this.STORAGE_KEY_2);

    const parsedData = storedData ? JSON.parse(storedData) : [];

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
  getUserID(id: number) {
    const user = this.getAllUser().find((data) => {
      data.id == id
    })
    return user
  }
  getUserData(email: string): User {

    const user = this.getAllUser().find((data) => {
      return data.name === email
    })
    return user || { "id": 0, "name": "", "password": "" }
  }
}