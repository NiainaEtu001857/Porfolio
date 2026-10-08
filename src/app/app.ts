import { ChangeDetectionStrategy, Component } from '@angular/core';
import { About } from './sections/about/about';
import { Contact } from './sections/contact/contact';
import { Experience } from './sections/experience/experience';
import { Footer } from './sections/footer/footer';
import { Hero } from './sections/hero/hero';
import { Navbar } from './sections/navbar/navbar';
import { Projects } from './sections/projects/projects';
import { Skills } from './sections/skills/skills';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Navbar, Hero, About, Experience, Skills, Projects, Contact, Footer],
})
export class App {}
