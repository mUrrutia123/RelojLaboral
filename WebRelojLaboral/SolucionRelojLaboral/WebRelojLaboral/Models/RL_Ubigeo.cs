//------------------------------------------------------------------------------
// <auto-generated>
//     Este código se generó a partir de una plantilla.
//
//     Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//     Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace WebRelojLaboral.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class RL_Ubigeo
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public RL_Ubigeo()
        {
            this.RL_Usuario = new HashSet<RL_Usuario>();
        }
    
        public int nUbiId { get; set; }
        public string cUbiDescripcion { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<RL_Usuario> RL_Usuario { get; set; }
    }
}
