using System;
using System.Collections.Generic;

namespace RealEstateVR_React.Models
{
    public partial class Image
    {
        public int ImageId { get; set; }
        public int? Houseid { get; set; }
        public string ImagePath { get; set; }
        public string ShortDescription { get; set; }
        public int? SortOrder { get; set; }
    }
}
