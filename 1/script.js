const wapperBox = document.getElementById("wrapper");

const inputFieldGroup = document.getElementsByClassName("inputGroup");

const allInputs = document.querySelector("input");

const userNickname = document.getElementById("nickname");

const userEmail = document.getElementById("userEmail");

const userPassword = document.getElementById("userPassword");

const confirmPassword = document.getElementById("confirmPassword");

const userPhone = document.getElementById("phone");

const registrationForm = document.getElementById("regForm");



// 유효성 검사
const updateHelperText = (input, message, isVallid) =>{
  //한개의 input 태그의 부모 태그에 접근하는것
  const inputGroup = input.parentElement;

  const helperText = inputGroup.getElementsByClassName("helperText")[0];

  if(isVallid == true){
    inputGroup.classList.remove("invalid");
    inputGroup.classList.add("valid");
    helperText.style.visibility = "hidden";
  }
  
  if(isVallid == false){
    inputGroup.classList.remove("valid");
    inputGroup.classList.add("invalid");
    helperText.style.visibility = "visible";
    helperText.innerText = message;
  }
}

// 입력창이 빈칸인지 확인
const checkEmptyInput =  (input) => {
  if(input.value.trim() === ""){
    updateHelperText(input, "값을 입력해주세요!", false);
    return false;
  }else{
    updateHelperText(input, "", true);
    return true;
  }
}

//이메일 형식이 올바른지 확인
const validateEmailFormat = (input) =>{
  // 정규식 사용
  const emailPattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  if(emailPattern.test(input.value.trim()) == true){
    updateHelperText(input, "", true);
    return true;
  }else{
    updateHelperText(input, "이메일형식이 맞지 않습니다!", false);
    return false;
  }
}

// 비밀번호 강도 확인
const checkPasswordStrength = (password) => {
  // 정규식 사용
  const strongPattern =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+~`\-={}[\]:;"'<>,.?/\\]).{8,}$/;

  if(strongPattern.test(password.value) == true){
    updateHelperText(password, "비밀번호 강도 : 강함", true);
    return true;
}else{
  updateHelperText(password, "비밀번호는 8자 이상이어야 하며, 대문자, 소문자, 특수문자를 포함하여야 합니다!", false);
  return false;
}

}

//비밀번호 확인
const validatePasswordMatch = (passwordInput, confirmInput) => {
  if(passwordInput.value !== confirmInput.value){
    updateHelperText(confirmInput, "비밀번호가 일치하지 않습니다!", false);
    return false;
  
  }else{
    updateHelperText(confirmInput, "", true);
    return true;
  }
}

//폰번호 형식이 올바른지 확인
const validatePhoneNumber = (input) => {
  // 정규식 사용
  const phonePattern = /^(01[016789]{1})-?[0-9]{3,4}-?[0-9]{4}$/;

  if(phonePattern.test(input.value.trim()) == true){
    updateHelperText(input, "" , true);
    return true;
  }else{
    updateHelperText(input, "유효한 전화번호를 입력해주세요! (예: 010-1234-5678)", false);
    return false;
  }
}


// 폼 제출시 입력 필드가 유효한지 확인
const validateForm = () => {
  const isNicknameValid = checkEmptyInput(userNickname);

  const isEmailValid = validateEmailFormat(userEmail) && checkEmptyInput(userNickname);

  const isPasswordValid = checkEmptyInput(userPassword) && checkEmptyInput(confirmPassword);

  const isPasswordStrong = checkPasswordStrength(userPassword);

  const isPasswordMatch = validatePasswordMatch(userPassword, confirmPassword);

  const isPhoneValid = validatePhoneNumber(userPhone) && checkEmptyInput(userPhone);

  return isNicknameValid && isEmailValid && isPasswordValid && isPasswordStrong &&isPasswordMatch && isPhoneValid;

}


registrationForm.addEventListener("submit", (e) => {
  
  // 폼제출 동작 막아줌
  // 이거를 써야 유효성 검사 가능!
  e.preventDefault();
  
  if(validateForm() == true){
    console.log("모든 필드가 유효합니다!");
    alert("회원등록 성공!");
  }else{
    console.log("유효하지 않은 필드가 있습니다!");
  }
  
});

//각 input 태그 입력을 눌렀을때 테두리 색깔이나 알림이 뜨게하기
document.querySelectorAll("input").forEach(input =>{
  input.addEventListener("input", () => {
    switch(input.id){
      case "nickname": checkEmptyInput(input);
      break;
      case "userEmail": validateEmailFormat(input);
      break;
      case "userPassword": checkPasswordStrength(input);
      break;
      case "confirmPassword": validatePasswordMatch(userPassword, confirmPassword);
      break;
      case "phone": validatePhoneNumber(input);
      break;
      
    }
  })
})

const helperTextContent = document.getElementsByClassName("helperText");
Array.from(helperTextContent).forEach((element, index) => {
  if(index < 4){
    element.style.visibility = "hidden";
  }
})


// const helperTextContent1 = document.getElementsByClassName("helperText")[0];

// const helperTextContent2 = document.getElementsByClassName("helperText")[1];

// const helperTextContent3 = document.getElementsByClassName("helperText")[2];

// const helperTextContent4 = document.getElementsByClassName("helperText")[3];

// helperTextContent1.style.visibility = "hidden";
// helperTextContent2.style.visibility = "hidden";
// helperTextContent3.style.visibility = "hidden";
// helperTextContent4.style.visibility = "hidden";
