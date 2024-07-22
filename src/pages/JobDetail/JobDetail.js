import React from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";
import { useDispatch } from "react-redux";
import {addFavoriteJob} from "../../context/AuthProvider/jobsSlice";


import useFetch from "../../hooks/useFetch";
import DetailCard from "../../components/DetailCard/DetailCard";
import Loading from "../../components/Loading";
import Error from "../../components/Error";




const JobDetail = ({route}) => {
    
    const {id} = route.params
    const {name} = route.params
    const detail_apiUrl = process.env.EXPO_PUBLIC_DETAIL_API_URL+id;
    const {loading, error, data} = useFetch(detail_apiUrl);
    const dispatch = useDispatch();

    const handleJobsSelect = (job) => {
        dispatch(addFavoriteJob(job));
    };

   /* const handleSelectFavorite= (name, id) =>{
        console.log("Selected Fav Job: " + name);
        navigation.navigate("FavoritedJobs", {name, id}); //!! Stack Navigator yaz
    };*/

    const renderDetail=({item})=>(
        <DetailCard detail={item}
        onSelect={()=> handleJobsSelect(item)}/>
    );
    
    if(error){
        return <Error/>;
    }
    
    if(loading){
        return <Loading/>;
    }

    return(
        <SafeAreaView>
            <FlatList 
            data={data ? [data] : []}
            renderItem={renderDetail}/>
        </SafeAreaView>
    );
};
export default JobDetail;