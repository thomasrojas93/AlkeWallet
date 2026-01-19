$(document).ready(function () {


  let contactos = [];

  let saldo = parseFloat(localStorage.getItem('saldo')) || 0;

  //NUEVO CONTACTO
  $('#collapseWidthExample2').on('submit', '#newContactForm', function (e) {
    e.preventDefault();

    let nombre = $('#newContactName').val().trim();
    let numero = $('#ContactNumber').val().trim();
    let correo = $('#ContactMail').val().trim();
    let banco = $('#bankSelect').val();
    if (nombre === '' || numero === '' || correo === '' || banco === '') {
      alert('Complete todos los campos del nuevo contacto');
      return;
    }

    let nuevoContacto = {
      id: contactos.length + 1,
      nombre: nombre
    };

    contactos.push(nuevoContacto);

    // Agregar al select
    $('#contact').append(
      `<option value="${nuevoContacto.id}">${nuevoContacto.nombre}</option>`
    );

    console.log('Contacto agregado:', nuevoContacto);
    console.log('Lista de contactos:', contactos);

    alert('Contacto agregado correctamente');

    // Limpiarmos campos
    $('#newContactName').val('');
    $('#ContactNumber').val('');
    $('#ContactMail').val('');
    $('#bankSelect').val('');
  });

  // ENVIAR DINERO A CONTACTO
  $('#sendMoneyForm').on('submit', function (e) {
    e.preventDefault();

    let contactoId = $('#contact').val();
    let monto = parseFloat($('#amount').val());

    if (contactoId === '') {
      alert('Seleccione un contacto');
      return;
    }

    if (isNaN(monto) || monto <= 0) {
      alert('Ingrese un monto válido');
      return;
    }
    if (monto > saldo) {
      alert('Saldo insuficiente');
      return;
    }


    let contacto = contactos.find(c => c.id == contactoId);

    if (!contacto) {
      alert('Contacto no encontrado');
      return;
    }

    saldo -= monto;
    localStorage.setItem('saldo', saldo);

    console.log(`Enviado $${monto} a ${contacto.nombre}`);

    alert(`Se enviaron $${monto} a ${contacto.nombre}`);

    $('#amount').val('');
  });

});
