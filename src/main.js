import * as core from '@actions/core'
import { getExecOutput } from '@actions/exec'

export const run = async () => {
  try {
    const { stdout } = await getExecOutput(
      'clang-format -style=Google -i *.cc *.h'
    )

    core.info(stdout)
  } catch (err) {
    core.error(err)
    core.setFailed('Your code is not formatted properly.')
  }
}
