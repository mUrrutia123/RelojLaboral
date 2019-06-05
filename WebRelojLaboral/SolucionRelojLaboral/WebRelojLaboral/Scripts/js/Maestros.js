$(document).ready(function () {

    var cboRol = $('#cborol');
    var cboLocal = $('#cbolocalizacion');

    CargaComboRol()
    CargaComboUbicacion()

    function CargaComboUbicacion() {

        $.ajax({
            url: 'http://localhost:64959/Maestros/ListadoUbicacion',
            type: 'GET',
            dataType: 'json',
            success: function (result) {
                $.each(result, function (index, item) {
                    var texto = "<option value='" + item.nUbiId + "'>" + item.cUbiDescripcion + "</option>";
                    cboLocal.append(texto);
                });

            },
            error: function (xhr, status) {
                console.log("OCURRIO UN ERROR");
            }
        });
    }
    function CargaComboRol() {

        $.ajax({
            url: 'http://localhost:64959/Maestros/ListadoRoles',
            type: 'GET',
            dataType: 'json',
            success: function (result) {
                $.each(result, function (index, item) {
                    var texto = "<option value='" + item.nRolId + "'>" + item.cRolNombre + "</option>";
                    cboRol.append(texto);
                });

            },
            error: function (xhr, status) {
                console.log("OCURRIO UN ERROR");
            }
        });

    }
});


