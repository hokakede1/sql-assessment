// handleButtonClick() {
  //   let id = 0;
  //   if(this.state.newTodo) {
  //     if(this.props.allTodos.length) {
  //       id = this.props.allTodos.length
  //     }
  //     var newTask = { id, title: this.state.newTodo, completed: false }
  //     this.setState({
  //       allTodos: [...this.props.allTodos, newTask ],
  //       newTodo: ''
  //      })
  //   } else {
  //     alert("Must add new task.")
  //   }
  //
  // }


//Remember when we do Input state inside Component, not on Reducer because
//no other components needs that data ?

// Go into Component file that handle that click button
//First, I assume that we have a state of Input

  constructor(props) {
    super(props)

    this.state = {
      input = ''
    }
    //bind here
  }

  // I also assume that you have a function that handle onChange of Input


  handleButtonClick() {
    //1. Check if user input is empty or not
    if(!this.state.input) {
      return alert('Put in something')
    }

    //By running this if with return, If user does not enter anything, it return
    // an alert meaning it breaks out of handleButtonClick() because of return statement
    // So they will never go to the part below if they dont type in things

    //2. Invoke an action name sendInput to reducer that send the input of this
    //Component

    //Note: Because action is only a messenger between Component and Reducer
    // Reducer is in charge of state. So anything logic that changing state in
    //any type, do it in reducer. If you need data to update new state,
    // use action.payload to do it

    //Thats what I am going to do here


    this.props.sendInput(this.state.input)
  }


  // INSIDE REDUCER FILE:

  //I will type out action first so that it makes sense with the data flow


  const HANDLE_BUTTON_CLICK = "HANDLE_BUTTON_CLICK"


  // the input get store in content param because we called it above
  // from action payload now it come to reducer
  function sendInput(content) {
    return {
      type: HANDLE_BUTTON_CLICK,
      payload: content
    }
  }

  // now it goes into reducer

  let initialState = {
      allTodos: [],
      styling: ''
      }

  // the object that sendInput return now in action
  export default function reducer( state = initialState, action ) {
  switch(action.type) {

    // it ran this case because the case match the action.type

    case HANDLE_BUTTON_CLICK: {
      // Remember you can do the logic here be for you return things

      // First I create an object that has all three props

      var newObject = {
        id: state.allTodos.length,
        title: action.payload,
        completed: false
      }


      // Return a new state with this newObject inside of allTodos
      return (
        Object.assign({},
          state,
          {
            // Use spread Operator to push newObject into allTodos
            allTodos: [...state.allTodos, newObject]
            // Thats it
            // Note that: I type this out in a blank file, so I have not tested it
            // There will be some bug here and there, so dont paste it in your code
          })
      )
    }

    default:
      return state;
    }
  }





    let id = 0;
    if(this.state.newTodo) {
      if(this.props.allTodos.length) {
        id = this.props.allTodos.length
      }
      var newTask = { id, title: this.state.newTodo, completed: false }
      this.setState({
        allTodos: [...this.props.allTodos, newTask ],
        newTodo: ''
       })
  }



//*************************************************************

// action

// allTodos = [{...}, {...}]
// map throu allTodos => each item will be each object and each obj has a id, title, completed props

const myTodos = this.props.allTodos.map( (taskObj, i) => <IndividualTask
    key={i}

    index = {taskObj.id} //take out id
    task={taskObj.title} // take out title
    completed = {taskObj.completed} // take out completed
    />)

//code in Individual_Task.js
return (
      <div>
        <p style={ !props.task.completed ? null : completedStyle }>{props.task.title}</p>
        <button onClick={ ()=> props.completed(props.task.id) } disabled={ props.task.completed }>Complete</button>

        {/* In here I can invoke the action.. pay close attention on deleteTask */}
        <button onClick={ () => props.deleteTask(props.index) }>Remove</button>
      </div>
    )
  }

  connect(null, {deleteTask})(...)

  
