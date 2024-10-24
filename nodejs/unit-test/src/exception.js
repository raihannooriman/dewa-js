class MyException extends Error{ }

export const callMe = (name) => {
  if(name === "Raihan"){
    throw new MyException("Ups my exception happened");
  } else {
    return "Ok";
  }
}
