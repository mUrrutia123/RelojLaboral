using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebRelojLaboral.Models;

namespace WebRelojLaboral.Controllers
{
    public class HorarioController : Controller
    {

        RelojLaboralEntities bd = new RelojLaboralEntities();

        // GET: Horario
        public ActionResult NuevoHorario()
        {
            return View();
        }

        [HttpGet]
        public JsonResult ListaHorarioXUsuario(RL_Usuario u)
        {
            try
            {
                List<sp_getId_RL_Horario_Result> lis = new List<sp_getId_RL_Horario_Result>();
                lis = bd.sp_getId_RL_Horario(u.nUsuId).ToList();


                return Json(lis, "application/json; charset=utf-8", JsonRequestBehavior.AllowGet);
            }catch(Exception e)
            {
                return Json(1, "application/json; charset=utf-8", JsonRequestBehavior.AllowGet);
            }
        }

        

        public ActionResult ListaHorario()
        {
            return View();
        }


        public ActionResult pruebita()
        {
            return View();
        }



        [HttpPost]
        public JsonResult HorarioUsuario(RL_Usuario u)
        {
            try
            {
                List<sp_getId_RL_Horario_Result> lis = new List<sp_getId_RL_Horario_Result>();
                lis = bd.sp_getId_RL_Horario(u.nUsuId).ToList();
                return Json(lis, "application/json; charset=utf-8", JsonRequestBehavior.AllowGet);
            }
            catch
            {
                return Json(1, "application/json; charset=utf-8", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public JsonResult BorrarHorarioPersonal(RL_HorarioPersonal h)
        {
            try
            {
                bd.sp_del_RL_HorarioPersonal(h.nHoPId);
                return Json(0, "application/json; charset=utf-8", JsonRequestBehavior.AllowGet);
            }
            catch
            {
                return Json(1, "application/json; charset=utf-8", JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public JsonResult AgregarNuevoHorarioPersonal(RL_HorarioPersonal h)
        {
            try
            {
                bd.sp_ins_RL_HorarioPersonal(h.nHoPId,h.nDiaId,h.nUsuId,h.cHoPInicio,h.cHoPFinal,"GMT");
                return Json(0, "application/json; charset=utf-8", JsonRequestBehavior.AllowGet);
            }
            catch
            {
                return Json(1, "application/json; charset=utf-8", JsonRequestBehavior.AllowGet);
            }
        }


    }
}