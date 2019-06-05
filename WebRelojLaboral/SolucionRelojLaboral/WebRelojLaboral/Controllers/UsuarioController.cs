using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebRelojLaboral.Models;

namespace WebRelojLaboral.Controllers
{
    public class UsuarioController : Controller
    {

        RelojLaboralEntities bd = new RelojLaboralEntities();


        public ActionResult Login()
        {
            return View();
        }

        [HttpGet]
        public JsonResult ValidacionUsuarioLogin(RL_Usuario u)
        {
            try
            {
                List<sp_getValida_RL_Usuario_Result> lis = new List<sp_getValida_RL_Usuario_Result>();
                lis = bd.sp_getValida_RL_Usuario(u.cUsuEmail,u.cUsuPassword).ToList();
                return Json(lis, "application/json; charset=utf-8", JsonRequestBehavior.AllowGet);
            }
            catch
            {

            }

            return Json(1, "application/json; charset=utf-8", JsonRequestBehavior.AllowGet); ;
        }

        // GET: Usuario
        public ActionResult ListaUsuarios()
        {
            
            return View();
        }

        public JsonResult ListaU()
        {
            try
            {
                List<sp_get_RL_Usuario_Result> lis = new List<sp_get_RL_Usuario_Result>();
                lis = bd.sp_get_RL_Usuario().ToList();
                return Json(lis, "application/json; charset=utf-8", JsonRequestBehavior.AllowGet);
            }
            catch(Exception e)
            {
                return null;
            }

            
        }

        
        public JsonResult ConfirmarUsuarioDni()
        {//FALTA TERMINAR NO ME DEVUELVE EL VALOR DE RESPUESTA, SALTA AL CATCH
            try
            {
                List<sp_getDNI_RL_Usuario_Result> lis = new List<sp_getDNI_RL_Usuario_Result>();
                lis = bd.sp_getDNI_RL_Usuario("12345678").ToList();
                return Json(lis, "application/json; charset=utf-8",JsonRequestBehavior.AllowGet);
            }
            catch (Exception e)
            {
                return Json(1, "application/json; charset=utf-8", JsonRequestBehavior.AllowGet); ;
            }


        }

        public ActionResult NuevoUsuario()
        {

            return View();
        }

        [HttpPost]
        public JsonResult InsUsuario(RL_Usuario u)
        {
            try
            {
                //int ubic,string nom,string ape,string dni,string cel1,string cel2,string correo,string domicilio
                bd.sp_ins_RL_Usuario(u.nUbiId,u.cUsuNombre,u.cUsuApellido,u.cUsuDNI,u.cUsuCelular1,u.cUsuCelular2,u.cUsuEmail,u.cUsuDomicilio);
                return Json(u, JsonRequestBehavior.AllowGet);
            }
            catch(Exception e)
            {
                return Json(0, JsonRequestBehavior.AllowGet);
            }
            
        }
        
        public ActionResult Usuarios()
        {
            return View();
        }

        [HttpGet]
        public JsonResult MantenimientoUsuario(RL_Usuario u)
        {
            try
            {

                List<sp_getId_RL_Usuario_Result> lis = new List<sp_getId_RL_Usuario_Result>();
                lis = bd.sp_getId_RL_Usuario(u.nUsuId).ToList();

                return Json(lis, JsonRequestBehavior.AllowGet);
            }
            catch (Exception e)
            {
                return Json(1, JsonRequestBehavior.AllowGet);
            }

        }

        [HttpPost]
        public JsonResult ActualizarUsuario(RL_Usuario u)
        {
            try
            {
                bd.sp_upd_RL_Usuario(u.nUsuId,u.nUbiId,u.cUsuNombre,u.cUsuApellido,u.cUsuDNI,u.cUsuCelular1,u.cUsuCelular2,u.cUsuEmail,u.cUsuDomicilio,u.cUsuPassword,u.nUsEId);
                //string rpt = "Actualizado Correctamente";
                return Json(0, JsonRequestBehavior.AllowGet);
            }
            catch
            {
                //string rpt = "Actualizado Incorrectamente";
                return Json(1, JsonRequestBehavior.AllowGet);
            }
        }


        [HttpPost]
        public JsonResult BorarUsuario(RL_Usuario u)
        {
            try
            {
                bd.sp_del_RL_Usuario(u.nUsuId);
                //string rpt = "Actualizado Correctamente";
                return Json(0, JsonRequestBehavior.AllowGet);
            }
            catch
            {
                //string rpt = "Actualizado Incorrectamente";
                return Json(1, JsonRequestBehavior.AllowGet);
            }
        }

    }
}