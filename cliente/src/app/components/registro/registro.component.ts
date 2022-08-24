import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  form = this.fb.group({
    nombre: ['', [ Validators.required ]],
    apellido: ['' , [ Validators.required ]],
    dni: ['' , [ Validators.required ]],
    fechaNacimiento: ['' , [ Validators.required ]],
    correo: ['' , [ Validators.required, Validators.email ]],
    foto: ['' , [ Validators.required ]],
  });

  constructor(
    private usuarioSrv: UsuarioService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onFileChange(e: Event | any) {
    console.log('event', e);
    const imagen = new FormData();
    try {
      if (e.target.files.length > 0) {
        const file = e.target.files[0];
        imagen.append('image', file);
        this.usuarioSrv.addFoto(imagen).subscribe((url) => {
          this.form.patchValue({
            foto: url,
          });
        });
      }
    } catch (error) {
      console.log('error');
    }
  }

  submit() {
    const usuario = this.form.getRawValue();
    this.usuarioSrv.addRegistro(usuario).subscribe((usuario) => {

      if (usuario) {
        this.router.navigate(['/usuarios']);
      }

    });
  }
}
