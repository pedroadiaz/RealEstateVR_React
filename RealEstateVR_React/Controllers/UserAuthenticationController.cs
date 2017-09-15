using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RealEstateVR_React.Models;

namespace RealEstateVR_React.Controllers
{
    [Produces("application/json")]
    [Route("api/UserAuthentication")]
    public class UserAuthenticationController : Controller
    {
        private readonly RealestateContext _context;

        public UserAuthenticationController(RealestateContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<UserLogin> GetUserLogin()
        {
            return _context.UserLogin;
        }

        [HttpPost]
        public async Task<IActionResult> LoginUser([FromBody] LoginInfo loginInfo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userLogin = await _context.UserLogin.SingleOrDefaultAsync(m => m.Username == loginInfo.username && m.Password == loginInfo.password);

            if (userLogin == null)
            {
                return NotFound();
            }

            return Ok(userLogin);
        }

        public struct LoginInfo
        {
            public string username;
            public string password;
        }

    }
}
