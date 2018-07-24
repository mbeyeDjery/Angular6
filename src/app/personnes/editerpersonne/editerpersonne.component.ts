import { Personne } from './../../models/personne';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-editerpersonne',
  templateUrl: './editerpersonne.component.html',
  styleUrls: ['./editerpersonne.component.css']
})
export class EditerpersonneComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<EditerpersonneComponent>,
              @Inject(MAT_DIALOG_DATA) {id, nom, prenom, age, email, phone, pays}: Personne) {
                this.form = fb.group({
                  id: [id, [Validators.required, Validators.minLength(1), Validators.maxLength(2)]],
                  nom: [nom, [Validators.required, Validators.minLength(4)]],
                  prenom: [prenom, [Validators.required, Validators.minLength(4)]],
                  age: [age, [Validators.required, Validators.minLength(2)]],
                  email: [email, [Validators.required, Validators.email, Validators.minLength(5)]],
                  phone: [phone, [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
                  pays: [pays, [Validators.required, Validators.minLength(5)]]
                });
  }

  ngOnInit() {
  }
  modifier(): void {
    this.dialogRef.close(this.form.value);
  }
  supprimer(): void {
    this.dialogRef.close();
  }

}
