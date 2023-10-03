import Child from "./Child";

function Parent() {
  return (
    <div>
      <h1>Parent</h1>
      <p>See below for a message in a child:</p>
      <Child message="A message from a parent component"/>
    </div>
  );
}

export default Parent;