$(document).ready(function () {
    var tcalendario = $('#idtablaCalendario');
    var tablaItem = $('#idtablausu');

    var btnca = $('#btncalendario');


    //$.validator.setDefaults({
    //    debug: true,
    //    success: "valid"
    //});
    //$("#FormDiagrama").validate({
    //    rules: {
    //        DESCRIPCION: "required",
    //        LBL_ARCHIVO: "required"
    //    },
    //    messages: {
    //        DESCRIPCION: "Campo requerido.",
    //        LBL_ARCHIVO: "Campo requerido."
    //    },
    //    // Do not change code below
    //    errorPlacement: function (error, element) {
    //        error.insertAfter(element);
    //    }
    //});



    //btnca.click(TraeCalendarioIndividual());


    //TraeListadoUsuarios();

    //function TraeCalendarioIndividual() {

    //        $.ajax({
    //            url: 'http://localhost:64959/Home/CalendarioIndividual',
    //            type: 'GET',
    //            dataType: 'json',
    //            success: function (result) {
    //                console.log('Se descargo con exito');
    //                console.log(result);

                    
    //                //tcalendario.append("<tr>" + "<td>" + result.cDiaCod + "</td>" + "</tr>");
    //                $.each(result, function (idx, obj) {
    //                    var i = idx;
    //                    i + 1;
    //                    if (i % 7) {
    //                        tcalendario.append("<tr>");
    //                    }
    //                    console.log(idx);
    //                    tcalendario.append("<td>" + obj.cDiaCod + "</td>");
    //                });
    //            },
    //            error: function (xhr, status) {
    //                console.log(status);
    //            }
    //        });

    //}

    //function TraeListadoUsuarios() {

    //    $.ajax({
    //        url: 'http://localhost:64959/Usuario/ListaU',
    //        type: 'GET',
    //        dataType: 'json',
    //        success: function (result) {
    //            console.log('Se descargo con exito');
    //            console.log(result);


    //            //tcalendario.append("<tr>" + "<td>" + result.cDiaCod + "</td>" + "</tr>");
    //            $.each(result, function (idx, obj) {
    //                tablaItem.append("<tr>");
    //                tablaItem.append("<td class='table-success'>" + obj.cUsuNombre + "</td>");
    //                tablaItem.append("<td class='table-success'>" + obj.cUsuApellido + "</td>");
    //                tablaItem.append("<td class='table-success'>" + obj.cRolNombre + "</td>");
    //                tablaItem.append("<td class='table-success'>" + obj.cUbiDescripcion + "</td>");
    //                tablaItem.append("</tr>");
    //                console.log(idx);
    //            });
    //        },
    //        error: function (xhr, status) {
    //            console.log(status);
    //        }
    //    });

    //}

});