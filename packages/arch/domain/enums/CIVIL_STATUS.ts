export const CIVIL_STATUS = ['single', 'married', 'separated', 'divorced', 'widow'] as const
export type CIVIL_STATUS = typeof CIVIL_STATUS[number]