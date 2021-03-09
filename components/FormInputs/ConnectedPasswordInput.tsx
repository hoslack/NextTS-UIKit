import * as React from 'react'

type ConnectedPasswordInputProps = {
  label: string
}

const ConnectedPasswordInput: React.FC<ConnectedPasswordInputProps> = ({
  label,
}) => {
  return <div>{label}</div>
}

export default ConnectedPasswordInput
