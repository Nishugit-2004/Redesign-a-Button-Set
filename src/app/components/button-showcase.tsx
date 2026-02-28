import { useState } from 'react';
import { Check, Download, Heart, ShoppingCart, Send } from 'lucide-react';

interface ButtonState {
  isPressed: boolean;
}

export function ButtonShowcase() {
  const [primaryState, setPrimaryState] = useState<ButtonState>({ isPressed: false });
  const [secondaryState, setSecondaryState] = useState<ButtonState>({ isPressed: false });
  const [outlineState, setOutlineState] = useState<ButtonState>({ isPressed: false });
  const [gradientState, setGradientState] = useState<ButtonState>({ isPressed: false });
  const [iconState, setIconState] = useState<ButtonState>({ isPressed: false });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">Button Design System</h1>
          <p className="text-xl text-slate-600">
            Explore different button states: Normal, Hover, and Pressed
          </p>
        </div>

        <div className="grid gap-12">
          {/* Primary Solid Button */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Primary Solid</h2>
              <p className="text-slate-600">Bold and confident with smooth transitions</p>
            </div>
            <div className="flex flex-wrap gap-6 items-center">
              <button
                className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold 
                  hover:bg-blue-700 hover:shadow-xl hover:scale-105 
                  active:scale-95 active:bg-blue-800 
                  transition-all duration-200 ease-out"
                onMouseDown={() => setPrimaryState({ isPressed: true })}
                onMouseUp={() => setPrimaryState({ isPressed: false })}
                onMouseLeave={() => setPrimaryState({ isPressed: false })}
              >
                Primary Action
              </button>
              <div className="flex gap-3 text-sm">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg">Normal</span>
                <span className="px-3 py-1 bg-blue-200 text-blue-800 rounded-lg">Hover: Scale + Shadow</span>
                <span className="px-3 py-1 bg-blue-300 text-blue-900 rounded-lg">Pressed: Scale Down</span>
              </div>
            </div>
          </div>

          {/* Gradient Button */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Gradient Flow</h2>
              <p className="text-slate-600">Eye-catching gradient with animated background</p>
            </div>
            <div className="flex flex-wrap gap-6 items-center">
              <button
                className="px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 
                  text-white rounded-full font-semibold 
                  hover:from-purple-700 hover:via-pink-700 hover:to-red-700 
                  hover:shadow-2xl hover:-translate-y-1
                  active:translate-y-0 active:shadow-lg
                  transition-all duration-300 ease-out"
                onMouseDown={() => setGradientState({ isPressed: true })}
                onMouseUp={() => setGradientState({ isPressed: false })}
                onMouseLeave={() => setGradientState({ isPressed: false })}
              >
                Gradient Magic
              </button>
              <div className="flex gap-3 text-sm">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-lg">Normal</span>
                <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-lg">Hover: Lift Up</span>
                <span className="px-3 py-1 bg-red-100 text-red-700 rounded-lg">Pressed: Drop Down</span>
              </div>
            </div>
          </div>

          {/* Outline Button */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Elegant Outline</h2>
              <p className="text-slate-600">Minimalist design with smooth fill transition</p>
            </div>
            <div className="flex flex-wrap gap-6 items-center">
              <button
                className="px-8 py-4 border-3 border-emerald-600 text-emerald-600 rounded-lg font-semibold
                  hover:bg-emerald-600 hover:text-white hover:border-emerald-600
                  active:bg-emerald-700 active:border-emerald-700
                  transition-all duration-200"
                onMouseDown={() => setOutlineState({ isPressed: true })}
                onMouseUp={() => setOutlineState({ isPressed: false })}
                onMouseLeave={() => setOutlineState({ isPressed: false })}
              >
                Outline Style
              </button>
              <div className="flex gap-3 text-sm">
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-lg">Normal: Outline</span>
                <span className="px-3 py-1 bg-emerald-200 text-emerald-800 rounded-lg">Hover: Filled</span>
                <span className="px-3 py-1 bg-emerald-300 text-emerald-900 rounded-lg">Pressed: Darker</span>
              </div>
            </div>
          </div>

          {/* Glass Morphism Button */}
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 shadow-lg">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Glass Morphism</h2>
              <p className="text-indigo-100">Modern frosted glass effect</p>
            </div>
            <div className="flex flex-wrap gap-6 items-center">
              <button
                className="px-8 py-4 bg-white/20 backdrop-blur-md text-white rounded-2xl font-semibold
                  border border-white/30
                  hover:bg-white/30 hover:border-white/50 hover:shadow-xl
                  active:bg-white/10 active:scale-95
                  transition-all duration-200"
                onMouseDown={() => setSecondaryState({ isPressed: true })}
                onMouseUp={() => setSecondaryState({ isPressed: false })}
                onMouseLeave={() => setSecondaryState({ isPressed: false })}
              >
                Glass Effect
              </button>
              <div className="flex gap-3 text-sm text-white">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg">Normal: 20% opacity</span>
                <span className="px-3 py-1 bg-white/30 backdrop-blur-sm rounded-lg">Hover: 30% opacity</span>
                <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-lg">Pressed: 10% opacity</span>
              </div>
            </div>
          </div>

          {/* Icon Buttons */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Icon Button Set</h2>
              <p className="text-slate-600">Buttons with icons and playful animations</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button
                className="px-6 py-3 bg-rose-500 text-white rounded-xl font-semibold
                  flex items-center gap-2
                  hover:bg-rose-600 hover:shadow-lg hover:gap-3
                  active:scale-95
                  transition-all duration-200"
              >
                <Heart className="w-5 h-5" />
                Like
              </button>
              
              <button
                className="px-6 py-3 bg-green-500 text-white rounded-xl font-semibold
                  flex items-center gap-2
                  hover:bg-green-600 hover:shadow-lg hover:gap-3
                  active:scale-95
                  transition-all duration-200"
              >
                <Check className="w-5 h-5" />
                Confirm
              </button>
              
              <button
                className="px-6 py-3 bg-orange-500 text-white rounded-xl font-semibold
                  flex items-center gap-2
                  hover:bg-orange-600 hover:shadow-lg hover:gap-3
                  active:scale-95
                  transition-all duration-200"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
              
              <button
                className="px-6 py-3 bg-cyan-500 text-white rounded-xl font-semibold
                  flex items-center gap-2
                  hover:bg-cyan-600 hover:shadow-lg hover:gap-3
                  active:scale-95
                  transition-all duration-200"
              >
                <Download className="w-5 h-5" />
                Download
              </button>

              <button
                className="px-6 py-3 bg-indigo-500 text-white rounded-xl font-semibold
                  flex items-center gap-2
                  hover:bg-indigo-600 hover:shadow-lg hover:gap-3
                  active:scale-95
                  transition-all duration-200"
              >
                <Send className="w-5 h-5" />
                Send
              </button>
            </div>
          </div>

          {/* Neumorphic Buttons */}
          <div className="bg-slate-200 rounded-2xl p-8 shadow-lg">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Neumorphic Style</h2>
              <p className="text-slate-600">Soft UI with depth and dimension</p>
            </div>
            <div className="flex flex-wrap gap-6 items-center">
              <button
                className="px-8 py-4 bg-slate-200 text-slate-700 rounded-2xl font-semibold
                  shadow-[8px_8px_16px_#b8b9be,_-8px_-8px_16px_#ffffff]
                  hover:shadow-[6px_6px_12px_#b8b9be,_-6px_-6px_12px_#ffffff]
                  active:shadow-[inset_4px_4px_8px_#b8b9be,_inset_-4px_-4px_8px_#ffffff]
                  transition-all duration-200"
                onMouseDown={() => setIconState({ isPressed: true })}
                onMouseUp={() => setIconState({ isPressed: false })}
                onMouseLeave={() => setIconState({ isPressed: false })}
              >
                Neumorphic
              </button>
              <div className="flex gap-3 text-sm">
                <span className="px-3 py-1 bg-slate-300 text-slate-700 rounded-lg">Normal: Raised</span>
                <span className="px-3 py-1 bg-slate-300 text-slate-700 rounded-lg">Hover: Slightly Lower</span>
                <span className="px-3 py-1 bg-slate-300 text-slate-700 rounded-lg">Pressed: Inset</span>
              </div>
            </div>
          </div>

          {/* Size Variations */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Size Variations</h2>
              <p className="text-slate-600">Same style, different sizes</p>
            </div>
            <div className="flex flex-wrap gap-4 items-center">
              <button
                className="px-4 py-2 bg-violet-600 text-white rounded-lg text-sm font-semibold
                  hover:bg-violet-700 hover:shadow-lg
                  active:scale-95
                  transition-all duration-200"
              >
                Small
              </button>
              
              <button
                className="px-6 py-3 bg-violet-600 text-white rounded-lg font-semibold
                  hover:bg-violet-700 hover:shadow-lg
                  active:scale-95
                  transition-all duration-200"
              >
                Medium
              </button>
              
              <button
                className="px-8 py-4 bg-violet-600 text-white rounded-lg text-lg font-semibold
                  hover:bg-violet-700 hover:shadow-lg
                  active:scale-95
                  transition-all duration-200"
              >
                Large
              </button>
              
              <button
                className="px-10 py-5 bg-violet-600 text-white rounded-lg text-xl font-semibold
                  hover:bg-violet-700 hover:shadow-lg
                  active:scale-95
                  transition-all duration-200"
              >
                Extra Large
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Demo Section */}
        <div className="mt-12 bg-slate-900 rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Try Them All!</h2>
            <p className="text-slate-300">Click and hold to see the pressed state</p>
          </div>
          <div className="flex flex-wrap gap-6 justify-center">
            <button
              className="px-8 py-4 bg-red-500 text-white rounded-lg font-semibold
                hover:bg-red-600 hover:shadow-red-500/50 hover:shadow-xl
                active:bg-red-700 active:scale-90
                transition-all duration-200"
            >
              Danger
            </button>
            
            <button
              className="px-8 py-4 bg-yellow-500 text-slate-900 rounded-lg font-semibold
                hover:bg-yellow-400 hover:shadow-yellow-500/50 hover:shadow-xl
                active:bg-yellow-600 active:scale-90
                transition-all duration-200"
            >
              Warning
            </button>
            
            <button
              className="px-8 py-4 bg-blue-500 text-white rounded-lg font-semibold
                hover:bg-blue-600 hover:shadow-blue-500/50 hover:shadow-xl
                active:bg-blue-700 active:scale-90
                transition-all duration-200"
            >
              Info
            </button>
            
            <button
              className="px-8 py-4 bg-green-500 text-white rounded-lg font-semibold
                hover:bg-green-600 hover:shadow-green-500/50 hover:shadow-xl
                active:bg-green-700 active:scale-90
                transition-all duration-200"
            >
              Success
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
