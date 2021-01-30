alphabetPosition = (text) => {
    var result = "";
    for (var i = 0; i < text.length; i++) {
      var code = text.toUpperCase().charCodeAt(i)
      if (code > 64 && code < 91) result += (code - 64) + " ";
    }
  
    return result.slice(0, result.length - 1);
}

profilePicImg = (e) => {
    if (e <= 5) return "../assets/images/pfp_blue.png";
    else if (e <= 10) return "../assets/images/pfp_green.png";
    else if (e <= 15) return "../assets/images/pfp_red.png";
    else if (e <= 20) return "../assets/images/pfp_yellow.png";
    else return "../assets/images/pfp_gray.png";
}