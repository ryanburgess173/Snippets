using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using PracticeApplication.Data;
using PracticeApplication.Modesl;

namespace PracticeApplication
{
    public class TestSuitesController : Controller
    {
        private readonly ApplicationDbContext _context;

        public TestSuitesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: TestSuites
        public async Task<IActionResult> Index()
        {
              return _context.TestSuite != null ? 
                          View(await _context.TestSuite.ToListAsync()) :
                          Problem("Entity set 'ApplicationDbContext.TestSuite'  is null.");
        }

        // GET: TestSuites/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null || _context.TestSuite == null)
            {
                return NotFound();
            }

            var testSuite = await _context.TestSuite
                .FirstOrDefaultAsync(m => m.Id == id);
            if (testSuite == null)
            {
                return NotFound();
            }

            return View(testSuite);
        }

        // GET: TestSuites/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: TestSuites/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Name,Description")] TestSuite testSuite)
        {
            if (ModelState.IsValid)
            {
                _context.Add(testSuite);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(testSuite);
        }

        // GET: TestSuites/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null || _context.TestSuite == null)
            {
                return NotFound();
            }

            var testSuite = await _context.TestSuite.FindAsync(id);
            if (testSuite == null)
            {
                return NotFound();
            }
            return View(testSuite);
        }

        // POST: TestSuites/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Name,Description,DateCreatedUtc,DateModifiedUtc")] TestSuite testSuite)
        {
            if (id != testSuite.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(testSuite);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!TestSuiteExists(testSuite.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(testSuite);
        }

        // GET: TestSuites/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null || _context.TestSuite == null)
            {
                return NotFound();
            }

            var testSuite = await _context.TestSuite
                .FirstOrDefaultAsync(m => m.Id == id);
            if (testSuite == null)
            {
                return NotFound();
            }

            return View(testSuite);
        }

        // POST: TestSuites/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            if (_context.TestSuite == null)
            {
                return Problem("Entity set 'ApplicationDbContext.TestSuite'  is null.");
            }
            var testSuite = await _context.TestSuite.FindAsync(id);
            if (testSuite != null)
            {
                _context.TestSuite.Remove(testSuite);
            }
            
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool TestSuiteExists(int id)
        {
          return (_context.TestSuite?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
