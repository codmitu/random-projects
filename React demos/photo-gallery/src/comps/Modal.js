import React from 'react';
import { motion } from 'framer-motion';

export default function Modal({ selected, setSelected }) {
    const handleClick = e => {
        if (e.target.classList.contains('backdrop')) {
            setSelected(null);
        }
    }
    return (
        <motion.div className='backdrop' onClick={handleClick} initial={{ opacity: 0 }} animate={{ opacity: 1 }} >
            <motion.img src={selected} alt="picture" initial={{ y: "-100vh" }} animate={{ y: 0 }} />
        </motion.div>
    )
}
