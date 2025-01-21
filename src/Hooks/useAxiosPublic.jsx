import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://nextgen-scholarships-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;