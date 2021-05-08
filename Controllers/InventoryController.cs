using InventorySystem.DBModels;
using InventorySystem.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InventorySystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InventoryController : ControllerBase
    {
        [HttpGet]
        [Route("InventoryGet")]
        public async  Task<IActionResult> InventoryGet()
        {
            try
            {
                using (InventoryManagementSysytemContext db = new InventoryManagementSysytemContext())
                {
                    var result = await db.Inventories.ToListAsync();

                    return Ok(result);
                }
            }
            catch (Exception ex)
            {
                return StatusCode(204);
            }
        }

        [HttpGet]
        [Route("InventoryGetId/{id}")]
        public async Task<IActionResult> InventoryGetId(int id)
        {
            try
            {
                using (InventoryManagementSysytemContext db = new InventoryManagementSysytemContext())
                {
                    var result = await db.Inventories.Where(xid=>xid.Id == Convert.ToInt32(id)).FirstOrDefaultAsync();

                    return Ok(result);
                }
            }
            catch (Exception ex)
            {
                return StatusCode(204);
            }
        }

        [HttpPost]
        [Route("InventoryPost")]
        public async Task<IActionResult> InventoryPost([FromBody] InventoryModel form)
        {
            using (InventoryManagementSysytemContext db = new InventoryManagementSysytemContext())
            {
                Inventory model = new Inventory();
                model.Name = form.name;
                model.Description = form.description;
                model.Price = Convert.ToDouble(form.price);
                await db.Inventories.AddAsync(model);
                db.SaveChanges();
            }
            return Ok(form);
        }

        [HttpPut]
        [Route("InventoryUpdate/{id}")]
        public async Task<IActionResult> InventoryPost(int id,[FromBody] InventoryModel form)
        {
            using (InventoryManagementSysytemContext db = new InventoryManagementSysytemContext())
            {
                Inventory inventoryModel = await db.Inventories.Where(xid => xid.Id == id).FirstOrDefaultAsync();
                //Inventory model = new Inventory();
                inventoryModel.Name = form.name;
                inventoryModel.Description = form.description;
                inventoryModel.Price = Convert.ToDouble(form.price);
                db.Inventories.Update(inventoryModel);
                db.SaveChanges();
            }
            return Ok(form);
        }

        [HttpDelete]
        [Route("InventoryDelete/{id}")]
        public async Task<IActionResult> InventoryDelete(int id)
        {
            using (InventoryManagementSysytemContext db = new InventoryManagementSysytemContext())
            {
                Inventory inventory = await db.Inventories.Where(xid => xid.Id == id).FirstOrDefaultAsync();
                db.Inventories.Remove(inventory);
                db.SaveChanges();
            }
            return Ok();
        }
    }
}
