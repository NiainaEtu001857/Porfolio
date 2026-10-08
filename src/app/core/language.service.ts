import { DOCUMENT, Injectable, inject, signal } from '@angular/core';
import { Lang } from './models';

/**
 * Langue courante de l'interface. Les templates lisent `lang()` et
 * indexent directement les textes `Localized` : `titre[lang()]`.
 */
@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly document = inject(DOCUMENT);
  private readonly current = signal<Lang>('fr');

  readonly lang = this.current.asReadonly();

  toggle(): void {
    this.current.update((lang) => (lang === 'fr' ? 'en' : 'fr'));
    this.document.documentElement.lang = this.current();
  }
}
