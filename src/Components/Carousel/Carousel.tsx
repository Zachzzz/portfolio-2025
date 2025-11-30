import { useState} from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import 'reactjs-popup/dist/index.css';

type CarouselProps = {
    images:Image[];
    wrapperClass?: string;
}

type Image = {
    src: string;
    alt?:string;
    className?: string;
    selectedClassName?: string;
}

function pickLeftAndRight(selected:number, images:Image[]):[number | null, number | null]{
    let left:number | null = selected -1 < 0 ? images.length -1 : selected -1;
    let right: number | null = selected +1 >= images.length ? 0 : selected +1;
    if(images.length <= right || images.length <3){
        right = null
    }
    if(images.length <= left || images.length < 2){
        left = null;
    }


    return [left, right];
}

export default function Carousel(props:CarouselProps) {
    // TODO cleanup and error handling & animate on switch


    // when selected = 0 the left image should be length -1 and the right image should be 1
    const [cur,setCur] = useState(0);

    const selectedImg = props.images[cur];
    //@ts-expect-error fjjdkjkfsdjkdafs
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const leftAndRight = pickLeftAndRight(cur, props.images);
    console.log(selectedImg);
    return <div className={props.wrapperClass}>
        <div className={' mb-4'}>
            {/*<div className={'hidden lg:block lg:left-2 lg:top-0 lg:w-3/10'}>*/}
            {/*    {leftAndRight[0] != null && <img loading={'lazy'}*/}
            {/*                                                           src={props.images[leftAndRight[0]].src}*/}
            {/*                                                           alt={props.images[leftAndRight[0]].alt}/>}*/}
            {/*</div>*/}
            <div className={' lg:left-0 lg:top-0 lg:bottom-0 lg:right-0 z-10 lg:mx-auto '}>
                {
                    <img src={selectedImg.src} alt={selectedImg.alt} />
              }
            </div>
            {/*<div className={'hidden lg:block lg:right-2 lg:w-3/10'}>*/}
            {/*    {leftAndRight[1] != null &&*/}
            {/*        <img loading={'lazy'}*/}
            {/*             src={props.images[leftAndRight[1]].src}*/}
            {/*             alt={props.images[leftAndRight[1]].alt}/>}*/}
            {/*</div>*/}
        </div>
        <div className={'flex flex-row w-fit mx-auto xl:mt-10'}>
            <button className={'cursor-pointer'} onClick={() => {
                if(cur-1 < 0){
                    setCur(props.images.length - 1);
                }else{
                    setCur(cur -1);
                }
            }}><FaAngleLeft className={' lg:size-8 cursor-pointer'}/></button>
            <div className={'flex flex-row gap-3'}>
                {/* Buttons to select new image based on index*/}
                {props.images.map((img, idx) => {
                    return <button
                        key={img.src + idx}
                        className={(idx === cur ? "bg-glacier-blue" : "bg-transparent") + " " +
                            "rounded-full size-5 border-glacier-blue border  lg:size-6 lg:mt-1 cursor-pointer"}
                        onClick={() => {setCur(idx)}}>
                    </button>
                })}
            </div>
            <button className={'cursor-pointer'} onClick={() => {
                if(cur+1 >= props.images.length){
                    setCur(0);
                }else{
                    setCur(cur +1);
                }
            }}><FaAngleRight className={" lg:size-8 cursor-pointer"}/></button>
        </div>
    </div>
}


