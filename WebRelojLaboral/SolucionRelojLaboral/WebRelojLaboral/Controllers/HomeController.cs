using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebRelojLaboral.Models;

namespace WebRelojLaboral.Controllers
{
    public class HomeController : Controller
    {
        RelojLaboralEntities bd = new RelojLaboralEntities();

        public ActionResult Inicio()
        {
            //List<SelectCalendarioIndividual_Result> lis = new List<SelectCalendarioIndividual_Result>();
            //lis = bd.SelectCalendarioIndividual().ToList();
            


            return View();
        }
        //public JsonResult CalendarioIndividual()
        //{
        //    //var lis = from a in bd.RL_CalendarioIndividual
        //    //          join b in bd.RL_Dia on a.nDiaId equals b.nDiaId
        //    //          join c in bd.RL_EstadoCalendario on a.nEsCId equals c.nEsCId
        //    //          select new { b.cDiaNom, b.cDiaCod, c.nEsCId };

        //    //List<SelectCalendarioIndividual_Result> lis = new List<SelectCalendarioIndividual_Result>();
        //    //lis = bd.SelectCalendarioIndividual().ToList();
        //    //ViewBag.cal = lis;

        //    return Json(lis, "application/json; charset=utf-8", JsonRequestBehavior.AllowGet);

        //}
        




    }
}