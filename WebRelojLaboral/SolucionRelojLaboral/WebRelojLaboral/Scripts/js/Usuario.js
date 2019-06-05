$(document).ready(function () {

    var btnusu = $('#idSubmitFormUsuario');
    var tusuario = $('#idtablausu');


    var cUsuEmail = $('#idEmailUsu'); 
    var cUsuPassword = $('#idpwdUsu');


    var ubi, nom, ape, dni, cel1, cel2, ema, dom;

    var BTNActualizar = $('#btnActualizarUsuario');


    ubi = $('#cbolocalizacion');
    nom = $('#idNombreUsuario');
    ape = $('#idApellidoUsuario');
    dni = $('#idDNIUsuario');
    cel1 = $('#idCel1Usuario');
    cel2 = $('#idCel2Usuario');
    ema = $('#idEmailUsuario');
    dom = $('#idDomicilioUsuario');

    ListarUsuario();

    //var btnmodal2 = $('#btncerrarmodal2');

    //btnmodal2.click(function () {
    //    ListarUsuario()
    //});


    






    

    btnusu.click(function () {
        InsertarUsuario();
        limpiaFormUsuario();
        ListarUsuario();
    });


    BTNActualizar.click(function () {
        UpdUsuario();
        ListarUsuario()

    });

});

function ListarUsuario() {
    var lisusu = $('#cardListaUsuarios');
    var contenido="";
    $.ajax({
        url: 'http://localhost:64959/Usuario/ListaU',
        type: 'GET',
        dataType: 'json',
        success: function (result) {

            $.each(result, function (idx, obj) {
               
                contenido += "<div class='card w-75' id='cardListaUsuario'>"
                
                    contenido += "<div class='card-body'>"
                        contenido += "<div class='row'>"
                            contenido += "<div class='col-md-2'>"
                                contenido += "<div class='row'>"
                                    contenido += "<div class='col-md-4' style='margin-top:10%'>"
                                        contenido += "<a type='button' data-toggle='modal' data-target='#exampleModalCenter'  onclick='getId(" + obj.nUsuId + ")'><i class='material-icons'>create</i></a>"
                                    contenido += "</div>"
                                    contenido += "<div class='col-md-4' style='margin-top:10%'>"
                                        contenido += "<a type='button' onclick='delId(" + obj.nUsuId + ")'><i class='material-icons'>delete_sweep</i></a>"
                                    contenido += "</div>"
                                    contenido += "<div class='col-md-4' style='margin-top:10%'>"
                                    contenido += "<a type='button' onclick='calendarId(" + obj.nUsuId + ")' type='button' data-toggle='modal' data-target='#exampleModalHorarioUs'><i class='material-icons'>event_note</i></a>"
                                    contenido += "</div>"
                                contenido += "</div>"
                            contenido += "</div>"
                            contenido += "<div class='col-md-2'>"
                                contenido += "<img src='/Content/imagenes/desconocido.png'   width='90px' height='50px' />"
                            contenido += "</div>"
                            contenido += "<div class='col-md-8'>"
                                contenido += "<h5 class='card-title'>" + obj.cUsuNombre + ", " + obj.cUsuApellido
                                contenido += "</h5>"
                                contenido += "<p class='card-text'>" + obj.cRolNombre + "  -  " + obj.cUbiDescripcion + "</p>"
                            contenido += "</div>"
                        contenido += "</div>"
                    contenido += "</div>"
                contenido += "</div>"
                contenido += "<br />";

                

            });

            lisusu.html(contenido);
        },
        error: function (xhr, status) {
            console.log(status);
        }
    });

}


function InsertarUsuario() {
    var nUbiId, cUsuNombre, cUsuApellido, cUsuDNI, cUsuCelular1, cUsuCelular2, cUsuEmail, cUsuDomicilio;


    nUbiId = $('#cbolocalizacion').val();
    cUsuNombre = $('#idNombreUsuario').val();
    cUsuApellido = $('#idApellidoUsuario').val();
    cUsuDNI = $('#idDNIUsuario').val();
    cUsuCelular1 = $('#idCel1Usuario').val();
    cUsuCelular2 = $('#idCel2Usuario').val();
    cUsuEmail = $('#idEmailUsuario').val();
    cUsuDomicilio = $('#idDomicilioUsuario').val();

    var data = { nUbiId, cUsuNombre, cUsuApellido, cUsuDNI, cUsuCelular1, cUsuCelular2, cUsuEmail, cUsuDomicilio };


    var objjs = { cUsuDNI }

    $.ajax({
        url: 'http://localhost:64959/Usuario/ConfirmarUsuarioDni',
        type: 'GET',
        dataType: 'json',
        success: function (result) {
            console.log(result);

        },
        error: function (xhr, status) {
            console.log(status);
        }
    });


    console.log(objjs);
    $.post("http://localhost:64959/Usuario/ConfirmarUsuarioDni", objjs, function (result) {
        console.log(result);
    }).done(function (res) {
        console.log(res);
    })
        .fail(function (err) {
            console.log("ERROR: " + err);
        });

    $.post("http://localhost:64959/Usuario/InsUsuario", data, function (objRpta) {
        console.log(objRpta);
    }).done(function () {
        console.log("Registrado con exito");
    })
        .fail(function (err) {
            console.log("ERROR: " + err);
        });

}


