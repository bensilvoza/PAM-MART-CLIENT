function uid() {
  var output = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
  for (var i = 1; i <= 15; i++) {
    output = output + characters[Math.floor(Math.random() * 35)];
  }
  return output;
}

export default uid;
