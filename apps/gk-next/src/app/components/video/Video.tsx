'use client'

import Image from 'next/image'
import { PlayCircleIcon } from '@heroicons/react/20/solid'

import { useModalVideo } from 'stores/modal'

type VideoProps = {
    title: string
    image: string
    videoId: string
    channel: 'youtube' | 'vimeo'
}

export default function Video(props: VideoProps) {
    const { title, image, videoId, channel } = props

    const { setVideoId, setChannel, toggle } = useModalVideo()

    return (
        <div className="max-w-4xl px-4 mx-auto py-sm lg:py-lg md:px-6 lg:max-w-7xl lg:px-8">
            <div className="relative aspect-[16/9]">
                <Image src={image} alt={title} fill />
                <PlayCircleIcon
                    className="absolute w-24 text-white -translate-x-1/2 -translate-y-1/2 cursor-pointer md:w-32 top-1/2 left-1/2"
                    onClick={(e) => {
                        e.preventDefault()
                        setVideoId(videoId)
                        setChannel(channel)
                        toggle()
                    }}
                />
            </div>
        </div>
    )
}
