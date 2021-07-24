import { motion } from 'framer-motion'
import React from 'react'
import { list, slideUp } from '../../../helpers/animation'
import ScrollReveal from '../../home-page/ui/ScrollReveal'


const SubTitle = ({title, dark=false}) => (
    <ScrollReveal variants={list} className="text-center mb-10">
        <motion.h3 variants={slideUp} className={`font-seconary mb-4 text-2xl capitalize ${dark ? 'text-dark-blue' : 'text-primary'}`}>{title}</motion.h3>
        <motion.div variants={slideUp} className={` mx-auto w-20 h-0.5 ${dark ? 'bg-dark-blue': 'bg-primary'}`}></motion.div>
  </ScrollReveal>
)

export default SubTitle
