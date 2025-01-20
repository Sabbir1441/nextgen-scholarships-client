
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useScholarship = () => {
    const axiosPublic = useAxiosPublic();

    const {data: scholarships = [], isPending: loading, refetch} = useQuery({
        queryKey: ['scholarships'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/scholarships');
            return res.data;
        }
    })


    return [scholarships, loading, refetch]
}

export default useScholarship;