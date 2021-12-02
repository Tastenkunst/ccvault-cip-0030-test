import { reactive }           from 'vue'

import { ApiTest }            from './ApiTest'

export const apiTestList: ApiTest[] = reactive<ApiTest[]>([])

export function addApiTest(apiTest: ApiTest) {

  apiTestList.push(apiTest)
}
