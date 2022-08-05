const axios = require('axios')
const crypto = require('crypto')
const signin = () => {
    const id = document.getElementById("ID")
    const pw = document.getElementById("PW")
    const secret = 'abcdefghijk'
    const hashed = crypto.createHmac('sha256', secret).update(pw).digest('hex');
    const UserData = {
        id : id,
        pw : hashed
    }
    //사용자 로그인 입력 정보를 서버로 보내서 확인.
    axios
        .get("/api/sendUserInfo", {
            method : "GET",
            params: UserData
        })
        .then((response) => {

        })
    return (
        <div>
            <div>ID</div>
            <input id = "ID" placeholder="ID"/>
            <div>PW</div>
            <input id = "PW" placeholder="Password"/>
        </div>
    )
}

export default signin;