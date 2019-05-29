import { PipeTransform, Pipe } from '@angular/core';
import { ListComponent } from './list.component';


@Pipe({
    name: 'bookFilter'
})

export class BookFilterPipe implements PipeTransform {
    transform(books: ListComponent, searchTerm: string ): any {
        if (!books || !searchTerm) {
            return books;
        }
        return books.filter(books =>
            books.title.toLowerCase().indexOf(searchTerm.toLocaleLowerCase())!== -1);
    }
}