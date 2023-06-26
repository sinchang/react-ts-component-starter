export interface ButtonProps {
  text: string
}

export function Button({ text }: ButtonProps) {
  return <button style={{
    color: 'red',
  }}>{text}</button>
}
