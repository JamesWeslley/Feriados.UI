import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { FeriadoApiService } from 'src/app/feriado-api.service';

@Component({
  selector: 'app-add-edit-feriado',
  templateUrl: './add-edit-feriado.component.html',
  styleUrls: ['./add-edit-feriado.component.css']
})
export class AddEditFeriadoComponent implements OnInit {

  inspectionList$!: Observable<any[]>;
  statusList$!: Observable<any[]>;
  inspectionTypesList$!: Observable<any[]>;

  constructor(private apiService: FeriadoApiService) { }

  @Input() feriado: any;
  @Input() modalEdicaoRef: any;
  id: number = 0;
  data!: FormControl;
  titulo!: FormControl;
  descricao!: FormControl;
  legislacao!: FormControl;
  tipo!: FormControl;
  horaInicio!: FormControl;
  horaFim!: FormControl;
  datasMoveis!: FormControl;
  listaFeriados$!: Observable<any[]>;
  formGroup!: FormGroup;
  submitted = false;

  ngOnInit(): void {
    this.listaFeriados$ = this.apiService.obterFeriado();
    this.id = this.feriado.id;
    this.formGroup = new FormGroup({
      data: new FormControl(this.feriado.data, [Validators.maxLength(5)]),
      titulo: new FormControl({ value: this.feriado.titulo, disabled: true }),
      descricao: new FormControl(this.feriado.descricao, [Validators.required, Validators.maxLength(200)]),
      legislacao: new FormControl(this.feriado.legislacao, [Validators.required, Validators.maxLength(200)]),
      tipo: new FormControl(this.feriado.tipo, [Validators.required, Validators.maxLength(50)]),
      horaInicio: new FormControl(this.feriado.horaInicio, [Validators.maxLength(8)]),
      horaFim: new FormControl(this.feriado.horaFim, [Validators.maxLength(8)]),
      datasMoveis: new FormControl(this.feriado.datasMoveis)
    });

  }

  get controlesRegistrados() {
    return this.formGroup.controls;
  }

  salvar() {
    this.submitted = true;
    if (this.formGroup.valid) {
      console.log(this.id);
      var feriado = {
        data: this.formGroup.value.data,
        descricao: this.formGroup.value.descricao,
        legislacao: this.formGroup.value.legislacao,
        tipo: this.formGroup.value.tipo,
        horaInicio: this.formGroup.value.horaInicio,
        horaFim: this.formGroup.value.horaFim,
        datasMoveis: this.formGroup.value.datasMoveis
      }
      this.apiService.atualizarFeriado(this.id, feriado).subscribe(res => {
        this.modalEdicaoRef.close();
        var alertaSucessoAtualizacao = document.getElementById('alerta-sucesso-atualizacao');
        if (alertaSucessoAtualizacao) {
          alertaSucessoAtualizacao.style.display = "block";
        }
        setTimeout(function () {
          if (alertaSucessoAtualizacao) {
            alertaSucessoAtualizacao.style.display = "none"
          }
        }, 4000);
      })
    }
  }
}
