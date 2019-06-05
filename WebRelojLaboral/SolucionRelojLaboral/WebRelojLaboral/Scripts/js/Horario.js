$(document).ready(function () {
    var card1 = $('#idbodycardradio1');
    var card2 = $('#idbodycardradio2');
    var tab = $('#cardHorario');
    var nUsuId = $('#idUsuarioHorario').val();
    var btnhorario = $('#idFormHorario');

    btnhorario.click(function () {
        llamadoHorario();
        
    });

    $("#idchecked1").prop('checked', true)
    card1.show();
    $("#idchecked2").prop('checked', false)
    card2.hide();



    function llamadoHorario() {
        
        var data = { nUsuId };
        console.log(data+"fuera del get");
        $.get("http://localhost:64959/Horario/ListaHorarioXUsuario", data, function (result) {
            console.log(result);
            

        }).done(function (s) {
            console.log(s + "dentro del done");
        })
            .fail(function (err) {
                console.log("ERROR: " + err);
            });
    }



    function llamadoListaHorarioXId() {

        $.ajax({
            url: 'http://localhost:64959/Horario/ListaHorarioXUsuario',
            type: 'GET',
            dataType: 'json',
            success: function (result) {

                $.each(result, function (idx, obj) {
                    tab.append(
                        "<div class='card w-75'>"
                            + "<div class='card-body'>"
                                + "<div class='row'>"
                                    + "<div class='col-md-2'>"
                                        + "<div class='row'>"
                                            + "<div class='col-md-6' style='margin-top:30%'>"
                                                + "<a href='#'><i class='material-icons'>create</i></a>"
                                            + "</div>"
                                            + "<div class='col-md-6' style='margin-top:30%'>"
                                                + "<a href='#' style='padding-top:50%'><i class='material-icons'>delete_sweep</i></a>"
                                            + "</div>"
                                        + "</div>"
                                    + "</div>"
                                    + "<div class='col-md-3'>"
                                        + "<img src='/Content/imagenes/desconocido.png'  width='100%' height='100%' />"
                                    + "</div>"
                                    + "<div class='col-md-7'>"
                                            + "<h5 class='card-title'>" + obj.cUsuNombre
                                            + "</h5>"
                                            + "<p class='card-text'>" + obj.cDiaNombre + "  -  " + obj.cHoPInicio + "  hasta  " +obj.cHoPFinal+"</p>"
                                    + "</div>"
                                + "</div>"
                            + "</div>"
                      + "</div>"
                      + "<br />");

                });
                console.log(result);
            },
            error: function (xhr, status) {
                console.log(status);
            }
        });

    }




    $("#idchecked1").change(function () {

        $("#idchecked2").prop('checked', false)
        card1.show();
        card2.hide();

    });
    $("#idchecked2").change(function () {

        $("#idchecked1").prop('checked', false)
        card2.show();
        card1.hide();
    });



    

});
