using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PlantsandRecordsCollection.Models;

namespace PlantsandRecordsCollection.Controllers
{
    // All of these routes will be at the base URL:     /api/Plants
    // That is what "api/[controller]" means below. It uses the name of the controller
    // in this case PlantsController to determine the URL
    [Route("api/[controller]")]
    [ApiController]
    public class PlantsController : ControllerBase
    {
        // This is the variable you use to have access to your database
        private readonly DatabaseContext _context;

        // Constructor that recives a reference to your database context
        // and stores it in _context for you to use in your API methods
        public PlantsController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Plants
        //
        // Returns a list of all your Plants
        //
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Plants>>> GetPlants()
        {
            // Uses the database context in `_context` to request all of the Plants, sort
            // them by row id and return them as a JSON array.
            return await _context.Plants.OrderBy(row => row.Id).ToListAsync();
        }

        // GET: api/Plants/5
        //
        // Fetches and returns a specific plants by finding it by id. The id is specified in the
        // URL. In the sample URL above it is the `5`.  The "{id}" in the [HttpGet("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpGet("{id}")]
        public async Task<ActionResult<Plants>> GetPlants(int id)
        {
            // Find the plants in the database using `FindAsync` to look it up by id
            var plants = await _context.Plants.FindAsync(id);

            // If we didn't find anything, we receive a `null` in return
            if (plants == null)
            {
                // Return a `404` response to the client indicating we could not find a plants with this id
                return NotFound();
            }

            //  Return the plants as a JSON object.
            return plants;
        }

        // PUT: api/Plants/5
        //
        // Update an individual plants with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpPut("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        // In addition the `body` of the request is parsed and then made available to us as a Plants
        // variable named plants. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Plants POCO class. This represents the
        // new values for the record.
        //
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPlants(int id, Plants plants)
        {
            // If the ID in the URL does not match the ID in the supplied request body, return a bad request
            if (id != plants.Id)
            {
                return BadRequest();
            }

            // Tell the database to consider everything in plants to be _updated_ values. When
            // the save happens the database will _replace_ the values in the database with the ones from plants
            _context.Entry(plants).State = EntityState.Modified;

            try
            {
                // Try to save these changes.
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                // Ooops, looks like there was an error, so check to see if the record we were
                // updating no longer exists.
                if (!PlantsExists(id))
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
            return Ok(plants);
        }

        // POST: api/Plants
        //
        // Creates a new plants in the database.
        //
        // The `body` of the request is parsed and then made available to us as a Plants
        // variable named plants. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Plants POCO class. This represents the
        // new values for the record.
        //
        [HttpPost]
        public async Task<ActionResult<Plants>> PostPlants(Plants plants)
        {
            // Indicate to the database context we want to add this new record
            _context.Plants.Add(plants);
            await _context.SaveChangesAsync();

            // Return a response that indicates the object was created (status code `201`) and some additional
            // headers with details of the newly created object.
            return CreatedAtAction("GetPlants", new { id = plants.Id }, plants);
        }

        // DELETE: api/Plants/5
        //
        // Deletes an individual plants with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpDelete("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePlants(int id)
        {
            // Find this plants by looking for the specific id
            var plants = await _context.Plants.FindAsync(id);
            if (plants == null)
            {
                // There wasn't a plants with that id so return a `404` not found
                return NotFound();
            }

            // Tell the database we want to remove this record
            _context.Plants.Remove(plants);

            // Tell the database to perform the deletion
            await _context.SaveChangesAsync();

            // Return a copy of the deleted data
            return Ok(plants);
        }

        // Private helper method that looks up an existing plants by the supplied id
        private bool PlantsExists(int id)
        {
            return _context.Plants.Any(plants => plants.Id == id);
        }
    }
}
