function ajax_option({
    url = "https:// some.base.url/api",
    method="post",
    data,
    callback,
    headers:[
        header0="content-Type: text/plan",
        ...otherHeaders
    ]=[]
}={}){
    return {
        url,method,data,callback,
        headers:[
            header0,
            ...otherHeaders
        ]
    }
};