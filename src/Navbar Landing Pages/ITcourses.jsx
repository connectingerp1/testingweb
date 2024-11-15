import React, { useContext } from 'react'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import Header from '../CoursesComponents/Header'
import Why from '../CoursesComponents/Why'
import Certificate from '../Homepage/Certificate'
import Description from '../CoursesComponents/Description'
import ScrollToTop from '../components/ScrollToTop'
import FAQ from '../CoursesComponents/FAQ'
import RelatedCourses from '../CoursesComponents/RelatedCourses'


const ITcourses = () => {
    return (
        <main>
        <ScrollToTop />
        <Header pageId="ITcoursesHeader" pageType="itcoursesheader" />
        <Why pageId="WhyIT" pageType="Whyit" />
        <Certificate pageId="ITcourses-CERT" />
        <Description pageId="itcourses-landing" />
        <FAQ pageId="ITcoursesFAQ" pageType="itcoursesfaq" />
        <RelatedCourses pageId="ITrelcourses" />
        </main>
    
  )
}

export default ITcourses
