import { useState, useRef, useEffect } from 'react'
import autoAnimate from '@formkit/auto-animate'
import { Plus, Trash2, Shuffle, ArrowUpDown, Sparkles } from 'lucide-react'

interface TaskItem {
  id: string
  title: string
  tag: string
  accent: string
}

const INITIAL_ITEMS: TaskItem[] = [
  { id: '1', title: 'Install Motion React latest v12', tag: 'Core', accent: 'bg-indigo-500' },
  { id: '2', title: 'Configure Tailwind CSS v4 Vite plugin', tag: 'Styling', accent: 'bg-purple-500' },
  { id: '3', title: 'AutoAnimate zero-config DOM morphing', tag: 'Animation', accent: 'bg-emerald-500' },
  { id: '4', title: 'Canvas Confetti particle engine setup', tag: 'FX', accent: 'bg-pink-500' },
]

export const AutoAnimateDemo = () => {
  const [items, setItems] = useState<TaskItem[]>(INITIAL_ITEMS)
  const [newTitle, setNewTitle] = useState('')
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (listRef.current) {
      autoAnimate(listRef.current, {
        duration: 250,
        easing: 'ease-in-out',
      })
    }
  }, [listRef])

  const addItem = () => {
    if (!newTitle.trim()) return
    const newItem: TaskItem = {
      id: Date.now().toString(),
      title: newTitle.trim(),
      tag: 'Custom',
      accent: 'bg-amber-500',
    }
    setItems([newItem, ...items])
    setNewTitle('')
  }

  const removeItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id))
  }

  const shuffleItems = () => {
    const shuffled = [...items].sort(() => Math.random() - 0.5)
    setItems(shuffled)
  }

  const reverseItems = () => {
    setItems([...items].reverse())
  }

  return (
    <section id="autoanimate" className="py-20 relative border-t border-slate-800/80 bg-slate-950/40">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-300">
            <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
            @formkit/auto-animate
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Zero-Config Layout Morphing
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Add, delete, shuffle, or sort items below. Notice how every item automatically glides into its new position without writing a single CSS transition!
          </p>
        </div>

        {/* Input & Action Bar */}
        <div className="mt-10 max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && addItem()}
                placeholder="Type a new item and press Enter..."
                className="w-full rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 backdrop-blur-md"
              />
            </div>
            <button
              onClick={addItem}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 transition"
            >
              <Plus className="h-4 w-4" />
              <span>Add</span>
            </button>
            <button
              onClick={shuffleItems}
              title="Shuffle List"
              className="inline-flex items-center justify-center rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800 transition"
            >
              <Shuffle className="h-4 w-4" />
            </button>
            <button
              onClick={reverseItems}
              title="Reverse Order"
              className="inline-flex items-center justify-center rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800 transition"
            >
              <ArrowUpDown className="h-4 w-4" />
            </button>
          </div>

          {/* Animated Items Container */}
          <div ref={listRef} className="mt-6 flex flex-col gap-3">
            {items.map((item) => (
              <div
                key={item.id}
                className="group flex items-center justify-between rounded-xl border border-slate-800/80 bg-slate-900/60 p-4 backdrop-blur-md hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className={`h-2.5 w-2.5 rounded-full ${item.accent}`} />
                  <span className="font-medium text-slate-200 text-sm sm:text-base">{item.title}</span>
                  <span className="text-xs text-slate-500 bg-slate-800 px-2 py-0.5 rounded-md border border-slate-700/50">
                    {item.tag}
                  </span>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="rounded-lg p-1.5 text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition"
                  aria-label="Remove item"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))}
            {items.length === 0 && (
              <div className="text-center py-8 text-slate-500 border border-dashed border-slate-800 rounded-xl">
                No items left. Add some above or reload to test again!
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
