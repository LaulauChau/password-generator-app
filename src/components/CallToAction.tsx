import ArrowRightIcon from '@/assets/icon-arrow-right.svg';

export function CallToAction() {
  return (
    <>
      <button
        id="cta"
        type="submit"
        className="text-dark-grey bg-neon-green w-full flex items-center justify-center gap-4 sm:gap-6 py-4 sm:py-5 mt-4 sm:mt-8 hover:text-neon-green hover:bg-dark-grey border-2 border-neon-green"
      >
        <p className="text-base sm:body">GENERATE</p>
        <img
          id="arrow"
          src={ArrowRightIcon}
          alt="Generate"
          className="w-3 h-3"
        />
      </button>
    </>
  );
}
