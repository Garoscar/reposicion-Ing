import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { UsuarioInterface } from '../../interfaces/usuario';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css'],
})
export class ListaUsuariosComponent implements OnInit {

  usuarios: UsuarioInterface[] = [];

  constructor(private usuarioSrv: UsuarioService) {}

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios() {
    this.usuarioSrv.getUsuarios().subscribe((usuarios) => {
      this.usuarios = usuarios;
    });
  }
}
