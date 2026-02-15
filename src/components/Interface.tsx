import { useCharacterAnimations } from "../hooks/useCharacterAnimations";

export const Interface = () => {
  const { animations, animationIndex, setAnimationIndex } = useCharacterAnimations();

  return (
    <div className="fixed inset-0 flex flex-col items-end justify-end md:justify-center p-4 md:p-8 pointer-events-none z-50">
      <div className="flex flex-col space-y-2 pointer-events-auto bg-slate-900/90 p-3 md:p-4 rounded-lg backdrop-blur-sm shadow-xl border border-white/20 max-h-[40vh] md:max-h-[60vh] overflow-y-auto w-full max-w-[180px] md:max-w-xs">
        <h2 className="text-white font-bold text-sm md:text-base sticky top-0 pb-2 z-10">Animations</h2>
        {animations.length === 0 ? (
          <div className="text-white/50 text-xs md:text-sm italic px-2">No animations found</div>
        ) : (
          animations.map((animation, index) => (
            <button
              key={animation}
              onClick={() => setAnimationIndex(index)}
              className={`px-3 py-1.5 md:px-4 md:py-2 rounded-md transition-colors duration-200 text-left font-medium text-xs md:text-sm ${
                index === animationIndex
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-800"
              }`}
            >
              {animation}
            </button>
          ))
        )}
      </div>
    </div>
  );
};
