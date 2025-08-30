"use client";
import styles from "./embla-carousel.module.css";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "../embla-dot-button/embla-dot-button";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "../embla-arrow-buttons/embla-arrow-buttons";
import useEmblaCarousel from "embla-carousel-react";
import Video from "next-video";
import Image from "next/image";
type Slide = {
  title: string
  type: "image" | "video";
  src: string;
  alt?: string;
};
type PropType = {
  slides: Slide[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className={styles.embla}>
      <div className={styles.emblaViewport} ref={emblaRef}>
        <div className={styles.emblaContainer}>
          {slides.map((slide, index) => (
            <div className={styles.emblaSlide} key={index}>
              <h2>{slide.title}</h2>
              <div className={styles.emblaSlideContent}>
                {slide.type === "image" ? (
                  <Image
                    src={slide.src}
                    alt={slide.alt || `Slide ${index}`}
                    width={200}
                    height={200}
                  />
                ) : (
                  <Video src={slide.src} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.emblaControls}>
        <div className={styles.emblaButtons}>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className={styles.emblaDots}>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`${styles.emblaDot} ${
                index === selectedIndex ? styles.emblaDotSelected : ""
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
