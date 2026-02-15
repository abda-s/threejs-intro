import { useCharacterAnimations } from "../hooks/useCharacterAnimations";

export const Interface = () => {
  const { animations, animationIndex, setAnimationIndex } = useCharacterAnimations();

  return (
    <div className="fixed bottom-0 right-0 top-0 flex flex-col items-end justify-center p-4 space-y-4 pointer-events-none z-50">
      <div className="flex flex-col space-y-2 pointer-events-auto bg-slate-900/90 p-4 rounded-lg backdrop-blur-sm shadow-xl border border-white/20">
        <h2 className="text-white font-bold mb-2">Animations</h2>
        {animations.length === 0 ? (
          <div className="text-white/50 text-sm italic px-2">No animations found</div>
        ) : (
          animations.map((animation, index) => (
            <button
              key={animation}
              onClick={() => setAnimationIndex(index)}
              className={`px-4 py-2 rounded-md transition-colors duration-200 text-left font-medium ${
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
