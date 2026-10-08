import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { LanguageService } from '../../core/language.service';
import { SectionHeadingContent } from '../../core/models';

/** Entête de section : un libellé discret et un titre. */
@Component({
  selector: 'app-section-heading',
  templateUrl: './section-heading.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
})
export class SectionHeading {
  readonly heading = input.required<SectionHeadingContent>();
  readonly headingClass = input('mb-10');

  protected readonly lang = inject(LanguageService).lang;
}
