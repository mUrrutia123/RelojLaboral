using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebRelojLaboral.Models;

namespace WebRelojLaboral.Controllers
{
    public class MaestrosController : Controller
    {

        RelojLaboralEntities bd = new RelojLaboralEntities();
        // GET: Maestros


        [HttpGet]
        public JsonResult ListadoRoles()
        {
            //List<RL_Roles> lis = List<RL_Roles>();
            //var lis = bd.RL_Roles.ToList();
            List<sp_get_RL_Roles_Result> lis = new List<sp_get_RL_Roles_Result>();
            lis = bd.sp_get_RL_Roles().ToList();

            return Json(lis, "application/json; charset=utf-8", JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public JsonResult ListadoUbicacion()
        {

            List<sp_get_RL_Ubigeo_Result> lis = new List<sp_get_RL_Ubigeo_Result>();
            lis = bd.sp_get_RL_Ubigeo().ToList();

            return Json(lis, "application/json; charset=utf-8", JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public JsonResult ListadoEstadoUsuario()
        {

            List<sp_get_RL_UsuarioEstado_Result> lis = new List<sp_get_RL_UsuarioEstado_Result>();
            lis = bd.sp_get_RL_UsuarioEstado().ToList();

            return Json(lis, "application/json; charset=utf-8", JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult ListadoDia()
        {

            List<sp_get_RL_Dia_Result> lis = new List<sp_get_RL_Dia_Result>();
            lis = bd.sp_get_RL_Dia().ToList();

            return Json(lis, "application/json; charset=utf-8", JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult ListadoTipoHorario()
        {

            List<sp_get_RL_HorarioTipo_Result> lis = new List<sp_get_RL_HorarioTipo_Result>();
            lis = bd.sp_get_RL_HorarioTipo().ToList();

            return Json(lis, "application/json; charset=utf-8", JsonRequestBehavior.AllowGet);
        }
    }
}