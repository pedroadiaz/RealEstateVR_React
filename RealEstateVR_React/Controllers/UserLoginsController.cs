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
    [Route("api/UserLogins")]
    public class UserLoginsController : Controller
    {
        private readonly RealestateContext _context;

        public UserLoginsController(RealestateContext context) 
        {
            _context = context;
        }

        // GET: api/UserLogins
        [HttpGet]
        public IEnumerable<UserLogin> GetUserLogin()
        {
            return _context.UserLogin;
        }

        // GET: api/UserLogins/5
        //[HttpGet("{id}")]
        //public UserLogin GetUserLogin([FromRoute] int id)
        //{
        //    UserLogin userLogin = _context.UserLogin.SingleOrDefault(m => m.UserLoginId == id);

        //    return userLogin;
        //}


        [HttpGet("{id}")]
        public async Task<IActionResult> GetUserLogin([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userLogin = await _context.UserLogin.SingleOrDefaultAsync(m => m.UserLoginId == id);

            if (userLogin == null)
            {
                return NotFound();
            }

            return Ok(userLogin);
        }

        //[HttpPost]
        //public async Task<IActionResult> LoginUser([FromBody] LoginInfo loginInfo)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    var userLogin = await _context.UserLogin.SingleOrDefaultAsync(m => m.Username == loginInfo.username && m.Password == loginInfo.password);

        //    if (userLogin == null)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(userLogin);
        //}

        //[HttpPost]
        //public UserLogin LoginUser([FromBody] LoginInfo loginInfo)
        //{
        //    UserLogin userLogin = _context.UserLogin.SingleOrDefault(m => m.Username == loginInfo.username && m.Password == loginInfo.password);

        //    return userLogin;
        //}


        // PUT: api/UserLogins/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUserLogin([FromRoute] int id, [FromBody] UserLogin userLogin)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != userLogin.UserLoginId)
            {
                return BadRequest();
            }

            _context.Entry(userLogin).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserLoginExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/UserLogins
        [HttpPost]
        public async Task<IActionResult> PostUserLogin([FromBody] UserLogin userLogin)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.UserLogin.Add(userLogin);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (UserLoginExists(userLogin.UserLoginId))
                {
                    return new StatusCodeResult(StatusCodes.Status409Conflict);
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetUserLogin", new { id = userLogin.UserLoginId }, userLogin);
        }

        // DELETE: api/UserLogins/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUserLogin([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userLogin = await _context.UserLogin.SingleOrDefaultAsync(m => m.UserLoginId == id);
            if (userLogin == null)
            {
                return NotFound();
            }

            _context.UserLogin.Remove(userLogin);
            await _context.SaveChangesAsync();

            return Ok(userLogin);
        }

        private bool UserLoginExists(int id)
        {
            return _context.UserLogin.Any(e => e.UserLoginId == id);
        }
    }
}