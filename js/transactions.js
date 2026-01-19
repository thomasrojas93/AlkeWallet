/*$(document).ready(function () {

  // Array que guarda el historial
  let historial = [];

  // Función para obtener fecha actual
  function obtenerFecha() {
    let hoy = new Date();
    return hoy.toISOString().split('T')[0]; // YYYY-MM-DD
  }

  // Función para agregar una transacción
  function agregarTransaccion(descripcion, monto, contacto) {
    let transaccion = {
      fecha: obtenerFecha(),
      descripcion: descripcion,
      monto: monto,
      contacto: contacto
    };

    historial.push(transaccion);

    // Agregar fila a la tabla
    $('#historialBody').append(`
      <tr>
        <td>${transaccion.fecha}</td>
        <td>${transaccion.descripcion}</td>
        <td>$${transaccion.monto}</td>
        <td>${transaccion.contacto}</td>
      </tr>
    `);

    console.log('Historial actualizado:', historial);
  }

  // 🔹 EJEMPLOS (para probar)
  agregarTransaccion('Depósito', 5000, '-');
  agregarTransaccion('Transferencia', 1200, 'Contacto 2');
  agregarTransaccion('Transferencia', 2500, 'Contacto 3');

});*/
