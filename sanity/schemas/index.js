import {pageTypes} from './pages'
import {mixTypes} from './mix'
import {settingTypes} from './settings'

import {workTypes} from './work'

// prettier-ignore
export const schemaTypes = [
    ...settingTypes,
    ...pageTypes, 
    ...workTypes, 
    ...mixTypes, 
]
