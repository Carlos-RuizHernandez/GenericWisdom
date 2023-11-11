import React from 'react';
import MedCard from '../Bookmarks/MedCard.js';

const ResultsList = ({data}) => {
    const filteredBySymptom = data.filter(item => {
        item.symptom == 'Pain'
    });
    return (
      <>
        <View>
          {filteredBySymptom.map(item => (
            <View key={item.name}>
              <MedCard
                text={item.name}
                imageLink={item.image}
                color={item.color}
                description = {item.description}
              />
            </View>
          ))}
        </View>
      </>
    );
  };

export default ResultsList;