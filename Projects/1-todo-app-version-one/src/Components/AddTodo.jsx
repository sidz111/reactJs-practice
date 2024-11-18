function AddTodo() {
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col-6">
          <input type="text" id="todo" placeholder="Enter todo here " />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button class="btn btn-success">Add</button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
