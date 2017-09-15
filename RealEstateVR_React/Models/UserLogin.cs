using System;
using System.Collections.Generic;

namespace RealEstateVR_React.Models
{
    public partial class UserLogin
    {
        public int UserLoginId { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public int? PermissionLevel { get; set; }
    }
}