function limpiaFormUsuario() {
    $("#cbolocalizacion").prop('selectedIndex', 0);

    nom.val("");
    ape.val("");
    dni.val("");
    cel1.val("");
    cel2.val("");
    ema.val("");
    dom.val("");
}





function getId(id) {
    //funcion getId()
    var INPId = $('#INPUTnUsuId');
    var INPnombre = $('#INPUTcUsuNom');
    var INPapellido = $('#INPUTcUsuApe');
    var INPdni = $('#INPUTcUsuDni');
    var INPcel1 = $('#INPUTcUsuCel1');
    var INPcel2 = $('#INPUTcUsuCel2');
    var INPema = $('#INPUTcUsuEmail');
    var INPdomici = $('#INPUTcUsuDomicilio');
    var INPpwd = $('#INPUTcUsupwd');
    

    var nombreh5Usu = $('#exampleModalCenterTitleUsuario');
    



    var data = { "nUsuId": id };
    $.get("http://localhost:64959/Usuario/MantenimientoUsuario", data, function (result) {
        console.log(result);

        $.each(result, function (idx, obj) {

            
            INPId.val(obj.nUsuId);
            CargaComboUbicacion(obj.nUbiId);
            CargaComboRol(obj.nRolId)
            INPnombre.val(obj.cUsuNombre);
            INPapellido.val(obj.cUsuApellido);
            INPdni.val(obj.cUsuDNI);
            INPcel1.val(obj.cUsuCelular1);
            INPcel2.val(obj.cUsuCelular2);
            INPema.val(obj.cUsuEmail);
            INPdomici.val(obj.cUsuDomicilio);
            INPpwd.val(obj.cUsuPassword);
            CargaComboEstadoUsuario(obj.nUsEId)
            nombreh5Usu.html("Datos de: " + obj.cUsuNombre + ", " + obj.cUsuApellido);
        });


    }).done(function (s) {
    }).fail(function (err) {
            console.log("ERROR: " + err);
        });



}


function llamadaValidacion() {


    function llamadoHorario() {

        var data = { cUsuEmail, cUsuPassword };
        $.get("http://localhost:64959/Usuario/ValidacionUsuarioLogin", data, function (result) {
            console.log(result);


        }).done(function (s) {
            console.log(s);
        })
            .fail(function (err) {
                console.log("ERROR: " + err);
            });
    }
}


function CargaComboUbicacion(id) {
    var cboLocal = $('#selectubiUsuario');

    var texto="";

    $.ajax({
        url: 'http://localhost:64959/Maestros/ListadoUbicacion',
        type: 'GET',
        dataType: 'json',
        success: function (result) {
            $.each(result, function (index, item) {

                

                if (item.nUbiId == id) {
                    texto += "<option value='" + item.nUbiId + "' selected>" + item.cUbiDescripcion + "</option>";
                }else{
                    texto += "<option value='" + item.nUbiId + "'>" + item.cUbiDescripcion + "</option>";                    
                }
                cboLocal.html(texto);
            });

        },
        error: function (xhr, status) {
            console.log("OCURRIO UN ERROR");
        }
    });
}


function CargaComboRol(id) {
    var cboRol = $('#selectRolUsuario');

    var texto="";

    $.ajax({
        url: 'http://localhost:64959/Maestros/ListadoRoles',
        type: 'GET',
        dataType: 'json',
        success: function (result) {
            $.each(result, function (index, item) {
                if(item.nRolId == id){
                    texto += "<option value='" + item.nRolId + "' selected>" + item.cRolNombre + "</option>";
                } else {
                    texto += "<option value='" + item.nRolId + "'>" + item.cRolNombre + "</option>";
                }
                cboRol.html(texto);
            });

        },
        error: function (xhr, status) {
            console.log("OCURRIO UN ERROR");
        }
    });

}


function CargaComboEstadoUsuario(id) {
    var cbESTADO = $('#selectEstadoUsuario');
    var texto = "";

    $.ajax({
        url: 'http://localhost:64959/Maestros/ListadoEstadoUsuario',
        type: 'GET',
        dataType: 'json',
        success: function (result) {
            $.each(result, function (index, item) {
                if (item.nEsEId == id) {
                    texto += "<option value='" + item.nUsEId + "' selected>" + item.cUsEDescripcion + "</option>";
                } else {
                    texto += "<option value='" + item.nUsEId + "'>" + item.cUsEDescripcion + "</option>";
                }
                cbESTADO.html(texto);
            });

        },
        error: function (xhr, status) {
            console.log("OCURRIO UN ERROR EN CARGAR EL COMBO ESTADO USUARIO");
        }
    });

}


