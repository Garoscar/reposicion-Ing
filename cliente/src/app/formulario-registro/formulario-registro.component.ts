import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css'],
})
export class FormularioRegistroComponent implements OnInit {


  form = this.fb.group({
    nombre: ['', [Validators.required]],
    apellido: ['', [Validators.required]],
    dni: [, [Validators.required]],
    fechaNacimiento: ['', [Validators.required]],
    correo: ['', [Validators.required]],
    urlImagen: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuariosService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  onFileChange(e: Event | any) {
    const imagen = new FormData();
    try {
      if (e.target.files.length > 0) {
        // const file = e.target.files[0];
        // imagen.append('image', file);
        // this.usuarioService.postImagen(imagen).subscribe((url) => {
        //   this.form.patchValue({
        //     urlImagen: url,
        //   });
        // });
      }
    } catch (error) {
      console.log('error');
    }
  }

  submit(){}
}
