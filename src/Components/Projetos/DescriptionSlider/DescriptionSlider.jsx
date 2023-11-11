import React, { createRef, useEffect, useRef, useState } from 'react'
import styles from './styles.module.css';
import $ from 'jquery';
import SmoothVisible from '../../SmoothVisible/SmoothVisible.jsx'
import { Button, Card, CardContent, CardHeader, Paper } from '@mui/material'

const DescriptionSlider = ({project, ...props}) => {
    const { photo, title, description, reverse, techDetails , srcPreview, url } = project;
  return (
    <SmoothVisible {...props} duration={1.5}>
        <div sx={{backgroundColor:'transparent'}} style={{flexDirection: reverse ? 'row-reverse': ''}} className={styles.line}>
            <div className={styles.box_image}>
                <img src={photo} />
                {/* <iframe height={'400px'} width={'100%'} src={url}/> */}
            </div>

            <div className={styles.description}>            
                <CardHeader title={title}/>                   
                <CardContent>
                    {description}
                    { url ? 
                        (
                            <Button onClick={() => window.open(url, '_blank')} size='small'>Ver mais</Button>
                        ) :null
                    }
                </CardContent> 
            </div>
        </div>
    </SmoothVisible>
  )
}

export default DescriptionSlider