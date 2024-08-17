import { useState, useEffect } from "react";

import "./App.css";

function App() {
  //const [count, setCount] = useState(0); //Use sate causes rerender when the variable changes'

  /* useEffect(() => {
    console.log(`The count is now ${count}`), [count]; //use effect runs behind the scenes upon every rerender
  }); */
  //if dependency is empty, use effect just runs once after the initial re render like it is not running wrt to any particular variable but when the dependency has a variable, it runs after the initial re render of the page and then after every change in that variable 
  
  const [post, setPost] = useState([]); 
  //post variable is initially set to empty array

  //We want to have a loader to show while the data is being fetched from the API
  const [isLoading, setisLoading] = useState(false);

  const [error, setError] = useState(false);

  const BASE_URL = "https://jsonplaceholder.typicode.com/"
  //base url of the API we want to fetch data from



  useEffect(() => { //runs only after the initial render of the component since dependency array is empty. If dependency array had something in it, it would also run whenever the value in dependency array changes

    const fetchPost = async () => {
      try{
        const responses = await fetch(`${BASE_URL}/posts`);
        //Makes an HTTP get request to the API endpoint "${BASE_URL}/posts" which is basically "https://jsonplaceholder.typicode.com/posts"
        const data =  await responses.json(); //converts the data we get (response) to a json object  making it readable
        setPost(data); //Updates the post state with the data fetched
        //setisLoading(false);
      } catch(error) {
        setError(error);
      }
      setisLoading(false);
    };
       
    
    fetchPost();
    //fetchPost function is an asynchronous function that will fetch data from the api
  }, []);
  console.log(post); //log current value of post to console


  if(isLoading){
    return <div>Loading....</div>;
  }

  if(error){
    return <div>Sorry something went wrong</div>
  }


  return (
    <>
      {/* <div className="card">
        <div className="card-count">{count}</div>
        <button onClick={() => setCount((count) => count + 1)}>
          Increment
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          Decrement
        </button>
      </div> */}

      <ul> {/* map over each element in the post array and print as a list element */}
        {post.map((post) =>(
          <li key = {post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
