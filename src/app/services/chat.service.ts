import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ChatService {
    private apiUrl = 'https://api.openai.com/v1/chat/completions';

    constructor(private http: HttpClient) {}

    getChatResponse(prompt: string): Observable<any> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${environment.openaiApiKey}`
        });

        const body = {
            model: 'gpt-3.5-turbo',
            messages: [{
                role: 'user',
                content: prompt
            }],
            max_tokens: 150
        };

        return this.http.post(this.apiUrl, body, { headers });
    }
}