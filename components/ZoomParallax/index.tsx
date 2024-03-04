'use client'
import Picture1 from '@/public/images/1.jpeg'
import Picture2 from '@/public/images/2.jpeg'
import Picture3 from '@/public/images/3.jpg'
import Picture4 from '@/public/images/4.jpg'
import Picture5 from '@/public/images/5.jpg'
import Picture6 from '@/public/images/6.jpg'
import Picture7 from '@/public/images/7.jpeg'
import Image from 'next/image'
import React, {useRef} from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'

export function ZoomParallax() {
  const container = useRef(null)

  const {scrollYProgress} = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4])
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5])
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6])
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8])
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9])

  const pictures = [
    {src: Picture1, scale: scale4},
    {src: Picture2, scale: scale5},
    {src: Picture3, scale: scale6},
    {src: Picture4, scale: scale5},
    {src: Picture5, scale: scale6},
    {src: Picture6, scale: scale8},
    {src: Picture7, scale: scale9},
  ]

  return (
    <section className='relative h-[300vh]' ref={container}>
      <div className='sticky top-0 h-[100vh] overflow-hidden'>
        {pictures.map(({src, scale}, i) => (
          <motion.article
            className='absolute top-0 flex h-full w-full items-center justify-center'
            style={{scale}}
            key={i}
          >
            <figure
              className='image-container relative h-[25vh] w-[25vw]'
              data-container-i={i + 1}
            >
              <Image
                src={src}
                alt='First Image'
                fill
                placeholder='blur'
                className='object-cover'
              />
            </figure>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
