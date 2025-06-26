import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumLabel',
})
export class EnumLabelPipe implements PipeTransform {
  transform<T extends string | number>(
    value: T,
    map: Record<T, string>
  ): string {
    return map[value] ?? String(value);
  }
}
