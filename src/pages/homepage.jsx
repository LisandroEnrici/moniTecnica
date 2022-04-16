import React from 'react';
import Layout from '../components/Layout/Layout.component';
import bgImage from '../assets/images/homeBackground.png'
import Banner from '../components/homepage/Banner.component';
import ApplicationsListContainer from '../containers/homepage/ApplicationsList.container';

export default function HomePage() {

    return (
        <Layout header backgd={bgImage}>
            <Banner />
            <ApplicationsListContainer />
        </Layout>
    )
}