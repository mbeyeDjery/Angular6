import { AjouterpersonneComponent } from './ajouterpersonne/ajouterpersonne.component';
import { EditerpersonneComponent } from './editerpersonne/editerpersonne.component';
import { MatSort, MatPaginator, MatTableDataSource, MatDialog, MatDialogConfig, MatSnackBar } from '@angular/material';
import { PersonneService } from './../services/personne.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Personne } from '../models/personne';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-personnes',
  templateUrl: './personnes.component.html',
  styleUrls: ['./personnes.component.css']
})
export class PersonnesComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  personnes: Personne;
  dataSource;
  colonnes = ['id', 'nom', 'prenom', 'age', 'email', 'phone', 'pays'];

  constructor(public snackBar: MatSnackBar, private app: AppComponent, private personneService: PersonneService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.app.setTitle('Liste des personnes');
    this.personneService.getPersonnes()
      .subscribe(recu => {
        this.dataSource = new MatTableDataSource(recu);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  editPersonne({ id, nom, prenom, age, email, phone, pays }: Personne) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    // dialogConfig.height = '600px';
    dialogConfig.width = '500px';
    dialogConfig.data = {id, nom, prenom, age, email, phone, pays};

    const dialogRef = this.dialog.open(EditerpersonneComponent,
      dialogConfig);

    dialogRef.afterClosed().subscribe(val => {
      if (val){
        console.log('Dialog output:', val);
        this.snackBar.open("Modification terminée", "", {
          horizontalPosition: 'center',
          verticalPosition: 'top',
          duration: 2000
        });
      }
    });
  }
  ajouterPersonne(): void {
    // this.dataSource.data.push({ 'id': '' , 'nom': '', 'prenom': '', 'age': '',
    // 'email': '', 'phone': '', 'pays': '' });
    //     this.dataSource.data = this.dataSource.data.slice();
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    // dialogConfig.height = '600px';
    dialogConfig.width = '500px';

    const dialogRef = this.dialog.open(AjouterpersonneComponent,
      dialogConfig);

    dialogRef.afterClosed().subscribe(val => {
      if (val) {
        console.log('Dialog output:', val);
        this.dataSource.data.push(val);
        this.dataSource.data = this.dataSource.data.slice();
        this.snackBar.open("Ajout de personne reussi", "", {
          horizontalPosition: 'center',
          verticalPosition: 'top',
          duration: 2000
        });
      }
    });

  }
  supprimerPersonne(): void {
    this.dataSource.data.splice(0, 1);
    this.dataSource.paginator = this.paginator;
  }

}
