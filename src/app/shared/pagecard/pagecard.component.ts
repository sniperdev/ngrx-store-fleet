import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";
import {FilesDownloadServiceService} from "../services/files-download-service.service";

@Component({
  selector: 'app-pagecard',
  templateUrl: './pagecard.component.html',
  styleUrls: ['./pagecard.component.scss']
})
export class PagecardComponent {
  @Input() title!: string;
  @Input() items$!: Observable<any[]>;
  @Input() loading$!: Observable<boolean>;
  @Input() noItemsText!: string;
  @Input() apiUrl!: string;


  constructor(private filesDownloadService: FilesDownloadServiceService) {
  }

  protected downloadFilePdf(){
    this.filesDownloadService.downloadFile(this.apiUrl, this.title, "pdf").subscribe()
  }

  protected openFilePdf(){
    this.filesDownloadService.openFile(this.apiUrl, "pdf").subscribe()
  }
}
