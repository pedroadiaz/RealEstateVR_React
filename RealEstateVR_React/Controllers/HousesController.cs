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
    [Route("api/Houses")]
    public class HousesController : Controller
    {
        private readonly RealestateContext _context;

        public HousesController(RealestateContext context)
        {
            _context = context;
        }

        // GET: api/Houses
        [HttpGet]
        public IEnumerable<House> GetHouse()
        {
            return _context.House;
        }

        // GET: api/Houses/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetHouse([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var house = await _context.House.SingleOrDefaultAsync(m => m.Houseid == id);

            if (house == null)
            {
                return NotFound();
            }

            return Ok(house);
        }

        //// PUT: api/Houses/5
        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutHouse([FromRoute] int id, [FromBody] House house)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    if (id != house.Houseid)
        //    {
        //        return BadRequest();
        //    }

        //    _context.Entry(house).State = EntityState.Modified;

        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!HouseExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return NoContent();
        //}

        
        // PUT: api/Houses/5
        [HttpPut("{id}")]
        public IActionResult PutHouse([FromRoute] int id, [FromBody] House house)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != house.Houseid)
            {
                return BadRequest();
            }

            _context.Entry(house).State = EntityState.Modified;

            _context.SaveChanges();

            return Ok();
        }



        // POST: api/Houses
        [HttpPost]
        public async Task<IActionResult> PostHouse([FromBody] House house)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.House.Add(house);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (HouseExists(house.Houseid))
                {
                    return new StatusCodeResult(StatusCodes.Status409Conflict);
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetHouse", new { id = house.Houseid }, house);
        }

        // DELETE: api/Houses/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHouse([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var house = await _context.House.SingleOrDefaultAsync(m => m.Houseid == id);
            if (house == null)
            {
                return NotFound();
            }

            _context.House.Remove(house);
            await _context.SaveChangesAsync();

            return Ok(house);
        }

        private bool HouseExists(int id)
        {
            return _context.House.Any(e => e.Houseid == id);
        }
    }
}