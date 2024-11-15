import React, { useContext } from 'react'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import Header from '../CoursesComponents/Header'
import Why from '../CoursesComponents/Why'
import Certificate from '../Homepage/Certificate'
import Description from '../CoursesComponents/Description'
import ScrollToTop from '../components/ScrollToTop'
import FAQ from '../CoursesComponents/FAQ'
import HRCard from '../CoursesComponents/HRCard'



const HRcourses = () => {
    return (
        <main>
        <ScrollToTop />
        <Header pageId="HRcoursesHeader" pageType="hrcoursesheader" />
        <Why pageId="WhyHR" pageType="Whyhr" />
        <HRCard />
        <Certificate pageId="HRcourses-CERT" />
        <Description pageId="hrcourses-landing" />
        <FAQ pageId="HRcoursesFAQ" pageType="hrcoursesfaq" />
        
        </main>
    
  )
}

export default HRcourses
