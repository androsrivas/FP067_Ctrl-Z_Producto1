import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'playerFilter',
  standalone: true
})
export class PlayerFilterPipe implements PipeTransform {

  transform(
    players: any[],
    texto: string,
    filterType: string
  ): any[] {

    if (!texto) {
      return players;
    }

    texto = texto.toLowerCase();

    return players.filter(player => {

      if (filterType === 'nombre') {
        return player.nombre.toLowerCase().includes(texto);
      }

      if (filterType === 'apellido') {
        return player.apellido.toLowerCase().includes(texto);
      }

      if (filterType === 'posicion') {
        return player.posicion.toLowerCase().includes(texto);
      }

      if (filterType === 'edad') {
        return player.edad.toString().includes(texto);
      }

      return true;

    });

  }

}