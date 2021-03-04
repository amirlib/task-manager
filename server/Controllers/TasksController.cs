using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaskManager.Models;

namespace TaskManager.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TasksController : ControllerBase
    {
        #region Fileds
        private static readonly Dictionary<string, TaskItem> _tasks = new Dictionary<string, TaskItem>();
        #endregion

        // GET: api/tasks
        [HttpGet]
        public IEnumerable<TaskItem> GetAllTasks()
        {
            return _tasks.Values.AsEnumerable();
        }

        // GET api/tasks/:id
        [HttpGet("{id}")]
        public ActionResult<TaskFormData> GetTaskById(string id)
        {
            if (!_tasks.TryGetValue(id, out var task)) return NotFound();

            return Ok(task);
        }

        // POST api/tasks
        [HttpPost]
        public async Task<ActionResult<TaskFormData>> CreateTaskAsync([FromForm] TaskFormData task)
        {
            var item = await task.ToTaskItemAsync();

            _tasks.Add(item.Id, item);

            return CreatedAtAction(
                nameof(GetTaskById),
                new { id = item.Id },
                item);
        }

        // PUT api/tasks/:id
        [HttpPut("{id}")]
        public async Task<IActionResult> ReplaceTaskAsync(string id, [FromForm] TaskFormData task)
        {
            if (!_tasks.ContainsKey(id)) return NotFound();

            var item = await task.ToTaskItemAsync(id);

            _tasks.Remove(id);
            _tasks.Add(item.Id, item);

            return Ok(item);
        }

        // DELETE api/tasks/:id
        [HttpDelete("{id}")]
        public IActionResult Delete(string id)
        {
            if (!_tasks.ContainsKey(id)) return NotFound();

            _tasks.Remove(id);

            return Ok();
        }
    }
}
