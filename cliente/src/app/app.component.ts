import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cliente';

  form = this.fb.group({
    nombre: ['', [Validators.required]],
    apellido: ['', [Validators.required]],
    dni: [, [Validators.required]],
    fechaNacimiento: ['', [Validators.required]],
    correo: ['', [Validators.required]],
    foto: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  onFileChange(e: Event | any) {
    const imagen = new FormData();
    try {
      if (e.target.files.length > 0) {
        const file = e.target.files[0];
        imagen.append('image', file);
        // this.actividadSrv.postImagen(imagen).subscribe((url) => {
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
