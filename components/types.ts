import {
  componentStatuses,
  componentColors,
  componentPositions,
  componentSizes,
  componentShapes,
  bgColors,
  brandColors,
  componentDirections,
} from './constants'

import { DEFAULT_THEMES } from './defaultThemes'

export type DataTheme = typeof DEFAULT_THEMES[number] | string

export type ComponentBaseProps = {
  dataTheme?: DataTheme
}


export type ComponentDirection = typeof componentDirections[number]
export type ComponentColor = typeof componentColors[number]
export type ComponentPosition = typeof componentPositions[number]
export type ComponentShape = typeof componentShapes[number]
export type ComponentSize = typeof componentSizes[number]
export type ComponentStatus = typeof componentStatuses[number]
export type ComponentBrandColors = typeof brandColors[number]
export type ComponentBgColors = typeof bgColors[number]

export type ListOrItem<T> = T[] | T | Array<T | T[]>
