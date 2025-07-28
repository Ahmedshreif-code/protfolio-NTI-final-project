import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app-module';
import AOS from 'aos';
import 'aos/dist/aos.css';
platformBrowser().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true,
})
  .catch(err => console.error(err));
AOS.init({
  duration: 1000,
  once: true
});
