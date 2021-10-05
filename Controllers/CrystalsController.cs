using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PlantsandRecordsCollection.Models;

namespace PlantsandRecordsCollection.Controllers
{
    // All of these routes will be at the base URL:     /api/Crystals
    // That is what "api/[controller]" means below. It uses the name of the controller
    // in this case CrystalsController to determine the URL
    [Route("api/[controller]")]
    [ApiController]
    public class CrystalsController : ControllerBase
    {
        // This is the variable you use to have access to your database
        private readonly DatabaseContext _context;

        // Constructor that recives a reference to your database context
        // and stores it in _context for you to use in your API methods
        public CrystalsController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Crystals
        //
        // Returns a list of all your Crystals
        //
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Crystals>>> GetCrystals(string filter)
        {
            if (filter == null)
            {
                return await _context.Crystals.OrderBy(row => row.Id).ToListAsync();
            }
            else
            {
                return await _context.Crystals.OrderBy(row => row.Id).Where(Crystal => Crystal.Name.ToLower().Contains(filter.ToLower())).ToListAsync();
            }
            // Uses the database context in `_context` to request all of the Crystals, sort
            // them by row id and return them as a JSON array.

        }

        // GET: api/Crystals/5
        //
        // Fetches and returns a specific crystals by finding it by id. The id is specified in the
        // URL. In the sample URL above it is the `5`.  The "{id}" in the [HttpGet("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpGet("{id}")]
        public async Task<ActionResult<Crystals>> GetCrystals(int id)
        {
            // Find the crystals in the database using `FindAsync` to look it up by id
            var crystals = await _context.Crystals.FindAsync(id);

            // If we didn't find anything, we receive a `null` in return
            if (crystals == null)
            {
                // Return a `404` response to the client indicating we could not find a crystals with this id
                return NotFound();
            }

            //  Return the crystals as a JSON object.
            return crystals;
        }

        // PUT: api/Crystals/5
        //
        // Update an individual crystals with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpPut("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        // In addition the `body` of the request is parsed and then made available to us as a Crystals
        // variable named crystals. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Crystals POCO class. This represents the
        // new values for the record.
        //
        [HttpPut("{id}")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> PutCrystals(int id, Crystals crystals)
        {
            // If the ID in the URL does not match the ID in the supplied request body, return a bad request
            if (id != crystals.Id)
            {
                return BadRequest();
            }

            // Tell the database to consider everything in crystals to be _updated_ values. When
            // the save happens the database will _replace_ the values in the database with the ones from crystals
            _context.Entry(crystals).State = EntityState.Modified;

            try
            {
                // Try to save these changes.
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                // Ooops, looks like there was an error, so check to see if the record we were
                // updating no longer exists.
                if (!CrystalsExists(id))
                {
                    // If the record we tried to update was already deleted by someone else,
                    // return a `404` not found
                    return NotFound();
                }
                else
                {
                    // Otherwise throw the error back, which will cause the request to fail
                    // and generate an error to the client.
                    throw;
                }
            }

            // Return a copy of the updated data
            return Ok(crystals);
        }

        // POST: api/Crystals
        //
        // Creates a new crystals in the database.
        //
        // The `body` of the request is parsed and then made available to us as a Crystals
        // variable named crystals. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Crystals POCO class. This represents the
        // new values for the record.
        //
        [HttpPost]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<ActionResult<Crystals>> PostCrystals(Crystals crystals)
        {
            // Indicate to the database context we want to add this new record
            _context.Crystals.Add(crystals);
            await _context.SaveChangesAsync();

            // Return a response that indicates the object was created (status code `201`) and some additional
            // headers with details of the newly created object.
            return CreatedAtAction("GetCrystals", new { id = crystals.Id }, crystals);
        }

        // DELETE: api/Crystals/5
        //
        // Deletes an individual crystals with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpDelete("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpDelete("{id}")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> DeleteCrystals(int id)
        {
            // Find this crystals by looking for the specific id
            var crystals = await _context.Crystals.FindAsync(id);
            if (crystals == null)
            {
                // There wasn't a crystals with that id so return a `404` not found
                return NotFound();
            }

            // Tell the database we want to remove this record
            _context.Crystals.Remove(crystals);

            // Tell the database to perform the deletion
            await _context.SaveChangesAsync();

            // Return a copy of the deleted data
            return Ok(crystals);
        }

        // Private helper method that looks up an existing crystals by the supplied id
        private bool CrystalsExists(int id)
        {
            return _context.Crystals.Any(crystals => crystals.Id == id);
        }
    }
}