function UpdUsuario() {
    var INPId = $('#INPUTnUsuId').val();
    var INPnombre = $('#INPUTcUsuNom').val();
    var INPapellido = $('#INPUTcUsuApe').val();
    var INPdni = $('#INPUTcUsuDni').val();
    var INPcel1 = $('#INPUTcUsuCel1').val();
    var INPcel2 = $('#INPUTcUsuCel2').val();
    var INPema = $('#INPUTcUsuEmail').val();
    var INPdomici = $('#INPUTcUsuDomicilio').val();
    var INPpwd = $('#INPUTcUsupwd').val();

    var cboRol = $('#selectRolUsuario').val();
    var cboLocal = $('#selectubiUsuario').val();
    var cbESTADO = $('#selectEstadoUsuario').val();


    var alerSucc = $('#idAlertaSucesos');

    //u.nUsuId,u.nUbiId,u.cUsuNombre,u.cUsuApellido,u.cUsuDNI,u.cUsuCelular1,u.cUsuCelular2,u.cUsuEmail,u.cUsuDomicilio,u.cUsuPassword,u.nUsEId
    var data = { "nUsuId": INPId, "nUbiId": cboLocal, "cUsuNombre":INPnombre, "cUsuApellido":INPapellido, "cUsuDNI":INPdni, "cUsuCelular1":INPcel1, "cUsuCelular2":INPcel2, "cUsuEmail":INPema, "cUsuDomicilio":INPdomici, "cUsuPassword":INPpwd, "nUsEId":cbESTADO }
    console.log(data);

    $.post("http://localhost:64959/Usuario/ActualizarUsuario", data, function (resupd) {
        console.log(resupd);

        if(resupd == 0){
            alerSucc.html("<div class='alert alert-success' role='alert'>"
                                +"Actualización exitosa"
           
                        + "</div>" + " <br />");
        }


    }).done(function (s) {
    })
        .fail(function (err) {
            console.log("ERROR: " + err);
            alerSucc.html("<div class='alert alert-danger' role='alert'>"
                                + "Actualización fallida"

                        + "</div>" + " <br />");
        });

}


function delId(id) {
    var alertSucc = $('#idAlertEliminar');

    var data = { "nUsuId": id };

    $.post("http://localhost:64959/Usuario/BorrarUsuario", data, function (resupd) {
        console.log(resupd);

        if (resupd == 0) {
            alertSucc.html("<div class='alert alert-success' role='alert'>"
                                + "Se elimino el usuario"

                        + "</div>" + " <br />");
        }


    }).done(function (s) {
    })
        .fail(function (err) {
            console.log("ERROR: " + err);
            alertSucc.html("<div class='alert alert-danger' role='alert'>"
                                + "No se pudo eliminar el usuario"

                        + "</div>" + " <br />");
        });

}

function CargaComboDia() {
    var cbESTADO = $('#selectComboDia');
    var texto = "";

    $.ajax({
        url: 'http://localhost:64959/Maestros/ListadoDia',
        type: 'GET',
        dataType: 'json',
        success: function (result) {
            $.each(result, function (index, item) {
                texto += "<option value='" + item.nDiaId + "'>" + item.cDiaNombre + "</option>";
                cbESTADO.html(texto);
            });

        },
        error: function (xhr, status) {
            console.log("OCURRIO UN ERROR EN CARGAR EL COMBO DIA");
        }
    });
}


function NuevoHorarioUsuario(ids) {
    
}



