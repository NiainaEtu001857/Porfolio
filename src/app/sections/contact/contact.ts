import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../../core/contact.service';
import { LanguageService } from '../../core/language.service';
import { CONTACT, RESUME } from '../../core/portfolio.data';
import { ScrollAppear } from '../../shared/scroll-appear.directive';

type SendStatus = 'idle' | 'incomplete' | 'sending' | 'sent' | 'error';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ScrollAppear, FormsModule],
})
export class Contact {
  protected readonly contact = CONTACT;
  protected readonly resume = RESUME;
  protected readonly lang = inject(LanguageService).lang;

  private readonly contactService = inject(ContactService);

  protected readonly message = { name: '', email: '', body: '' };
  protected readonly status = signal<SendStatus>('idle');
  protected readonly sending = computed(() => this.status() === 'sending');

  /** Message affiché sous le bouton, selon l'issue de l'envoi. */
  protected readonly feedback = computed(() => {
    const form = this.contact.form;
    switch (this.status()) {
      case 'incomplete':
        return form.incomplete[this.lang()];
      case 'sent':
        return form.success[this.lang()];
      case 'error':
        return form.error[this.lang()];
      default:
        return '';
    }
  });

  protected async onSubmit(): Promise<void> {
    if (!this.isComplete()) {
      this.status.set('incomplete');
      return;
    }

    this.status.set('sending');
    try {
      await this.contactService.send({ ...this.message });
      this.message.name = '';
      this.message.email = '';
      this.message.body = '';
      this.status.set('sent');
    } catch {
      this.status.set('error');
    }
  }

  private isComplete(): boolean {
    const { name, email, body } = this.message;
    return name.trim().length > 1 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && body.trim().length > 4;
  }
}
