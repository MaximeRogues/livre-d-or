import {retry, catchError} from 'rxjs/internal/operators';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    };

  constructor(private http: HttpClient) { }

  //  Fonction en cas d'erreur http
  handleError(error) {
    let errorMessage = '';
    if ( error.error instanceof ErrorEvent ) {
    // Get client-side error
    errorMessage = error.error.message;
    } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage)
  }

  apiUrl = "http://localhost:3000/message";

  // on déclare un fonction qui return la liste de Messagex en tant qu'observable
  getAllMessages() : Observable <Message[]> {
    return this.http.get<Message[]>(this.apiUrl).pipe(retry(1),catchError(this.handleError));
  }
  

  //Fonction pour retrouver un Message par son nom
  getMessageByID (id: number): Observable <Message> {
    return this.http.get<Message>(this.apiUrl + '/' + id).pipe(retry(1), catchError(this.handleError));
  }

  // fonction pour ajouter un Message au tableau listeMessagex
  addMessage(Message: Message): Observable<Message> {
    return this.http.post<Message>(this.apiUrl ,Message).pipe(catchError(this.handleError));
   }

  //Fonction pour éditer un Message
  editMessage(Message: Message) {
    return this.http.put<Message>(this.apiUrl + '/' + Message.id, Message, this.httpOptions).pipe(catchError(this.handleError))
  }


  // Fonction pour supprimer un Message du tableau listeMessagex
  deleteMessage(id: number): Observable <Message> {
    return this.http.delete<Message>(this.apiUrl + '/' + id).pipe(catchError(this.handleError))
  }

}
