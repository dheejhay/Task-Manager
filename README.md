APPLICATION NAME : Task Manager
MODELS
tasks
task_date(Date), task(string), note(string), completed(boolean)
ROUTES
api_routes : router.get(‘/api/tasks’, controller.index)
		   router.post(‘/api/tasks’, controller.add)
		   router.put(‘/api/tasks/:id’, controller.edit)
		   router.get(‘/api/tasks/:id’, controller.task)
		   router.delete(‘/api/tasks/:id’, controller.delete)
		   router.delete(‘/api/tasks/clear’, controller.delete)
		   router.put(‘/api/tasks/:id/toggle’, controller.toggleCompleted)
ui_routes : ‘/’
          ‘/tasks’
		  ‘/tasks/add’
		  ‘/tasks/edit/:id’
          ‘/tasks/:id’
NB: no ui route for last 3 api needed
COMPONENTS
*App
-TaskForm
Props : action (add, edit, detail),
State : task schema
Event handlers : handleSubmit(onSubmit), handleChange(onChange)
Api endpoints : ‘/api/tasks’(POST), ‘/api/tasks/:id’(PUT), ‘/api/tasks/:id’(GET)
-TaskNav
Props : date, onTaskDateChange
Event handlers : onTaskDateChange(onChange)
-TaskHeader
Props : showAllTasks, onShowAllTasks
Event handlers : onShowAllTasks(onChange)
-TaskList
State : date, tasks, showAllTasks
Event handlers : handleTaskDateChange(onTaskDateChange), handleShowAllTasks(onShowAllTasks)
-Task
Props : task
Event handlers : handleCompletedToggle(onChange)
-TaskAction
Component tree
App
TaskList
TaskNav
TaskHeader
Task
TaskAction
TaskForm
