import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {first, map, Observable, tap} from "rxjs";
import {saveAs} from "file-saver";


export type FileFormat = "pdf" | "xlsx" | "docx" | "xml" | "doc" | "json"

@Injectable({
  providedIn: 'root'
})
export class FilesDownloadServiceService {

  constructor(private http: HttpClient) { }

  public openFile(apiUrl: string, fileFormat: FileFormat){
    return this.http.get(apiUrl, {responseType: "blob"}).pipe(
      first(),
      tap((response: Blob) => this._openFile(response, fileFormat)),
      map((response)=>response)
    )
  }

  public downloadFile(apiUrl: string, fileName: string, fileFormat: FileFormat): Observable<Blob> {
    return this.http.get(apiUrl, {responseType: "blob"}).pipe(
      first(),
      tap((response: Blob) => this._downloadFile(response, fileName, fileFormat)),
      map((response)=>response)
    )
  }

  private _openFile(response: Blob, fileFormat: FileFormat){
    const blob = new Blob([response], {type: `application/${fileFormat}`});
    const url = window.URL.createObjectURL(blob);
    window.open(url);
  }

  private _downloadFile(response: Blob, fileName: string, fileFormat: FileFormat): void{
    const blob = new Blob([response], {type: `application/${fileFormat}`});
    saveAs(blob, `${fileName}.${fileFormat}`);
  }
}
