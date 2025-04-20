export interface ApiResponse<T> {
  exito: boolean;
  datos: T[];
  mensaje: string;
}