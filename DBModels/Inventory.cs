using System;
using System.Collections.Generic;

#nullable disable

namespace InventorySystem.DBModels
{
    public partial class Inventory
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public double? Price { get; set; }
    }
}
