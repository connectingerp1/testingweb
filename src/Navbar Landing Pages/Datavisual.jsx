import React, { useContext } from 'react'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import Header from '../CoursesComponents/Header'
import Why from '../CoursesComponents/Why'
import Certificate from '../Homepage/Certificate'
import Description from '../CoursesComponents/Description'
import ScrollToTop from '../components/ScrollToTop'
import FAQ from '../CoursesComponents/FAQ'
import RelatedCourses from '../CoursesComponents/RelatedCourses'


const DataVisual = () => {
    return (
        <main>
        <ScrollToTop />
        <Header pageId="DataVisualHeader" pageType="datavisualheader" />
        <Why pageId="WhyDataVisual" pageType="Whydatavisual" />
        <Certificate pageId="DataVisual-CERT" />
        <Description pageId="DataVisual-landing" />
        <FAQ pageId="DataVisualFAQ" pageType="datavisualfaq" />
        <RelatedCourses pageId="DataVisualrelcourses" />
        </main>
    
  )
}

export default DataVisual
