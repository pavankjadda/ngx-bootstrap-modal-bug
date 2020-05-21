import {ChangeDetectorRef, Component, OnInit, TemplateRef, VERSION, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {SequenceNumberService} from "./sequence-number.service";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit
{
  name = 'Angular ' + VERSION.major;
  sequenceNumbers: SequenceNumber[];

  //Mat Table
  sequenceNumberDisplayedColumns: string[] = ['personFullName', 'consentDate', 'sequenceNumber'];
  sequenceNumbersDataSource = new MatTableDataSource<SequenceNumber>();
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  //Ngx-Bootstrap Modal default config
  modalRef: BsModalRef;
  modalConfig = {
    keyboard: false,
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-md'
  };

  constructor(private sequenceNumberService: SequenceNumberService,
              private changeDetectorRef: ChangeDetectorRef,
              private modalService: BsModalService)
  {
  }

  ngOnInit(): void
  {

  }

  openSequenceNumberEditModal(template: TemplateRef<any>)
  {
    this.loadSequenceNumbers();

    this.modalRef = this.modalService.show(template, this.modalConfig);
    this.modalRef.setClass('modal-lg');
  }

  private loadSequenceNumbers()
  {
    this.sequenceNumberService.loadSequenceNumbers().subscribe(
      data=>
      {
        this.sequenceNumbers=data;
      }
    )
  }
}

export class SequenceNumber
{
  personFullName: string;
  sequenceNumber: number;
  consentDate: string;
}
