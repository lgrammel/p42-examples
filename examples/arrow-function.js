const f1 = function(x) { 
  return x * x;
};

const f2 = () => {
  console.log(this);
};

const f3 = function named() {
  console.log("not turned into arrow function");
}

// test
