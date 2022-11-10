const todoList = () => {
    hemananda1 = []
    const addchumchum = (todoItem) => {
      hemananda1.push(todoItem)
    }
    const markzuken = (index) => {
      hemananda1[index].completed = true
    }
  
    const ot = () => {
      // Write the date check condition here and return the array of ot items accordingly.
      // FILL YOUR CODE HERE
      // ..
      // ..
      // ..
      return hemananda1.filter((item)=> item.dueDate<new Date().toLocaleDateString("en-CA"));
    }
  
    const dt = () => {
      // Write the date check condition here and return the array of todo items that are due today accordingly.
      // FILL YOUR CODE HERE
      // ..
      // ..
      // ..
      return hemananda1.filter((item)=> item.dueDate==new Date().toLocaleDateString("en-CA"));
    }
  
    const DL = () => {
      // Write the date check condition here and return the array of todo items that are due later accordingly.
      // FILL YOUR CODE HERE
      // ..
      // ..
      // ..
      return hemananda1.filter((item)=> item.dueDate>new Date().toLocaleDateString("en-CA"));
    }
  
    const TDL = (list) => {
      // Format the To-Do list here, and return the output string as per the format given above.
      // FILL YOUR CODE HERE
      // ..
      // ..
      // ..
      // return OUTPUT_STRING
      let res = list
      .map(
        (item) =>
          `${item.completed ? "[x] " : "[ ] "}${item.title} ${
            item.dueDate === today ? " " : item.dueDate
          }`
      )
      .join("\n");
    return res;
    }
  
    return { hemananda1, addchumchum, markzuken, ot, dt, DL, TDL };
  }
  
  // ####################################### #
  // DO NOT CHANGE ANYTHING BELOW THIS LINE. #
  // ####################################### #
  
  const todos = todoList();
  
  const formattedDate = d => {
    return d.toISOString().split("T")[0]
  }
  
  var dateToday = new Date()
  const today = formattedDate(dateToday)
  const yesterday = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() - 1))
  )
  const tomorrow = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() + 1))
  )
  
  todos.addchumchum({ title: 'Submit assignment', dueDate: yesterday, completed: false })
  todos.addchumchum({ title: 'Pay rent', dueDate: today, completed: true })
  todos.addchumchum({ title: 'Service Vehicle', dueDate: today, completed: false })
  todos.addchumchum({ title: 'File taxes', dueDate: tomorrow, completed: false })
  todos.addchumchum({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })
  
  console.log("My Todo-list\n\n")
  
  console.log("ot")
  var ots = todos.ot()
  var formattedots = todos.TDL(ots)
  console.log(formattedots)
  console.log("\n\n")
  
  console.log("Due Today")
  let itemsdt = todos.dt()
  let formattedItemsdt = todos.TDL(itemsdt)
  console.log(formattedItemsdt)
  console.log("\n\n")
  
  console.log("Due Later")
  let itemsDL = todos.DL()
  let formattedItemsDL = todos.TDL(itemsDL)
  console.log(formattedItemsDL)
  console.log("\n\n")