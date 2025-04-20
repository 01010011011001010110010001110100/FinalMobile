import * as L from 'leaflet';

export class LeafletHelper {
  private static mapInstance: L.Map | null = null;

  static initMap(
    containerId: string,
    center: L.LatLngExpression,
    zoom: number = 13
  ): L.Map {
    const container = document.getElementById(containerId) as any;

    // Si ya hay un mapa, reutilizarlo
    if (LeafletHelper.mapInstance) {
      LeafletHelper.mapInstance.setView(center, zoom);
      setTimeout(() => {
        LeafletHelper.mapInstance?.invalidateSize();
      }, 300);
      return LeafletHelper.mapInstance;
    }

    // Si hay un mapa en el contenedor pero no registrado, resetear el HTML
    if (container && container['_leaflet_id']) {
      container.innerHTML = '';
    }

    // Crear el mapa
    LeafletHelper.mapInstance = L.map(containerId).setView(center, zoom);

    return LeafletHelper.mapInstance;
  }

  static getMap(): L.Map | null {
    return LeafletHelper.mapInstance;
  }

  static destroyMap() {
    if (LeafletHelper.mapInstance) {
      LeafletHelper.mapInstance.remove();
      LeafletHelper.mapInstance = null;
    }
  }
}
