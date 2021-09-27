using System.ComponentModel.DataAnnotations;

namespace PlantsandRecordsCollection.Models
{
    public class Plants
    {

        public int Id { get; set; }

        [Required(ErrorMessage = " You must provide a name. ")]
        public string Name { get; set; }

        [Required(ErrorMessage = " You must provide a type. ")]
        public string Type { get; set; }

        [Required(ErrorMessage = " You must provide a location. ")]
        public string Location { get; set; }

        [Required(ErrorMessage = " You must provide amount of watering. ")]
        public string Watering { get; set; }

        [Required(ErrorMessage = " You must provide a Pot number. ")]
        public int Pot { get; set; }

        [Required(ErrorMessage = " You must provide a description. ")]
        public string Description { get; set; }


    }
}