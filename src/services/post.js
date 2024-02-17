import axios from 'axios';

export async function genericPost(url, data) {
  try {
    const response = await axios.post(url, data);
    return { success: true, data: response.data }; // Retorna un objeto indicando éxito y los datos de respuesta
  } catch (error) {
    if (error.isAxiosError && !error.response) {
      alert('Error de conexión: No se pudo conectar al servidor. Por favor, verifica tu conexión a Internet.');
    } else {
      alert('Error en la solicitud POST: ' + error.message); // Muestra un mensaje de alerta con el error
    }
    return { success: false, error }; // Retorna un objeto indicando error
  }
}
