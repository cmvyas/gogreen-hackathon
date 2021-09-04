function getBotResponse(input) {
  if (input == "hi" || input == "hello") {
    return "hello, am KOKO, please do tell me whether you are a farmer or a buyer ";
  } else if (input == "farmer") {
    return "Hello Farmer, Its nice to meet you and welcome to be a part of our community, please type your issue, like if sign up isse then type sign up, account issues then account and so..";
  } else if (input == "Buyer") {
    return "Hello Buyer, thank you for chosing to be a part of this community and we do remember your support for the farmers, please type your issue, like if sign up isse then type sign up, account issues then account and so..";
  } else if (input == "login" || input == "register") {
    return "Its quite simple, just go the home tab and on the right corner on the navigation bar choose login / sign up option, then continue with the instructions given.";
  } else if (input == "account") {
    return "please login to your account and in the profile section you can update your details.";
  } else if (input == "how can i find organic groceries") {
    return "In the home page, click on explore left-bottom corner and go to Farmer section, check the groceries you need and contact the farmer with the given details.";
  } else if (input == "How groceries will be supplied?") {
    return "Once you talk with the farmer, he will inform you about the transportation and delivery of the package.";
  } else if (input == "Payment Process?") {
    return "The farmer will provide you with the details of payment process, note it includes the cost of transportation too.";
  } else if (input == "How can I sell my yields?") {
    return "After registering as farmer, provide details like your name, crops,contact information, the buyer who is interesed will reach you through the contact information provided.";
  } else if (input == "How can I get my payment?") {
    return "Please talk about the payment mode through the customer, personally recommended to have any online payment options like Gpay, Paytm, Phonepay, BHIM, so that the payment will be completed within no time.";
  } else if (input == "What is this GoGreen about?") {
    return "This a platform for farmers to sell their crops, so that there wont be any third party to cause price increase. This way, it is beneficial to both the farmers and the buyers. The price includes the crop price, transportation and the government tax, we do not charge anything.";
  } else if (input == "I want to talk with customer care unit of GoGreen") {
    return "Please send your query to pumssrinivas@gmail.com or contact the number: +91 7735813593.";
  } else if (input == "thank you") {
    return "Most welcome, and KOKO is always here to hekp you. Also please share your feedback in our feedback section, this small contibution of yours will be helpful for everyone.";
  } else if (input == "How good is the service") {
    return "Please go to the feedback section, this will inform you how good our services are.";
  } else {
    return "Sorry, am not able to understand your query, please write it again in simple words...";
  }
}
