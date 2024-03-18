import {Component, OnDestroy, OnInit} from '@angular/core';
import { DriversFacade } from 'src/store/drivers/drivers.facade';
import {FilesDownloadServiceService} from "../../shared/services/files-download-service.service";

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit, OnDestroy{
  protected drivers$ = this.driversFacade.data$;
  protected loading$ = this.driversFacade.loading$;

  constructor(private driversFacade: DriversFacade, private filesDownloadService: FilesDownloadServiceService) {}

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
