export interface TechFeature {
  id: string
  title: string
  description: string
  icon: string
  tag: string
  highlightColor: string
}

export interface DemoItem {
  id: number
  title: string
  category: 'animation' | 'physics' | 'gesture' | 'reactive'
  timestamp: string
}
