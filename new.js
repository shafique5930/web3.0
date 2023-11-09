console.log("Question No. 28 :");
const PersonStage = (personStage) => {
  if (personStage < 2) {
    console.log("the person is a baby");
  } else if (personStage == 2 || personStage < 4) {
    console.log("the person is a toddler");
  } else if (personStage == 4 || personStage < 13) {
    console.log("the person is a kid");
  } else if (personStage == 13 || personStage < 20) {
    console.log("The person is a teenager");
  } else if (personStage == 20 || personStage < 65) {
    console.log("The person is an adult");
  } else if (personStage >= 65) {
    console.log("The person is an elder");
  }
};
PersonStage(2);
