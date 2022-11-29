import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PostListComponent } from 'src/components/posts/list/post.list.component'
import { PostComponent } from 'src/components/posts/post.component'

const routes : Routes = [
    { path : "",        component : PostListComponent },
    { path : "create",  component : PostComponent }
]

/**
 * This will be making avaiable the route, if you want
 * to make it available everywhere you must add to app.module.ts
 * on the imports section.
 */
@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})
export class AppRoutes {

}
