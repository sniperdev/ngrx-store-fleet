import {Component, OnDestroy, OnInit} from '@angular/core';
import { DriversFacade } from 'src/store/drivers/drivers.facade';
import {FilesDownloadService} from "../../shared/services/files-download.service";
import {Observable} from "rxjs";
import {IDriver} from "../../../store/drivers/interfaces/drivers";

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit, OnDestroy{
  protected drivers$: Observable<IDriver[]> = this.driversFacade.driversData$;
  protected loading$: Observable<boolean> = this.driversFacade.driversLoading$;

  constructor(private driversFacade: DriversFacade, private filesDownloadService: FilesDownloadService) {}

  protected downloadFilePdf(){
    this.filesDownloadService.downloadFile("http://localhost:8080/drivers/list/download/pdf", "mojpdf", "pdf").subscribe()
  }

  protected downloadFileExcel(){
    this.filesDownloadService.downloadFile("http://localhost:8080/drivers/list/download/xlsx", "mojpdf", "xlsx").subscribe()
  }

  protected openFilePdf(){
    this.filesDownloadService.openFile("http://localhost:8080/drivers/list/download/pdf", "pdf").subscribe()
  }
  protected openFileExcel(){
    this.filesDownloadService.openFile("http://localhost:8080/drivers/list/download/xlsx", "xlsx").subscribe()
  }

  ngOnInit() {
    this.driversFacade.loadDriversList();
  }

  ngOnDestroy() {
    this.driversFacade.clearDriversList();
  }
}
