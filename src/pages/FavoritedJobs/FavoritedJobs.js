import React from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux'; // Path to your jobsSlice file

import DetailCard from '../../components/DetailCard/DetailCard';
import FavoriteCard from '../../components/FavoriteCard/FavoriteCard';

const FavoritedJobs = () => {
    const favoriteJobs = useSelector((state) => state.jobs.favoriteJobs);

    const renderJob = ({ item }) => (
        <View>
            
            {/* Diğer detayları buraya ekleyin */}
            <FavoriteCard item={item}/>
        </View>
    );

    return (
        <SafeAreaView>
            <FlatList
                data={favoriteJobs}
                renderItem={renderJob}
            />
        </SafeAreaView>
    );
};

export default FavoritedJobs;

/*<Text>{item.name}</Text>
            <Text>{item.details}</Text>*/
