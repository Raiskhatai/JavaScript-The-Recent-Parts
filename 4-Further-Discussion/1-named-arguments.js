// named arguments

function look_up_record(store = "person-records", id = -1) {
  console.log(store, id);
}

// this running becouse it is
function look_up_record({ store = "hi", id = 45 }) {
  console.log(`${store} ${id} this named argument`);
}

look_up_record({ store: "hello" }); // hello 25 this named argument
