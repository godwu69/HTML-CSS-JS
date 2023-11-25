const emailRegEx = new RegExp(
// Đưa vào đây 1 biểu thức RegEx
/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
);

export default function validateEmail(email){
    return emailRegEx.test(email);
}