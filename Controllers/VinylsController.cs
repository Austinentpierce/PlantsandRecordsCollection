using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PlantsandRecordsCollection.Models;

namespace PlantsandRecordsCollection.Controllers
{
    // All of these routes will be at the base URL:     /api/Vinyls
    // That is what "api/[controller]" means below. It uses the name of the controller
    // in this case VinylsController to determine the URL
    [Route("api/[controller]")]
    [ApiController]
    public class VinylsController : ControllerBase
    {
        // This is the variable you use to have access to your database
        private readonly DatabaseContext _context;

        // Constructor that recives a reference to your database context
        // and stores it in _context for you to use in your API methods
        public VinylsController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Vinyls
        //
        // Returns a list of all your Vinyls
        //
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Vinyls>>> GetVinyls(string filter)
        {
            // Uses the database context in `_context` to request all of the Vinyls, sort
            // them by row id and return them as a JSON array.
            if (filter == null)
            {
                return await _context.Vinyls.OrderBy(row => row.Id).ToListAsync();
            }
            else
            {
                return await _context.Vinyls.OrderBy(row => row.Id).Where(Vinyl => Vinyl.Album.ToLower().Contains(filter.ToLower())).ToListAsync();
            }

        }

        // GET: api/Vinyls/5
        //
        // Fetches and returns a specific vinyls by finding it by id. The id is specified in the
        // URL. In the sample URL above it is the `5`.  The "{id}" in the [HttpGet("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpGet("{id}")]
        public async Task<ActionResult<Vinyls>> GetVinyls(int id)
        {
            // Find the vinyls in the database using `FindAsync` to look it up by id
            var vinyls = await _context.Vinyls.FindAsync(id);

            // If we didn't find anything, we receive a `null` in return
            if (vinyls == null)
            {
                // Return a `404` response to the client indicating we could not find a vinyls with this id
                return NotFound();
            }

            //  Return the vinyls as a JSON object.
            return vinyls;
        }

        // PUT: api/Vinyls/5
        //
        // Update an individual vinyls with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpPut("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        // In addition the `body` of the request is parsed and then made available to us as a Vinyls
        // variable named vinyls. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Vinyls POCO class. This represents the
        // new values for the record.
        //
        [HttpPut("{id}")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> PutVinyls(int id, Vinyls vinyls)
        {
            // If the ID in the URL does not match the ID in the supplied request body, return a bad request
            if (id != vinyls.Id)
            {
                return BadRequest();
            }

            // Tell the database to consider everything in vinyls to be _updated_ values. When
            // the save happens the database will _replace_ the values in the database with the ones from vinyls
            _context.Entry(vinyls).State = EntityState.Modified;

            try
            {
                // Try to save these changes.
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                // Ooops, looks like there was an error, so check to see if the record we were
                // updating no longer exists.
                if (!VinylsExists(id))
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
            return Ok(vinyls);
        }

        // POST: api/Vinyls
        //
        // Creates a new vinyls in the database.
        //
        // The `body` of the request is parsed and then made available to us as a Vinyls
        // variable named vinyls. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Vinyls POCO class. This represents the
        // new values for the record.
        //
        [HttpPost]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<ActionResult<Vinyls>> PostVinyls(Vinyls vinyls)
        {
            // Indicate to the database context we want to add this new record
            _context.Vinyls.Add(vinyls);
            await _context.SaveChangesAsync();

            // Return a response that indicates the object was created (status code `201`) and some additional
            // headers with details of the newly created object.
            return CreatedAtAction("GetVinyls", new { id = vinyls.Id }, vinyls);
        }

        // DELETE: api/Vinyls/5
        //
        // Deletes an individual vinyls with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpDelete("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpDelete("{id}")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> DeleteVinyls(int id)
        {
            // Find this vinyls by looking for the specific id
            var vinyls = await _context.Vinyls.FindAsync(id);
            if (vinyls == null)
            {
                // There wasn't a vinyls with that id so return a `404` not found
                return NotFound();
            }

            // Tell the database we want to remove this record
            _context.Vinyls.Remove(vinyls);

            // Tell the database to perform the deletion
            await _context.SaveChangesAsync();

            // Return a copy of the deleted data
            return Ok(vinyls);
        }

        // Private helper method that looks up an existing vinyls by the supplied id
        private bool VinylsExists(int id)
        {
            return _context.Vinyls.Any(vinyls => vinyls.Id == id);
        }
    }
}
