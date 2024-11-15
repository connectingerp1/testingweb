import React, { useContext } from 'react'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import Header from '../CoursesComponents/Header'
import Why from '../CoursesComponents/Why'
import Certificate from '../Homepage/Certificate'
import Description from '../CoursesComponents/Description'
import ScrollToTop from '../components/ScrollToTop'
import FAQ from '../CoursesComponents/FAQ'
import RelatedCourses from '../CoursesComponents/RelatedCourses'


const SAP = () => {
    return (
        <main>
        <ScrollToTop />
        <Header pageId="SapHeader" pageType="sapheader" />
        <Why pageId="WhySap" pageType="Whysap" />
        <Certificate pageId="sap-CERT" />
        <Description pageId="sap-landing" />
        <FAQ pageId="SAPFAQ" pageType="sapfaq" />
        <RelatedCourses pageId="Saprelcourses" />
        
        </main>
    
  )
}

export default SAP
