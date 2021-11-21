using Microsoft.EntityFrameworkCore;
using Nov18Test.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Nov18Test.Data
{
    public class ApplicationContext : DbContext { 

    public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
    {
    }

    public DbSet<Devices> Devices { get; set; }
}}
