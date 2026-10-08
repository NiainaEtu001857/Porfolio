import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

/**
 * Point d'entrée qui relaie le formulaire vers Brevo.
 * La clé API Brevo reste côté serveur (voir `api/contact.js`) : elle ne doit
 * jamais se retrouver dans le bundle, qui est public.
 */
export const CONTACT_ENDPOINT = '/api/contact';

export interface ContactMessage {
  name: string;
  email: string;
  body: string;
}

@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly http = inject(HttpClient);

  send(message: ContactMessage): Promise<unknown> {
    return firstValueFrom(this.http.post(CONTACT_ENDPOINT, message));
  }
}
