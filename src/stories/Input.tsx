import './input.css'

export interface InputProps {
  placeholder?: string
  size?: 'small' | 'medium' | 'large'
}

export const Input = ({ placeholder = '', size = 'medium' }: InputProps) => {
  return (
    <input
      type="text"
      className={['storybook-input', `storybook-input--${size}`].join(' ')}
      placeholder={placeholder}
    />
  )
}
