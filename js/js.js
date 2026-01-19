// Validación de identidad con jQuery
$(document).ready(function () {
    $('#loginForm').submit(function (event) {
        event.preventDefault();

        const email = $('#email').val();
        const password = $('#password').val();

        if (email === "holi@gmail.com" && password === "1234") {
            alert("Inicio de sesion exitoso");
            window.location.href = "menu.html";
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    });
});
$(document).ready(function () {

//saldo inicial
  let saldo = localStorage.getItem('saldo');

  if (saldo === null) {
    saldo = 0;
    localStorage.setItem('saldo', saldo);
  } else {
    saldo = parseFloat(saldo);
  }

 // saldo en la pagina menu y deposit
  if ($('#saldoTexto').length) {
    $('#saldoTexto').text(`Saldo actual: $${saldo}`);
  }

  if ($('#saldoMenu').length) {
    $('#saldoMenu').text(`Saldo disponible: $${saldo}`);
  }

//formulario de deposito
  $('#depositForm').on('submit', function (e) {
    e.preventDefault();

    let valor = $('#monto').val().trim();
    let monto = parseFloat(valor);

    if (valor === '' || isNaN(monto) || monto <= 0) {
      alert('Ingrese un valor válido');
      return;
    }

    saldo += monto;

    // GUARDAR saldo para TODAS las páginas
    localStorage.setItem('saldo', saldo);

    $('#saldoTexto').text(`Saldo actual: $${saldo}`);
    $('#monto').val('');
  });

});


$('#btnDeposit').click(function () {
    alert('redirigiendo a depositar');
    window.location.href = 'deposit.html';
});

$('#btnSendmoney').on('click', function () {
    alert('redirigiendo a enviar dinero');
    window.location.href = 'sendmoney.html';
});

$('#btnTransactions').on('click', function () {
    alert('redirigiendo a ultimos movimientos');
    window.location.href = 'transactions.html';
});

$('#btnLogout').on('click', function () {
    alert('Cerrando sesion');
    window.location.href = 'login.html';
});
