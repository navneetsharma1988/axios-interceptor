function batchInterceptor(instance) {
    instance.interceptors.request.use(request => {
    // Add your code here
        request.url = request.baseAPI + request.url + `/?ids=[${request.params.ids}]`;
        return request;
    }, error => Promise.reject(error));
}
export default batchInterceptor;
