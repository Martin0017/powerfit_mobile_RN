import axios from 'axios';

export async function genericGet(url) {
  try {
    const response = await axios.get(url);
    return { success: true, data: response.data }; 
  } catch (error) {
    if (error.isAxiosError && !error.response) {
      alert('Error de conexión: No se pudo conectar al servidor. Por favor, verifica tu conexión a Internet.');
    } else {
      alert('Error en la solicitud GET: ' + error.message); 
    }
    return { success: false, error };
  }
}
