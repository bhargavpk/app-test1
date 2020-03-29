const data = '{"name":"user1","password":"getOut"}';
const parseData = async (jsonObj) => {
    const user = await JSON.parse(jsonObj);
    return user;
};

parseData(data).then((ans)=>{
    console.log(ans);
}).catch((e)=>{
    console.log('err '+e);
})