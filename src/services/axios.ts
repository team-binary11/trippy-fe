import axios from 'axios';

const axiosInstance = axios.create({});

const axiosWithoutAuth = axios.create({});

const isHandlerEnabled = (config = {}) => {
  return true;
};

const requestHandler = async (request: any) => {
  if (isHandlerEnabled(request)) {
    const token = await localStorage.getItem('token');
    request.headers = Object.assign({}, request.headers);
    request.headers['Authorization'] = token || "";
  }
  return request;
};

axiosInstance.interceptors.request.use(request => requestHandler(request));

const errorHandler = (error: any) => {
  //logger(error);
  console.log(JSON.stringify(error))
  let response = { ...error.response, apiError: true };
  if(error.response === undefined){
    window.location.reload();
  }
  let err = { ...error, response };
  return Promise.reject(err);
};

axiosInstance.interceptors.response.use(
  response => response,
  error => errorHandler(error),
);

axiosWithoutAuth.interceptors.response.use(
  response => response,
  error => errorHandler(error),
)

export { axiosWithoutAuth };

export default axiosInstance;