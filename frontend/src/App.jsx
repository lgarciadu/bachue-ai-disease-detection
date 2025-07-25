import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeView from './views/HomeView';
import CropRecommendationView from './views/CropRecommendationView';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={HomeView} />
                <Route path="/crop-recommendation" component={CropRecommendationView} />
            </Switch>
        </Router>
    );
};

export default App;