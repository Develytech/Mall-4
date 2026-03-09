import { useEffect, useMemo, useRef, useState } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { galleryContent } from '../content/gallery'

function ArrowIcon({ direction }) {
  const isLeft = direction === 'left'

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`gallery__arrowIcon ${isLeft ? 'gallery__arrowIcon--left' : ''}`}
    >
      <path d="M8.5 5.5l7 6.5-7 6.5" />
    </svg>
  )
}

export default function Gallery({ shellClassName }) {
  const content = galleryContent
  const railRef = useRef(null)
  const touchStartXRef = useRef(0)
  const reducedMotion = useReducedMotion()
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)
  const [activeImageIndex, setActiveImageIndex] = useState(-1)

  const hasViewerOpen = activeImageIndex >= 0
  const totalImages = content.images.length

  const railVars = useMemo(
    () => ({
      '--g-gap': `${content.behavior.gapPx}px`,
      '--g-edge': `${content.behavior.edgePaddingPx}px`,
      '--g-cols': `${content.behavior.desktopColumns}`,
      '--g-aspect-ratio': content.behavior.aspectRatio,
      '--g-fit': content.behavior.imageFit,
    }),
    [content]
  )

  useEffect(() => {
    const railEl = railRef.current
    if (!railEl) {
      return undefined
    }

    const syncEdges = () => {
      const maxLeft = railEl.scrollWidth - railEl.clientWidth
      const left = railEl.scrollLeft
      setCanScrollLeft(left > 1)
      setCanScrollRight(maxLeft - left > 1)
    }

    syncEdges()
    railEl.addEventListener('scroll', syncEdges, { passive: true })
    window.addEventListener('resize', syncEdges)

    return () => {
      railEl.removeEventListener('scroll', syncEdges)
      window.removeEventListener('resize', syncEdges)
    }
  }, [content.images.length])

  const scrollByCard = (direction) => {
    const railEl = railRef.current
    if (!railEl) {
      return
    }

    const firstCard = railEl.querySelector('.gallery__card')
    if (!firstCard) {
      return
    }

    const style = window.getComputedStyle(railEl)
    const gap = Number.parseFloat(style.columnGap || style.gap || '0')
    const step = firstCard.getBoundingClientRect().width + gap

    railEl.scrollBy({
      left: direction === 'left' ? -step : step,
      behavior: reducedMotion ? 'auto' : 'smooth',
    })
  }

  const openViewer = (index) => {
    setActiveImageIndex(index)
  }

  const closeViewer = () => {
    setActiveImageIndex(-1)
  }

  const goToNextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % totalImages)
  }

  const goToPreviousImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + totalImages) % totalImages)
  }

  useEffect(() => {
    if (!hasViewerOpen) {
      return undefined
    }

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeViewer()
      }
      if (event.key === 'ArrowRight') {
        goToNextImage()
      }
      if (event.key === 'ArrowLeft') {
        goToPreviousImage()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [hasViewerOpen, totalImages])

  const onViewerTouchStart = (event) => {
    touchStartXRef.current = event.changedTouches[0].clientX
  }

  const onViewerTouchEnd = (event) => {
    const touchEndX = event.changedTouches[0].clientX
    const deltaX = touchEndX - touchStartXRef.current
    if (Math.abs(deltaX) < 40) {
      return
    }
    if (deltaX < 0) {
      goToNextImage()
    } else {
      goToPreviousImage()
    }
  }

  return (
    <section id="gallery" className="section gallery" style={railVars}>
      <div className={shellClassName}>
        {content.sectionTitle ? <h2 className="section__title">{content.sectionTitle}</h2> : null}
        {content.sectionText ? <p className="section__text">{content.sectionText}</p> : null}

        <div className="gallery__viewport">
          <button
            type="button"
            className="gallery__arrow"
            aria-label="Föregående bilder"
            onClick={() => scrollByCard('left')}
            disabled={!canScrollLeft}
          >
            <ArrowIcon direction="left" />
          </button>

          <div className="gallery__railWrap">
            <div
              className={`gallery__fade gallery__fade--left ${
                canScrollLeft ? 'gallery__fade--visible' : ''
              }`}
              aria-hidden="true"
            />
            <div
              className={`gallery__fade gallery__fade--right ${
                canScrollRight ? 'gallery__fade--visible' : ''
              }`}
              aria-hidden="true"
            />

            <div
              className={`gallery__rail ${content.behavior.hideScrollbar ? 'gallery__rail--hideScrollbar' : ''}`}
              tabIndex={0}
              ref={railRef}
            >
              {content.images.map((image, index) => (
                <article className="gallery__card" key={`${image.src}-${index}`}>
                  <button
                    type="button"
                    className="gallery__imageButton"
                    onClick={() => openViewer(index)}
                    aria-label={`Öppna bild ${index + 1}`}
                  >
                    <img src={image.src} alt={image.alt} className="gallery__image" />
                  </button>
                </article>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="gallery__arrow"
            aria-label="Nästa bilder"
            onClick={() => scrollByCard('right')}
            disabled={!canScrollRight}
          >
            <ArrowIcon direction="right" />
          </button>
        </div>
      </div>

      {hasViewerOpen ? (
        <div
          className="gallery__viewer"
          role="dialog"
          aria-modal="true"
          aria-label="Bildvisare"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              closeViewer()
            }
          }}
        >
          <button type="button" className="gallery__viewerClose" onClick={closeViewer} aria-label="Stäng bildvisare">
            ✕
          </button>

          <button
            type="button"
            className="gallery__viewerNav gallery__viewerNav--left"
            onClick={goToPreviousImage}
            aria-label="Föregående bild"
          >
            <ArrowIcon direction="left" />
          </button>

          <div
            className="gallery__viewerContent"
            onTouchStart={onViewerTouchStart}
            onTouchEnd={onViewerTouchEnd}
          >
            <img
              src={content.images[activeImageIndex].src}
              alt={content.images[activeImageIndex].alt}
              className="gallery__viewerImage"
            />
          </div>

          <p className="gallery__viewerIndex">
            {activeImageIndex + 1} / {totalImages}
          </p>

          <button
            type="button"
            className="gallery__viewerNav gallery__viewerNav--right"
            onClick={goToNextImage}
            aria-label="Nästa bild"
          >
            <ArrowIcon direction="right" />
          </button>
        </div>
      ) : null}
    </section>
  )
}
