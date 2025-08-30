import useEmblaCarousel from "embla-carousel-react"
import styles from "./embla-carousel.module.css"
import { EmblaOptionsType } from 'embla-carousel'
import { useDotButton } from "../embla-dot-button/embla-dot-button"
interface EmblaCarouselProps{
    slides: number[],
    options?: EmblaOptionsType
}
export function EmblaCarousel({slides, options}: EmblaCarouselProps){
    const[emblaRef, empblaApi] = useEmblaCarousel(options)
    const {selectedIndex, scrollSnaps, onDotButtonClick} = useDotButton(empblaApi)
    
    return <div></div>
}