import React, { useEffect } from "react";
import { SafeAreaView, Text, FlatList } from "react-native";

import useFetch from "../../hooks/useFetch";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import styles from "./Jobs.style";
import JobsCard from "../../components/JobsCard";


const Jobs = ({navigation}) => {
    
    const job_apiUrl = process.env.EXPO_PUBLIC_JOB_API_URL;
    const {data, error, loading} = useFetch(job_apiUrl);

    const handleJobsSelect = (name, id) => {
        console.log("Selected Job: " , name);
        navigation.navigate("JobDetail", {name ,id}); 
    };

    const renderJobs = ({item}) => (
        <JobsCard 
        item = {item}
        onSelect = {() => handleJobsSelect(item.name, item.id)}/>
    );

    if(error){
        return <Error/>;
    }

    if(loading){
        return <Loading/>;
    }
    
    return(
        <SafeAreaView>
            <FlatList data={data.results} renderItem={renderJobs}/>
        </SafeAreaView>
    );
};

export default Jobs;

