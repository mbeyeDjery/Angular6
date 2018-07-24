import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { Personne } from '../../models/personne';

@Component({
  selector: 'app-ajouterpersonne',
  templateUrl: './ajouterpersonne.component.html',
  styleUrls: ['./ajouterpersonne.component.css']
})
export class AjouterpersonneComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<AjouterpersonneComponent>) {
                this.form = fb.group({
                  nom: ['', [Validators.required, Validators.minLength(4)]],
                  prenom: ['', [Validators.required, Validators.minLength(4)]],
                  age: ['', [Validators.required, Validators.minLength(2), Validators.pattern("[0-9]*")]],
                  email: ['', [Validators.required, Validators.email, Validators.minLength(5)]],
                  phone: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20),
                               Validators.pattern("[0-9]*")]],
                  pays: ['', [Validators.required, Validators.minLength(5)]]
                });
  }

  ngOnInit() {
  }
  ajouter() {
    this.dialogRef.close(this.form.value);
  }

}
