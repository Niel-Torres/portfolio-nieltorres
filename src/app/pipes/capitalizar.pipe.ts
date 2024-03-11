import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizar'
})
export class CapitalizarPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value;

    // Separar el texto en palabras
    const palabras = value.split(' ');

    // Convertir la primera letra de cada palabra en mayúscula y el resto en minúscula
    const palabrasModificadas = palabras.map(palabra => {
      return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    // Unir las palabras modificadas nuevamente en un solo texto
    return palabrasModificadas.join(' ');

  }

}
