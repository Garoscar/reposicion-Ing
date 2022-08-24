import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { UsuarioInterface } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private url = environment.apiUrl + 'usuario';

  getUsuarios(): Observable<UsuarioInterface[]> {
    return this.http.get<UsuarioInterface[]>(this.url + '/');
  }

  addRegistro(usuario: any) {
    return this.http.post(this.url + '/', usuario);
  }

  addFoto(foto: any) {
    return this.http.post(this.url + '/imagen', foto);
  }

  constructor(private http: HttpClient) {}
}
