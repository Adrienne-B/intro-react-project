
const render = () => {  
  
    //Let’s put all of our DOM manipulations for both versions into a function, name it render, and use it in a setInterval call to make it repeat every second.
    
    //OR
    
    //put all of our DOM manipulations for ONE of the versions into a function, name it render, and use it in a setInterval call to make it repeat every second.
    
  
  //DOM ELEMENT EXAMPLE ONE
      document.getElementById('mountNode').innerHTML = `
          <div>
            Hello HTML   //This will show words to display
             <input />   
            <pre>${new Date().toLocaleTimeString()}</p>   
          </div>
        `;
  //DOM ELEMENT EXAMPLE TWO
        ReactDOM.render(
          React.createElement(
            'div', 
            null, 
            'Hello React',
  
  
               React.createElement('input'),   //If you add this tag it will display input block
            React.createElement(
              'pre',   /*(just to give it a monospace font in the playground*/
              null,
              new Date().toLocaleTimeString()    //This will show the current timeline and a ) is added at the end
              )
          ),
          document.getElementById('mountNode2'),
        );
  
  };
  
          //this with the setInterval gives the time a tick (second hand)
          setInterval(render, 1000);
  
  // 	currentTime: new Date().toLocaleTimeString()
  //  setInterval(fn, 1000);