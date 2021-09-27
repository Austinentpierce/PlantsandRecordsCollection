using System.ComponentModel.DataAnnotations;

namespace PlantsandRecordsCollection.Models
{
    public class Crystals
    {
        public int Id { get; set; }

        [Required(ErrorMessage = " You must provide a name. ")]
        public string Name { get; set; }

        [Required(ErrorMessage = " You must provide a size. ")]
        public string Size { get; set; }

        [Required(ErrorMessage = " You must provide a color. ")]
        public string Color { get; set; }

        [Required(ErrorMessage = " You must provide a description. ")]
        public string Description { get; set; }


    }
}