function calendarId(ids) {
    var row = $('#rowHorarioUsuario');
    var contenido = "";
    var data = { "nUsuId": ids };
    
    var ta = $('#idTablaHorarioUs');
    var btnNuevoHorario = $('#idNuevoHorario');
    var h5modalUs = $('#h5exampleModalHorarioUs');

    
    $('#rowHorarioUsuario').html('hide');

    
    btnNuevoHorario.click(function (ids) {
        $('#rowHorarioUsuario').show();

        //var contenido2 = "";
        //contenido2 += "<div class='col-md-3'>";
        //contenido2 += "<select class='form-control' id='selectComboDia'>";
        //contenido2 += "</select>";
        //contenido2 += "</div>";
        //contenido2 += "<div class='col-md-3'>";
        //contenido2 += "<select class='form-control' id='selectComboTipoHorario'>";
        //contenido2 += "</select>";
        //contenido2 += "</div>";
        //contenido2 += "<div class='col-md-2'>";
        //contenido2 += "<center><input type='time' class='form-control' maxlength='5' id='txtinicioHorario' /></center>";
        //contenido2 += "</div>";
        //contenido2 += "<div class='col-md-2'>";
        //contenido2 += "<center><input type='time' class='form-control' maxlength='5' id='txtfinHorario'/></center>";
        //contenido2 += "</div>";
        //contenido2 += "<div class='col-md-2'>";
        //contenido2 += "<center>";
        //contenido2 += "<a type='button' onclick='AgregarHorarioPersonal(" + ids + ")' id='btnGuardarHorarioUsuario'>";
        //contenido2 += "<i class='material-icons' style='margin-top:5%;'>archive</i>";
        //contenido2 += "</a>";
        //contenido2 += "</center>";
        //contenido2 += "</div>";
        //row.html(contenido2);
        CargaComboDia();
        CargaComboTipoHorario();

    });

    $.post("http://localhost:64959/Horario/HorarioUsuario", data, function (resupd) {
        console.log(resupd);
        $.each(resupd, function (idx, obj) {
            contenido += "<div class='col-md-4'>"
                contenido += "<center><h3 class='badge badge-primary'>" + obj.cDiaNombre + "</h3></center>"
            contenido += "</div>"
            contenido += "<div class='col-md-3'>"
                contenido += "<center><h3 class='badge badge-primary'>" + obj.cHoPInicio + "</h3></center>"
            contenido += "</div>"
            contenido += "<div class='col-md-3'>"
                contenido += "<center><h3 class='badge badge-primary'>" + obj.cHoPFinal + "</h3></center>"
            contenido += "</div>"
            contenido += "<div class='col-md-2'>"
                contenido += "<center>";
                contenido += "<a type='button' onclick='EliminarHorarioPersonal(" + obj.nHoPId + "," + ids + ")' >";
                        contenido += "<i class='material-icons'>delete</i>";
                    contenido += "</a>";
                contenido += "</center>";
                contenido += "</div>";
                console.log(obj.cUsuNombre);
                h5modalUs.html("Horario de: " + obj.cUsuNombre);
            

        });

        ta.html(contenido);
        

    }).done(function (s) {
    }).fail(function (err) {
            console.log("ERROR: " + err);
            
        });


    



}



function EliminarHorarioPersonal(id,nUsuId) {

    var alertSucc = $('#idAlertaSucesos1');

    var data = { "nHoPId": id };

    $.post("http://localhost:64959/Horario/BorrarHorarioPersonal", data, function (resupd) {
        console.log(resupd);

        if (resupd == 0) {
            alertSucc.html("<div class='alert alert-success' role='alert'>"
                                + "Se elimino el horario"

                          + "</div>" + " <br />");
        } else {
            alertSucc.html("<div class='alert alert-danger' role='alert'>"
                                + "No se pudo eliminar el horario"

                        + "</div>" + " <br />");
        }


    }).done(function (s) {
    })
        .fail(function (err) {
            console.log("ERROR: " + err);
            //alertSucc.html("<div class='alert alert-danger' role='alert'>"
            //                    + "No se pudo eliminar el horario"

            //            + "</div>" + " <br />");
        });

    calendarId(nUsuId);
}


function AgregarHorarioPersonal(idx) {
    //h.nHoPId, h.nDiaId, h.nUsuId, h.cHoPInicio, h.cHoPFinal
    var tipoHorario = $('#selectComboTipoHorario').val();
    var cbodia = $('#selectComboDia').val();
    var txtinicio = $('#txtinicioHorario').val();
    var txtfin = $('#txtfinHorario').val();
    var dat = {
        "nHoPId": tipoHorario,
        "nDiaId": cbodia,
        "nUsuId": idx,
        "cHoPInicio": txtinicio,
        "cHoPFinal": txtfin
    }

    $.post("http://localhost:64959/Horario/AgregarNuevoHorarioPersonal", dat, function (resupd) {
        console.log(resupd);

    }).done(function (s) {
    })
        .fail(function (err) {
            console.log("ERROR: " + err);

        });

    var btnguardarH = $('#btnGuardarHorarioUsuario');

    btnguardarH.click(function () {

        calendarId(idx);
    });
    
}


function CargaComboTipoHorario() {
    var cbTipoHorario = $('#selectComboTipoHorario');
    var texto = "";

    $.ajax({
        url: 'http://localhost:64959/Maestros/ListadoTipoHorario',
        type: 'GET',
        dataType: 'json',
        success: function (result) {
            $.each(result, function (index, item) {
                texto += "<option value='" + item.nHoTId + "'>" + item.cHoTDescripcion + "</option>";
                cbTipoHorario.html(texto);
            });

        },
        error: function (xhr, status) {
            console.log("OCURRIO UN ERROR EN CARGAR EL COMBO TIPO HORARIO");
        }
    });
}