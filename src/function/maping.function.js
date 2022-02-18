module.exports = (user_data) => {
    let admin = []
    user_data.map(ele => {
        // console.log("ele : ", ele)
        ele.role.map(e => {
            if (e == "admin") {
                admin.push(ele.email)
            }
        })
    })

    return admin;
}