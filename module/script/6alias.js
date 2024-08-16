let multiple = "multiple module";

const sum = (first, second) => {
  return first + second;
};

class Company {
  constructor() {
    this.name = "Google";
  }
}

export { multiple, sum, Company }; // untuk export lebih dari satu
// lebih baik export langsung di atas class atau function
