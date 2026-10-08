import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../core/language.service';
import { BRAND, HERO, RESUME } from '../../core/portfolio.data';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  protected readonly hero = HERO;
  protected readonly brand = BRAND;
  protected readonly resume = RESUME;
  protected readonly lang = inject(LanguageService).lang;
}
