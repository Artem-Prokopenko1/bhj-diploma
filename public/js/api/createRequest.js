/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {

    function createUrlSearchParam(obj){
        let sp = new URLSearchParams(obj);
        return sp.toString();
    }

    let dataParam = createUrlSearchParam(options.data);
    let url = new URL(options.url);
    url.search = dataParam;

    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    
    if(options.method === "GET"){

    try{
    xhr.open(options.method, url);
    xhr.send();
    }
    catch(e){
         // перехват сетевой ошибки
      callback( e );
    }
}
};


