export enum ApiTestStatus {

  idle                        = 'idle',
  running                     = '...',
  succeeded                   = 'ok',
  failed                      = 'failed'
}

export interface TestItem {

  label:                      string
  status:                     ApiTestStatus
}

export interface ApiTest {

  status:                     ApiTestStatus
  statusLabel:                string
  statusCSS:                  string

  label:                      string
  buttonLabel:                string

  itemList:                   TestItem[]

  showHeader:                 boolean
}

export function createApiTest(label: string, buttonLabel: string,
                              itemList: string[], showHeader: boolean = true): ApiTest {

  const apiTest: ApiTest      = {

    status:                   ApiTestStatus.idle,
    statusLabel:              'idle',
    statusCSS:                'bg-gray-200   text-gray-800',

    label:                    label,
    buttonLabel:              buttonLabel,

    itemList:                 [],

    showHeader:               showHeader
  }

  for(const item of itemList) {

    apiTest.itemList.push({ label: item, status: ApiTestStatus.idle })
  }

  return apiTest
}

export function setApiTestStatus(apiTest: ApiTest, status: ApiTestStatus, statusLabel?: string) {

  apiTest.status              = status

  switch(status) {

    case ApiTestStatus.idle:       apiTest.statusLabel  = statusLabel ?? 'idle';            break;
    case ApiTestStatus.running:    apiTest.statusLabel  = statusLabel ?? 'running';         break;
    case ApiTestStatus.succeeded:  apiTest.statusLabel  = statusLabel ?? 'succeeded';       break;
    case ApiTestStatus.failed:     apiTest.statusLabel  = statusLabel ?? 'failed';          break;
  }

  switch (status) {

    case ApiTestStatus.idle:      apiTest.statusCSS     = 'bg-gray-100   text-gray-600';    break;
    case ApiTestStatus.running:   apiTest.statusCSS     = 'bg-yellow-100 text-yellow-800';  break;
    case ApiTestStatus.succeeded: apiTest.statusCSS     = 'bg-green-100  text-green-800';   break;
    case ApiTestStatus.failed:    apiTest.statusCSS     = 'bg-red-100    text-red-800';     break;
  }
}
