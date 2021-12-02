import { reactive }           from 'vue'

export enum LogLevel {

  debug                       = 1,
  important                   = 2,
  info                        = 4,
  succeeded                   = 8,
  warning                     = 16,
  error                       = 32
}

export interface LogItem {

  msg:                        string
  level:                      LogLevel
  iconCSS:                    string
}

const logLevel: number        = LogLevel.important
const logItemMap: Record<string, LogItem[]> = {}

function addLogItem(id: string, item: LogItem) {

  let list: LogItem[]         = logItemMap[id]

  if(!list) {

    list                      = []
    logItemMap[id]            = list
  }

  switch(item.level) {

    case LogLevel.debug  :   item.iconCSS = '                      text-gray-400';   break;
    case LogLevel.important: item.iconCSS = '                      text-gray-600';   break;
    case LogLevel.info:      item.iconCSS = 'mdi mdi-circle-medium text-gray-600';   break;
    case LogLevel.succeeded: item.iconCSS = 'mdi mdi-check         text-green-600';  break;
    case LogLevel.warning:   item.iconCSS = 'mdi mdi-alert         text-yellow-600'; break;
    case LogLevel.error:     item.iconCSS = 'mdi mdi-close-thick   text-red-600';    break;
  }

  list.push(item)
}

function clearLogItemList(id: string) {

  let list: LogItem[]         = logItemMap[id]

  if(!list) {

    list                      = reactive<LogItem[]>([])
    logItemMap[id]            = list
  }

  list.splice(0)
}

export function getLog(       id: string): LogItem[] {

  let list: LogItem[]         = logItemMap[id]

  if(!list) {

    list                      = reactive<LogItem[]>([])
    logItemMap[id]            = list
  }

  return list
}
export function clearLog(     id: string)              { clearLogItemList(id) }

export function addLogDebug(    id: string, msg: string) { addLogItem(id, { msg: msg, level: LogLevel.debug,      iconCSS: '' }) }
export function addLogImportant(id: string, msg: string) { addLogItem(id, { msg: msg, level: LogLevel.important,  iconCSS: '' }) }
export function addLogInfo(     id: string, msg: string) { addLogItem(id, { msg: msg, level: LogLevel.info,       iconCSS: '' }) }
export function addLogSucceeded(id: string, msg: string) { addLogItem(id, { msg: msg, level: LogLevel.succeeded,  iconCSS: '' }) }
export function addLogWarning(  id: string, msg: string) { addLogItem(id, { msg: msg, level: LogLevel.warning,    iconCSS: '' }) }
export function addLogError(    id: string, msg: string) { addLogItem(id, { msg: msg, level: LogLevel.error,      iconCSS: '' }) }

export function useApiLog() {

  return {

    getLog,
    clearLog,
    logLevel,

    addLogDebug,
    addLogImportant,
    addLogInfo,
    addLogSucceeded,
    addLogWarning,
    addLogError
  }
}
