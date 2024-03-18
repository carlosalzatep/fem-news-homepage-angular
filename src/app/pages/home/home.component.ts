import { Component } from '@angular/core';

import { LayoutComponent } from '../../components/layout/layout.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { NewsLinksComponent } from '../../components/news-links/news-links.component';
import { TopNewsComponent } from '../../components/top-news/top-news.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BannerComponent, FooterComponent, LayoutComponent, NewsLinksComponent, TopNewsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class AppComponent {
  title = 'Home page component';
}
