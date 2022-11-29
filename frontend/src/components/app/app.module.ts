import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatExpansionModule } from '@angular/material/expansion'
import { AppComponent } from './app.component'
import { HeaderComponent } from 'src/components/header/header.component'
import { PostComponent } from 'src/components/posts/post.component'
import { PostListComponent } from 'src/components/posts/list/post.list.component'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutes } from 'src/components/app/app.routes'


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        PostComponent,
        PostListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutes,
        FormsModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        MatToolbarModule,
        MatExpansionModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
