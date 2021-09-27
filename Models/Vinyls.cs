using System.ComponentModel.DataAnnotations;

namespace PlantsandRecordsCollection.Models
{
    public class Vinyls
    {
        public int Id { get; set; }

        [Required(ErrorMessage = " You must provide an album name. ")]
        public string Album { get; set; }

        [Required(ErrorMessage = " You must provide an artist name. ")]
        public string Artist { get; set; }

        [Required(ErrorMessage = " You must provide a release year. ")]
        public int ReleaseYear { get; set; }

        [Required(ErrorMessage = " You must provide a genre. ")]
        public string Genre { get; set; }


    }
}