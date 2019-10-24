import { Pipe, PipeTransform } from '@angular/core';
import { KlimModule } from '../models/klim-module';

@Pipe({
  name: 'moduleFilter'
})
export class ModuleFilterPipe implements PipeTransform {
  transform(modules: KlimModule[], name: string): KlimModule[] {
    if (!name || name.length === 0) {
      return modules;
    }
    return modules.filter(rec =>
      rec.moduleNaam.toLowerCase().startsWith(name.toLowerCase())
    );
  }
}
