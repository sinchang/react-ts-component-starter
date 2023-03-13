export interface ButtonProps {
  text: string
}

export const Button = ({ text }: ButtonProps) => {
  return <button style={{
    color: 'red',
  }}>{text}</button>
}
