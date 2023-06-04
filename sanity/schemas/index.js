import {pageTypes} from './pages'
import {workTypes} from './work'
import {mixTypes} from './mix'
import {settingTypes} from './settings'

// prettier-ignore
export const schemaTypes = [
    ...settingTypes,
    ...pageTypes, 
    ...workTypes, 
    ...mixTypes, 
]
