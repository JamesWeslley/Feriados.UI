import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { FeriadoApiService } from 'src/app/feriado-api.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-show-feriado',
  templateUrl: './show-feriado.component.html',
  styleUrls: ['./show-feriado.component.css']
})
export class ShowFeriadoComponent implements OnInit {

  listaFeriados$!: Observable<any[]>;
  feriado: any;
  @ViewChild('modalEdicao') modalEdicao: any;
  modalEdicaoRef: any;

  constructor(private apiService: FeriadoApiService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.listaFeriados$ = this.apiService.obterFeriado();
  }

  abrirModalEdicao(feriado: any) {
    this.feriado = feriado;
    this.modalEdicaoRef = this.modalService.open(this.modalEdicao, { backdrop: 'static', size: 'xl' });
    this.modalEdicaoRef.result.then(() => {
      this.listaFeriados$ = this.apiService.obterFeriado();
    }, () => { });
  }

  excluir(feriado: any) {
    if (confirm(`Tem certeza que deseja excluir o feriado ${feriado.titulo}?`)) {
      this.apiService.deletarFeriado(feriado.id).subscribe(res => {

        var alertaSucessoExclusao = document.getElementById('alerta-sucesso-exclusao');
        if (alertaSucessoExclusao) {
          alertaSucessoExclusao.style.display = "block";
        }
        setTimeout(function () {
          if (alertaSucessoExclusao) {
            alertaSucessoExclusao.style.display = "none"
          }
        }, 4000);
        this.listaFeriados$ = this.apiService.obterFeriado();
      })
    }
  }
}
