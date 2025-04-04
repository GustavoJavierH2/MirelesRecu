import React from 'react';
import { AirbnbRating } from 'react-native-elements';

const RatingStars = () => <AirbnbRating count={5} defaultRating={4.5} size={20} showRating={false} />;

export default RatingStars;